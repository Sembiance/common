#ifndef My7Seg_h
#define My7Seg_h

#include <Wire.h>
#include "Adafruit_LEDBackpack.h"
#include "Adafruit_GFX.h"

/* These are useful for controlling the adafruit 7-segment backpack displays when mounted upside down (where decimal point is at bottom left) https://learn.adafruit.com/adafruit-led-backpack/1-2-inch-7-segment-backpack */
#define SSB  0x01
#define SSBL 0x02
#define SSTL 0x04
#define SST  0x08
#define SSTR 0x10
#define SSBR 0x20
#define SSM  0x40

#define SSMC 	0x02	// Middle colon
#define SSRCB	0x04	// Right colon, bottom dot
#define SSRCT	0x08	// Right colon, bottom dot
#define SSDP	0x10	// Decimal point

uint16_t ss_char(char c);

void ss_write_num(Adafruit_7segment * ss, uint32_t num);
void ss_write_char(Adafruit_7segment * ss, char c);
void ss_write_str(Adafruit_7segment * ss, char * s);
void ss_write_symbols(Adafruit_7segment * ss, bool decimalPoint, bool middleColon, bool rigthColon);

#endif
