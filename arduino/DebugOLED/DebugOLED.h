#ifndef _DEBUGOLED_H
#define _DEBUGOLED_H

#include <Arduino.h>
#include <Adafruit_SSD1306.h>

#define DEBUG_OLED_MAX_LINE_LENGTH 21

class DebugOLED
{
	public:
		DebugOLED(uint8_t linesMax=8);
		void setup(int8_t rst);
		void setup(int8_t dc, int8_t rst, int8_t cs);
		void setup(int8_t mosi, int8_t clk, int8_t dc, int8_t rst, int8_t cs);

		void println(const char * text);

	private:
		void setup();
		Adafruit_SSD1306 * display;
		uint8_t linesPrinted=0;
		uint8_t linesMax=0;
		char ** lines;
};

#endif
