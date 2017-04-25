#include "MAX6969_7Seg.h"

void MAX6969_7Seg::setup(uint8_t diPin, uint8_t clkPin, uint8_t dpPin)
{
	this->diPin = diPin;
	this->clkPin = clkPin;
	this->dpPin = dpPin;

	pinMode(diPin, OUTPUT);
	pinMode(clkPin, OUTPUT);
	pinMode(dpPin, OUTPUT);

	digitalWrite(diPin, LOW);
	digitalWrite(clkPin, LOW);
	digitalWrite(dpPin, HIGH);

	clear();
}

void MAX6969_7Seg::clear(void)
{
	currentChar = 0x00;
	
	shift16(0x0000);
}

void MAX6969_7Seg::print(char c)
{
	currentChar = c;

	shift16(c<33 ? 0x0000 : segTable[((uint8_t)c-(c>='a' && c<='z' ? 65 : 33))]);
}

void MAX6969_7Seg::printRaw(uint16_t raw)
{
	shift16(raw);
}

void MAX6969_7Seg::shift16(uint16_t data)
{
	shiftOut(diPin, clkPin, MSBFIRST, (data>>8));
	shiftOut(diPin, clkPin, MSBFIRST, (data&0x00FF));
}

void MAX6969_7Seg::dpOn(void)
{
	digitalWrite(dpPin, LOW);
}

void MAX6969_7Seg::dpOff(void)
{
	digitalWrite(dpPin, HIGH);
}

char MAX6969_7Seg::getChar(void)
{
	return currentChar;
}