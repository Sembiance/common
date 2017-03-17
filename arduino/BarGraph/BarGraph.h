#ifndef _BARGRAPH_H
#define _BARGRAPH_H

#include <Arduino.h>
#include <Tlc59711.h>
#include "DebugOLED.h"

typedef enum
{
	BARGRAPH_MODE_OFF,
	BARGRAPH_MODE_TRANSITION,
	BARGRAPH_MODE_CHASE,
	BARGRAPH_MODE_SWOOSH,
	BARGRAPH_MODE_TIMER,
	BARGRAPH_MODE_PULSE,
	BARGRAPH_MODE_PERCENTAGE
} BARGRAPH_MODE;

#define BARGRAPH_NUM_MODES 7

class BarGraph
{
	public:
		BarGraph();
		~BarGraph();
		void setup(uint8_t n, DebugOLED * oled);
		void setBrightness(float brightness);
		void setMode(BARGRAPH_MODE newMode);
		void setMode(BARGRAPH_MODE newMode, uint32_t param);
		void update(void);

	private:
		Tlc59711 * tlc;
		DebugOLED * oled;
		BARGRAPH_MODE mode;
		BARGRAPH_MODE nextMode;
		int16_t v[10];
		int16_t d[10];
		int16_t tv[10];
		int16_t sd[10];
		uint8_t gamma8[256];
		uint32_t start;
		uint32_t param;
};

#endif
