#include "shuffle.h"

void shuffle(uint8_t * array, uint8_t n)
{
	if(n<=1) 
		return;

	for(uint8_t i=0;i<n-1;i++) 
	{
		uint8_t j = random(n);
		uint8_t t = array[j];
		array[j] = array[i];
		array[i] = t;
	}
}

