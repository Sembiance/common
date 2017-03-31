#ifndef _MAX6969_7SEG_H
#define _MAX6969_7SEG_H

#include <Arduino.h>

class MAX6969_7Seg
{
	public:
		MAX6969_7Seg();
		void setup(uint8_t oePin, uint8_t diPin, uint8_t clkPin);
		void clear(void);
		void on(void);
		void off(void);
		void print(char c);

	private:
		void shift16(uint16_t data);

		uint8_t oePin;
		uint8_t diPin;
		uint8_t clkPin;
		uint8_t flip;	// TEMPORARY
};

#endif
