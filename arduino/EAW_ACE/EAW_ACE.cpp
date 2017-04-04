#include "EAW_ACE.h"
#include "memutil.h"

void EAW_ACE::setup(uint8_t startPin)
{
	setup(startPin, startPin+1, startPin+2, startPin+3, startPin+4, startPin+5, startPin+6, startPin+7);
}

void EAW_ACE::setup(uint8_t pin1, uint8_t pin2, uint8_t pin3, uint8_t pin4, uint8_t pin5, uint8_t pin6, uint8_t pin7, uint8_t pin8)
{
	pins[0] = pin1;
	pins[1] = pin2;
	pins[2] = pin3;
	pins[3] = pin4;
	pins[4] = pin5;
	pins[5] = pin6;
	pins[6] = pin7;
	pins[7] = pin8;

	for(uint8_t i=0;i<8;i++)
	{
		pinMode(pins[i], INPUT);
	}
}

uint8_t EAW_ACE::getPos(void)
{
	uint8_t value=0;

	for(uint8_t i=0;i<8;i++)
	{
		if(digitalRead(pins[i]))
			value |= 1<<i;
	}

	uint8_t * loc = memfind((uint8_t *)ENCODE_TABLE, 128, &value, 1);
	return loc==0 ? 0 : loc-ENCODE_TABLE;
}
