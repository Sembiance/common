"use strict";
/*global localforage: true*/

(function(exports)
{
	var LocalForageQueue = function(_key, _interval)
	{
		this.key = _key;
		this.interval = _interval;
		this.cbQueue = [];
		this.lastGo = 0;
		this.goTimer = null;

		LocalForageQueue.prototype.get = function(cb)
		{
			localforage.getItem(this.key, cb);
		};

		LocalForageQueue.prototype.queue = function(cb)
		{
			this.cbQueue.push(cb);
			this.scheduleGo();
		};

		LocalForageQueue.prototype.go = function()
		{
			if(this.cbQueue.length===0)
				return;

			localforage.getItem(this.key, function(err, o)
			{
				if(!o)
					o = {};

				this.cbQueue.splice(0).forEach(function(cb) { cb(o); });

				localforage.setItem(this.key, o, function(err)
				{
					this.lastGo = Date.now();
					this.goTimer = null;

					this.scheduleGo();
				}.bind(this));
			}.bind(this));
		};

		LocalForageQueue.prototype.scheduleGo = function()
		{
			if(this.cbQueue.length>0 && !this.goTimer)
				this.goTimer = setTimeout(this.go.bind(this), Math.max(0, (this.interval-(Date.now()-this.lastGo))));
		};
	};

	exports.LocalForageQueue = LocalForageQueue;
})(typeof exports==="undefined" ? window : exports);
