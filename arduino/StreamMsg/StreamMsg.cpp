#include "StreamMsg.h"

#include "crc8.h"
#include "I2CStream.h"

void StreamMsg::setup(Stream * stream, void (*msgHandler)(uint8_t *, uint8_t, void *), void * userPtr)
{
	this->stream = stream;
	this->msgHandler = msgHandler;
	this->userPtr = userPtr;
}

void StreamMsg::setupI2C(uint8_t sendAddr, uint8_t recvAddr, void (*msgHandler)(uint8_t *, uint8_t, void *), void * userPtr)
{
	this->stream = new I2CStream(sendAddr, recvAddr);
	this->msgHandler = msgHandler;
	this->userPtr = userPtr;
}

bool StreamMsg::processNextMsg(void)
{
	uint8_t seq, msgLen, crc=0, truncLen=0;
	uint8_t msg[256];

	if(recvBufLen<5)
		return false;

	// First byte doesn't equal start byte so ignore it and continue processing
	if(recvBuf[0]!=STREAMMSG_START_BYTE)
	{
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
		goto processNextMsg_FINISH;

	// Check that we have a proper stop byte
	if(recvBuf[4+msgLen]!=STREAMMSG_STOP_BYTE)
		goto processNextMsg_FINISH;

	// Check if just an ACK
	if(msgLen>0 && msg[0]==0x00)
	{
		if(msgLen!=2)
			goto processNextMsg_FINISH;

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
		bool seenSequence=false;

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
			uint8_t ack[2] = {0, seq};
			send(ack, 2);
		}

		// Only handle the message if I have a handler and if I haven't already seen it before
		if(msgHandler && !seenSequence)
			msgHandler(msg, msgLen, userPtr);
	}

	processNextMsg_FINISH:
	memcpy(recvBuf, recvBuf+truncLen, recvBufLen-truncLen);
	recvBufLen-=truncLen;
	return recvBufLen>0;
}

void StreamMsg::update(uint32_t now)
{
	if(!stream->available())
		goto update_FINISH;

	while(stream->available())
	{
		recvBuf[recvBufLen] = stream->read();
		recvBufLen++;
	}

	while(processNextMsg()) {};

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

void StreamMsg::send(uint8_t * data, uint8_t len, bool important)
{
	send(data, len, important, 0);
}

void StreamMsg::send(uint8_t * data, uint8_t len, bool important, uint8_t seqOverride)
{
	// Check to see if we should record this message for retrying sending in future
	if(important && seqOverride==0)
	{
		if(importantMsgs[0].msg)
			free(importantMsgs[0].msg);

		memcpy(importantMsgs, importantMsgs+1, sizeof(importantMsg)*(IMPORTANT_MSG_HISTORY_LEN-1));

		importantMsgs[(IMPORTANT_MSG_HISTORY_LEN-1)].msg = (uint8_t *)malloc(len);
		memcpy(importantMsgs[(IMPORTANT_MSG_HISTORY_LEN-1)].msg, data, len);

		importantMsgs[(IMPORTANT_MSG_HISTORY_LEN-1)].msgLen = len;
		importantMsgs[(IMPORTANT_MSG_HISTORY_LEN-1)].seq = sendSeq;
		importantMsgs[(IMPORTANT_MSG_HISTORY_LEN-1)].lastSent = micros();
	}

	stream->write(STREAMMSG_START_BYTE);
	stream->write(important ? (seqOverride>0 ? seqOverride : sendSeq) : 0x00);
	stream->write(len);

	if(important && seqOverride==0)
	{
		if(sendSeq==255)
			sendSeq = 1;
		else
			sendSeq+=1;
	}

	uint8_t crc=0;
	for(uint8_t i=0;i<len;i++)
	{
		crc = crc8_update(crc, data[i]);
		stream->write(data[i]);
	}

	stream->write(crc);
	stream->write(STREAMMSG_STOP_BYTE);
}
