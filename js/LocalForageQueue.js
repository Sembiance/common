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

		// Calls the cb with the object for this key
		get(cb)
		{
			window.localforage.getItem(this.key, (err, _o={}) =>
			{
				if(err)
					throw err;

				cb(_o || {});
			});
		}

		// Calls the cb when the object is ready to be written to
		queue(cb, finalcb=null)
		{
			this.cbQueue.push({ cb, finalcb });
			this.scheduleGo();
		}

		go()
		{
			if(this.cbQueue.length===0)
				return;

			window.localforage.getItem(this.key, (err, _o={}) =>
			{
				if(err)
					throw err;

				const o = _o===null ? {} : _o;

				const cbos = this.cbQueue.splice(0);
				cbos.forEach(cbo => cbo.cb(o));

				window.localforage.setItem(this.key, o, () =>
				{
					this.lastGo = Date.now();
					this.goTimer = null;

					this.scheduleGo();

					cbos.forEach(cbo => (cbo.finalcb ? cbo.finalcb() : undefined));
				});
			});
		}

		scheduleGo()
		{
			if(this.cbQueue.length>0 && !this.goTimer)
				this.goTimer = setTimeout(this.go.bind(this), Math.max(0, (this.interval-(Date.now()-this.lastGo))));
		}

		// Removes the key from localforage and then calls the cb
		static clear(key, cb)
		{
			window.localforage.removeItem(key, cb);
		}
	}

	window.XU = window.XU || {};
	window.XU.LocalForageQueue = LocalForageQueue;
})();
