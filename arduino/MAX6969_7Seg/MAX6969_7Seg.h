#ifndef _MAX6969_7SEG_H
#define _MAX6969_7SEG_H

#include <Arduino.h>

/*
       1       0
    ------- -------
   |  \    |2   /  |
  4|   \3  | 15/   |14
   | 12 \  |  / 13 |
    ------- ------- 
   |    /  |  \    |
  5|  6/   |   \10 |11
   |  /    |9   \  |
    ------- ------- 
       7       8
*/

static const uint16_t SEG_A2=0;
static const uint16_t SEG_A1=1;
static const uint16_t SEG_J=2;
static const uint16_t SEG_H=3;
static const uint16_t SEG_F=4;
static const uint16_t SEG_E=5;
static const uint16_t SEG_N=6;
static const uint16_t SEG_D1=7;
static const uint16_t SEG_D2=8;
static const uint16_t SEG_M=9;
static const uint16_t SEG_L=10;
static const uint16_t SEG_C=11;
static const uint16_t SEG_G1=12;
static const uint16_t SEG_G2=13;
static const uint16_t SEG_B=14;
static const uint16_t SEG_K=15;

#define S(A) ((uint16_t)1 << (A))

static const uint16_t segTable[94] =
{
	S(SEG_B)+S(SEG_C),	// !
	S(SEG_J)+S(SEG_F),	// "
	0xFFFF,	// #
	S(SEG_A2)+S(SEG_A1)+S(SEG_F)+S(SEG_G1)+S(SEG_G2)+S(SEG_C)+S(SEG_D2)+S(SEG_D1)+S(SEG_J)+S(SEG_M),	// $
	S(SEG_A1)+S(SEG_F)+S(SEG_G1)+S(SEG_J)+S(SEG_G2)+S(SEG_M)+S(SEG_D2)+S(SEG_C)+S(SEG_N)+S(SEG_K),	// %
	S(SEG_A2)+S(SEG_J)+S(SEG_K)+S(SEG_N)+S(SEG_D1)+S(SEG_M)+S(SEG_D2)+S(SEG_C),	// &
	S(SEG_J),	// '
	S(SEG_K)+S(SEG_L),	// (
	S(SEG_H)+S(SEG_N),	// )
	S(SEG_J)+S(SEG_H)+S(SEG_G1)+S(SEG_N)+S(SEG_M)+S(SEG_L)+S(SEG_G2)+S(SEG_K),	// *
	S(SEG_J)+S(SEG_G1)+S(SEG_G2)+S(SEG_M),	// +
	S(SEG_N),	// ,
	S(SEG_G1)+S(SEG_G2),	// -
	S(SEG_G1)+S(SEG_M)+S(SEG_D1)+S(SEG_E),	// .
	S(SEG_N)+S(SEG_K),	// /
	S(SEG_F)+S(SEG_E)+S(SEG_D1)+S(SEG_D2)+S(SEG_C)+S(SEG_B)+S(SEG_A2)+S(SEG_A1), // 0
	S(SEG_B)+S(SEG_C), // 1
	S(SEG_A1)+S(SEG_A2)+S(SEG_B)+S(SEG_G1)+S(SEG_G2)+S(SEG_E)+S(SEG_D1)+S(SEG_D2), // 2
	S(SEG_A1)+S(SEG_A2)+S(SEG_B)+S(SEG_G2)+S(SEG_C)+S(SEG_D2)+S(SEG_D1), // 3
	S(SEG_F)+S(SEG_G1)+S(SEG_G2)+S(SEG_B)+S(SEG_C), // 4
	S(SEG_A1)+S(SEG_A2)+S(SEG_F)+S(SEG_G1)+S(SEG_G2)+S(SEG_C)+S(SEG_D2)+S(SEG_D1), // 5
	S(SEG_A2)+S(SEG_A1)+S(SEG_F)+S(SEG_G2)+S(SEG_G1)+S(SEG_C)+S(SEG_D2)+S(SEG_D1)+S(SEG_E), // 6
	S(SEG_A1)+S(SEG_A2)+S(SEG_B)+S(SEG_C), // 7
	S(SEG_A1)+S(SEG_A2)+S(SEG_F)+S(SEG_G1)+S(SEG_G2)+S(SEG_B)+S(SEG_C)+S(SEG_D2)+S(SEG_D1)+S(SEG_E), // 8
	S(SEG_A1)+S(SEG_A2)+S(SEG_F)+S(SEG_B)+S(SEG_G1)+S(SEG_G2)+S(SEG_C), // 9
	S(SEG_J)+S(SEG_M),	// :
	S(SEG_J)+S(SEG_N),	// ;
	S(SEG_K)+S(SEG_L),	// <
	S(SEG_G1)+S(SEG_G2)+S(SEG_D1)+S(SEG_D2),	// =
	S(SEG_H)+S(SEG_N),	// >
	S(SEG_M)+S(SEG_G2)+S(SEG_B)+S(SEG_A2),	// ?
	S(SEG_D2)+S(SEG_D1)+S(SEG_E)+S(SEG_F)+S(SEG_A1)+S(SEG_A2)+S(SEG_B)+S(SEG_G2)+S(SEG_J),	// @
	S(SEG_G1)+S(SEG_G2)+S(SEG_E)+S(SEG_F)+S(SEG_A1)+S(SEG_A2)+S(SEG_B)+S(SEG_C),	// A
	S(SEG_A1)+S(SEG_A2)+S(SEG_B)+S(SEG_C)+S(SEG_D2)+S(SEG_D1)+S(SEG_M)+S(SEG_J)+S(SEG_G1)+S(SEG_G2),	// B
	S(SEG_A1)+S(SEG_A2)+S(SEG_D2)+S(SEG_D1)+S(SEG_E)+S(SEG_F),	// C
	S(SEG_A1)+S(SEG_A2)+S(SEG_B)+S(SEG_C)+S(SEG_D2)+S(SEG_D1)+S(SEG_M)+S(SEG_J),	// D
	S(SEG_A1)+S(SEG_A2)+S(SEG_D2)+S(SEG_D1)+S(SEG_E)+S(SEG_F)+S(SEG_G1)+S(SEG_G2),	// E
	S(SEG_A1)+S(SEG_A2)+S(SEG_F)+S(SEG_G1)+S(SEG_E),	// F
	S(SEG_A1)+S(SEG_A2)+S(SEG_F)+S(SEG_E)+S(SEG_D1)+S(SEG_D2)+S(SEG_C)+S(SEG_G2),	// G
	S(SEG_F)+S(SEG_E)+S(SEG_G1)+S(SEG_G2)+S(SEG_B)+S(SEG_C),	// H
	S(SEG_A1)+S(SEG_A2)+S(SEG_J)+S(SEG_M)+S(SEG_D1)+S(SEG_D2),	// I
	S(SEG_B)+S(SEG_C)+S(SEG_D1)+S(SEG_D2),	// J
	S(SEG_F)+S(SEG_E)+S(SEG_G1)+S(SEG_K)+S(SEG_L),	// K
	S(SEG_F)+S(SEG_E)+S(SEG_D1)+S(SEG_D2),	// L
	S(SEG_E)+S(SEG_F)+S(SEG_H)+S(SEG_K)+S(SEG_B)+S(SEG_C),	// M
	S(SEG_E)+S(SEG_F)+S(SEG_H)+S(SEG_L)+S(SEG_C)+S(SEG_B),	// N
	S(SEG_F)+S(SEG_E)+S(SEG_D1)+S(SEG_D2)+S(SEG_C)+S(SEG_B)+S(SEG_A2)+S(SEG_A1),	// O
	S(SEG_E)+S(SEG_F)+S(SEG_A1)+S(SEG_A2)+S(SEG_B)+S(SEG_G2)+S(SEG_G1),	// P
	S(SEG_F)+S(SEG_E)+S(SEG_D1)+S(SEG_D2)+S(SEG_C)+S(SEG_B)+S(SEG_A2)+S(SEG_A1)+S(SEG_L),	// Q
	S(SEG_E)+S(SEG_F)+S(SEG_A1)+S(SEG_A2)+S(SEG_B)+S(SEG_G1)+S(SEG_G2)+S(SEG_L),	// R
	S(SEG_A2)+S(SEG_A1)+S(SEG_F)+S(SEG_G1)+S(SEG_G2)+S(SEG_C)+S(SEG_D2)+S(SEG_D1),	// S
	S(SEG_A1)+S(SEG_A2)+S(SEG_J)+S(SEG_M),	// T
	S(SEG_F)+S(SEG_E)+S(SEG_D1)+S(SEG_D2)+S(SEG_C)+S(SEG_B),	// U
	S(SEG_F)+S(SEG_E)+S(SEG_N)+S(SEG_K),	// V
	S(SEG_F)+S(SEG_E)+S(SEG_N)+S(SEG_L)+S(SEG_C)+S(SEG_B),	// W
	S(SEG_H)+S(SEG_N)+S(SEG_L)+S(SEG_K),	// X
	S(SEG_H)+S(SEG_K)+S(SEG_M),	// Y
	S(SEG_A1)+S(SEG_A2)+S(SEG_K)+S(SEG_N)+S(SEG_D1)+S(SEG_D2),	// Z
	S(SEG_A2)+S(SEG_J)+S(SEG_M)+S(SEG_D2),	// [
	S(SEG_H)+S(SEG_L),	// Backslash
	S(SEG_A1)+S(SEG_J)+S(SEG_M)+S(SEG_D1),	// ]
	S(SEG_K)+S(SEG_N)+S(SEG_A2)+S(SEG_B),	// ^
	S(SEG_D1)+S(SEG_D2),	// _
	S(SEG_H),	// `
	0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,	// a-z
	S(SEG_G1)+S(SEG_A2)+S(SEG_J)+S(SEG_M)+S(SEG_D2),	// {
	S(SEG_J)+S(SEG_M),	// |
	S(SEG_A1)+S(SEG_J)+S(SEG_M)+S(SEG_D1)+S(SEG_G2),	// }
	S(SEG_E)+S(SEG_G1)+S(SEG_G2)+S(SEG_B)	// ~
};

class MAX6969_7Seg
{
	public:
		void setup(uint8_t diPin, uint8_t clkPin);
		void clear(void);
		void print(char c);

	private:
		void shift16(uint16_t data);

		uint8_t diPin;
		uint8_t clkPin;
};

#endif
