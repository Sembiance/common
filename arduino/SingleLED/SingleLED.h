#ifndef _SINGLELED_H
#define _SINGLELED_H

#include <Arduino.h>
#include <Adafruit_NeoPixel.h>
#include "T.h"

#define SINGLELED_DEFAULT_BRIGHTNESS 32

class SingleLED
{
	public:
		SingleLED(uint8_t dataPin);

		void setup(void);
		void update(uint32_t now);
		void setBrightness(uint8_t brightness);
		void setPulseDuration(uint32_t pulsateDuration);
		void change(uint8_t ur, uint8_t ug, uint8_t ub, bool upulse);

	private:
		uint8_t sr=0, sg=0, sb=0, tr=255, tg=255, tb=255, r=255, g=255, b=255, ur=0, ug=0, ub=0;
		int32_t dr, dg, db;
		uint32_t start;
		bool	upulse=false;
		bool 	pulse=true;
		Adafruit_NeoPixel * led;
		uint32_t pulsateDuration = T_MS*500;

		void update(uint32_t now, uint8_t _r, uint8_t _g, uint8_t _b, bool _pulse);
		long easeNone(long t, long b, long c, long d);
		void swap(uint8_t * a, uint8_t * b);
};

#endif
