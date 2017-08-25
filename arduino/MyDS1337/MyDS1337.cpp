#include "MyDS1337.h"
#include <Wire.h>

static uint8_t controlRegister = 0x18;

MyDS1337::MyDS1337(void)
{
	Wire.begin();
}

void MyDS1337::getTime(struct tm * const t, int address)
{
	int numberBytes;
	
	switch(address)
	{
		case DS1337_CLOCK_ADDRESS:
			numberBytes = 7;
			break;
		case DS1337_ALARM1_ADDRESS:
			numberBytes = 4;
			break;
		case DS1337_ALARM2_ADDRESS:
			numberBytes = 3;
			break;
	}
	
	Wire.beginTransmission(DS1337_CTRL_ID);
	Wire.write(address);
	Wire.endTransmission();

	Wire.requestFrom(DS1337_CTRL_ID, numberBytes);
	
	if(address!=DS1337_ALARM2_ADDRESS)
		t->tm_sec = readByte();

	t->tm_min = readByte();
	t->tm_hour = readByte();

	if(address==DS1337_ALARM1_ADDRESS || address==DS1337_ALARM2_ADDRESS)
	{
		t->tm_mday = readByte();
		t->tm_mon = 0;
		t->tm_year = 0;
	}
	else
	{
		t->tm_wday = readByte()-1;
		t->tm_mday = readByte();
		t->tm_mon = readByte()-1;
		t->tm_year = readByte();
	}
}

void MyDS1337::setTime(const struct tm * const t, int address)
{
	stopClock();

	Wire.beginTransmission(DS1337_CTRL_ID);
	Wire.write(address); 
	
	if(address!=DS1337_ALARM2_ADDRESS)
		writeByte(t->tm_sec);
	
	writeByte(t->tm_min);
	writeByte(t->tm_hour);

	if(address==DS1337_ALARM1_ADDRESS || address==DS1337_ALARM2_ADDRESS)
	{
		writeByte(t->tm_mday);
	}
	else
	{
		writeByte(t->tm_wday+1);   
		writeByte(t->tm_mday);
		writeByte(t->tm_mon+1);
		writeByte(t->tm_year);   
	}

	Wire.endTransmission();

	startClock();
}

void MyDS1337::enableAlarm(int address)
{
	Wire.beginTransmission(DS1337_CTRL_ID);
	Wire.write(DS1337_CONTROL_ADDRESS);

	if(address==DS1337_ALARM1_ADDRESS)
		controlRegister |= 0x01;
	else
		controlRegister |= 0x03;
	
	Wire.write(controlRegister);
	Wire.endTransmission();
}

void MyDS1337::disableAlarm(int address)
{
	Wire.beginTransmission(DS1337_CTRL_ID);
	Wire.write(DS1337_CONTROL_ADDRESS);

	if(address==DS1337_ALARM1_ADDRESS)
		controlRegister &= 0xFE;
	else
		controlRegister &= 0xFD;
	
	Wire.write(controlRegister);
	Wire.endTransmission();
}

void MyDS1337::resetAlarms()
{
	Wire.beginTransmission(DS1337_CTRL_ID);
	Wire.write(DS1337_STATUS_ADDRESS);
	Wire.write(0x00);
	Wire.endTransmission();
}

void MyDS1337::interruptSelect(int mode)
{
	Wire.beginTransmission(DS1337_CTRL_ID);
	Wire.write(DS1337_CONTROL_ADDRESS);

	if(mode == 0)  // INTB
		controlRegister |= 0x04;
	else
		controlRegister &= 0xFB;
	
	Wire.write(controlRegister);
	Wire.endTransmission();
}

// set RS1 and RS2 bits, freq 0=1Hz, 1=4.096kHz, 2=8.192kHz, 3=32.768kHz
void MyDS1337::freqSelect(int freq)
{
	Wire.beginTransmission(DS1337_CTRL_ID);
	Wire.write(DS1337_CONTROL_ADDRESS);

	switch(freq)
	{
		case 0:
			controlRegister &= 0xE7;
			break;
		case 1:
			controlRegister |= 0x08;
			break;
		case 2:
			controlRegister |= 0x10;
			break;
		case 3:
			controlRegister |= 0x18;
			break;
	}
	
	Wire.write(controlRegister);
	Wire.endTransmission();
}

// Read and convert a Binary Coded Decimal (BCD) to Decimal
uint8_t MyDS1337::readByte(void)
{
	uint8_t b = Wire.read();
	return ((b/16 * 10) + (b % 16));
}

// Convert Decimal to Binary Coded Decimal (BCD) and write
uint8_t MyDS1337::writeByte(uint8_t b)
{
	return Wire.write((((b/10 * 16) + (b % 10))));
}

void MyDS1337::stopClock(void)
{
	Wire.beginTransmission(DS1337_CTRL_ID);
	Wire.write(DS1337_STATUS_ADDRESS);
	Wire.write(0x80);
	Wire.endTransmission();
}

void MyDS1337::startClock(void)
{
	Wire.beginTransmission(DS1337_CTRL_ID);
	Wire.write(DS1337_STATUS_ADDRESS);
	Wire.write(0x00);
	Wire.endTransmission();
}
