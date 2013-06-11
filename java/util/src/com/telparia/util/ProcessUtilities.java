package com.telparia.util;


public class ProcessUtilities
{
	public static int runProcess(Process process)
	{
		return ProcessUtilities.runProcess(process, 0);
	}
	
	public static int runProcess(Process process, long timeout)
	{
		Worker worker = new Worker(process);
    	worker.start();
    	
		int result=1;
		
    	try
    	{
    	    worker.join(timeout);
    	    if(worker.result!=null)
    	    	result = worker.result;
    	}
    	catch(InterruptedException ex)
    	{
    		worker.interrupt();
    	}
    	finally
    	{
    	    process.destroy();
    	}
    	
    	return result;
	}
	
	public static class Worker extends Thread
	{
		private final Process 	process;
		public Integer 			result;
  
		private Worker(Process process)
		{
			this.process = process;
		}
  
		@Override
		public void run()
		{
			try
			{ 
				result = process.waitFor();
			}
			catch (InterruptedException ignore)
			{
				return;
			}
		}  
	}
}
