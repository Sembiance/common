package com.telparia.util;

public class StringUtilities
{
	public static final String innerTrim(String text)
	{
		text = text.replaceAll("\t", " ");
		text = text.replaceAll("\n", " ");
		while(text.contains("  "))
		{
			text = text.replaceAll("  ", " ");
		}
		
		return text;
	}
	
	public static final String unicodeToASCII(String text)
	{
		StringBuilder result = new StringBuilder();
		for(int i=0,len=text.length();i<len;i++)
		{
			char letter = text.charAt(i);
			
			if(letter>126 || (letter!=9 && letter!=10 && letter!=13 && letter<32))
			{
				// For more: http://home.tiscali.nl/t876506/UnicodeDisplay.html
				if(letter==198)	// Æ
					result.append("Ae");
				else if(letter==8216) // ‘
					result.append("'");
				else if(letter==233) // é
					result.append("e");
				else if(letter==8212 || letter==8211) // —
					result.append("-");
				else if(letter==230) // æ
					result.append("ae");
				else if(letter==251) // û
					result.append("u");
				else if(letter==228) // ä
					result.append("a");
				else if(letter==225) // á
					result.append("a");
				else if(letter==8217) // ’
					result.append("'");
				else if(letter==226) // â
					result.append("a");
				else if(letter==252) // ü
					result.append("u");
				else if(letter==160) //  
					result.append(" ");
				else if(letter==186) // º
					result.append("*");
				else if(letter==178) // ²
					result.append("^2");
				else if(letter==237) // í
					result.append("i");
				else if(letter==246) // ö
					result.append("o");
				else if(letter==250) // ú
					result.append("u");
				else if(letter==234) // ê
					result.append("e");
				else if(letter==8221)
					result.append("\"");
				else
					System.out.println("Found invalid character [" + ((int)letter) + "]: " + String.valueOf(letter));
			}
			else
			{
				result.append(letter);
			}
		}
		
		return result.toString();
	}
}
