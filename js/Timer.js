"use strict";

(function _(exports)
{
	const Timer = function(_duration)
	{
		this.duration = _duration;
		this.finished = false;

		Timer.prototype.start = function start(_cb)
		{
			if(this.finished)
				return;
				
			this.cb = _cb;
			this.started = true;
			this.paused = false;

			if(this.duration<=0)
				return this.finishedHandler();
				
			this.startAt = Date.now();
			this.endAt = this.startAt+this.duration;
			this.timeout = setTimeout(this.finishedHandler.bind(this), this.duration);
		};

		Timer.prototype.finishedHandler = function finishedHandler()
		{
			this.finished = true;
			this.cb();
		};

		Timer.prototype.stop = function stop()
		{
			if(!this.finished)
				clearTimeout(this.timeout);
		};

		Timer.prototype.pause = function pause()
		{
			if(this.paused || this.finished || !this.started)
				return;

			this.paused = true;
			this.stop();
			this.duration = this.getTimeLeft();
		};

		Timer.prototype.resume = function resume()
		{
			if(this.paused && !this.finished)
				this.start(this.cb);
		};

		Timer.prototype.getTimeLeft = function getTimeLeft()
		{
			return this.endAt-Date.now();
		};

		Timer.prototype.isRunning = function isRunning()
		{
			return this.started && !this.paused && !this.finished;
		};
	};

	exports.Timer = Timer;
})(typeof exports==="undefined" ? window : exports);
