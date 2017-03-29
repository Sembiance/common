#ifndef _STREAMMSG_H
#define _STREAMMSG_H

#include <Arduino.h>
#include "T.h"

#ifdef _USE_DEBUG_OLED
	#include "DebugOLED.h"
#endif

#define STREAMMSG_START_BYTE 0xFE
#define STREAMMSG_STOP_BYTE 0xFF

#define IMPORTANT_MSG_RETRY_INTERVAL (T_SECOND*2)
#define IMPORTANT_MSG_HISTORY_LEN 5

#define SEEN_SEQUENCES_MAX 5

typedef struct importantMsg
{
	uint8_t * msg;
	uint8_t msgLen;
	uint8_t seq;
	uint32_t lastSent;
} importantMsg;

class StreamMsg
{
	public:
		StreamMsg();
		StreamMsg(void (*msgHandler)(uint8_t *, uint8_t));

		#ifdef _USE_DEBUG_OLED
			void setup(Stream * stream, DebugOLED * oled);
			void setupI2C(uint8_t sendAddr, uint8_t recvAddr, DebugOLED * oled);
		#else
			void setup(Stream * stream);
			void setupI2C(uint8_t sendAddr, uint8_t recvAddr);
		#endif

		void send(uint8_t * data, uint8_t len, bool important=false);
		void update(uint32_t now);

	protected:
		bool processNextMsg();
		void send(uint8_t * data, uint8_t len, bool important, uint8_t seqOverride);

		Stream * stream;
		uint8_t recvBuf[255]={0};
		uint8_t recvBufLen=0;
		void (*msgHandler)(uint8_t *, uint8_t)=0;
		uint8_t sendSeq=1;
		uint8_t seenSequences[SEEN_SEQUENCES_MAX] = {0};

		#ifdef _USE_DEBUG_OLED
			DebugOLED * oled;
		#endif
		
		importantMsg importantMsgs[IMPORTANT_MSG_HISTORY_LEN] = { {0} };
};

#endif
