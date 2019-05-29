"use strict";

////////////////////
//// Polyfills /////
////////////////////

//------------//
//// ES1.5 ////
//------------//

// Returns a string version of the number. Standardized funcation available in almost all implementations, but for those few that don't support, here is this crappy version
if(!Number.prototype.toLocaleString)
{
	Number.prototype.toLocaleString = function toLocaleString()
	{
		return this.toString();
	};
}

////////////////
//// Custom ////
////////////////

// Converts a given number of bytes into KB/MB/GB/TB. From: https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
if(!Number.prototype.bytesToSize)
{
	Number.prototype.bytesToSize = function bytesToSize()
	{
		const bytes = this;	// eslint-disable-line consistent-this
		const sizes = ["bytes", "KB", "MB", "GB", "TB"];
		if(bytes===0)
			return "0 bytes";
		
		const i = +(Math.floor(Math.log(bytes) / Math.log(1024)));
		return Math.round(bytes / Math.pow(1024, i), 2) + (i===0 ? " " : "") + sizes[i];
	};
}

// Converts a given number of seconds into a clock such as 4:50
if(!Number.prototype.toClock)
{
	Number.prototype.toClock = function toClock(omitMinutes)
	{
		let clockText = "";
		let secondsElapsed = this;	// eslint-disable-line consistent-this
		if(secondsElapsed>=(60*60))
		{
			const hourText = "" + parseInt((secondsElapsed / (60*60)), 10);
			clockText += hourText + ":";
			secondsElapsed %= (60*60);
			secondsElapsed = parseInt(secondsElapsed, 10);
		}

		if(secondsElapsed>=(60))
		{
			const minuteText = "" + parseInt((secondsElapsed / 60), 10);
			clockText += (minuteText.length===0 ? "00" : (minuteText.length===1) ? "0" : "") + minuteText + ":";
			secondsElapsed %= 60;
			secondsElapsed = parseInt(secondsElapsed, 10);
		}
		else if(typeof omitMinutes==="undefined" || !omitMinutes)
		{
			clockText += "00:";
		}

		const secondText = "" + Math.floor(secondsElapsed);
		clockText += (secondText.length===0 ? "00" : (secondText.length===1) ? "0" : "") + secondText;

		return clockText;
	};
}

// Converts a given number of seconds into a human readable value such as 3 days, 45 minutes, 10 seconds or 3d45m10s if short is set to true
if(!Number.prototype.secondsAsHumanReadable)
{
	Number.prototype.secondsAsHumanReadable = function secondsAsHumanReadable(lang="en", short=false)
	{
		const secondsElapsed = this;	// eslint-disable-line consistent-this
		const clock = secondsElapsed.toClock(secondsElapsed<60);
		const clockParts = clock.split(":");
		let humanText = "";
		let part = undefined;
			
		if(clockParts.length===3)
		{
			part = parseInt(clockParts[0], 10);
			if(isNaN(part))
				part = 0;
			if(part>8760)
			{
				part /= 8760;
				part = Math.floor(part);
				if(isNaN(part))
					part = 0;
				humanText += part.toLocaleString(lang) + (short ? "y" : (" year" + (part>1 || part===0 ? "s, " : ", ")));
				
				part = parseInt(clockParts[0], 10);
				if(isNaN(part))
					part = 0;
				part %= 8760;
				part /= 24;
				part = Math.floor(part);
				if(isNaN(part))
					part = 0;
				humanText += part.toLocaleString(lang) + (short ? "d" : (" day" + (part>1 || part===0 ? "s" : "")));
			}
			else if(part>24)
			{
				part /= 24;
				part = Math.floor(part);
				if(isNaN(part))
					part = 0;
				humanText += part.toLocaleString(lang) + (short ? "d" : (" day" + (part>1 || part===0 ? "s, " : ", ")));
				
				part = parseInt(clockParts[0], 10);
				if(isNaN(part))
					part = 0;
				part %= 24;
				part = Math.floor(part);
				if(isNaN(part))
					part = 0;
				humanText += part.toLocaleString(lang) + (short ? "h" : (" hour" + (part>1 || part===0 ? "s" : "")));
			}
			else
			{
				humanText += part.toLocaleString(lang) + (short ? "h" : (" hour" + (part>1 || part===0 ? "s, " : ", ")));
				
				part = parseInt(clockParts[1], 10);
				if(isNaN(part))
					part = 0;
				humanText += part.toLocaleString(lang) + (short ? "m" : (" minute" + (part>1 || part===0 ? "s" : "")));
			}
		}
		else if(clockParts.length===2)
		{
			part = parseInt(clockParts[0], 10);
			if(isNaN(part))
				part = 0;
			humanText += part.toLocaleString(lang) + (short ? "m" : (" minute" + (part>1 || part===0 ? "s, " : ", ")));
			
			part = parseInt(clockParts[1], 10);
			if(isNaN(part))
				part = 0;
			humanText += part.toLocaleString(lang) + (short ? "s" : (" second" + (part>1 || part===0 ? "s" : "")));
		}
		else if(clockParts.length===1)
		{
			part = parseInt(clockParts[0], 10);
			if(isNaN(part))
				part = 0;
			humanText += part.toLocaleString(lang) + (short ? "s" : (" second" + (part>1 || part===0 ? "s" : "")));
		}

		return humanText;
	};
}

// Returns an array of bits that represent the given number
if(!Number.prototype.getBits)
{
	Number.prototype.getBits = function getBits()
	{
		const bits = [];
		for(let i=31;i>=0;i--)
			bits.push(this.getBit(i));

		return bits.reverse();
	};
}

// Returns the given bit (0 or 1)
if(!Number.prototype.getBit)
{
	Number.prototype.getBit = function getBit(loc)
	{
		return ((this >> loc) %2 !== 0) ? 1 : 0;	// eslint-disable-line no-bitwise
	};
}

// Sets the given bit in a number to 1
if(!Number.prototype.setBit)
{
	Number.prototype.setBit = function setBit(loc)
	{
		return this | (1 << loc);	// eslint-disable-line no-bitwise
	};
}

// Clears the given bit in a number to 0
if(!Number.prototype.clearBit)
{
	Number.prototype.clearBit = function clearBit(loc)
	{
		return this & ~(1 << loc);	// eslint-disable-line no-bitwise
	};
}

// Flips the given bit in the number
if(!Number.prototype.flipBit)
{
	Number.prototype.flipBit = function flipBit(loc)
	{
		return (this.getBit(loc)===1 ? this.clearBit(loc) : this.setBit(loc));
	};
}

// Maps a number from one scale (in) to another scale (out) similar to how Arduino map() operates
if(!Number.prototype.map)
{
	Number.prototype.map = function map(inMin, inMax, outMin, outMax)
	{
		return (((this - inMin) * (outMax - outMin)) / (inMax - inMin)) + outMin;
	};
}
