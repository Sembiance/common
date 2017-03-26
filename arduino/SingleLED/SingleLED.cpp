#include "SingleLED.h"

long SingleLED::easeNone(long t, long b, long c, long d)
{
	return c*t/d + b;
}

void SingleLED::swap(uint8_t * a, uint8_t * b)
{
	uint8_t t = *a;
	*a = *b;
	*b = t;
}

SingleLED::SingleLED(uint8_t dataPin)
{
	led = new Adafruit_NeoPixel(1, dataPin, NEO_GRB + NEO_KHZ800);

	start = micros();
	dr=(tr-sr);
	dg=(tg-sg);
	db=(tb-sb);
}

void SingleLED::setup(void)
{
	led->begin();
	setBrightness(SINGLELED_DEFAULT_BRIGHTNESS);
}

void SingleLED::setBrightness(uint8_t brightness)
{
	led->setBrightness(brightness);
}

void SingleLED::change(uint8_t ur, uint8_t ug, uint8_t ub, bool upulse)
{
	this->ur = ur;
	this->ug = ug;
	this->ub = ub;
	this->upulse = upulse;
}

void SingleLED::update(uint32_t now)
{
	update(now, ur, ug, ub, upulse);
}

void SingleLED::update(uint32_t now, uint8_t _r, uint8_t _g, uint8_t _b, bool _pulse)
{
	uint32_t elapsed=(now-start);

	// We are currently all black and not changing to anything else right now
	if(elapsed>SINGLELED_PULSATE_DURATION && _r==0 && _g==0 && _b==0 && r==0 && g==0 && b==0)
		return;

	// Currently not pulsing but changing color. So just go ahead and start pulsing so we can change color later at brighness zero
	if(!pulse && !_pulse && (_r!=r || _g!=g || _b!=b))
		_pulse = true;

	// Changing from not pulsing to pulsing
	if(!pulse && _pulse)
	{
		pulse = true;
		elapsed = 0;
		start = now;
	}

	if(!pulse || elapsed<(SINGLELED_PULSATE_DURATION/255))
		return;

	int32_t nr = easeNone(elapsed, sr, dr, SINGLELED_PULSATE_DURATION);
	int32_t ng = easeNone(elapsed, sg, dg, SINGLELED_PULSATE_DURATION);
	int32_t nb = easeNone(elapsed, sb, db, SINGLELED_PULSATE_DURATION);

	if(elapsed>SINGLELED_PULSATE_DURATION)
	{
		// Only allow changing the color when the LED is off
		if(nr<=0 && ng<=0 && nb<=0 && (_r!=r || _g!=g || _b!=b))
		{
			sr=sg=sb=nr=ng=nb=elapsed=0;

			tr = r = _r;
			tg = g = _g;
			tb = b = _b;

			dr=(tr-sr);
			dg=(tg-sg);
			db=(tb-sb);

			start = now;
		}
		else
		{
			swap(&sr, &tr);
			swap(&sg, &tg);
			swap(&sb, &tb);

			dr = -dr;
			dg = -dg;
			db = -db;

			start = now;
			elapsed = 0;

			nr = easeNone(elapsed, sr, dr, SINGLELED_PULSATE_DURATION);
			ng = easeNone(elapsed, sg, dg, SINGLELED_PULSATE_DURATION);
			nb = easeNone(elapsed, sb, db, SINGLELED_PULSATE_DURATION);
		}

		// Full brightness and changing from pulse to no pulse
		if(pulse && !_pulse && (nr>=255 || ng>=255 || nb>=255))
		{
			pulse = _pulse;
			nr = min(nr, 255);
			ng = min(ng, 255);
			nb = min(nb, 255);
		}
	}

	led->setPixelColor(0, nr, ng, nb);
	led->show();
}
