"use strict";

(function(exports)
{
	var Timer = function(_duration)
	{
		this.duration = _duration;
		this.finished = false;

		Timer.prototype.start = function(_cb)
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

		Timer.prototype.finishedHandler = function()
		{
			this.finished = true;
			this.cb();
		};

		Timer.prototype.stop = function()
		{
			if(!this.finished)
				clearTimeout(this.timeout);
		};

		Timer.prototype.pause = function()
		{
			if(this.paused || this.finished || !this.started)
				return;

			this.paused = true;
			this.stop();
			this.duration = this.getTimeLeft();
		};

		Timer.prototype.resume = function()
		{
			if(this.paused && !this.finished)
				this.start(this.cb);
		};

		Timer.prototype.getTimeLeft = function()
		{
			return this.endAt-Date.now();
		};

		Timer.prototype.isRunning = function()
		{
			return this.started && !this.paused && !this.finished;
		};
	};

	exports.Timer = Timer;
})(typeof exports==="undefined" ? window : exports);