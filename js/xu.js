let delay=null, path=null;	// This method allows us to use this code in both deno and browser
try { ({delay, path} = await import("std")); } catch {}	// eslint-disable-line @stylistic/brace-style
import {} from "./array.js";
import {} from "./math.js";
import {} from "./number.js";
import {} from "./object.js";
import {} from "./string.js";
import {} from "./uint8array.js";

const xu = {};

xu.SECOND = 1000;
xu.MINUTE = xu.SECOND*60;
xu.HOUR = xu.MINUTE*60;
xu.DAY = xu.HOUR*24;
xu.WEEK = xu.DAY*7;
xu.MONTH = xu.DAY*30.4375;
xu.YEAR = xu.DAY*365.25;

xu.BYTE = 1;
xu.KB = xu.BYTE*1024;
xu.MB = xu.KB*1024;
xu.GB = xu.MB*1024;
xu.TB = xu.GB*1024;
xu.PB = xu.TB*1024;

/* eslint-disable unicorn/no-hex-escape */
// https://en.wikipedia.org/wiki/ANSI_escape_code#Colors
xu.c =
{
	reset       : "\x1B[0m",
	bold        : "\x1B[1m",
	dim         : "\x1B[2m",
	italic      : "\x1B[3m",
	underline   : "\x1B[4m",
	blink       : "\x1B[5m",
	reverse     : "\x1B[7m",
	strike      : "\x1B[9m",
	clearScreen : "\x1B[2J\x1B[H",	// blanks screen and returns cursor to home position
	bg          :
	{
		black   : "\x1B[40m",

		// bright colors
		red     : "\x1B[41m",
		green   : "\x1B[42m",
		yellow  : "\x1B[43m",
		blue    : "\x1B[44m",
		magenta : "\x1B[45m",
		cyan    : "\x1B[46m",
		white   : "\x1B[47m",

		// dim colors
		redDim     : "\x1B[41m",
		greenDim   : "\x1B[42m",
		yellowDim  : "\x1B[43m",
		blueDim    : "\x1B[44m",
		magentaDim : "\x1B[45m",
		cyanDim    : "\x1B[46m",
		whiteDim   : "\x1B[47m",

		// 256 colors
		peach       : "\x1B[48;5;203m",
		pink        : "\x1B[48;5;205m",
		orange      : "\x1B[48;5;208m",
		violet      : "\x1B[48;5;93m",
		chartreuse  : "\x1B[48;5;190m",
		deepSkyblue : "\x1B[48;5;27m",
		violetRed   : "\x1B[48;5;163m",
		blueGreen   : "\x1B[48;5;23m",
		fogGray     : "\x1B[48;5;250m"
	},
	fg :
	{
		black   : "\x1B[90m",

		// bright colors
		red     : "\x1B[91m",
		green   : "\x1B[92m",
		yellow  : "\x1B[93m",
		blue    : "\x1B[94m",
		magenta : "\x1B[95m",
		cyan    : "\x1B[96m",
		white   : "\x1B[97m",

		// dim colors
		redDim     : "\x1B[31m",
		greenDim   : "\x1B[32m",
		yellowDim  : "\x1B[33m",
		blueDim    : "\x1B[34m",
		magentaDim : "\x1B[35m",
		cyanDim    : "\x1B[36m",
		whiteDim   : "\x1B[37m",

		// 256 colors
		peach       : "\x1B[38;5;203m",
		pink        : "\x1B[38;5;205m",
		orange      : "\x1B[38;5;208m",
		violet      : "\x1B[38;5;93m",
		chartreuse  : "\x1B[38;5;190m",
		deepSkyblue : "\x1B[38;5;27m",
		violetRed   : "\x1B[38;5;163m",
		blueGreen   : "\x1B[38;5;23m",
		fogGray     : "\x1B[38;5;250m",
		brown       : "\x1B[38;5;94m"
	},
	cursor :
	{
		hide : "\x1B[?25l",
		show : "\x1B[?25h"
	}
};
/* eslint-enable unicorn/no-hex-escape */

// This will convert the above exports.c so you can call xy.cf.fg.cyan("Cyan Color")
xu.cf = {};
function functionizeColors(src, dest)
{
	for(const [key, val] of Object.entries(src))
	{
		if(Object.isObject(val))
			functionizeColors(val, dest[key] = {});
		else
			dest[key] = str => `${src[key]}${str}${xu.c.reset}`;
	}
}
functionizeColors(xu.c, xu.cf);
const fg = xu.cf.fg;

/** little function to surround some text with various symbols */
xu.paren = text => `${fg.cyanDim("(")}${text}${fg.cyanDim(")")}`;
xu.quote = text => `${fg.greenDim(`"`)}${text}${fg.greenDim(`"`)}`;
xu.bracket = text => `${fg.cyanDim("[")}${text}${fg.cyanDim("]")}`;
xu.colon = text => `${fg.whiteDim(text)}${fg.cyanDim(":")} `;

