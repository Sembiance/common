"use strict";

(function _throttle(exports)
{
	function throttle(f, minInterval, reSendLastEvent=false)
	{
		let lastCalled = 0;
		let lastEventTimeout = null;

		const throttler = function(...args)
		{
			const timePassed = (Date.now()-lastCalled);
			if(timePassed<minInterval)
			{
				if(reSendLastEvent)
					scheduleNextThrottle(args, (minInterval-timePassed)+1);	// eslint-disable-line no-use-before-define
				return;
			}

			if(lastEventTimeout)
			{
				clearTimeout(lastEventTimeout);
				lastEventTimeout = null;
			}

			lastCalled = Date.now();

			return f.apply(f, args);
		};

		function scheduleNextThrottle(lastArgs, waitDuration)
		{
			if(lastEventTimeout)
				clearTimeout(lastEventTimeout);
			lastEventTimeout = setTimeout(() => { lastEventTimeout = null; throttler.apply(throttler, lastArgs); }, waitDuration);
		}

		return throttler;
	}

	exports.throttle = throttle;
})(typeof exports==="undefined" ? window : exports);
