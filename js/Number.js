"use strict";

if(!Number.prototype.toLocaleString)
{
	Number.prototype.toLocaleString = function()
	{
		return this.toString()
	};
}

if(!Number.prototype.toClock)
{
	Number.prototype.toClock = function(omitMinutes)
	{
		var clockText = "";
		var secondsElapsed = this;
		if(secondsElapsed>=(60*60))
		{
			var hourText = "" + parseInt((secondsElapsed / (60*60)), 10);
			clockText += hourText + ":";
			secondsElapsed %= (60*60);
			secondsElapsed = parseInt(secondsElapsed, 10);
		}

		if(secondsElapsed>=(60))
		{
			var minuteText = "" + parseInt((secondsElapsed / 60), 10);
			clockText += (minuteText.length===0 ? "00" : (minuteText.length===1) ? "0" : "") + minuteText + ":";
			secondsElapsed %= 60;
			secondsElapsed = parseInt(secondsElapsed, 10);
		}
		else if(typeof omitMinutes==="undefined" || !omitMinutes)
			clockText += "00:";

		var secondText = "" + Math.floor(secondsElapsed);
		clockText += (secondText.length===0 ? "00" : (secondText.length===1) ? "0" : "") + secondText;

		return clockText;
	};
}

if(!Number.prototype.secondsAsHumanReadable)
{
	Number.prototype.secondsAsHumanReadable = function(includeTrailingZeros)
	{
		var secondsElapsed = this;
		var clock = secondsElapsed.toClock(secondsElapsed<60);
		var clockParts = clock.split(":");
		var humanText = "";
		var part;
		
		if(typeof includeTrailingZeros==="undefined")
			includeTrailingZeros = false;
			
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
				humanText += part.toLocaleString() + " year" + (part>1 || part===0 ? "s, " : ", ");
				
				part = parseInt(clockParts[0], 10);
				if(isNaN(part))
					part = 0;
				part %= 8760;
				part /= 24;
				part = Math.floor(part);
				if(isNaN(part))
					part = 0;
				humanText += part.toLocaleString() + " day" + (part>1 || part===0 ? "s" : "");
			}
			else if(part>24)
			{
				part /= 24;
				part = Math.floor(part);
				if(isNaN(part))
					part = 0;
				humanText += part.toLocaleString() + " day" + (part>1 || part===0 ? "s, " : ", ");
				
				part = parseInt(clockParts[0], 10);
				if(isNaN(part))
					part = 0;
				part %= 24;
				part = Math.floor(part);
				if(isNaN(part))
					part = 0;
				humanText += part.toLocaleString() + " hour" + (part>1 || part===0 ? "s" : "");
			}
			else
			{
				humanText += part.toLocaleString() + " hour" + (part>1 || part===0 ? "s, " : ", ");
				
				part = parseInt(clockParts[1], 10);
				if(isNaN(part))
					part = 0;
				humanText += part.toLocaleString() + " minute" + (part>1 || part===0 ? "s" : "");
			}
		}
		else if(clockParts.length===2)
		{
			part = parseInt(clockParts[0], 10);
			if(isNaN(part))
				part = 0;
			humanText += part.toLocaleString() + " minute" + (part>1 || part===0 ? "s, " : ", ");
			
			part = parseInt(clockParts[1], 10);
			if(isNaN(part))
				part = 0;
			humanText += part.toLocaleString() + " second" + (part>1 || part===0 ? "s" : "");
		}
		else if(clockParts.length===1)
		{
			part = parseInt(clockParts[0], 10);
			if(isNaN(part))
				part = 0;
			humanText += part.toLocaleString() + " second" + (part>1 || part===0 ? "s" : "");
		}

		return humanText;
	};
}

if(!Number.prototype.zeroPad)
{
	Number.prototype.zeroPad = function(width)
	{
		var number = +this;

		width -= number.toString().length;
		if(width>0)
			return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;

		return number + "";
	};
}

if(!Number.prototype.truncate)
{
	Number.prototype.truncate = function()
	{
		if(this<0)
			return Math.ceil(this);
		else
			return Math.floor(this);
	};
}

if(!Number.isNumber)
{
	Number.isNumber = function(n)
	{
		return !isNaN(parseFloat(n)) && isFinite(n);
	};
}

if(!Number.prototype.getBits)
{
	Number.prototype.getBits = function()
	{
		var bits = [];
		for(var i=31;i>=0;i--)
		{
			bits.push(this.getBit(i));
		}

		return bits.reverse();
	};
}

if(!Number.prototype.getBit)
{
	Number.prototype.getBit = function(loc)
	{
		return ((this >> loc) %2 != 0) ? 1 : 0;
	};
}

if(!Number.prototype.setBit)
{
	Number.prototype.setBit = function(loc)
	{
		return this | 1 << loc;
	};
}

if(!Number.prototype.flipBit)
{
	Number.prototype.flipBit = function(loc)
	{
		return (this.getBit(loc)===1 ? this.clearBit(loc) : this.setBit(loc));
	};
}

if(!Number.prototype.clearBit)
{
	Number.prototype.clearBit = function(loc)
	{
		return this & ~(1 << loc);
	};
}

function isInt(num)
{
	return typeof num==='number' && parseFloat(num)==parseInt(num, 10) && !isNaN(num);
}

function findDec(num)
{
	var count=1;
	var a = Math.abs(num);
	num = a;

	while(!isInt(num) && isFinite(num))
	{
		num = a * Math.pow(10,count++);
	}

	return count-1;
}

if(!Number.prototype.add)
{
	Number.prototype.add = function(num2)
	{
		var dec1 = findDec(this);
		var dec2 = findDec(num2);
		return +((this+num2).toFixed((dec1>dec2 ? dec1 : dec2)));
	};
}

if(!Number.prototype.subtract)
{
	Number.prototype.subtract = function(num2)
	{
		var dec1 = findDec(this);
		var dec2 = findDec(num2);
		return +((this-num2).toFixed((dec1>dec2 ? dec1 : dec2)));
	};
}

if(!Number.prototype.multiply)
{
	Number.prototype.multiply = function(num2)
	{
		var dec1 = findDec(this);
		var dec2 = findDec(num2);
		return +((this*num2).toFixed((dec1>dec2 ? dec1 : dec2)));
	};
}
