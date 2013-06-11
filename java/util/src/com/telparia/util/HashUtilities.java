package com.telparia.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class HashUtilities
{
	public static final String sha512(String text) throws NoSuchAlgorithmException
	{
		MessageDigest md = MessageDigest.getInstance("SHA-512");
		return toHex(md.digest(text.getBytes()));
	}
	
	public static final String sha256(String text) throws NoSuchAlgorithmException
	{
		MessageDigest md = MessageDigest.getInstance("SHA-256");
		return toHex(md.digest(text.getBytes()));
	}
	
	public static final String toHex(byte data[])
    {
		char[] hex = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', };
        StringBuffer result = new StringBuffer(data.length * 2);

        for(int i=0;i<data.length;i++)
        {
        	result.append(hex[(data[i] >> 4) & 0x0f]).append(hex[data[i] & 0x0f]);
        }

        return result.toString();
    }
}
