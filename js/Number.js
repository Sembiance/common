"use strict";

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
		for(var i=7;i>=0;i--)
		{
			bits.push((this & (1 << i) ? 1 : 0));
		}

		return bits;
	};
}

if(!Number.prototype.getBit)
{
	Number.prototype.getBit = function(loc)
	{
		return this & (1 << (7-loc)) ? 1 : 0;
	};
}

if(!Number.prototype.setBit)
{
	Number.prototype.setBit = function(loc)
	{
		return this | 1 << (7-loc);
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
		return this & ~(1 << (7-loc));
	};
}
