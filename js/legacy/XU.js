"use strict";
/* eslint-disable n/global-require */

(function _XU(exports)
{
	const XU = exports;

	exports.IS_NODE = typeof process!=="undefined" && process.versions!==undefined && process.versions.node!==undefined;
	if(XU.IS_NODE)
	{
		require("./Math.js");
		require("./Array.js");
		require("./String.js");
		require("./Object.js");
		require("./Function.js");
		require("./Number.js");

		exports.IS_DEV = !process.argv.includes("--staging") && !process.argv.includes("--production");
		exports.IS_STAGING = !!process.argv.includes("--staging");
	}
	else
	{
		exports.IS_DEV = window.location.hostname.startsWith("dev.") || window.location.href.includes("dev=true");
	}

	const util = XU.IS_NODE ? require("util") : null;

	exports.SECOND = 1000;
	exports.MINUTE = XU.SECOND*60;
	exports.HOUR = XU.MINUTE*60;
	exports.DAY = XU.HOUR*24;
	exports.WEEK = XU.DAY*7;
	exports.MONTH = XU.DAY*30.4375;
	exports.YEAR = XU.DAY*365.25;
	exports.STARTUP_TIME = Date.now();

	exports.BYTE = 1;
	exports.KB = XU.BYTE*1000;
	exports.MB = XU.KB*1000;
	exports.GB = XU.MB*1000;
	exports.TB = XU.GB*1000;
	exports.PB = XU.TB*1000;

	exports.UTF8 = {encoding : "utf8"};

	exports.clone = function clone(src, skipKeys, shallow)
	{
		return (Array.isArray(src) ? src.clone(shallow) : (Object.isObject(src) ? Object.clone(src, skipKeys, shallow) : src));
	};

	// Freeze an object/array, making it immutable with an option to recurse
	exports.freeze = function freeze(o, recursive=false)
	{
		if(!Array.isArray(o) && !Object.isObject(o))
			return o;

		if(recursive)
			(Object.isObject(o) ? Object.values(o) : o).forEach(v => XU.freeze(v, true));

		Object.freeze(o);

		return o;
	};

	// Given an options and cb parameters, assigns default options and handles the fact that 'options' might be the callback
	exports.optionscb = function optionscb(options, cb, defaultOptions={})
	{
		const r = {};
		r.options = Object.assign(defaultOptions, (cb ? options : {}));
		r.cb = cb || options;
		
		return r;
	};

	// Convience method for including as the last step of a tiptoe function
	exports.FINISH = function finish(err)
	{
		if(err)
			process.exit(console.error(err), 1);

		process.exit(0);
	};

	// Simple function I can stick on the end of tiptoe chains I don't really care too much about
	exports.NOOP = function NOOP(err)
	{
		if(err)
			console.error(err);
	};

	// Tries the passed in fn, returning whatever it returns. If it fails, will return the fallbackResult
	exports.tryFallback = function tryFallback(fn, fallbackResult)
	{
		let r;
		try
		{
			r = fn();
		}
		catch
		{
			r = fallbackResult;
		}

		return r;
	};

	// Will call fn and checkfn over and over until checkfn returns true
	exports.waitUntil = function waitUntil(fn, checkfn, _options, _cb)
	{
		const {options, cb} = XU.optionscb(_options, _cb, {interval : 100});
		let i=0;

		function performfn()
		{
			fn((err, ...args) =>
			{
				if(err || checkfn(...args))
					setImmediate(() => cb(err, ...args));
				else
					setTimeout(performfn, options.interval);
			}, i++);
		}

		performfn();
	};

	// Calls a promise as a callback. We don't use util.callbackify because it has issues with some promises that rely on a consistent 'this'
	exports.pcb = function pcb(p, cb)
	{
		try
		{
			p.then((...pargs) => cb(undefined, ...pargs), err => cb(err));
		}
		catch(err)
		{
			setImmediate(() => cb(err));
		}
	};

	const cc = t => (XU.IS_NODE && process.stdout && process.stdout.hasColors && process.stdout.hasColors() ? t : "");
	/* eslint-disable unicorn/escape-case, unicorn/no-hex-escape */
	// https://en.wikipedia.org/wiki/ANSI_escape_code#Colors
	exports.c =
	{
		reset     : cc("\x1b[0m"),
		bold      : cc("\x1b[1m"),
		dim       : cc("\x1b[2m"),
		italic    : cc("\x1b[3m"),
		underline : cc("\x1b[4m"),
		blink     : cc("\x1b[5m"),
		reverse   : cc("\x1b[7m"),
		strike    : cc("\x1b[9m"),
		bg        :
		{
			black   : cc("\x1b[40m"),
			red     : cc("\x1b[41m"),
			green   : cc("\x1b[42m"),
			yellow  : cc("\x1b[43m"),
			blue    : cc("\x1b[44m"),
			magenta : cc("\x1b[45m"),
			cyan    : cc("\x1b[46m"),
			white   : cc("\x1b[47m"),
			peach   : cc("\x1b[48;5;203m"),
			pink    : cc("\x1b[48;5;205m"),
			orange  : cc("\x1b[48;5;208m"),
			violet  : cc("\x1b[48;5;93m")
		},
		fg :
		{
			black   : cc("\x1b[90m"),
			red     : cc("\x1b[91m"),
			green   : cc("\x1b[92m"),
			yellow  : cc("\x1b[93m"),
			blue    : cc("\x1b[94m"),
			magenta : cc("\x1b[95m"),
			cyan    : cc("\x1b[96m"),
			white   : cc("\x1b[97m"),
			peach   : cc("\x1b[38;5;203m"),
			pink    : cc("\x1b[38;5;205m"),
			orange  : cc("\x1b[38;5;208m"),
			violet  : cc("\x1b[38;5;93m")
		}
	};
	/* eslint-enable unicorn/escape-case, unicorn/no-hex-escape */

	// This will convert the above exports.c so you can call XU.cf.fg.cyan("Cyan Color")
	exports.cf = {};
	function functionizeColors(src, dest)
	{
		Object.forEach(src, (key, val) =>
		{
			if(Object.isObject(val))
				functionizeColors(val, dest[key] = {});	// eslint-disable-line sonarjs/no-nested-assignment
			else
				dest[key] = str => `${src[key]}${str}`;
		});
	}
	functionizeColors(exports.c, exports.cf);

	// Allows you to easily include multi-line strings and each line will be trimmed
	exports.trim = function trim(strs, ...vals)
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

		return r.join("");
	};

	// Better than console.log() automatically colorizes strings, numbers, arrays, etc that are includeed as template values
	exports.log = function log(strs, ...vals)
	{
		const c = exports.c;

		function colorize(val, defaultColor=c.reset)
		{
			// If it already includes color ANSI escape sequences, just return the val as is
			if(val.includes("\x1b["))	// eslint-disable-line unicorn/escape-case, unicorn/no-hex-escape
				return val;

			return val.replace(/([+!@#&_()[\]%${}:/,.'"|\\=*^`~;?-])/g, `${c.reset}${c.fg.cyan}$1${defaultColor}`);
		}

		function val2string(val)
		{
			if(typeof val==="string")
				return c.fg.magenta + colorize(val, c.fg.magenta) + c.reset;

			if(typeof val==="number")
				return c.fg.white + val.toLocaleString().split(",").join(`${c.reset + c.fg.cyan},${c.fg.white}`).split(".").join(`${c.reset + c.fg.cyan}.${c.fg.white}`) + c.reset;

			if(typeof val==="boolean")
				return c.fg.yellow + (val ? "true" : "false") + c.reset;

			if(val instanceof Error)
				return util ? util.inspect(val, {colors : true, depth : Infinity}) : (`\n${val.stack}`);

			if(val instanceof RegExp)
				return val.toString();

			if(Array.isArray(val))
				return `${c.fg.cyan}[${c.reset}${val.map(val2string).join(`${c.fg.cyan}, ${c.reset}`)}${c.fg.cyan}]${c.reset}`;

			if(Object.isObject(val))
				return `${c.fg.cyan}{${c.reset}${Object.entries(val).map(([k, v]) => (`${k + c.fg.cyan} : ${c.reset}${val2string(v)}`)).join(", ")}${c.fg.cyan}}${c.reset}`;

			return JSON.stringify(val);
		}

		const r = [];
		strs.forEach(str =>
		{
			r.push(colorize(str));

			if(vals.length>0)
				r.push(val2string(vals.shift()));
		});

		console.log(r.join(""));
	};

	exports.parseJSON = function parseJSON(raw, defaultValue)
	{
		try
		{
			return JSON.parse(raw);
		}
		catch
		{
			return defaultValue;
		}
	};
})(typeof window!=="undefined" ? (window.XU ? window.XU : window.XU={}) : exports);	// eslint-disable-line unicorn/prefer-logical-operator-over-ternary, sonarjs/no-nested-assignment
