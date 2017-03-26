#include "SoftwareSerialMsg.h"

// WARNING: Only one SoftwareSerial can be used at once due to some lazy coding in SoftwareSerial and poor CPU capability to handle more than one

SoftwareSerialMsg::SoftwareSerialMsg(uint8_t txPin, uint8_t rxPin) : SerialMsg()
{
	softwareSerial = new SoftwareSerial(rxPin, txPin);
	softwareSerial->begin(9600);
}

SoftwareSerialMsg::SoftwareSerialMsg(uint8_t txPin, uint8_t rxPin, void (*msgHandler)(uint8_t *, uint8_t)) : SerialMsg(msgHandler)
{
	softwareSerial = new SoftwareSerial(rxPin, txPin);
	softwareSerial->begin(9600);
}

#ifdef _USE_DEBUG_OLED
	void SoftwareSerialMsg::setup(DebugOLED * oled)
	{
		SerialMsg::setup(softwareSerial, oled);
	}
#else
	void SoftwareSerialMsg::setup(void)
	{
		SerialMsg::setup(softwareSerial);
	}
#endif

void SoftwareSerialMsg::update(uint32_t now)
{
	SerialMsg::update(now);
}

void SoftwareSerialMsg::send(uint8_t * data, uint8_t len, bool important)
{
	SerialMsg::send(data, len, important);
}
