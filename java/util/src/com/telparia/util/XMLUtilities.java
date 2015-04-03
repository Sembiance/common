package com.telparia.util;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.Namespace;
import org.dom4j.Node;
import org.dom4j.XPath;
import org.dom4j.io.SAXReader;
import org.xml.sax.SAXException;

import com.telparia.tidy.Tidy;

public class XMLUtilities
{
	public static Document toXML(String data) throws DocumentException, SAXException
	{
		SAXReader reader = new SAXReader();
		reader.setFeature("http://apache.org/xml/features/nonvalidating/load-external-dtd", false);
		return reader.read(new InputStreamReader(new ByteArrayInputStream(data.getBytes())));
	}
	
	public static Document tidyToXML(String originalData) throws IOException, DocumentException, InterruptedException, SAXException
	{
		File tidyFile = Tidy.htmlToXHTML(originalData);
		String data = FileUtils.readFileToString(tidyFile);
		tidyFile.delete();
		return XMLUtilities.toXML(data);
	}
	
	public static Document getURLAndTidy(String url) throws DocumentException, IOException, InterruptedException, SAXException
	{
		String HTMLData = HTTPUtilities.get(url);
		if(HTMLData==null)
			return null;
		File tidyFile = Tidy.htmlToXHTML(HTMLData);
		String data = FileUtils.readFileToString(tidyFile);
		tidyFile.delete();
		return XMLUtilities.toXML(data);
	}
	
	public static Document getURL(String url) throws DocumentException, SAXException, IOException
	{
		return XMLUtilities.toXML(HTTPUtilities.get(url));
	}
	
	@SuppressWarnings("unchecked")
	public static List<Element> xpathSelectAll(Node root, String xpathString, Map<String, String> nsMap)
	{
	    XPath xpath = DocumentHelper.createXPath(xpathString);
	    if(nsMap!=null)
	    	xpath.setNamespaceURIs(nsMap);
	
	    return (List<Element>)xpath.selectNodes(root);
	}
	
	public static Element xpathSelectOne(Node root, String xpathString, Map<String, String> nsMap)
	{
		List<Element> nodes = XMLUtilities.xpathSelectAll(root, xpathString, nsMap);
		if(nodes==null || nodes.size()<1)
			return null;
		
		return nodes.get(0);
	}
	
	@SuppressWarnings("unchecked")
	public static Map<String, String> generateNamespaceMap(Document doc, String defaultPrefix)
	{
		Map<String, String> nsMap = new HashMap<String, String>();
		
		List<Namespace> namespaces = new ArrayList<Namespace>();
		if(doc!=null && doc.getRootElement()!=null)
		{
			namespaces.addAll(doc.getRootElement().additionalNamespaces());
			namespaces.add(doc.getRootElement().getNamespace());
		}
		for(Namespace namespace : namespaces)
		{
			if(namespace.equals(Namespace.NO_NAMESPACE))
				continue;
			
			nsMap.put((namespace.getPrefix().length()<1) ? defaultPrefix : namespace.getPrefix(), namespace.getURI());
		}
		
		return nsMap;
	}	
}