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
		
		const i = +(Math.floor(Math.log(bytes) / Math.log(1000)));
		return Math.round(bytes / (1000 ** i), 2) + (i===0 ? " " : "") + sizes[i];
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
			const hourText = `${parseInt((secondsElapsed / (60*60)), 10)}`;
			clockText += `${hourText}:`;
			secondsElapsed %= (60*60);
			secondsElapsed = parseInt(secondsElapsed, 10);
		}

		if(secondsElapsed>=(60))
		{
			const minuteText = `${parseInt((secondsElapsed / 60), 10)}`;
			clockText += `${(minuteText.length===0 ? "00" : (minuteText.length===1) ? "0" : "") + minuteText}:`;
			secondsElapsed %= 60;
			secondsElapsed = parseInt(secondsElapsed, 10);
		}
		else if(typeof omitMinutes==="undefined" || !omitMinutes)
		{
			clockText += "00:";
		}

		const secondText = `${Math.floor(secondsElapsed)}`;
		clockText += (secondText.length===0 ? "00" : (secondText.length===1) ? "0" : "") + secondText;

		return clockText;
	};
}

// Converts a given number of seconds into a human readable value such as 3 days, 45 minutes, 10 seconds or 3d45m10s if short is set to true
if(!Number.prototype.secondsAsHumanReadable)
{
	Number.prototype.secondsAsHumanReadable = function secondsAsHumanReadable({lang="en", short=false, maxParts=Infinity}={})
	{
		const r = [];
		let left = this;	// eslint-disable-line consistent-this
		[
			{n : "year", s : "y", v : 31_557_600},
			{n : "month", s : "mo", v : 2_629_800},
			{n : "day", s : "d", v : 86400},
			{n : "hour", s : "h", v : 3600},
			{n : "minute", s : "m", v : 60},
			{n : "second", s : "s", v : 1}
		].forEach(({n, v, s}) =>
		{
			if(left===0 || left<v)
				return;
			
			const qty = Math.floor(left/v);
			left -= qty*v;
			r.push(`${qty.toLocaleString(lang)}${short ? s : ` ${n}${qty>1 || qty===0 ? "s" : ""}`}`);
		});

		if(left>0 && r.length===0)
		{
			const qty = left*1000;
			r.push(`${qty.toLocaleString(lang)}${short ? "ms" : ` millisecond${qty>1 || qty===0 ? "s" : ""}`}`);
		}

		return r.slice(0, maxParts).join(short ? "" : ", ");
	};
}

