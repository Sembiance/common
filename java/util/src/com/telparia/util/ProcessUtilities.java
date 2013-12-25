package com.telparia.util;

import java.io.IOException;
import java.util.List;

public class ProcessUtilities
{
	public static int runProcess(List<String> commands) throws IOException, InterruptedException
	{
		return ProcessUtilities.runProcess(commands, 0);
	}
	
	public static int runProcess(List<String> commands, long timeout) throws IOException, InterruptedException
	{
		ProcessBuilder builder = new ProcessBuilder();
		builder.inheritIO();
        builder.command(commands);
        
		Process process = builder.start();
    	/*BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
    	for(String line=reader.readLine();line!=null;line=reader.readLine())
    	{
    		
    	}*/
    	
    	process.waitFor();
    	return process.exitValue();
	}
}
