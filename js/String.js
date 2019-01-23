"use strict";

////////////////////
//// Polyfills /////
////////////////////

//// ES2015
if(!String.prototype.includes)
{
	String.prototype.includes = function includes(match)
	{
		return this.indexOf(match)!==-1;
	};
}


////////////////
//// Custom ////
////////////////

// Returns true if the string starts with the given match
if(!String.prototype.startsWith)
{
	String.prototype.startsWith = function startsWith(match)
	{
		return this.indexOf(match)===0;
	};
}

// Returns true if the string ends with the given match
if(!String.prototype.endsWith)
{
	String.prototype.endsWith = function endsWith(match)
	{
		return this.reverse().startsWith(match.reverse());
	};
}

// Reverses a string, character by character
if(!String.prototype.reverse)
{
	String.prototype.reverse = function reverse()
	{
		let i = this.length;
		let result = "";

		while(i>0)
		{
			result += this.charAt(i-1);
			i--;
		}

		return result;
	};
}

// Replace all occurencs of match with replaceWith
if(!String.prototype.replaceAll)
{
	String.prototype.replaceAll = function replaceAll(match, replaceWith)
	{
		return this.replace(new RegExp(match, "g"), replaceWith);
	};
}

// Strips out the given chars from the string
if(!String.prototype.strip)
{
	String.prototype.strip = function strip(_chars)
	{
		const chars = Array.isArray(_chars) ? _chars.join() : Array.prototype.slice.call(arguments).join();	// eslint-disable-line prefer-rest-params
		return this.replace(new RegExp("[" + chars + "]", "g"), "");
	};
}

// Capitalizes the first letter of the string
if(!String.prototype.capitalize)
{
	String.prototype.capitalize = function capitalize()
	{
		return this.charAt(0).toUpperCase() + this.substr(1);
	};
}

// Converts a string to proper case, capitilizing the first letter of each word and lowercasing the rest of the word
if(!String.prototype.toProperCase)
{
	String.prototype.toProperCase = function toProperCase()
	{
		return this.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
	};
}

// Splits a given string into an array of chars
if(!String.prototype.toArray)
{
	String.prototype.toArray = function toArray()
	{
		return this.split("");
	};
}

// Repeats a given string count times. I always over-ride the ES2015 version because I added a seperator argument
String.prototype.repeat = function repeat(count, seperator)
{
	let result = "";
	for(let i=0;i<count;i++)
	{
		if(i>0 && seperator)
			result += seperator;
		
		result += this;	// eslint-disable-line consistent-this
	}

	return result;
};

// Repeat the given string count times, but as an array
if(!String.prototype.repeatAsArray)
{
	String.prototype.repeatAsArray = function repeatAsArray(count)
	{
		const result = [];
		result.pushMany(""+this, count);	// The ""+ is needed for IE9, it oddly passes 'object' rather than a string.
		return result;
	};
}

// Pads the start of the given string to targetLength with the given padString
if(!String.prototype.padStart)
{
	String.prototype.padStart = function padStart(_targetLength, _padString)
	{
		let targetLength = _targetLength >> 0; // eslint-disable-line no-bitwise
		let padString = String(_padString || " ");
		if(this.length>targetLength)
			return String(this);
		
		targetLength = targetLength-this.length;
		if(targetLength>padString.length)
			padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
		
		return padString.slice(0, targetLength) + String(this);
	};
}

// Pads the end of the given string to targetLength with the given padString
if(!String.prototype.padEnd)
{
	String.prototype.padEnd = function padEnd(_targetLength, _padString)
	{
		let targetLength = _targetLength >> 0; // eslint-disable-line no-bitwise
		let padString = String(_padString || " ");
		if(this.length>targetLength)
			return String(this);
	
		targetLength = targetLength-this.length;
		if(targetLength>padString.length)
			padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed

		return String(this) + padString.slice(0, targetLength);
	};
}

// Returns the last index location of the given substring txt
if(!String.prototype.lastIndexOf)
{
	String.prototype.lastIndexOf = function lastIndexOf(txt)
	{
		const loc = this.reverse().indexOf(txt);
		if(loc===-1)
			return -1;

		return this.length-loc;
	};
}

// Replaces a single character at a given index with a different char
if(!String.prototype.replaceCharAt)
{
	String.prototype.replaceCharAt = function replaceCharAt(index, c)
	{
		return this.substring(0, index) + c + this.substring(index+1);
	};
}

// Shortens a string BY the given len
if(!String.prototype.shortenBy)
{
	String.prototype.shortenBy = function shortenBy(len)
	{
		return this.substring(0, this.length-len);
	};
}

// Returns true if the string contains nothing but whitespace
if(!String.prototype.isWhiteSpace)
{
	String.prototype.isWhiteSpace = function isWhiteSpace()
	{
		for(let i=0, len=this.length;i<len;i++)
		{
			if(this.charAt(i)==="\t")
				continue;
			if(this.charAt(i)==="\n")
				continue;
			if(this.charAt(i)==="\r")
				continue;
			if(this.charAt(i)===" ")
				continue;
			if(this.charCodeAt(i)===160)	// nbsp
				continue;
			
			return false;
		}
		
		return true;
	};
}

// Replaces any extra whitespace from within the middle of a string
if(!String.prototype.innerTrim)
{
	String.prototype.innerTrim = function innerTrim()
	{
		let text = this;	// eslint-disable-line consistent-this
		const re = new RegExp(/\s\s/g);
		while(text.search(re)!==-1)
			text = text.replace(re, " ");

		return text;
	};
}

// Trim specific characters from the front and end of string
if(!String.prototype.trimChars)
{
	String.prototype.trimChars = function trimChars(_chars)
	{
		if(!_chars)
			return this.trim();

		const chars = Array.isArray(_chars) ? _chars.join("") : _chars;
		return this.replace(new RegExp("^[" + chars + "]+|[" + chars + "]+$", "g"), "");
	};
}
