#ifndef _CRC8_H
#define _CRC8_H

#include <stdint.h>

uint8_t crc8_update(uint8_t crc, uint8_t b);
uint8_t crc8(const uint8_t * v, uint8_t len);

#endif
