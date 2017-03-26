#include "Sunglass.h"
#include "T.h"

const uint32_t SUNGLASS_FADE_DURATION = T_SECOND*2;
const uint32_t SUNGLASS_FADE_INTERVAL_MIN = T_MS*10;

Sunglass::Sunglass(uint8_t sunglassNum)
{
	this->sunglassNum = sunglassNum;
}

void Sunglass::setup(uint8_t startOpacity)
{	
	dac = new Adafruit_MCP4725();
	dac->begin(0x62);
	set_opacity(startOpacity, true);
}

void Sunglass::set_opacity(uint8_t newOpacity, bool instant)
{
	tarV = opacity_to_voltage(newOpacity);

	if(instant)
		set_voltage(tarV);

	startV = curV;
	travelV = abs(tarV-startV);
	started = micros();
	last = started;
}

void Sunglass::update(uint32_t now)
{
	if((tarV>startV && curV>=tarV) || (tarV<startV && curV<=tarV) || (now-last)<SUNGLASS_FADE_INTERVAL_MIN)
		return;

	uint16_t diffV = (travelV*((float)(now-started))/(float)SUNGLASS_FADE_DURATION);

	uint16_t newV;
	if(tarV>startV)
		newV = startV+diffV;
	else
		newV = startV-diffV;

	set_voltage(newV);

	last = now;
}

void Sunglass::set_voltage(uint16_t v)
{
	curV = max(min(v, 4095), 0);

	dac->setVoltage(curV, false);
}

uint16_t Sunglass::opacity_to_voltage(uint8_t opacity)
{
	return SUNGLASS_VOLTAGE_MIN+((SUNGLASS_VOLTAGE_MAX-SUNGLASS_VOLTAGE_MIN)*(float)((float)opacity/100.0));
}