/** clone the given value. Options: skipKeys : ["keyNames", "to", "skip"], shallow : true|false */
/** WARNING! This is not safe to use with classes. It will clone the class as an object, and thus it won't have all the properties */
/** I should handle this by detecting it it's a class and then call it's .clone() function IF it has one, otherwise just copy it over as is */
/** Sadly I kinda also need to do this in Object.clone(). here is how to detect a class: https://stackoverflow.com/a/43197340 */
xu.clone = function clone(v, {skipKeys, shallow=false}={})
{
	return (Array.isArray(v) ? v.clone({shallow}) : (Object.isObject(v) ? Object.clone(v, {skipKeys, shallow}) : v));
};

/** freezes an object/array, making it immutable. Options: recursive : true|false */
xu.freeze = function freeze(o, {recursive}={})
{
	if(!Array.isArray(o) && !Object.isObject(o))
		return o;

	if(recursive)
		(Object.isObject(o) ? Object.values(o) : o).forEach(v => xu.freeze(v, true));

	Object.freeze(o);

	return o;
};

/** parses the given raw data as JSON and if it fails return the fallback */
xu.parseJSON = function parseJSON(raw, fallback)
{
	try
	{
		return JSON.parse(raw);	// eslint-disable-line no-restricted-syntax
	}
	catch
	{
		return fallback;
	}
};

/** convience method for fetch. Additional valid args:
 * timeout - ms duration after which the fetch will be aborted
 *    json - Object to POST as JSON to the remote host
 *  asJSON - Instead of .text() return the result as JSON
 **/
xu.fetch = async function xuFetch(url, opts={})
{
	const fetchOpts = {...opts};

	if(fetchOpts.json)
	{
		fetchOpts.method ||= "POST";
		fetchOpts.headers ||= {};
		fetchOpts.headers["content-type"] ||= "application/json";
		fetchOpts.body = JSON.stringify(fetchOpts.json);

		delete fetchOpts.json;
	}

	let abortTimeout = null;
	if(fetchOpts.timeout)
	{
		const abortController = new AbortController();
		fetchOpts.signal = abortController.signal;

		abortTimeout = setTimeout(() =>
		{
			abortTimeout = null;
			abortController.abort();
		}, fetchOpts.timeout);

		delete fetchOpts.timeout;
	}

	const asJSON = fetchOpts.asJSON;
	delete fetchOpts.asJSON;

	const r = await (await fetch(url, fetchOpts))[asJSON ? "json" : "text"]();
	if(abortTimeout)
		clearTimeout(abortTimeout);

	return r;
};

/** template literaly that allows you to easily include multi-line strings and each line will be trimmed */
xu.trim = function trim(strs, ...vals)
{
	const r = [];
	strs.forEach(str =>
	{
		const rVals = [str];
		if(vals.length>0)
		{
			const val = vals.shift();
			rVals.push((typeof val==="object" ? JSON.stringify(val) : `${val}`));
		}

		r.push(...rVals.map(rVal => rVal.split("\n").map(line => line.trim()).join("\n")));
	});

	return r.join("").trim();
};

// Tries the passed in fn, returning whatever it returns. If it fails, will return the fallbackResult
xu.tryFallback = function tryFallback(fn, fallbackResult)
{
	let r = null;
	try { r = fn(); }
	catch { r = fallbackResult; }

	return r;
};

// Tries the passed in fn, returning whatever it returns. If it fails, will return the fallbackResult
xu.tryFallbackAsync = async function tryFallbackAsync(fn, fallbackResult)
{
	let r = null;
	try { r = await fn(); }
	catch { r = fallbackResult; }
	return r;
};

/** waits until the given async function fun returns a truthy value. Exponential delay, starting at 5ms */
xu.waitUntil = async function waitUntil(fun, {interval, timeout, stopper}={})
{
	let i=0;
	let timedOut = false;
	const startedAt = timeout ? performance.now() : null;
	while(!(await fun()))
	{
		await delay(interval || Math.min(5*(i++), xu.SECOND));
		if(timeout && (performance.now()-startedAt)>timeout)
		{
			timedOut = true;
			break;
		}

		if(stopper?.stop)
			break;
	}

	return !timedOut;
};

/** returns the node equilivant __dirname when passed in import.meta */
xu.dirname = function dirname(meta)
{
	return path.resolve((new URL(".", meta.url)).pathname);
};

/** returns a random ASCII name in the format PID_RANDOM INT_COUNTER INCR where each number is represented as base-36 ASCII A-Za-z0-9 */
const MAX_COUNTER = 46655;
let TMP_COUNTER = 0;
xu.randStr = function randStr()
{
	if(TMP_COUNTER>=MAX_COUNTER)
		TMP_COUNTER = 0;

	const randPrefix = xu.tryFallback(() => Deno.pid.toString(36), Math.randomInt(0, 32767));
	return `${randPrefix}_${Math.randomInt(0, MAX_COUNTER).toString(36)}_${(TMP_COUNTER++).toString(36)}`;
};

export { xu, fg };

