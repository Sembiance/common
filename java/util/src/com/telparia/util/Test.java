package com.telparia.util;

import java.io.IOException;
import java.net.MalformedURLException;

public class Test
{
	public static void main(String[] args) throws MalformedURLException, IOException
	{
		System.out.println(HTTPUtilities.get("http://api.rottentomatoes.com/api/public/v1.0/movies/770820337.json?apikey=2p7gzebbq3y27aq9d4kay2uu"));
		//HTTPUtilities.downloadToDisk("http://b.vimeocdn.com/ts/458/354/458354096_640.jpg", "/tmp/test.thumb.png");
	}
}
