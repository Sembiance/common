#include "SerialSerialMsg.h"

SerialSerialMsg::SerialSerialMsg(uint8_t serialNum) : SerialMsg()
{
	oled->println("setup");

	switch(serialNum)
	{
		case 0:
			Serial.begin(9600);
			stream = &Serial;
			break;
		case 1:
			//Serial1.begin(9600);
			//stream = &Serial1;
			break;
		case 2:
			Serial2.begin(9600);
			stream = &Serial2;
			break;
		case 3:
			Serial3.begin(9600);
			stream = &Serial3;
			break;
		default:
			break;
	}
}

SerialSerialMsg::SerialSerialMsg(uint8_t serialNum, void (*msgHandler)(uint8_t *, uint8_t)) : SerialSerialMsg(serialNum)
{
}

#ifdef _USE_DEBUG_OLED
	void SerialSerialMsg::setup(DebugOLED * oled)
	{
		SerialMsg::setup(stream, oled);
	}
#else
	void SerialSerialMsg::setup(void)
	{
		SerialMsg::setup(stream);
	}
#endif

void SerialSerialMsg::update(uint32_t now)
{
	SerialMsg::update(now);
}

void SerialSerialMsg::send(uint8_t * data, uint8_t len, bool important)
{
	SerialMsg::send(data, len, important);
}
