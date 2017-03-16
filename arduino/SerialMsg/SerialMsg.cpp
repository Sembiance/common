#include "SerialMsg.h"

#include "crc8.h"

SerialMsg::SerialMsg()
{
}

SerialMsg::SerialMsg(void (*msgHandler)(uint8_t *, uint8_t))
{
	this->msgHandler = msgHandler;
}

SerialMsg::~SerialMsg()
{

}

void SerialMsg::setup(uint8_t txPin, uint8_t rxPin, DebugOLED * oled)
{
	mySerial = new SoftwareSerial(rxPin, txPin);
	mySerial->begin(9600);

	this->oled = oled;
}

void SerialMsg::setup(DebugOLED * oled)
{
	mySerial = 0;
	Serial.begin(9600);

	this->oled = oled;
}

bool SerialMsg::processNextMsg(void)
{
	char buf[256];
	uint8_t ack[2] = {0};
	static uint8_t seenSequences[SEEN_SEQUENCES_MAX] = {0};
	bool seenSequence=false;
	uint8_t seq, msgLen, crc=0, truncLen=0;
	uint8_t msg[256];

	/*for(uint8_t z=0;z<recvBufLen;z+=7)
	{
		for(uint8_t i=z;i<recvBufLen && (i-z)<7;i++)
		{
			sprintf(buf+(i*3), "%02X ", recvBuf[i]);
		}
		oled->println(buf);
	}*/

	if(recvBufLen<5)
		return false;

	// First byte doesn't equal start byte so ignore it and continue processing
	if(recvBuf[0]!=SERIALMSG_START_BYTE)
	{
		sprintf(buf, "! Start %02X != %02X", recvBuf[0], SERIALMSG_START_BYTE);
		oled->println(buf);

		truncLen=1;
		goto processNextMsg_FINISH;
	}

	seq = recvBuf[1];

	// Not enough data yet, just return and wait for more
	msgLen = recvBuf[2];
	if(msgLen>(recvBufLen-5))
		return false;

	truncLen=5+msgLen;

	for(uint8_t i=0;i<msgLen;i++)
	{
		msg[i] = recvBuf[i+3];
		crc = crc8_update(crc, msg[i]);
	}

	// Check that CRC matches
	if(crc!=recvBuf[3+msgLen])
	{
		sprintf(buf, "! crc %02X != %02X", crc, recvBuf[3+msgLen]);
		oled->println(buf);

		goto processNextMsg_FINISH;
	}

	// Check that we have a proper stop byte
	if(recvBuf[4+msgLen]!=SERIALMSG_STOP_BYTE)
	{
		sprintf(buf, "! Stop %02X != %02X", recvBuf[4+msgLen], SERIALMSG_STOP_BYTE);
		oled->println(buf);

		goto processNextMsg_FINISH;
	}

	// Check if just an ACK
	if(msgLen>0 && msg[0]==0x00)
	{
		if(msgLen!=2)
		{
			sprintf(buf, "! ACK len %d != 2", msgLen);
			oled->println(buf);

			goto processNextMsg_FINISH;
		}

		// Remove the message from the history so I don't send it again
		for(uint8_t i=0;i<IMPORTANT_MSG_HISTORY_LEN;i++)
		{
			if(importantMsgs[i].seq==msg[1])
			{
				free(importantMsgs[i].msg);
				memset(&importantMsgs[i], 0, sizeof(importantMsg));
				break;
			}
		}
	}
	else
	{
		// Send ACK if this is an important message
		if(seq>0)
		{
			// Check to see if I've already seen this sequence
			for(uint8_t i=0;i<SEEN_SEQUENCES_MAX;i++)
			{
				if(seenSequences[i]==seq)
				{
					seenSequence = true;
					break;
				}
			}

			// Don't re-record if already seen once
			if(!seenSequence)
			{
				memcpy(seenSequences, seenSequences+1, (SEEN_SEQUENCES_MAX-1));
				seenSequences[(SEEN_SEQUENCES_MAX-1)] = seq;
			}

			// But always send back an ACK
			ack[1] = seq;
			send(ack, 2);
		}

		// Only handle the message if I have a handler and if I haven't already seen it before
		if(msgHandler && !seenSequence)
			msgHandler(msg, msgLen);
	}

	processNextMsg_FINISH:
	memcpy(recvBuf, recvBuf+truncLen, recvBufLen-truncLen);
	recvBufLen-=truncLen;
	return recvBufLen>0;
}

void SerialMsg::update(void)
{
	bool more=false;
	unsigned long now=millis();

	if(mySerial)
	{
		if(!mySerial->available())
			goto update_FINISH;

		while(mySerial->available())
		{
			recvBuf[recvBufLen] = mySerial->read();
			recvBufLen++;
		}
	}
	else
	{
		if(Serial.available()==0)
			goto update_FINISH;

		while(Serial.available()>0)
		{
			recvBuf[recvBufLen] = Serial.read();
			recvBufLen++;
		}
	}

	do
	{
		more = processNextMsg();
	} while(more);

	update_FINISH:

	// Resend any important message that need it
	for(uint8_t i=0;i<IMPORTANT_MSG_HISTORY_LEN;i++)
	{
		if(importantMsgs[i].lastSent==0)
			continue;

		if((now-importantMsgs[i].lastSent)>=IMPORTANT_MSG_RETRY_INTERVAL)
		{
			importantMsgs[i].lastSent = now;
			send(importantMsgs[i].msg, importantMsgs[i].msgLen, true, importantMsgs[i].seq);
		}
	}
}

void SerialMsg::send(uint8_t * data, uint8_t len, bool important)
{
	send(data, len, important, 0);
}

void SerialMsg::send(uint8_t * data, uint8_t len, bool important, uint8_t seqOverride)
{
	uint8_t i;
	uint8_t crc=0;
	static uint8_t seq=1;

	// Check to see if we should record this message for retrying sending in future
	if(important && seqOverride==0)
	{
		if(importantMsgs[0].msg)
			free(importantMsgs[0].msg);

		memcpy(importantMsgs, importantMsgs+1, sizeof(importantMsg)*(IMPORTANT_MSG_HISTORY_LEN-1));

		importantMsgs[(IMPORTANT_MSG_HISTORY_LEN-1)].msg = (uint8_t *)malloc(len);
		memcpy(importantMsgs[(IMPORTANT_MSG_HISTORY_LEN-1)].msg, data, len);

		importantMsgs[(IMPORTANT_MSG_HISTORY_LEN-1)].msgLen = len;
		importantMsgs[(IMPORTANT_MSG_HISTORY_LEN-1)].seq = seq;
		importantMsgs[(IMPORTANT_MSG_HISTORY_LEN-1)].lastSent = millis();
	}

	if(mySerial)
	{
		mySerial->write(SERIALMSG_START_BYTE);
		mySerial->write(important ? seqOverride||seq : 0x00);
		mySerial->write(len);
	}
	else
	{
		Serial.write(SERIALMSG_START_BYTE);
		Serial.write(important ? seqOverride||seq : 0x00);
		Serial.write(len);
	}

	if(seq==255)
		seq = 1;
	else
		seq++;

	for(i=0;i<len;i++)
	{
		crc = crc8_update(crc, data[i]);
		if(mySerial)
			mySerial->write(data[i]);
		else
			Serial.write(data[i]);
	}

	if(mySerial)
	{
		mySerial->write(crc);
		mySerial->write(SERIALMSG_STOP_BYTE);
	}
	else
	{
		Serial.write(crc);
		Serial.write(SERIALMSG_STOP_BYTE);
	}
}
