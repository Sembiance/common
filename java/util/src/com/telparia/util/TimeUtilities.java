package com.telparia.util;

public class TimeUtilities
{
	public static String secondsToTimeClock(int totalSeconds)
	{
		double totalSecondsDouble = (int)totalSeconds;
        int minutes = (int)(Math.floor(totalSecondsDouble/60));
        int seconds = (int)(totalSecondsDouble%60);
        
        return "" + (minutes>0 ? minutes : "0") + ":" + (seconds<1 ? "00" : (seconds<10 ? "0" : "") + seconds);
	}
}
