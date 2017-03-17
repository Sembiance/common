#ifndef _SERIALMSG_H
#define _SERIALMSG_H

#include <Arduino.h>
#include "T.h"

#ifdef _USE_DEBUG_OLED
	#include "DebugOLED.h"
#endif

#define SERIALMSG_START_BYTE 0xFE
#define SERIALMSG_STOP_BYTE 0xFF

#define IMPORTANT_MSG_RETRY_INTERVAL (T_SECOND*10)
#define IMPORTANT_MSG_HISTORY_LEN 5

#define SEEN_SEQUENCES_MAX 5

typedef struct importantMsg
{
	uint8_t * msg;
	uint8_t msgLen;
	uint8_t seq;
	uint32_t lastSent;
} importantMsg;

class SerialMsg
{
	public:
		SerialMsg();
		SerialMsg(void (*msgHandler)(uint8_t *, uint8_t));

		~SerialMsg();

		#ifdef _USE_DEBUG_OLED
			void setup(Stream * stream, DebugOLED * oled);
		#else
			void setup(Stream * stream);
		#endif

		void send(uint8_t * data, uint8_t len, bool important=false);
		void update(void);

	private:
		bool processNextMsg();
		void send(uint8_t * data, uint8_t len, bool important, uint8_t seqOverride);

		Stream * stream;
		uint8_t recvBuf[255]={0};
		uint8_t recvBufLen=0;
		void (*msgHandler)(uint8_t *, uint8_t)=0;

		#ifdef _USE_DEBUG_OLED
			DebugOLED * oled;
		#endif
		
		importantMsg importantMsgs[IMPORTANT_MSG_HISTORY_LEN] = { {0} };
};

#endif
