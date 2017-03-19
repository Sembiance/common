#include "BarGraph.h"
#include "T.h"
#include "gamma8.h"

typedef struct BARGRAPH_MODE_VALUES
{
	const int16_t val[10];
	const int16_t dir[10];
	const uint32_t interval;
} BARGRAPH_MODE_VALUES;

const BARGRAPH_MODE_VALUES modeValues[BARGRAPH_NUM_MODES] =
{
	{ {  0,   0,   0,   0,   0,   0,   0,   0,   0,   0}, {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},     T_SECOND/255 },		// BARGRAPH_MODE_OFF
	{ {  0,   0,   0,   0,   0,   0,   0,   0,   0,   0}, {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},   (T_MS*400)/255 },		// BARGRAPH_MODE_TRANSITION
	{ {  0,  28,  56,  85, 113, 142, 170, 199, 227, 255}, {1, 1, 1, 1, 1, 1, 1, 1, 1, 0}, (T_SECOND/2)/255 },		// BARGRAPH_MODE_CHASE
	{ {  0,  64, 127, 191, 255, 255, 191, 127,  64,   0}, {1, 1, 1, 1, 0, 0, 1, 1, 1, 1}, (T_SECOND/2)/255 },		// BARGRAPH_MODE_SWOOSH
	{ {255, 255, 255, 255, 255, 255, 255, 255, 255, 255}, {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},     T_SECOND/255 },		// BARGRAPH_MODE_TIMER
	{ {  0,   0,   0,   0,   0,   0,   0,   0,   0,   0}, {1, 1, 1, 1, 1, 1, 1, 1, 1, 1}, (T_SECOND*3)/(512*5) },	// BARGRAPH_MODE_PULSE
	{ {  0,   0,   0,   0,   0,   0,   0,   0,   0,   0}, {1, 1, 1, 1, 1, 1, 1, 1, 1, 1}, 				 0 }, 		// BARGRAPH_MODE_PERCENTAGE
};

BarGraph::BarGraph()
{
}

void BarGraph::setup(uint8_t n)
{
	tlc = new Tlc59711(n);
	tlc->beginFast();
	for(uint8_t i=0;i<10;i++)
	{
		tlc->setChannel(i, 0);
	}
	tlc->write();

	setMode(BARGRAPH_MODE_OFF);
}

BarGraph::~BarGraph()
{
	delete tlc;
}

void BarGraph::setBrightness(float brightness)
{
	for(uint8_t i=0;;i++)
	{
		gamma8[i] = brightness*GAMMA8[i];
		if(i==255)
			break;
	}
}

void BarGraph::setMode(BARGRAPH_MODE newMode)
{
	if(newMode==BARGRAPH_MODE_TRANSITION || mode==newMode || (mode==BARGRAPH_MODE_TRANSITION && nextMode==newMode))
		return;

	nextMode = newMode;
	mode = BARGRAPH_MODE_TRANSITION;
	
	memcpy(tv, modeValues[nextMode].val, sizeof(int16_t[10]));
	memcpy(sd, modeValues[nextMode].dir, sizeof(int16_t[10]));

	for(uint8_t i=0;i<10;i++)
	{
		d[i] = v[i]>=tv[i] ? 0 : 1;
	}

	start = micros();
}

void BarGraph::setMode(BARGRAPH_MODE newMode, uint32_t param)
{
	if(newMode==BARGRAPH_MODE_PERCENTAGE)
	{
		if(mode!=newMode)
			start = 101;
		else if(this->param==param)
			return;

		mode = newMode;
		this->param = param;

		for(uint8_t i=0;i<10;i++)
		{
			v[i] = max(min(1, (((float)param-(i*10))/10.0)), 0)*255.0;
		}
		
		return;
	}

	this->param = param;

	setMode(newMode);
}

void BarGraph::update(uint32_t now)
{
	uint32_t elapsed = (now-start);

	if(mode==BARGRAPH_MODE_TRANSITION)
	{
		if(elapsed<modeValues[mode].interval)
			return;

		for(uint8_t i=0;i<10;i++)
		{
			if(d[i]==1)
			{
				v[i]+=(elapsed/modeValues[mode].interval);
				v[i] = min(v[i], tv[i]);
			}
			else
			{
				v[i]-=(elapsed/modeValues[mode].interval);
				v[i] = max(v[i], tv[i]);
			}

			tlc->setChannel(i, ((uint16_t)gamma8[v[i]])*256);
		}

		if(memcmp(v, tv, sizeof(int16_t[10]))==0)
		{
			memcpy(d, sd, sizeof(int16_t[10]));
			mode = nextMode;
		}
	}
	else if(mode==BARGRAPH_MODE_CHASE || mode==BARGRAPH_MODE_SWOOSH)
	{
		if(elapsed<modeValues[mode].interval)
			return;

		for(uint8_t i=0;i<10;i++)
		{
			if(d[i]==1 && v[i]>=255)
				d[i] = 0;
			else if(d[i]==0 && v[i]<=0)
				d[i] = 1;

			if(d[i]==1)
			{
				v[i]+=(elapsed/modeValues[mode].interval);
				v[i] = min(v[i], 255);
			}
			else
			{
				v[i]-=(elapsed/modeValues[mode].interval);
				v[i] = max(v[i], 0);
			}

			tlc->setChannel(i, ((uint16_t)gamma8[v[i]])*256);
		}
	}
	else if(mode==BARGRAPH_MODE_TIMER)
	{
		if(elapsed<(param/100))
			return;

		uint8_t nv, ti;
		for(uint8_t i=0;i<10;i++)
		{
			nv = 255-round(min(255, max(0, (((double)(255*10)/(double)param)*min(elapsed, param))-(i*255))));
			ti = 9-i;
			if(v[ti]!=nv)
			{
				v[ti] = nv;
				tlc->setChannel(ti, ((uint16_t)gamma8[v[ti]])*256);
			}
		}

		if(elapsed>param)
			setMode(BARGRAPH_MODE_OFF);
	}
	else if(mode==BARGRAPH_MODE_PULSE)
	{
		if(elapsed<modeValues[mode].interval)
			return;

		uint32_t intervalsPassed = (elapsed/modeValues[mode].interval);

		if(intervalsPassed>=1536)
		{
			if(elapsed>param)
				start = now;
			return;
		}

		for(uint8_t i=0;i<10;i++)
		{
			// Failsafe as the code below isn't designed to set to zer
			v[i] = 0;

			uint32_t theMin = 80*(i<=4 ? 4-i : i-5);	// Can modify the first number lower for more leds active at once
			if(intervalsPassed>=theMin)
			{
				uint32_t np = intervalsPassed-theMin;
				if(np<512)
					v[i] = np<256 ? (intervalsPassed-theMin)%256 : 511-np;
			}

			tlc->setChannel(i, ((uint16_t)gamma8[v[i]])*256);
		}
	}
	else if(mode==BARGRAPH_MODE_PERCENTAGE)
	{
		if(start==param)
			return;

		start = param;

		for(uint8_t i=0;i<10;i++)
		{
			tlc->setChannel(i, ((uint16_t)gamma8[v[i]])*256);
		}
	}
	else
	{
		// Catches BARGRAPH_MODE_OFF
		return;
	}

	tlc->write();

	if(mode!=BARGRAPH_MODE_TIMER && mode!=BARGRAPH_MODE_PULSE && mode!=BARGRAPH_MODE_PERCENTAGE)
		start = now;
}
