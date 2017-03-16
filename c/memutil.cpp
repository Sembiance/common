#include <string.h>
#include <stdint.h>

uint8_t * memfind(uint8_t * data, unsigned long dataLength, uint8_t * match, unsigned long matchLength)
{
	uint8_t * p=0;

	if(!data || !dataLength || !match || !matchLength || matchLength>dataLength)
		return 0;

	for(p=data;p<=data+(dataLength-matchLength);p++)
	{
		if(!memcmp(p, match, matchLength))
			return p;
	}

	return 0;
}
