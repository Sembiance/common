package com.telparia.util;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.io.IOUtils;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpRequestBase;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.HttpConnectionParams;

public class HTTPUtilities
{
	public static final Map<String, String> DEFAULT_HEADERS = new HashMap<String, String>();
    static
    {
    	DEFAULT_HEADERS.put("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
    	DEFAULT_HEADERS.put("Accept-Charset", "ISO-8859-1,utf-8;q=0.7,*;q=0.3");
    	DEFAULT_HEADERS.put("Accept-Language", "en-US,en;q=0.8");
    	DEFAULT_HEADERS.put("User-Agent", "Mozilla/5.0 (X11; Linux i686) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.47 Safari/536.11");
    }
	
	public static final String get(String url)
	{
		return HTTPUtilities.get(url, 0);
	}
	
	public static final String get(String url, int retries)
	{
		return HTTPUtilities.get(url, retries, null);
	}
	
	public static final String get(String url, int retries, Map<String, String> extraHeaderMap)
	{
		DefaultHttpClient httpclient = new DefaultHttpClient();
		httpclient.getParams().setIntParameter(HttpConnectionParams.CONNECTION_TIMEOUT, 10000);
		
		Map<String, String> headerMap = new HashMap<String, String>(DEFAULT_HEADERS);
		if(extraHeaderMap!=null && extraHeaderMap.size()>0)
			headerMap.putAll(extraHeaderMap);
		
		for(int i=-1;i<retries;i++)
		{
			try
			{
				HttpGet get = new HttpGet(url);
				HTTPUtilities.setHeadersFromMap(get, headerMap);
				BasicResponseHandler responseHandler = new BasicResponseHandler();
				return httpclient.execute(get, responseHandler);
			}
			catch(Exception e)
			{
			}
		}
		
		return null;
	}
	
	public static void setHeadersFromMap(HttpRequestBase baseRequest, Map<String, String> headerMap)
	{
		for(Map.Entry<String, String> headerEntry : headerMap.entrySet())
		{
			baseRequest.addHeader(headerEntry.getKey(), headerEntry.getValue());
		}
	}
	
	public static final File downloadToDisk(String url, String targetFileDiskPath) throws HttpException, IOException
	{
		return downloadToDisk(url, targetFileDiskPath, "Mozilla/4.0 (compatible; MSIE 6.0; Windows 2000)", null);
	}
	
	public static final File downloadToDisk(String url, String targetFileDiskPath, String userAgent) throws HttpException, IOException
	{
		return downloadToDisk(url, targetFileDiskPath, userAgent, null);
	}
	
	public static final File downloadToDisk(String url, String targetFileDiskPath, String userAgent, String cookieHeader) throws HttpException, IOException
	{
		HttpClient client = new HttpClient(new MultiThreadedHttpConnectionManager());
		File outputFile = new File(targetFileDiskPath);
	
		GetMethod get = new GetMethod(url);
		get.setFollowRedirects(true);
		get.setRequestHeader("User-Agent", userAgent);
		if(cookieHeader!=null)
			get.setRequestHeader("Cookie", cookieHeader);
		
		client.executeMethod(get);
		
		FileOutputStream out = new FileOutputStream(outputFile);
		IOUtils.copy(get.getResponseBodyAsStream(), out);
		
		out.flush();
		out.close();
		
		return outputFile;
	}
}
