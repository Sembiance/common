"use strict";

const LocalForageQueue = function(_key, _interval)
{
	this.key = _key;
	this.interval = _interval;
	this.cbQueue = [];
	this.lastGo = 0;
	this.goTimer = null;

	LocalForageQueue.prototype.get = function get(cb)
	{
		window.localforage.getItem(this.key, cb);
	};

	LocalForageQueue.prototype.queue = function queue(cb)
	{
		this.cbQueue.push(cb);
		this.scheduleGo();
	};

	LocalForageQueue.prototype.go = function go()
	{
		if(this.cbQueue.length===0)
			return;

		window.localforage.getItem(this.key, (err, o={}) =>
		{
			this.cbQueue.splice(0).forEach(cb => cb(o));

			window.localforage.setItem(this.key, o, () =>
			{
				this.lastGo = Date.now();
				this.goTimer = null;

				this.scheduleGo();
			});
		});
	};

	LocalForageQueue.prototype.scheduleGo = function scheduleGo()
	{
		if(this.cbQueue.length>0 && !this.goTimer)
			this.goTimer = setTimeout(this.go.bind(this), Math.max(0, (this.interval-(Date.now()-this.lastGo))));
	};
};
