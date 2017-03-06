"use strict";
/*global window: true*/

(function(exports)
{
	var base = exports;

	exports.IS_NODE = typeof process!=="undefined" && typeof process.versions!=="undefined" && typeof process.versions.node!=="undefined";
	if(base.IS_NODE)
	{
		require("./Math");
		require("./Array");
		require("./String");
		require("./Object");
		require("./Date");
		require("./Function");
		require("./Number");

		exports.IS_DEV = !process.argv.contains("--staging") && !process.argv.contains("--production");
		exports.IS_STAGING = !!process.argv.contains("--staging");
	}
	else
	{
		exports.IS_DEV = window.location.hostname.startsWith("dev.") || window.location.href.contains("dev=true");
	}

	exports.SECOND = 1000;
	exports.MINUTE = base.SECOND*60;
	exports.HOUR = base.MINUTE*60;
	exports.DAY = base.HOUR*24;
	exports.WEEK = base.DAY*7;
	exports.MONTH = base.DAY*30.4375;
	exports.YEAR = base.DAY*365.25;
	exports.STARTUP_TIME = Date.now();

	exports.BYTE = 1;
	exports.KB = base.BYTE*1024;
	exports.MB = base.KB*1024;
	exports.GB = base.MB*1024;
	exports.TB = base.GB*1024;
	exports.PB = base.TB*1024;

	exports.clone = function(src, deep)
	{
		return (Array.isArray(src) ? src.clone(deep) : (Object.isObject(src) ? Object.clone(src, deep) : src));
	};

	Object.forEach({log : ["debug", "info", "log"], warn : ["warn"], error : ["error", "critical", "crit"]}, function(consoleKey, synonyms)
	{
		synonyms.forEach(function(synonym) { exports[synonym] = base.IS_NODE ? console[consoleKey].bind(console) : (window.console[consoleKey].bind ? window.console[consoleKey].bind(window.console) : window.console[consoleKey]); });
	});

	if(base.IS_NODE)
	{
		exports.error = function()
		{			
			if(arguments.length===1 && arguments[0] && arguments[0].hasOwnProperty("stack"))
				console.error(arguments[0].stack);
			else
				console.error.apply(console.error, arguments);

			return 1;
		};
	}
})(typeof exports==="undefined" ? window.base={} : exports);
