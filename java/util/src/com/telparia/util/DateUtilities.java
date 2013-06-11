package com.telparia.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtilities
{
	private static final SimpleDateFormat rfc822DateFormats[] = new SimpleDateFormat[] {
   		new SimpleDateFormat("EEE, d MMM yy HH:mm:ss z"),
   		new SimpleDateFormat("EEE, d MMM yy HH:mm z"),
   		new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss z"),
   		new SimpleDateFormat("EEE, d MMM yyyy HH:mm z"),
   		new SimpleDateFormat("d MMM yy HH:mm z"),
   		new SimpleDateFormat("d MMM yy HH:mm:ss z"),
   		new SimpleDateFormat("d MMM yyyy HH:mm z"),
   		new SimpleDateFormat("d MMM yyyy HH:mm:ss z"), }; 
   	
   	public static Date parseRFC822(String str)
   	{
   		for(SimpleDateFormat rfc822DateFormat : rfc822DateFormats)
   		{
   			try
   			{
   				Date theDate = rfc822DateFormat.parse(str);
   				if(theDate instanceof Date)
   					return theDate;
   			}
   			catch(ParseException e)
   			{
   				
   			}
   		}
   		
   		return null;
   	}
   	
   	private static final SimpleDateFormat mySQLDateTimeFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
   	
   	public static String formatDateAsMySQLDateTime(Date date)
   	{
   		return mySQLDateTimeFormat.format(date);
   	}
   	
   	public static Date parseDateWithFormat(String date, SimpleDateFormat dateFormat, Date defaultDate)
   	{
   		try
		{
			return dateFormat.parse(date);
		}
		catch(ParseException e)
		{
			e.printStackTrace();
		}
		
		return defaultDate;
   	}
   	
   	public static Date parseMySQLDateTime(String date)
   	{
   		try
		{
			return mySQLDateTimeFormat.parse(date);
		}
		catch(ParseException e)
		{
			e.printStackTrace();
		}
		
		return null;
   	}
}
