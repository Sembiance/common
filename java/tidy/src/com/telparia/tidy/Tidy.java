package com.telparia.tidy;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.annotation.Annotation;
import java.lang.reflect.AnnotatedElement;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

public class Tidy
{
	protected TidyOptions options;
	
	public Tidy ()
	{
		this.options = new TidyOptions();
	}
	
	public Tidy(TidyOptions options)
	{
		this.options = options;
	}

	/**
	 * Will execute the tidy process against the given inputFile
	 * @param inputFile The input file to process
	 * @return The output from tidy in a File
	 * @throws IOException
	 * @throws InterruptedException
	 */
	public File execute(File inputFile) throws IOException, InterruptedException
	{
		ProcessBuilder tidyProcessBuilder = new ProcessBuilder();
		
        List<String> tidyCommands = new ArrayList<String>();
        tidyCommands.add(options.tidyLocation);
        
        // Add our output location
        tidyCommands.add("-o");
        File outputFile = File.createTempFile("tidy-parseToXMLDocument-output-", "");
        tidyCommands.add(outputFile.getAbsolutePath());
        
        // Add our config location
        tidyCommands.add("-config");
        File configFile = writeOptionsFile();
        tidyCommands.add(configFile.getAbsolutePath());
        
        // Add our input location
        tidyCommands.add(inputFile.getAbsolutePath());
        
        tidyProcessBuilder.command(tidyCommands);
        
        Process tidyProcess = tidyProcessBuilder.start();
        
        long now = System.currentTimeMillis();
        long timeoutInMillis = 1000L * 10;
        long finish = now + timeoutInMillis;
        while (isAlive(tidyProcess) && (System.currentTimeMillis() < finish))
        {
            Thread.sleep(10);
        }
        if(isAlive(tidyProcess))
        {
            throw new InterruptedException("Process tidy timeout out");
        }
        
        configFile.delete();
        
        return outputFile;
	}
	
	public static boolean isAlive( Process p ) {
	    try
	    {
	        p.exitValue();
	        return false;
	    } catch (IllegalThreadStateException e) {
	        return true;
	    }
	}
	
	/**
	 * Static utility method for converting String data representing HTML into XHTML
	 * @param data HTML as a String
	 * @return The resulting XHTML file
	 * @throws IOException
	 * @throws InterruptedException
	 */
	public static File htmlToXHTML(String data) throws IOException, InterruptedException
	{
		File inputFile = File.createTempFile("tidy-htmlToXML-input-", ".html");
		FileWriter writer = new FileWriter(inputFile);
		writer.write(data);
		writer.close();
		
		File outputFile = Tidy.htmlToXHTML(inputFile);
		inputFile.delete();
		return outputFile;
	}
	
	/**
	 * Static utility method to convert an HTML file into an XHTML one
	 * @param htmlFile The HTML file
	 * @return The resulting XHTML file
	 * @throws IOException
	 * @throws InterruptedException
	 */
	public static File htmlToXHTML(File htmlFile) throws IOException, InterruptedException
    {
		TidyOptions tidyOptions = new TidyOptions();
		tidyOptions.dropEmptyParagraphs = false;
		tidyOptions.quoteNBSP = false;
		tidyOptions.joinStyles = false;
		tidyOptions.literalAttributes = true;
		tidyOptions.mergeDivs = false;
		tidyOptions.indent = "auto";
		tidyOptions.indentSpaces = 4;
		tidyOptions.addXMLDeclaration = true;
		tidyOptions.addXMLSpace = true;
		tidyOptions.outputXHTML = true;
		tidyOptions.forceOutput = true;
		
		Tidy tidy = new Tidy(tidyOptions);
		return tidy.execute(htmlFile);
    }

	/**
	 * Internal method used to convert our Tidy.Options class into a config file tidy can understand
	 * @return The .config file to use with tidy
	 * @throws IOException
	 */
	protected File writeOptionsFile() throws IOException
	{
		File configFile = File.createTempFile("tidy-parseToXMLDocument-confg-", ".config");
		FileWriter writer = new FileWriter(configFile);
		
		Field[] optionFields = options.getClass().getFields();
		for(Field optionField : optionFields)
		{
			Annotation[] optionAnnotations = ((AnnotatedElement)optionField).getAnnotations();
			if(optionAnnotations.length<1)
				continue;
			
			try
			{
				for(Annotation optionAnnotation : optionAnnotations)
				{
					if(optionAnnotation==null || !(optionAnnotation instanceof TidyOption))
						continue;
					
					TidyOption tidyOption = (TidyOption)optionAnnotation;
					
					Object optionValue = optionField.get(options);
					if(optionValue==null)
						continue;
					
					writer.write(tidyOption.value() + ": " + optionValue.toString() + "\n");
				}
			}
			catch(IllegalArgumentException e)
			{
				e.printStackTrace();
			}
			catch(IllegalAccessException e)
			{
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		writer.close();
		
		return configFile;
	}
	
	/**
	 * Set the options to be used in the tidy operation
	 * @param options
	 */
	public void setOptions(TidyOptions options)
	{
		this.options = options;
	}
	
	/**
	 * Get the options to be used in the tidy operation.
	 * Changes made to the class are automatically reflected on repeat calls to .execute() without having to re-call setOptions
	 * @return
	 */
	public TidyOptions getOptions()
	{
		return options;
	}
	
	
	
	
}

