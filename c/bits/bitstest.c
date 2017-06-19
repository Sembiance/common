#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>

#include "bits.h"

void printbits(uint8_t val)
{
	bool bits[8];
	bitsget8(val, bits);
	for(uint8_t b=0;b<8;b++)
	{
		printf("%u ", bits[b]);
	}

	printf("[%u] {%lu} (%u)\n", bitsneeded(val), bitsmaxvalue(bitsneeded(val)), val);
}

void test_uint8(void)
{
	uint8_t val=46;
	bool bits[8];
	bool bitsCheck1[8] = {0,1,1,1,0,1,0,0};
	bool bitsCheck2[8] = {0,1,0,0,1,1,0,0};

	bitsget8(val, bits);
	assert(!memcmp(bits, bitsCheck1, 8));

	bitset(&val, 8, 2, 0);
	bitset(&val, 8, 3, 0);
	bitset(&val, 8, 4, 1);
	bitsget(&val, 8, bits);
	assert(!memcmp(bits, bitsCheck2, 8));

	bitsset(&val, 5, 0, 1, 1, 1, 0);
	bitsget8(val, bits);
	assert(!memcmp(bits, bitsCheck1, 8));
}

void test_uint16(void)
{
	uint16_t val=32767;
	bool bits[16];
	bool bitsCheck1[16] = {1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0};
	bool bitsCheck2[16] = {1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1};
	bool bitsCheck3[16] = {0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1};

	bitsget16(val, bits);
	assert(!memcmp(bits, bitsCheck1, 16));

	bitset(&val, 16, 7, 0);
	bitset(&val, 16, 15, 1);
	bitset(&val, 16, 8, 0);
	bitset(&val, 16, 8, 1);
	bitset(&val, 16, 8, 0);
	bitsget(&val, 16, bits);
	assert(!memcmp(bits, bitsCheck2, 16));

	bitsset(&val, 3, 0, 0, 1);
	bitsget(&val, 16, bits);
	assert(!memcmp(bits, bitsCheck3, 16));
}

int main(int argc, char ** argv)
{
	test_uint8();
	test_uint16();

	printf("%u %u %lu\n", UINT8_MAX/2, bitsneeded(UINT8_MAX/2), bitsmaxvalue(7));
	printf("%u %u %lu\n", UINT8_MAX, bitsneeded(UINT8_MAX), bitsmaxvalue(8));
	printf("%u %u %lu\n", UINT16_MAX/2, bitsneeded(UINT16_MAX/2), bitsmaxvalue(15));
	printf("%u %u %lu\n", UINT16_MAX, bitsneeded(UINT16_MAX), bitsmaxvalue(16));
	printf("%u %u %lu\n", UINT32_MAX/2, bitsneeded(UINT32_MAX/2), bitsmaxvalue(31));
	printf("%u %u %lu\n", UINT32_MAX, bitsneeded(UINT32_MAX), bitsmaxvalue(32));
	printf("%lu %u %lu\n", UINT64_MAX/2, bitsneeded(UINT64_MAX/2), bitsmaxvalue(63));
	printf("%lu %u %lu\n", UINT64_MAX, bitsneeded(UINT64_MAX), bitsmaxvalue(64));

	return EXIT_SUCCESS;
}
