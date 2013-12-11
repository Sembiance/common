package com.telparia.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.FileUtils;

public class VideoUtilities
{
	private static final String	COMMAND_MPLAYER = "/usr/bin/mplayer";
	private static final String	COMMAND_MOGRIFY = "/usr/bin/mogrify";
	
	public static boolean generateThumbnail(String movieFilePath, String startAtTime, String thumbnailFilePath, int width, int height)
	{
		try
		{
			File tempDirectory = File.createTempFile("thumbnail", Long.toString(System.nanoTime()));
			tempDirectory.delete();
			tempDirectory.mkdir();
			
			ProcessBuilder builder = new ProcessBuilder();
			builder.directory(tempDirectory);
			
	        List<String> commands = new ArrayList<String>();
	        
	        commands.add(COMMAND_MPLAYER);
	        
	        commands.add("-msglevel");
	        commands.add("all=0");
	        
	        commands.add("-ss");
	        commands.add(startAtTime);
	        
	        commands.add("-frames");
	        commands.add("1");
	        
	        commands.add("-ao");
	        commands.add("null");
	        
	        commands.add("-vo");
	        commands.add("png");
	        
	        commands.add(movieFilePath);
			
	        builder.command(commands);
	        
        	Process process = builder.start();
        	int result = process.waitFor();
        	if(result!=0)
        	{
        		System.out.println("Failed to generate thumbnail for movie file [" + movieFilePath + "] to thumbnail path: " + thumbnailFilePath);
        		System.out.println("Return code: " + result);
        		return false;
        	}
        	
        	File thumbnailFile = new File(thumbnailFilePath);
        	if(thumbnailFile.exists())
        		thumbnailFile.delete();
	        FileUtils.moveFile(new File(tempDirectory, "00000001.png"), thumbnailFile);
	        
	        tempDirectory.delete();
	        
	        builder = new ProcessBuilder();
	        commands = new ArrayList<String>();
	        
	        commands.add(COMMAND_MOGRIFY);
	        
	        commands.add("-scale");
	        commands.add(width + "x" + height);
	        
	        commands.add(thumbnailFilePath);
	        
	        builder.command(commands);
	        process = builder.start();
        	result = process.waitFor();
        	if(result!=0)
        	{
        		System.out.println("Failed to resize  thumbnail for movie file [" + movieFilePath + "] to thumbnail path: " + thumbnailFilePath);
        		System.out.println("Return code: " + result);
        		return false;
        	}
		}
		catch(Exception e)
		{
			System.out.println("Failed to generate thumbnail for movie file [" + movieFilePath + "] to thumbnail path: " + thumbnailFilePath);
			e.printStackTrace();
			return false;
		}

        return true;
	}
	
	public static class VideoInfo
	{
		public Double	duration=0.0;
		public int 		height=0;
		public int 		width=0;
		public String 	format="Unknown";
		public String	mimeType="video/unknown";
		public Double	framesPerSecond=0.0;
		public Double	aspectRatio=0.0;
		public int		bitrate=0;
	}
	
	public static VideoInfo getVideoInfo(String videoPath)
	{
		VideoInfo info = new VideoInfo();
		
		try
		{
			ProcessBuilder builder = new ProcessBuilder();
			
	        List<String> commands = new ArrayList<String>();
	        commands.add(COMMAND_MPLAYER);
	        
	        commands.add("-frames");
	        commands.add("0");

	        commands.add("-identify");
	        
	        commands.add(videoPath);
	        
	        builder.command(commands);
	        
        	Process process = builder.start();
        	BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        	for(String line=reader.readLine();line!=null;line=reader.readLine())
        	{
        		if(!line.contains("="))
        			continue;
        		
        		String[] parts = line.split("=");
        		if(parts.length!=2)
        			continue;
        		
        		if(parts[0].equals("ID_LENGTH"))
        			info.duration = Double.parseDouble(parts[1]);
        		if(parts[0].equals("ID_VIDEO_BITRATE"))
        			info.bitrate = Integer.parseInt(parts[1]);
        		if(parts[0].equals("ID_VIDEO_WIDTH"))
        			info.width = Integer.parseInt(parts[1]);
        		if(parts[0].equals("ID_VIDEO_HEIGHT"))
        			info.height = Integer.parseInt(parts[1]);
        		if(parts[0].equals("ID_VIDEO_FPS"))
        			info.framesPerSecond = Double.parseDouble(parts[1]);
        		if(parts[0].equals("ID_VIDEO_ASPECT"))
        			info.aspectRatio = Double.parseDouble(parts[1]);
        		if(parts[0].equals("ID_VIDEO_FORMAT"))
        			info.format = parts[1];
        	}
        	
        	String formatLow = info.format.toLowerCase();
        	
        	if(formatLow.equals("h264"))
        		info.mimeType = "video/h264";
        	else if(formatLow.equals("divx") || formatLow.equals("dx5"))
        		info.mimeType = "video/divx";
        	else if(formatLow.startsWith("wmv"))
        		info.mimeType = "video/x-ms-wmv";
        	else
        		info.mimeType = "video/avi";
		}
		catch(Exception e)
		{
			System.out.println("Failed to get video info for path: " + videoPath);
			e.printStackTrace();
			return null;
		}
		
		return info;
	}
}
