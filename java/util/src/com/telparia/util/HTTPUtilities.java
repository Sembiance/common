package com.telparia.util;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.zip.GZIPInputStream;

import org.apache.commons.io.IOUtils;
import org.apache.commons.io.output.ByteArrayOutputStream;

public class HTTPUtilities
{
	public static final Map<String, String> DEFAULT_HEADERS = new HashMap<String, String>();
    static
    {
    	DEFAULT_HEADERS.put("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
    	DEFAULT_HEADERS.put("Accept-Encoding", "gzip,deflate");
    	DEFAULT_HEADERS.put("Accept-Language", "en-US,en;q=0.8");
    	DEFAULT_HEADERS.put("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.69 Safari/537.36");
    }
	
	public static final String get(String url) throws IOException
	{
		return HTTPUtilities.get(url, null);
	}

	public static final String get(String url, Map<String, String> extraHeaderMap) throws IOException
	{
		HttpURLConnection httpConn = (HttpURLConnection)(new URL(url).openConnection());
		for(Map.Entry<String, String> keyValue : DEFAULT_HEADERS.entrySet())
		{
			httpConn.addRequestProperty(keyValue.getKey(), keyValue.getValue());
		}
		
		if(extraHeaderMap!=null && extraHeaderMap.size()>0)
		{
			for(Map.Entry<String, String> keyValue : extraHeaderMap.entrySet())
			{
				httpConn.addRequestProperty(keyValue.getKey(), keyValue.getValue());
			}
		}

		httpConn.setInstanceFollowRedirects(true);
		httpConn.setUseCaches(false);
		httpConn.setDoOutput(true);
		
		if(httpConn.getResponseCode()!=200)
			return null;
		
		ByteArrayOutputStream out = new ByteArrayOutputStream();

		String contentEncoding = httpConn.getHeaderField("Content-Encoding");
		if(contentEncoding!=null && contentEncoding.toLowerCase().equals("gzip"))
			IOUtils.copy(new GZIPInputStream(httpConn.getInputStream()), out);
		else
			IOUtils.copy(httpConn.getInputStream(), out);

		return out.toString("UTF-8");
	}
	
	public static final File downloadToDisk(String url, String targetFileDiskPath) throws MalformedURLException, IOException
	{
		return downloadToDisk(url, targetFileDiskPath, "Mozilla/4.0 (compatible; MSIE 6.0; Windows 2000)", null);
	}
	
	public static final File downloadToDisk(String url, String targetFileDiskPath, String userAgent) throws MalformedURLException, IOException
	{
		return downloadToDisk(url, targetFileDiskPath, userAgent, null);
	}
	
	public static final File downloadToDisk(String url, String targetFileDiskPath, String userAgent, String cookieHeader) throws MalformedURLException, IOException
	{
		HttpURLConnection httpConn = (HttpURLConnection)(new URL(url).openConnection());
		httpConn.addRequestProperty("User-Agent", userAgent);
		if(cookieHeader!=null)
			httpConn.addRequestProperty("Cookie", cookieHeader);
		httpConn.setInstanceFollowRedirects(true);
		httpConn.setUseCaches(false);
		httpConn.setDoOutput(true);
		
		File outputFile = new File(targetFileDiskPath);
		FileOutputStream out = new FileOutputStream(outputFile);
		IOUtils.copy(httpConn.getInputStream(), out);
		
		out.flush();
		out.close();
		
		return outputFile;
	}
	
	public static final String format(String host, String pathname) throws UnsupportedEncodingException
	{
		return HTTPUtilities.format("http",  host,  80, pathname, null);
	}
	
	public static final String format(String host, String pathname, Map<String, String> query) throws UnsupportedEncodingException
	{
		return HTTPUtilities.format("http",  host,  80, pathname, query);
	}
	
	public static final String format(String protocol, String host, int port, String pathname, Map<String, String> query) throws UnsupportedEncodingException
	{
		String url = protocol + "://" + host + (port!=80 ? (":" + port) : "") + (!pathname.startsWith("/") ? "/" : "") + pathname;
		if(query!=null)
		{
			boolean firstEntry = true;
			for(Entry<String, String> entry : query.entrySet())
			{
				url += (firstEntry ? "?" : "&");
				firstEntry = false;
				url += entry.getKey() + "=" + URLEncoder.encode(entry.getValue(), "UTF8");
			}
		}
		
		return url;
	}
	
	public static final Map<String, String> getURLQueryMap(String url) throws UnsupportedEncodingException, MalformedURLException
	{
		return getURLQueryMap(new URL(url));
	}
	
	public static final Map<String, String> getURLQueryMap(URL url) throws UnsupportedEncodingException
	{
	    Map<String, String> queryPairs = new HashMap<String, String>();
	    String query = url.getQuery();
	    String[] pairs = query.split("&");
	    for(String pair : pairs)
	    {
	        int idx = pair.indexOf("=");
	        queryPairs.put(URLDecoder.decode(pair.substring(0, idx), "UTF-8"), URLDecoder.decode(pair.substring(idx + 1), "UTF-8"));
	    }
	    
	    return queryPairs;
	}
}
