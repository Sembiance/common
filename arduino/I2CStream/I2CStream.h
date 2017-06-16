#ifndef _I2CSTREAM_H
#define _I2CSTREAM_H

#include <Arduino.h>

class I2CStream : public Stream
{
	public:
		I2CStream(uint8_t sendAddr, uint8_t recvAddr);
		int available();
		int read();
		int peek();
		void flush();
		size_t write(uint8_t b);
		size_t write(const uint8_t * buffer, size_t size);

	private:
		uint8_t sendAddr;
		uint8_t recvAddr;

		// Sadly these static methods and variables are required due to Arduino Wire.onReceive() callbacks not supporting user data pointers
		static void recvHandler(int size);
		static uint8_t i2cbuf[64];
		static uint8_t i2cbuflen;
};

#endif
