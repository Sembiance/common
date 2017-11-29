"use strict";

if(!String.prototype.reverse)
{
	String.prototype.reverse = function()
	{
		var i = this.length;
		var result = "";

		while(i>0)
		{
			result += this.charAt(i-1);
			i--;
		}

		return result;
	};
}

if(!String.prototype.startsWith)
{
	String.prototype.startsWith = function(match)
	{
		return this.indexOf(match)===0;
	};
}

if(!String.prototype.endsWith)
{
	String.prototype.endsWith = function(match)
	{
		return this.reverse().startsWith(match.reverse());
	};
}

if(!String.prototype.contains)
{
	String.prototype.contains = function(match)
	{
		return this.indexOf(match)!==-1;
	};
}

// Always over-rides the existing trim() with my version
String.prototype.trim = function(chars)
{
	if(!chars)
		chars = "\\s\\u200B";

	if(Array.isArray(chars))
		chars = chars.join("");

	return this.replace(new RegExp("^[" + chars + "]+|[" + chars + "]+$", "g"), "");
};

if(!String.prototype.replaceAll)
{
	String.prototype.replaceAll = function(match, replaceWith)
	{
		return this.replace(new RegExp(match, "g"), replaceWith);
	};
}

if(!String.prototype.strip)
{
	String.prototype.strip = function()
	{
		var chars = Array.isArray(arguments[0]) ? arguments[0].join() : Array.prototype.slice.call(arguments).join();
		return this.replace(new RegExp("[" + chars + "]", "g"), "");
	};
}

if(!String.prototype.innerTrim)
{
	String.prototype.innerTrim = function()
	{
		var text = this;
		var re = new RegExp(/\s\s/g);
		while(text.search(re)!==-1)
		{
			text = text.replace(re, " ");
		}

		return text;
	};
}

if(!String.prototype.capitalize)
{
	String.prototype.capitalize = function ()
	{
		return this.charAt(0).toUpperCase() + this.substr(1);
	};
}

if(!String.prototype.toProperCase)
{
	String.prototype.toProperCase = function()
	{
		return this.replace(/\w\S*/g, function(txt)
		{
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	};
}

if(!String.prototype.toArray)
{
	String.prototype.toArray = function()
	{
		return this.split("");
	};
}

String.prototype.repeat = function(count, seperator)
{
	var result = "";
	for(var i=0;i<count;i++)
	{
		if(i>0 && seperator)
			result += seperator;
		
		result += this;
	}

	return result;
};

if(!String.prototype.repeatAsArray)
{
	String.prototype.repeatAsArray = function(count)
	{
		var result = [];
		result.pushMany(""+this, count);	// The ""+ is needed for IE9, it oddly passes 'object' rather than a string.
		return result;
	};
}

if(!String.prototype.padStart)
{
	String.prototype.padStart = function padStart(targetLength, padString)
	{
		targetLength = targetLength>>0; //floor if number or convert non-number to 0;
		padString = String(padString || " ");
		if(this.length>targetLength)
			return String(this);
		
		targetLength = targetLength-this.length;
		if(targetLength>padString.length)
			padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
		
		return padString.slice(0, targetLength) + String(this);
	};
}

if(!String.prototype.padEnd)
{
	String.prototype.padEnd = function padEnd(targetLength, padString)
	{
		targetLength = targetLength>>0; //floor if number or convert non-number to 0;
		padString = String(padString || " ");
		if(this.length>targetLength)
			return String(this);
	
		targetLength = targetLength-this.length;
		if(targetLength>padString.length)
			padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed

		return String(this) + padString.slice(0, targetLength);
	};
}

if(!String.prototype.replaceCharAt)
{
	String.prototype.replaceCharAt = function(index, c)
	{
		return this.substring(0, index) + c + this.substring(index+1);
	};
}

if(!String.prototype.shorten)
{
	String.prototype.shorten = function(c)
	{
		return this.substring(0, this.length-c);
	};
}

if(!String.prototype.isWhiteSpace)
{
	String.prototype.isWhiteSpace = function()
	{
		for(var i=0;i<this.length;i++)
		{
			if(this.charAt(i)==='\t')
				continue;
			if(this.charAt(i)==='\n')
				continue;
			if(this.charAt(i)==='\r')
				continue;
			if(this.charAt(i)===' ')
				continue;
			if(this.charCodeAt(i)===160)	// nbsp
				continue;
			
			return false;
		}
		
		return true;
	};
}

if(!String.prototype.lastIndexOf)
{
	String.prototype.lastIndexOf = function(txt)
	{
		var loc = this.reverse().indexOf(txt);
		if(loc===-1)
			return -1;

		return this.length-loc;
	};
}
