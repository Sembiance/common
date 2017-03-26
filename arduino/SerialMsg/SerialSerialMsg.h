#ifndef _SERIALSERIALMSG_H
#define _SERIALSERIALMSG_H

#include "SerialMsg.h"

class SerialSerialMsg : protected SerialMsg
{
	public:
		SerialSerialMsg(uint8_t serialNum);
		SerialSerialMsg(uint8_t serialNum, void (*msgHandler)(uint8_t *, uint8_t));

		#ifdef _USE_DEBUG_OLED
			void setup(DebugOLED * oled);
		#else
			void setup(void);
		#endif
		void update(uint32_t now);
		void send(uint8_t * data, uint8_t len, bool important=false);

	protected:
		Stream * stream=0;
};

#endif
