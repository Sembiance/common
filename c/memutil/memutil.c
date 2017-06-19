#include <string.h>

#include "memutil.h"

const uint8_t * memfind(const uint8_t * const data, unsigned long dataLength, const uint8_t * const match, unsigned long matchLength)
{
	if(!data || !dataLength || !match || !matchLength || matchLength>dataLength)
		return 0;

	for(const uint8_t * p=data;p<=data+(dataLength-matchLength);p++)
	{
		if(!memcmp(p, match, matchLength))
			return p;
	}

	return 0;
}
