"use strict";
/*global XU: true*/

(function _throttle()
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
					scheduleNextThrottle(args, (minInterval-timePassed)+1);
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

	XU.throttle = throttle;
})();
