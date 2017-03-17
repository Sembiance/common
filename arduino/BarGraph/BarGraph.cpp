#include "BarGraph.h"
#include "T.h"

const uint8_t GAMMA8[256] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,13,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,24,24,25,25,26,27,27,28,29,29,30,31,32,32,33,34,35,35,36,37,38,39,39,40,41,42,43,44,45,46,47,48,49,50,50,51,52,54,55,56,57,58,59,60,61,62,63,64,66,67,68,69,70,72,73,74,75,77,78,79,81,82,83,85,86,87,89,90,92,93,95,96,98,99,101,102,104,105,107,109,110,112,114,115,117,119,120,122,124,126,127,129,131,133,135,137,138,140,142,144,146,148,150,152,154,156,158,160,162,164,167,169,171,173,175,177,180,182,184,186,189,191,193,196,198,200,203,205,208,210,213,215,218,220,223,225,228,231,233,236,239,241,244,247,249,252,255};

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

void BarGraph::setup(uint8_t n, DebugOLED * oled)
{
	this->oled = oled;

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

void BarGraph::update(void)
{
	uint32_t now = micros();
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
