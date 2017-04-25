#ifndef _MAX6969_7SEG_H
#define _MAX6969_7SEG_H

#include <Arduino.h>

/*
       A1      A2
    ------- -------
   |  \    |J   /  |
  F|   \H  |  K/   |B
   | G1 \  |  / G2 |
    ------- ------- 
   |    /  |  \    |
  E|  N/   |   \L  |C
   |  /    |M   \  |
    ------- ------- 
       D1      D2     


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

#define SEGSHIFT(A) ((uint16_t)1 << (A))

static const uint16_t SEG_A2=SEGSHIFT(0);
static const uint16_t SEG_A1=SEGSHIFT(1);
static const uint16_t SEG_J =SEGSHIFT(2);
static const uint16_t SEG_H =SEGSHIFT(3);
static const uint16_t SEG_F =SEGSHIFT(4);
static const uint16_t SEG_E =SEGSHIFT(5);
static const uint16_t SEG_N =SEGSHIFT(6);
static const uint16_t SEG_D1=SEGSHIFT(7);
static const uint16_t SEG_D2=SEGSHIFT(8);
static const uint16_t SEG_M =SEGSHIFT(9);
static const uint16_t SEG_L =SEGSHIFT(10);
static const uint16_t SEG_C =SEGSHIFT(11);
static const uint16_t SEG_G1=SEGSHIFT(12);
static const uint16_t SEG_G2=SEGSHIFT(13);
static const uint16_t SEG_B =SEGSHIFT(14);
static const uint16_t SEG_K =SEGSHIFT(15);


static const uint16_t segTable[94] =
{
	SEG_B+SEG_C,	// !
	SEG_J+SEG_F,	// "
	0xFFFF,	// #
	SEG_A2+SEG_A1+SEG_F+SEG_G1+SEG_G2+SEG_C+SEG_D2+SEG_D1+SEG_J+SEG_M,	// $
	SEG_A1+SEG_F+SEG_G1+SEG_J+SEG_G2+SEG_M+SEG_D2+SEG_C+SEG_N+SEG_K,	// %
	SEG_A2+SEG_J+SEG_K+SEG_N+SEG_D1+SEG_M+SEG_D2+SEG_C,	// &
	SEG_J,	// '
	SEG_K+SEG_L,	// (
	SEG_H+SEG_N,	// )
	SEG_J+SEG_H+SEG_G1+SEG_N+SEG_M+SEG_L+SEG_G2+SEG_K,	// *
	SEG_J+SEG_G1+SEG_G2+SEG_M,	// +
	SEG_N,	// ,
	SEG_G1+SEG_G2,	// -
	SEG_G1+SEG_M+SEG_D1+SEG_E,	// .
	SEG_N+SEG_K,	// /
	SEG_F+SEG_E+SEG_D1+SEG_D2+SEG_C+SEG_B+SEG_A2+SEG_A1, // 0
	SEG_B+SEG_C, // 1
	SEG_A1+SEG_A2+SEG_B+SEG_G1+SEG_G2+SEG_E+SEG_D1+SEG_D2, // 2
	SEG_A1+SEG_A2+SEG_B+SEG_G2+SEG_C+SEG_D2+SEG_D1, // 3
	SEG_F+SEG_G1+SEG_G2+SEG_B+SEG_C, // 4
	SEG_A1+SEG_A2+SEG_F+SEG_G1+SEG_G2+SEG_C+SEG_D2+SEG_D1, // 5
	SEG_A2+SEG_A1+SEG_F+SEG_G2+SEG_G1+SEG_C+SEG_D2+SEG_D1+SEG_E, // 6
	SEG_A1+SEG_A2+SEG_B+SEG_C, // 7
	SEG_A1+SEG_A2+SEG_F+SEG_G1+SEG_G2+SEG_B+SEG_C+SEG_D2+SEG_D1+SEG_E, // 8
	SEG_A1+SEG_A2+SEG_F+SEG_B+SEG_G1+SEG_G2+SEG_C, // 9
	SEG_J+SEG_M,	// :
	SEG_J+SEG_N,	// ;
	SEG_K+SEG_L,	// <
	SEG_G1+SEG_G2+SEG_D1+SEG_D2,	// =
	SEG_H+SEG_N,	// >
	SEG_M+SEG_G2+SEG_B+SEG_A2,	// ?
	SEG_D2+SEG_D1+SEG_E+SEG_F+SEG_A1+SEG_A2+SEG_B+SEG_G2+SEG_J,	// @
	SEG_G1+SEG_G2+SEG_E+SEG_F+SEG_A1+SEG_A2+SEG_B+SEG_C,	// A
	SEG_A1+SEG_A2+SEG_B+SEG_C+SEG_D2+SEG_D1+SEG_M+SEG_J+SEG_G1+SEG_G2,	// B
	SEG_A1+SEG_A2+SEG_D2+SEG_D1+SEG_E+SEG_F,	// C
	SEG_A1+SEG_A2+SEG_B+SEG_C+SEG_D2+SEG_D1+SEG_M+SEG_J,	// D
	SEG_A1+SEG_A2+SEG_D2+SEG_D1+SEG_E+SEG_F+SEG_G1+SEG_G2,	// E
	SEG_A1+SEG_A2+SEG_F+SEG_G1+SEG_E,	// F
	SEG_A1+SEG_A2+SEG_F+SEG_E+SEG_D1+SEG_D2+SEG_C+SEG_G2,	// G
	SEG_F+SEG_E+SEG_G1+SEG_G2+SEG_B+SEG_C,	// H
	SEG_A1+SEG_A2+SEG_J+SEG_M+SEG_D1+SEG_D2,	// I
	SEG_B+SEG_C+SEG_D1+SEG_D2+SEG_E,	// J
	SEG_F+SEG_E+SEG_G1+SEG_K+SEG_L,	// K
	SEG_F+SEG_E+SEG_D1+SEG_D2,	// L
	SEG_E+SEG_F+SEG_H+SEG_K+SEG_B+SEG_C,	// M
	SEG_E+SEG_F+SEG_H+SEG_L+SEG_C+SEG_B,	// N
	SEG_F+SEG_E+SEG_D1+SEG_D2+SEG_C+SEG_B+SEG_A2+SEG_A1,	// O
	SEG_E+SEG_F+SEG_A1+SEG_A2+SEG_B+SEG_G2+SEG_G1,	// P
	SEG_F+SEG_E+SEG_D1+SEG_D2+SEG_C+SEG_B+SEG_A2+SEG_A1+SEG_L,	// Q
	SEG_E+SEG_F+SEG_A1+SEG_A2+SEG_B+SEG_G1+SEG_G2+SEG_L,	// R
	SEG_A2+SEG_A1+SEG_F+SEG_G1+SEG_G2+SEG_C+SEG_D2+SEG_D1,	// S
	SEG_A1+SEG_A2+SEG_J+SEG_M,	// T
	SEG_F+SEG_E+SEG_D1+SEG_D2+SEG_C+SEG_B,	// U
	SEG_F+SEG_E+SEG_N+SEG_K,	// V
	SEG_F+SEG_E+SEG_N+SEG_L+SEG_C+SEG_B,	// W
	SEG_H+SEG_N+SEG_L+SEG_K,	// X
	SEG_H+SEG_K+SEG_M,	// Y
	SEG_A1+SEG_A2+SEG_K+SEG_N+SEG_D1+SEG_D2,	// Z
	SEG_A2+SEG_J+SEG_M+SEG_D2,	// [
	SEG_H+SEG_L,	// Backslash
	SEG_A1+SEG_J+SEG_M+SEG_D1,	// ]
	SEG_K+SEG_N+SEG_A2+SEG_B,	// ^
	SEG_D1+SEG_D2,	// _
	SEG_H,	// `
	0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,	// a-z
	SEG_G1+SEG_A2+SEG_J+SEG_M+SEG_D2,	// {
	SEG_J+SEG_M,	// |
	SEG_A1+SEG_J+SEG_M+SEG_D1+SEG_G2,	// }
	SEG_E+SEG_G1+SEG_G2+SEG_B	// ~
};

static const uint16_t SEG_STAR1 = SEG_G1+SEG_J+SEG_G2+SEG_M;
static const uint16_t SEG_STAR2 = SEG_H+SEG_K+SEG_L+SEG_N;
static const uint16_t SEG_BOX = SEG_A1+SEG_A2+SEG_B+SEG_C+SEG_D2+SEG_D1+SEG_F+SEG_E;

class MAX6969_7Seg
{
	public:
		void setup(uint8_t diPin, uint8_t clkPin, uint8_t dpPin);
		void clear(void);
		void print(char c);
		void printRaw(uint16_t raw);
		void dpOn(void);
		void dpOff(void);
		char getChar(void);

	private:
		void shift16(uint16_t data);

		char currentChar=0x00;
		uint8_t diPin;
		uint8_t clkPin;
		uint8_t dpPin;
};

#endif
