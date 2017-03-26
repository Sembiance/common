#ifndef _SOFTWARESERIALMSG_H
#define _SOFTWARESERIALMSG_H

#include "SerialMsg.h"

#include "SoftwareSerial.h"

class SoftwareSerialMsg : protected SerialMsg
{
	public:
		SoftwareSerialMsg(uint8_t txPin, uint8_t rxPin);
		SoftwareSerialMsg(uint8_t txPin, uint8_t rxPin, void (*msgHandler)(uint8_t *, uint8_t));

		#ifdef _USE_DEBUG_OLED
			void setup(DebugOLED * oled);
		#else
			void setup(void);
		#endif
		void update(uint32_t now);
		void send(uint8_t * data, uint8_t len, bool important=false);

	protected:
		SoftwareSerial * softwareSerial;
};

#endif
