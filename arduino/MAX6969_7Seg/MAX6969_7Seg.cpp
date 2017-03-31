#include "MAX6969_7Seg.h"
#include "T.h"

MAX6969_7Seg::MAX6969_7Seg()
{
}

void MAX6969_7Seg::setup(uint8_t oePin, uint8_t diPin, uint8_t clkPin)
{
	this->oePin = oePin;
	this->diPin = diPin;
	this->clkPin = clkPin;

	pinMode(oePin, OUTPUT);
	pinMode(diPin, OUTPUT);
	pinMode(clkPin, OUTPUT);

	digitalWrite(oePin, HIGH);
	digitalWrite(diPin, LOW);
	digitalWrite(clkPin, LOW);

	flip = (oePin==40 ? true : false);	// TEMPORARY
}

void MAX6969_7Seg::on(void)
{
	digitalWrite(oePin, LOW);
}

void MAX6969_7Seg::off(void)
{
	digitalWrite(oePin, HIGH);
}

void MAX6969_7Seg::clear(void)
{
	shift16(0);
}

void MAX6969_7Seg::print(char c)
{
	// TEMPORARY
	shift16(flip ? 0xFFFF : 0x0000);
	flip = !flip;
	// TEMPORARY
}

void MAX6969_7Seg::shift16(uint16_t data)
{
	shiftOut(diPin, clkPin, MSBFIRST, (data>>8));
	shiftOut(diPin, clkPin, MSBFIRST, (data&0x00FF));
}