// Returns an array of bits that represent the given number
if(!Number.prototype.getBits)
{
	Number.prototype.getBits = function getBits(len=32)
	{
		const bits = [];
		for(let i=len-1;i>=0;i--)
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
if(!Number.prototype.scale)
{
	Number.prototype.scale = function scale(inMin, inMax, outMin, outMax)
	{
		return (((this - inMin) * (outMax - outMin)) / (inMax - inMin)) + outMin;
	};
}

// Eases a number
if(!Number.prototype.ease)
{
	/* eslint-disable no-mixed-operators */
	// Visual explanations of various easing types: https://easings.net/en
	Number.prototype.ease = function ease(type)
	{
		const x = this;		// eslint-disable-line consistent-this

		if(type==="easeInQuad")
			return x*x;

		if(type==="easeInCubic")
			return x*x*x;

		if(type==="easeInQuart")
			return x*x*x*x;

		if(type==="easeInQuint")
			return x*x*x*x*x;

		if(type==="easeOutQuad")
			return 1-(1-x)*(1-x);

		if(type==="easeOutCubic")
			return 1-((1-x) ** 3);

		if(type==="easeOutQuart")
			return 1-((1-x) ** 4);

		if(type==="easeInOutQuad")
			return x<0.5 ? (2*x*x) : (1 - ((-2*x+2) ** 2)/2);

		if(type==="easeOutQuint")
			return 1-((1-x) ** 5);

		if(type==="easeInOutCubic")
			return x<0.5 ? (4*x*x*x) : (1-((-2*x+2) ** 3)/2);

		if(type==="easeInOutQuart")
			return x<0.5 ? (8*x*x*x*x) : (1-((-2*x+2) ** 4)/2);

		if(type==="easeInOutQuint")
			return x<0.5 ? (16*x*x*x*x*x) : (1-((-2*x+2) ** 5)/2);

		if(type==="easeInSine")
			return 1-Math.cos(x* Math.PI/2);

		if(type==="easeInOutSine")
			return -(Math.cos(Math.PI*x)-1)/2;

		if(type==="easeInExpo")
			return x===0 ? 0 : (2 ** (10*x-10));

		if(type==="easeOutExpo")
			return x===1 ? 1 : 1-(2 ** (-10*x));

		if(type==="easeInOutExpo")
			return x===0 ? 0 : (x===1 ? 1 : (x<0.5 ? ((2 ** (20*x-10))/2) : ((2-(2 * (-20*x+10)))/2)));

		if(type==="easeInCirc")
			return 1-Math.sqrt(1-(x ** 2));

		if(type==="easeOutCirc")
			return Math.sqrt(1-((x-1) ** 2));

		if(type==="easeInOutCirc")
			return x<0.5 ? ((1-Math.sqrt(1-((2*x) ** 2)))/2) : ((Math.sqrt(1-((-2*x+2) ** 2))+1)/2);

		const c1 = 1.70158;
		const c2 = c1*1.525;
		const c3 = c1+1;
		const c4 = (2*Math.PI)/3;
		const c5 = (2*Math.PI)/4.5;

		if(type==="easeInBack")
			return c3 * x * x * x - c1 * x * x;

		if(type==="easeOutBack")
			return 1+c3*((x-1) ** 3)+c1*((x-1) ** 2);

		if(type==="easeInOutBack")
			return x<0.5 ? ((((2*x) ** 2)*((c2+1)*2*x-c2))/2) : ((((2*x-2) ** 2)*((c2+1)*(x*2-2)+c2)+2)/2);

		if(type==="easeInElastic")
			return x===0 ? 0 : (x===1 ? 1 : (-(2 ** (10*x-10))*Math.sin((x*10-10.75)*c4)));
		
		if(type==="easeOutElastic")
			return x===0 ? 0 : (x===1 ? 1 : ((2 ** (-10*x))*Math.sin((x*10-0.75)*c4)+1));
		
		if(type==="easeInOutElastic")
			return x===0 ? 0 : (x===1 ? 1 : (x<0.5 ? (-((2 ** (20*x-10))*Math.sin((20*x-11.125)*c5))/2) : ((2 ** (-20*x+10))*Math.sin((20*x-11.125)*c5)/2+1)));

		if(type==="easeInBounce")
			return 1-(Number(1-x).ease("bounceOut"));

		if(type==="easeOutBounce")
			return this.ease("bounceOut");

		if(type==="easeInOutBounce")
			return x<0.5 ? (1-Number(1-2*x).ease("bounceOut"))/2 : (1+Number(2*x-1).ease("bounceOut"))/2;

		// Default is "easeOutSine"
		return Math.sin(x*Math.PI/2);
	};

	/* eslint-enable no-mixed-operators */
}

// Flips the given bit in the number
if(!Number.prototype.noExponents)
{
	Number.prototype.noExponents = function noExponents()
	{
		const numStr = String(this);

		const data = numStr.split(/[eE]/);
		if(data.length===1)
			return data[0];
		
		let z = "";
		const sign = numStr.slice(0, 1)==="-" ? "-" : "";
		const str = data[0].replace(".", "");
		let mag = Number(data[1]) + 1;
		if(mag<=0)
		{
			z = `${sign}0.`;
			while(mag<0)
			{
				z += "0";
				++mag;
			}
			
			return (z + str.replace(/^-/, ""));
		}

		if(str.length<=mag)
		{
			mag -= str.length;
			while(mag>0)
			{
				z += 0;
				--mag;
			}
		
			return str + z;
		}

		return parseFloat(data[0]) * Math.pow(10, parseInt(data[1], 10));	// eslint-disable-line prefer-exponentiation-operator
	};
}
