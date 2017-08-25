// Modified version of: https://github.com/etrombly/DS1337RTC

#ifndef _MY_DS1337_H
#define _MY_DS1337_H

#include <Arduino.h>
#include <time.h>

#define DS1337_CTRL_ID			0x68

#define DS1337_CLOCK_ADDRESS	0x00
#define DS1337_ALARM1_ADDRESS	0x07
#define DS1337_ALARM2_ADDRESS	0x0B

#define DS1337_CONTROL_ADDRESS	0x0E
#define DS1337_STATUS_ADDRESS	0x0F

class MyDS1337
{
	public:
		MyDS1337(void);
		void getTime(struct tm * const t, int address);
		void setTime(const struct tm * const t, int address);
		void enableAlarm(int address);
		void disableAlarm(int address);
		void resetAlarms();
		void interruptSelect(int mode);
		void freqSelect(int freq);

	private:
		uint8_t readByte(void);
		uint8_t writeByte(uint8_t b);
		void startClock(void);
		void stopClock(void);
};

#endif
