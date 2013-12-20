package com.telparia.tidy;

public class TidyOptions
{
	public TidyOptions()
	{
		
	}
	
	public TidyOptions(String tidyLocation)
	{
		this.tidyLocation = tidyLocation;
	}
	
	public String tidyLocation="/mnt/compendium/bin/tidy";
	
	@TidyOption("drop-empty-paras")
	public Boolean dropEmptyParagraphs;
	
	@TidyOption("quote-nbsp")
	public Boolean quoteNBSP;
	
	@TidyOption("join-styles")
	public Boolean joinStyles;
	
	@TidyOption("literal-attributes")
	public Boolean literalAttributes;
	
	@TidyOption("merge-divs")
	public Boolean mergeDivs;
	
	@TidyOption("indent")
	public String indent;
	
	@TidyOption("indent-spaces")
	public Integer indentSpaces;
	
	@TidyOption("add-xml-decl")
	public Boolean addXMLDeclaration;
	
	@TidyOption("add-xml-space")
	public Boolean addXMLSpace;
	
	@TidyOption("output-xhtml")
	public Boolean outputXHTML;

	@TidyOption("output-xmll")
	public Boolean outputXML;

	@TidyOption("force-output")
	public Boolean forceOutput;
	
	@TidyOption("input-encoding")
	public String inputEncoding="utf8";
	
	@TidyOption("output-encoding")
	public String outputEncoding="utf8";
}