"use strict";

(function _Timer(exports)
{
	class Timer
	{
		constructor(duration)
		{
			this.duration = duration;
			this.finished = false;
		}

		start(_cb)
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
		}

		finishedHandler()
		{
			this.finished = true;
			this.cb();
		}

		stop()
		{
			if(!this.finished)
				clearTimeout(this.timeout);
		}

		pause()
		{
			if(this.paused || this.finished || !this.started)
				return;

			this.paused = true;
			this.stop();
			this.duration = this.getTimeLeft();
		}

		resume()
		{
			if(this.paused && !this.finished)
				this.start(this.cb);
		}

		getTimeLeft()
		{
			return this.endAt-Date.now();
		}

		isRunning()
		{
			return this.started && !this.paused && !this.finished;
		}
	}

	exports.Timer = Timer;
})(typeof exports==="undefined" ? window : exports);	// eslint-disable-line no-undef
