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
	exports.MONTH = base.DAY*30;
	exports.YEAR = base.DAY*365;
	exports.STARTUP_TIME = Date.now();

	exports.BYTE = 1;
	exports.KB = base.BYTE*1024;
	exports.MB = base.KB*1024;
	exports.GB = base.MB*1024;
	exports.TB = base.GB*1024;
	exports.PB = base.TB*1024;

	function clone(src, deep)
	{
		var result = src;
		if(Array.isArray(src))
		{
			result = [];
			for(var i=0,len=src.length;i<len;i++)
			{
				if(deep)
					result.push(clone(src[i]));
				else
					result.push(src[i]);
			}
		}
		else if(Object.isObject(src))
		{
			result = {};
			Object.forEach(src, function(key, val)
			{
				if(deep)
					result[key] = clone(val, deep);
				else
					result[key] = val;
			});
		}
		
		return result;
	}
	exports.clone = clone;

	function CBIterator(_a, _fun)
	{
		this.a = clone(_a);
		this.fun = _fun;
		this.results = null;
		this.i=0;

		CBIterator.prototype.go = function(cb)
		{
			this.cb = cb || function(){};
			this.next();
		};

		CBIterator.prototype.next = function(err, result)
		{
			if(this.results===null)
				this.results = [];
			else
				this.results.push(result);

			if(err)
				return this.cb(err, this.results);

			if(!this.a.length)
				return this.cb(undefined, this.results);

			this.fun(this.a.shift(), this.next.bind(this), this.i++);
		};
	}

	if(!Array.prototype.serialForEach)
	{
		Array.prototype.serialForEach = function(fun, cb)
		{
			(new CBIterator(this, fun)).go(cb);
		};
	}

	if(!Array.prototype.pushMany)
	{
		Array.prototype.pushMany = function(val, count)
		{
			while((count--)>0)
			{
				this.push(clone(val, true));
			}

			return this;
		};
	}

	Object.forEach({log : ["debug", "info", "log"], warn : ["warn"], error : ["error", "critical", "crit"]}, function(consoleKey, synonyms)
	{
		synonyms.forEach(function(synonym) { exports[synonym] = base.IS_NODE ? console[consoleKey].bind(console) : (window.console[consoleKey].bind ? window.console[consoleKey].bind(window.console) : window.cosnole[consoleKey]); });
	});
})(typeof exports==="undefined" ? window.base={} : exports);
