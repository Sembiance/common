#ifndef _SUNGLASS_H
#define _SUNGLASS_H

#include <Arduino.h>
#include <Adafruit_MCP4725.h>

#define SUNGLASS_VOLTAGE_MIN 800
#define SUNGLASS_VOLTAGE_MAX 2400

class Sunglass
{
	public:
		Sunglass(uint8_t sunglassNum);
		void setup(uint8_t startOpacity=0);
		void set_opacity(uint8_t newOpacity, bool instant=false);
		void update(uint32_t now);
		void set_voltage(uint16_t v);

	private:
		uint16_t opacity_to_voltage(uint8_t opacity);

		uint8_t sunglassNum;
		Adafruit_MCP4725 * dac;
		uint16_t startV;
		uint16_t travelV;
		uint16_t curV;
		uint16_t tarV;
		uint32_t started;
		uint32_t last;
};

#endif
