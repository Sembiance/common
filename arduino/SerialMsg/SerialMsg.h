#ifndef _SERIALMSG_H
#define _SERIALMSG_H

#include <Arduino.h>
#include "SoftwareSerial.h"
#include "DebugOLED.h"

#define SERIALMSG_START_BYTE 0xFE
#define SERIALMSG_STOP_BYTE 0xFF

#define IMPORTANT_MSG_RETRY_INTERVAL 1000
#define IMPORTANT_MSG_HISTORY_LEN 5

#define SEEN_SEQUENCES_MAX 5

typedef struct importantMsg
{
	uint8_t * msg;
	uint8_t msgLen;
	uint8_t seq;
	unsigned long lastSent;
} importantMsg;

class SerialMsg
{
	public:
		SerialMsg();
		SerialMsg(void (*msgHandler)(uint8_t *, uint8_t));

		~SerialMsg();
		void setup(DebugOLED * oled);
		void setup(uint8_t txPin, uint8_t rxPin, DebugOLED * oled);
		void send(uint8_t * data, uint8_t len, bool important=false);
		void update(void);

	private:
		bool processNextMsg();
		void send(uint8_t * data, uint8_t len, bool important, uint8_t seqOverride);

		uint8_t recvBuf[255]={0};
		uint8_t recvBufLen=0;
		void (*msgHandler)(uint8_t *, uint8_t)=0;
		DebugOLED * oled;
		SoftwareSerial * mySerial;
		importantMsg importantMsgs[IMPORTANT_MSG_HISTORY_LEN] = { {0} };
};

#endif
