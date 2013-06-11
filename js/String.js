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
		chars = " \t\n\r\u00a0";	// 00a0 is hex for 160 which is nbsp

	var text = this;
	var c;
	var i;
	for(i=0,c=text.charAt(i);i<text.length && chars.indexOf(c)!==-1;i++,c=text.charAt(i))
	{
	}

	text = text.substring(i);

	for(i=(text.length-1),c=text.charAt(i);i>=0 && chars.indexOf(c)!==-1;i--,c=text.charAt(i))
	{
	}

	text = text.substring(0, (i+1));

	return text;
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


if(!String.prototype.repeat)
{
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
}

if(!String.prototype.repeatAsArray)
{
	String.prototype.repeatAsArray = function(count)
	{
		var result = [];
		result.pushMany(""+this, count);	// The ""+ is needed for IE9, it oddly passes 'object' rather than a string.
		return result;
	};
}

if(!String.prototype.pad)
{
	String.prototype.pad = function(minLength, padCharacter)
	{
		if(this.length>=minLength)
			return this;

		padCharacter = typeof padCharacter==="undefined" ? " " : padCharacter;

		return padCharacter.repeat(minLength-this.length) + ""+this;
	};
}
