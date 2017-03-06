#include "My7Seg.h"

// Starts at ascii position 32
static const uint16_t letterTable[] =
{
	0,									// space
	0,									// !
	SSTL+SSTR,							// "
	0,									// #
	0,									// $
	0,									// %
	0,									// &
	SSTL,								// '
	0,									// (
	0,									// )
	0,									// *
	0,									// +
	0,									// ,
	SSM,								// -
	0,									// .
	0,									// forward slash
	SSBL+SSTL+SST+SSB+SSTR+SSBR, 	 	// 0
	SSTR+SSBR, 							// 1
	SST+SSTR+SSM+SSBL+SSB, 				// 2
	SST+SSM+SSB+SSTR+SSBR, 				// 3
	SSTL+SSTR+SSM+SSBR, 				// 4
	SST+SSTL+SSM+SSBR+SSB, 				// 5
	SSTL+SSBL+SSB+SSBR+SSM, 			// 6
	SST+SSTR+SSBR, 						// 7
	SSBL+SSTL+SST+SSB+SSTR+SSBR+SSM, 	// 8
	SSTL+SST+SSTR+SSBR+SSM, 			// 9
	0,									// :
	0,									// ;
	0,									// <
	SSM+SSB,							// =
	0,									// >
	0,									// ?
	SSB+SSBL+SSTL+SST+SSTR+SSM,			// @
	SSBL+SSTL+SST+SSTR+SSBR+SSM,		// A
	SSBL+SSTL+SST+SSB+SSTR+SSBR+SSM, 	// B
	SSB+SSBL+SSTL+SST,					// C
	SSBL+SSM+SSB+SSBR+SSTR,				// d
	SSB+SSBL+SSM+SSTL+SST,				// E
	SSBL+SSM+SSTL+SST,					// F
	SST+SSTL+SSBL+SSB+SSBR,				// G
	SSBL+SSTL+SSM+SSTR+SSBR,			// H
	SSTR+SSBR, 							// I
	SSBL+SSB+SSBR+SSTR,					// J
	0,									// K
	SSTL+SSBL+SSB,						// L
	0,									// M
	SSBL+SSM+SSBR,						// n
	SSBL+SSTL+SST+SSB+SSTR+SSBR, 	 	// O
	SSBL+SSM+SSTL+SST+SSTR,				// P
	0,									// Q
	SSBL+SSM,							// r
	SST+SSTL+SSM+SSBR+SSB, 				// S
	SSBL+SSTL+SSM+SSB,					// T
	SSTL+SSBL+SSB+SSTR+SSBR,			// U
	0,									// V
	SSTL+SSTR+SSB,						// W
	0,									// X
	SSTL+SSTR+SSM+SSBR+SSB,				// y
	SST+SSTR+SSM+SSBL+SSB, 				// Z
	SST+SSTL+SSBL+SSB,					// [
	0,									// back slash
	SST+SSTR+SSBR+SSB,					// ]
	0,									// ^
	SSB,								// _
	0									// `
};

static const uint8_t posTable[] = { 4, 3, 1, 0 };

uint16_t ss_char(char c)
{
	return letterTable[((c>=97 ? (c-32) : c)-32)];
}

void ss_write_num(Adafruit_7segment * ss, uint32_t num)
{
	char buf[5];

	sprintf(buf, "%ld", num);
	ss_write_str(ss, buf);
}

void ss_write_char(Adafruit_7segment * ss, char c)
{
	char buf[2];

	sprintf(buf, "%c", c);
	ss_write_str(ss, buf);
}

void ss_write_str(Adafruit_7segment * ss, char * s)
{
	size_t len, i;

	len = strlen(s);
	if(len>4)
		return;

	for(i=0;i<len;i++)
	{
		ss->writeDigitRaw(posTable[(i+(4-len))], ss_char(s[i]));
	}
}

void ss_write_symbols(Adafruit_7segment * ss, bool decimalPoint, bool middleColon, bool rigthColon)
{
	uint16_t v=0;

	if(decimalPoint)
		v+=SSDP;
	if(middleColon)
		v+=SSMC;
	if(rigthColon)
		v+=SSRCB+SSRCT;

	ss->writeDigitRaw(2, v);
}

