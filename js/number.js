/** Converts a given number of bytes into KB/MB/GB/TB. From: https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript */
Number.prototype.bytesToSize ||= function bytesToSize(precision)
{
	const bytes = this;	// eslint-disable-line consistent-this
	if(bytes===0)
		return "0 bytes";
	
	const i = +(Math.floor(Math.log(bytes) / Math.log(1000)));
	const num = bytes / (1000 ** i);
	return (precision ? num.toFixed(precision) : Math.round(num)) + ["b", "KB", "MB", "GB", "TB"][i];
};

/** Clears the given bit in a number to 0 */
Number.prototype.clearBit ||= function clearBit(loc)
{
	return this & ~(1 << loc);	// eslint-disable-line no-bitwise
};

/** Eases a number */
/* eslint-disable @stylistic/no-mixed-operators */
// Visual explanations of various easing types: https://easings.net/en
Number.prototype.ease ||= function ease(type)
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
/* eslint-enable @stylistic/no-mixed-operators */

/** Flips the given bit in the number */
Number.prototype.flipBit ||= function flipBit(loc)
{
	return (this.getBit(loc)===1 ? this.clearBit(loc) : this.setBit(loc));
};

/* Returns the given bit (0 or 1) */
Number.prototype.getBit ||= function getBit(loc)
{
	return ((this >> loc) %2 !== 0) ? 1 : 0;	// eslint-disable-line no-bitwise
};

/** Returns an array of bits that represent the given number */
Number.prototype.getBits ||= function getBits(len=32)
{
	const bits = [];
	for(let i=len-1;i>=0;i--)
		bits.push(this.getBit(i));

	return bits.reverse();
};

/** Converts an exponential number into one without an exponent */
Number.prototype.noExponents ||= function noExponents()
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

/** Maps a number from one scale (in) to another scale (out) similar to how Arduino map() operates  */
Number.prototype.scale ||= function scale(inMin, inMax, outMin, outMax)
{
	return (((this - inMin) * (outMax - outMin)) / (inMax - inMin)) + outMin;
};

/** Converts a given number of seconds into a human readable value such as 3 days, 45 minutes, 10 seconds or 3d45m10s if short is set to true */
Number.prototype.secondsAsHumanReadable ||= function secondsAsHumanReadable({lang="en", short=false, maxParts=Infinity}={})
{
	if(this===0)
		return short ? "0s" : "0 seconds";
	
	if(this<1)
		return `${this.toFixed(2)}${short ? "s" : " seconds"}`;
		
	const r = [];
	let left = this;	// eslint-disable-line consistent-this
	[
		{n :   "year", s :  "y", v : 31_557_600},
		{n :  "month", s : "mo", v : 2_629_800},
		{n :    "day", s :  "d", v : 86400},
		{n :   "hour", s :  "h", v : 3600},
		{n : "minute", s :  "m", v : 60},
		{n : "second", s :  "s", v : 1}
	].forEach(({n, v, s}) =>
	{
		if(left===0 || left<v)
			return;
		
		const qty = Math.floor(left/v);
		left -= qty*v;
		r.push(`${qty.toLocaleString(lang)}${short ? s : ` ${n}${qty>1 || qty===0 ? "s" : ""}`}`);
	});

	return r.slice(0, maxParts).join(short ? "" : ", ");
};

Number.prototype.msAsHumanReadable = function msAsHumanReadable(options)
{
	return Number(this/1000).secondsAsHumanReadable(options);
};

/** Sets the given bit in a number to 1 */
Number.prototype.setBit ||= function setBit(loc)
{
	return this | (1 << loc);	// eslint-disable-line no-bitwise
};

/** Converts a given number of ms into a clock */
Number.prototype.toClock ||= function toClock()
{
	const r = [];
	let left = this;	// eslint-disable-line consistent-this
	[3_600_000, 60000, 1000].forEach(v =>
	{
		if(left===0 || left<v)
		{
			if(r.length>0)
				r.push(":00");
			return;
		}
		
		const qty = Math.floor(left/v);
		left -= qty*v;
		if(r.length>0)
			r.push(":");
		r.push(`${qty.toString().padStart(r.length===0 ? 1 : 2, "0")}`);
	});

	if(left)
		r.push(`.${left}`);

	return r.join("");
};
