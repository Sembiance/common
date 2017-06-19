#ifndef _MEMUTIL_H
#define _MEMUTIL_H

#include <stdint.h>

const uint8_t * memfind(const uint8_t * const data, unsigned long dataLength, const uint8_t * const match, unsigned long matchLength);

#endif

