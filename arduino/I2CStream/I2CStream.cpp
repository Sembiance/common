#include <Wire.h>

#include "I2CStream.h"

uint8_t I2CStream::i2cbuf[255]={0};
uint8_t I2CStream::i2cbuflen=0;

void I2CStream::recvHandler(int size)
{
	while(Wire.available())
		i2cbuf[i2cbuflen++] = Wire.read();
}

I2CStream::I2CStream(uint8_t sendAddr, uint8_t recvAddr)
{
	this->sendAddr = sendAddr;
	this->recvAddr = recvAddr;

	Wire.begin(recvAddr);
	Wire.onReceive(recvHandler);
}

int I2CStream::available()
{
	return i2cbuflen;
}

int I2CStream::read()
{
	if(i2cbuflen==0)
		return -1;

	uint8_t b = i2cbuf[0];
	if(i2cbuflen>1)
		memcpy(i2cbuf, i2cbuf+1, i2cbuflen-1);
	i2cbuflen-=1;

	return b;
}

int I2CStream::peek()
{
	if(i2cbuflen==0)
		return -1;

	return i2cbuf[0];
}

void I2CStream::flush()
{
	// All data on Wire is already flushed
}

size_t I2CStream::write(uint8_t b)
{
	Wire.beginTransmission(sendAddr);
	uint8_t numSent = Wire.write(b);
	Wire.endTransmission();
	return numSent;
}

size_t I2CStream::write(const uint8_t *buffer, size_t size)
{
	Wire.beginTransmission(sendAddr);
	uint8_t numSent = Wire.write(buffer, size);
	Wire.endTransmission();
	return numSent;
}
