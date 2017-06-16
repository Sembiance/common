#include "tinysleep.h"
#include <avr/sleep.h>
#include <avr/wdt.h>

volatile uint32_t tinysleep_wdi=0;

// 0=16ms, 1=32ms, 2=64ms, 3=128ms, 4=250ms, 5=500ms, 6=1s, 7=2s, 8=4s, 9=8s
static void setup_watchdog(int ii)
{
	byte bb;
	if(ii>9)
		ii=9;

	bb = ii & 7;

	if(ii>7)
		bb |= (1<<5);

	bb |= (1<<WDCE);

	MCUSR &= ~(1<<WDRF);
	WDTCR |= (1<<WDCE) | (1<<WDE);
	WDTCR = bb;
	WDTCR |= _BV(WDIE);
}

// called once from setup() to disable the ADC (saves power) and set the correct sleep mode
void tinysleepsetup(void)
{
	_SFR_BYTE(ADCSRA) &= ~_BV(ADEN);
	set_sleep_mode(SLEEP_MODE_PWR_DOWN);
}

// sleep for a duration of seconds
void tinysleep(uint32_t duration)
{
	setup_watchdog(6);
	sleep_enable();

	while(tinysleep_wdi<(duration+1))
	{
		sleep_mode();
	}

	sleep_disable();
	tinysleep_wdi = 0;
}

// the sleep watchdog timer interrupt callback
ISR(WDT_vect)
{
	tinysleep_wdi++;
}
