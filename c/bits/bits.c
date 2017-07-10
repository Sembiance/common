#include <math.h>
#include <stdarg.h>

#include "bits.h"

void bitset(void * const val, uint8_t numBits, uint8_t idx, bool bit)
{
	if(numBits<=8)
	{
		if(bit)
			*(uint8_t *)val |= (uint8_t)1 << idx;
		else
			*(uint8_t *)val &= ~((uint8_t)1 << idx);
	}
	else if(numBits<=16)
	{
		if(bit)
			*(uint16_t *)val |= (uint16_t)1 << idx;
		else
			*(uint16_t *)val &= ~((uint16_t)1 << idx);
	}
	else if(numBits<=32)
	{
		if(bit)
			*(uint32_t *)val |= (uint32_t)1 << idx;
		else
			*(uint32_t *)val &= ~((uint32_t)1 << idx);
	}
	else
	{
		if(bit)
			*(uint64_t *)val |= (uint64_t)1 << idx;
		else
			*(uint64_t *)val &= ~((uint64_t)1 << idx);
	}
}

void bitsset(void * const val, uint8_t numBits, ...)
{
	va_list v;

	va_start(v, numBits);
	for(uint8_t i=0;i<numBits;i++)
	{
		bitset(val, numBits, i, (bool)va_arg(v, int));
	}
	va_end(v);
}

bool bitget(const void * const val, uint8_t numBits, uint8_t idx)
{
	if(numBits<=8)
		return (bool)((*(uint8_t *)val >> idx) & 1);
	else if(numBits<=16)
		return (bool)((*(uint16_t *)val >> idx) & 1);
	else if(numBits<32)
		return (bool)((*(uint32_t *)val >> idx) & 1);
	else
		return (bool)((*(uint64_t *)val >> idx) & 1);
}

bool  bitget8( uint8_t val, uint8_t idx) { return bitget(&val,  8, idx); }
bool bitget16(uint16_t val, uint8_t idx) { return bitget(&val, 16, idx); }
bool bitget32(uint32_t val, uint8_t idx) { return bitget(&val, 32, idx); }
bool bitget64(uint64_t val, uint8_t idx) { return bitget(&val, 64, idx); }

void bitsget(const void * const val, uint8_t numBits, bool * const bits)
{
	if(numBits<=8)
		for(uint8_t i=0;i<numBits;i++) { bits[i] = (*(uint8_t *)val >> i) & 1; }
	else if(numBits<=16)
		for(uint8_t i=0;i<numBits;i++) { bits[i] = (*(uint16_t *)val >> i) & 1; }
	else if(numBits<32)
		for(uint8_t i=0;i<numBits;i++) { bits[i] = (*(uint32_t *)val >> i) & 1; }
	else
		for(uint8_t i=0;i<numBits;i++) { bits[i] = (*(uint64_t *)val >> i) & 1; }
}

void  bitsget8( uint8_t val, bool * bits) { bitsget(&val,  8, bits); }
void bitsget16(uint16_t val, bool * bits) { bitsget(&val, 16, bits); }
void bitsget32(uint32_t val, bool * bits) { bitsget(&val, 32, bits); }
void bitsget64(uint64_t val, bool * bits) { bitsget(&val, 64, bits); }

#ifndef __AVR__
	uint8_t bitsneeded(uint64_t maxValue)
	{
		return (uint8_t)ceill(logbl(maxValue)/logbl(2))+1;
	}

	uint64_t bitsmaxvalue(uint8_t numBits)
	{
		return (uint64_t)(powl((long double)2, (long double)numBits)-1);
	}
#endif

