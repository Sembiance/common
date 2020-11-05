"use strict";
/* eslint-disable prefer-template */

////////////////////
//// Polyfills /////
////////////////////

//------------//
//// ES2015 ////
//------------//

// Returns true if the string includes the passed in match substring
if(!String.prototype.includes)
{
	String.prototype.includes = function includes(match)
	{
		return this.indexOf(match)!==-1;	// eslint-disable-line unicorn/prefer-includes
	};
}

// Returns true if the string starts with the given match
if(!String.prototype.startsWith)
{
	String.prototype.startsWith = function startsWith(searchString, position)
	{
		return (position ? this.substring(position) : this).indexOf(searchString)===0;
	};
}

// Returns true if the string ends with the given match
if(!String.prototype.endsWith)
{
	String.prototype.endsWith = function endsWith(searchString, thisLength)
	{
		if(thisLength===undefined || thisLength>this.length)
			thisLength = this.length;	// eslint-disable-line no-param-reassign

		return this.substring(thisLength-searchString.length, thisLength)===searchString;
	};
}

// Repeats a given string count times.
// I always over-ride the ES2015 version because I added a seperator argument
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

//------------//
//// ES2017 ////
//------------//

// Pads the start of the given string to targetLength with the given padString
if(!String.prototype.padStart)
{
	String.prototype.padStart = function padStart(_targetLength, _padString)
	{
		let targetLength = _targetLength >> 0; // eslint-disable-line no-bitwise, unicorn/prefer-math-trunc
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
		let targetLength = _targetLength >> 0; // eslint-disable-line no-bitwise, unicorn/prefer-math-trunc
		let padString = String(_padString || " ");
		if(this.length>targetLength)
			return String(this);
	
		targetLength = targetLength-this.length;
		if(targetLength>padString.length)
			padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed

		return String(this) + padString.slice(0, targetLength);
	};
}

////////////////
//// Custom ////
////////////////

// Returns true if this is a number
if(!String.prototype.isNumber)
{
	String.prototype.isNumber = function isNumber()
	{
		const n = parseFloat(this);
		return !isNaN(n) && isFinite(n);
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

// Replace all occurencs of match with replaceWith - Currently is a TC39 draft proposal: https://github.com/tc39/proposal-string-replaceall
if(!String.prototype.replaceAll)
{
	String.prototype.replaceAll = function replaceAll(match, replaceWith)
	{
		return this.split(match).join(replaceWith);
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

// Capitalizes the first letter of the string
if(!String.prototype.capitalize)
{
	String.prototype.capitalize = function capitalize()
	{
		return this.charAt(0).toUpperCase() + this.substr(1);
	};
}

// Reverses a string
if(!String.prototype.reverse)
{
	String.prototype.reverse = function reverse()
	{
		return this.split("").reverse().join("");
	};
}

// Reverses a string
if(!String.prototype.innerTruncate)
{
	String.prototype.innerTruncate = function innerTruncate(_maxLen)
	{
		if(this.length<=_maxLen)
			return this;
		
		const maxLen = _maxLen-1;
		const trimSideLength = Math.floor((this.length-maxLen)/2);
		const midPoint = Math.floor(this.length/2);
		return this.substring(0, midPoint-trimSideLength) + "…" + this.substring(midPoint+(trimSideLength+((this.length-(trimSideLength*2))-maxLen)));
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

// Converts a string to camel case
if(!String.prototype.toCamelCase)
{
	String.prototype.toCamelCase = function toCamelCase()
	{
		return this.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase())).replace(/\s+/g, "");	// eslint-disable-line unicorn/better-regex
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

// Escape the string for HTML/XML and other markup language documents
if(!String.prototype.escapeXML)
{
	String.prototype.escapeXML = function escapeXML()
	{
		return this.
			replaceAll("&", "&amp;").
			replaceAll("<", "&lt;").
			replaceAll(">", "&gt;").
			replaceAll('"', "&quot;").
			replaceAll("'", "&#039;");
	};
}

String.prototype.escapeHTML = String.prototype.escapeXML;
