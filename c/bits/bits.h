#ifndef _BITS_H
#define _BITS_H

#include <stdint.h>
#include <stdbool.h>

void bitset(void * const val, uint8_t numBits, uint8_t idx, bool bit);
void bitsset(void * const val, uint8_t numBits, ...);

bool bitget(const void * const val, uint8_t numBits, uint8_t idx);
bool bitget8(uint8_t val, uint8_t idx);
bool bitget16(uint16_t val, uint8_t idx);
bool bitget32(uint32_t val, uint8_t idx);
bool bitget64(uint64_t val, uint8_t idx);

void bitsget(const void * const val, uint8_t numBits, bool * const bits);
void bitsget8(uint8_t val, bool * bits);
void bitsget16(uint16_t val, bool * bits);
void bitsget32(uint32_t val, bool * bits);
void bitsget64(uint64_t val, bool * bits);

#ifndef __AVR__
	uint8_t bitsneeded(uint64_t maxValue);
	uint64_t bitsmaxvalue(uint8_t numBits);
#endif

#endif
