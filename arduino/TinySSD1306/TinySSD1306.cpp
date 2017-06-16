#include "TinySSD1306.h"
#include <TinyWireM.h>

TinySSD1306::TinySSD1306(uint8_t i2cAddress)
{
	this->i2cAddress = i2cAddress;
	textRow = 0;
}

void TinySSD1306::setup(uint8_t resetPin)
{
	pinMode(resetPin, OUTPUT);
	digitalWrite(resetPin, HIGH);
	delay(1);
	digitalWrite(resetPin, LOW);
	delay(10);
	digitalWrite(resetPin, HIGH);
	
	TinyWireM.begin();

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

void TinySSD1306::clear()
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
		TinyWireM.beginTransmission(i2cAddress);
		TinyWireM.send(MODE_DATA);
		for(uint8_t k=0;k<16;k++)
		{
			TinyWireM.send(0);
		}
		TinyWireM.endTransmission();
	}
}

void TinySSD1306::setCursor(uint8_t col, uint8_t row)
{
	clipArea(col, row, 128-col, 8-row);
}

void TinySSD1306::print(char ch)
{
	uint8_t data[5];

	data[0] = getFlash(BasicFont, ch*5);
	data[1] = getFlash(BasicFont, ch*5 + 1);
	data[2] = getFlash(BasicFont, ch*5 + 2);
	data[3] = getFlash(BasicFont, ch*5 + 3);
	data[4] = getFlash(BasicFont, ch*5 + 4);    

	TinyWireM.beginTransmission(i2cAddress);
	TinyWireM.send(MODE_DATA);

	TinyWireM.send(0x00);
	TinyWireM.send(data[0]);
	TinyWireM.send(data[1]);
	TinyWireM.send(data[2]);
	TinyWireM.send(data[3]);
	TinyWireM.send(data[4]);
	TinyWireM.send(0x00);

	TinyWireM.endTransmission();
}

void TinySSD1306::println(const char * text)
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

uint8_t TinySSD1306::getFlash(const uint8_t * mem, unsigned int idx)
{
	return pgm_read_byte(&(mem[idx]));
}

void TinySSD1306::sendCommand(uint8_t command)
{
	TinyWireM.begin();
	TinyWireM.beginTransmission(i2cAddress);

	TinyWireM.send(MODE_COMMAND);
	TinyWireM.send(command);

	TinyWireM.endTransmission();
}

// Set the clipArea, by default (0, 0, 128, 8)
void TinySSD1306::clipArea(uint8_t col, uint8_t row, uint8_t w, uint8_t h)
{
	TinyWireM.begin();
	TinyWireM.beginTransmission(i2cAddress);
	TinyWireM.send(MODE_COMMAND);
	TinyWireM.send(CMD_ADDRESS_COLUMN);
	TinyWireM.send(0);

	TinyWireM.send(col);
	TinyWireM.send(col+w-1);

	TinyWireM.endTransmission();

	TinyWireM.begin();
	TinyWireM.beginTransmission(i2cAddress);
	TinyWireM.send(MODE_COMMAND);
	TinyWireM.send(CMD_ADDRESS_PAGE);
	TinyWireM.send(0);

	TinyWireM.send(row); 
	TinyWireM.send(row+h-1);

	TinyWireM.endTransmission();
}
