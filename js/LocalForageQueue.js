"use strict";

(function _LocalForageQueue()
{
	class LocalForageQueue
	{
		constructor(key, interval)
		{
			this.key = key;
			this.interval = interval;
			this.cbQueue = [];
			this.lastGo = 0;
			this.goTimer = null;
		}

		get(cb)
		{
			window.localforage.getItem(this.key, (err, _o={}) => cb(err, _o || {}));
		}

		queue(cb)
		{
			this.cbQueue.push(cb);
			this.scheduleGo();
		}

		go()
		{
			if(this.cbQueue.length===0)
				return;

			window.localforage.getItem(this.key, (err, _o={}) =>
			{
				const o = _o===null ? {} : _o;

				this.cbQueue.splice(0).forEach(cb => cb(o));

				window.localforage.setItem(this.key, o, () =>
				{
					this.lastGo = Date.now();
					this.goTimer = null;

					this.scheduleGo();
				});
			});
		}

		scheduleGo()
		{
			if(this.cbQueue.length>0 && !this.goTimer)
				this.goTimer = setTimeout(this.go.bind(this), Math.max(0, (this.interval-(Date.now()-this.lastGo))));
		}
	}

	window.LocalForageQueue = LocalForageQueue;
})();
