#ifndef _MEMUTIL_H
#define _MEMUTIL_H

#include <stdint.h>

uint8_t * memfind(uint8_t * data, unsigned long dataLength, uint8_t * match, unsigned long matchLength);

#endif

