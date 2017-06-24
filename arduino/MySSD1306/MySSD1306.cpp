#include "MySSD1306.h"

#ifdef __AVR_ATtiny85__
	#include <TinyWireM.h>
	#define Wire TinyWireM
#else
	#include <Wire.h>
#endif

MySSD1306::MySSD1306(uint8_t i2cAddress)
{
	this->i2cAddress = i2cAddress;
	textRow = 0;
}

void MySSD1306::setup(uint8_t resetPin)
{
	pinMode(resetPin, OUTPUT);
	digitalWrite(resetPin, HIGH);
	delay(1);
	digitalWrite(resetPin, LOW);
	delay(10);
	digitalWrite(resetPin, HIGH);
	
	Wire.begin();

	// Wait for OLED hardware to startup
	delay(5);

	sendCommand(CMD_DISPLAY_OFF);

	sendCommand(CMD_MULTIPLEX_RATIO);
	sendCommand(0x3F);	// Duty = 1/64

	sendCommand(CMD_DISPLAY_OFFSET);
	sendCommand(0x00);

	sendCommand(CMD_ADDRESS_MEMORY);
	sendCommand(0x00);	// Horizontal

	sendCommand(0xB0);	// Set page address
	sendCommand(0x00); 	// Set column lower address
	sendCommand(0x10); 	// Set column higher address

	sendCommand(0x40);	// Set display starconstructort line

	sendCommand(CMD_DISPLAY_CONTRAST);
	sendCommand(0xcf);	// 128

	sendCommand(CMD_SEGMENT_REMAP);

	sendCommand(CMD_OUTPUT_REMAP_SCAN);

	sendCommand(CMD_DISPLAY_NORMAL);

	sendCommand(CMD_DISPLAY_CLOCK_DIVIDE_RATIO);
	sendCommand(0x80);

	sendCommand(CMD_PRECHARGE_PERIOD);
	sendCommand(0xf1);

	sendCommand(CMD_PINS_HARDWARE_CONFIG);
	sendCommand(0x12);

	sendCommand(CMD_VCOMH_DESELECT_LEVEL);
	sendCommand(0x30);

	sendCommand(CMD_SCROLL_DEACTIVATE);

	sendCommand(CMD_CHARGE_PUMP_SETTING);
	sendCommand(0x14);		// Enable

	sendCommand(CMD_DISPLAY_ON);
}

void MySSD1306::clear()
{
	// Move cursor to upper left corner in current clip area
	sendCommand(0x00 | 0x0);	// low col = 0
	sendCommand(0x10 | 0x0);	// hi col = 0
	sendCommand(0x40 | 0x0);	// line #0

	textRow = 0;

	// Reset the clip area
	clipArea(0, 0, 128, 8);
	
	// Clear the display
	for(uint16_t i=0;i<=((128*64/8)/16);i++) 
	{
		Wire.beginTransmission(i2cAddress);
		Wire.write(MODE_DATA);
		for(uint8_t k=0;k<16;k++)
		{
			Wire.write(0);
		}
		Wire.endTransmission();
	}
}

void MySSD1306::setCursor(uint8_t col, uint8_t row)
{
	clipArea(col, row, 128-col, 8-row);
}

void MySSD1306::print(char ch)
{
	uint8_t data[5];

	data[0] = getFlash(BasicFont, ch*5);
	data[1] = getFlash(BasicFont, ch*5 + 1);
	data[2] = getFlash(BasicFont, ch*5 + 2);
	data[3] = getFlash(BasicFont, ch*5 + 3);
	data[4] = getFlash(BasicFont, ch*5 + 4);    

	Wire.beginTransmission(i2cAddress);
	Wire.write(MODE_DATA);

	Wire.write(0x00);
	Wire.write(data[0]);
	Wire.write(data[1]);
	Wire.write(data[2]);
	Wire.write(data[3]);
	Wire.write(data[4]);
	Wire.write(0x00);

	Wire.endTransmission();
}

void MySSD1306::println(const char * text)
{
	if(textRow>7)
		sendCommand(0x40 | (((textRow-7)*8)) % 64);

	setCursor(0, textRow);

	for(uint8_t i=0,len=strlen(text);i<18;i++)
	{
		 print(i<len ? text[i] : ' '); 
	}

	if(textRow==255)
		textRow = 7;
	
	textRow++;
}

uint8_t MySSD1306::getFlash(const uint8_t * mem, unsigned int idx)
{
	return pgm_read_byte(&(mem[idx]));
}

void MySSD1306::sendCommand(uint8_t command)
{
	Wire.begin();
	Wire.beginTransmission(i2cAddress);

	Wire.write(MODE_COMMAND);
	Wire.write(command);

	Wire.endTransmission();
}

// Set the clipArea, by default (0, 0, 128, 8)
void MySSD1306::clipArea(uint8_t col, uint8_t row, uint8_t w, uint8_t h)
{
	Wire.begin();
	Wire.beginTransmission(i2cAddress);
	Wire.write(MODE_COMMAND);
	Wire.write(CMD_ADDRESS_COLUMN);
	Wire.write(0);

	Wire.write(col);
	Wire.write(col+w-1);

	Wire.endTransmission();

	Wire.begin();
	Wire.beginTransmission(i2cAddress);
	Wire.write(MODE_COMMAND);
	Wire.write(CMD_ADDRESS_PAGE);
	Wire.write(0);

	Wire.write(row); 
	Wire.write(row+h-1);

	Wire.endTransmission();
}
