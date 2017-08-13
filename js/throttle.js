"use strict";

(function(exports)
{
	function throttle(f, minInterval, reSendLastEvent)
	{
		var lastCalled = 0;
		var lastEventTimeout = null;

		var throttler = function()
		{
			var timePassed = (Date.now()-lastCalled);
			if(timePassed<minInterval)
			{
				if(reSendLastEvent)
					scheduleNextThrottle(Array.prototype.slice.call(arguments), (minInterval-timePassed)+1);
				return;
			}

			if(lastEventTimeout)
			{
				clearTimeout(lastEventTimeout);
				lastEventTimeout = null;
			}

			lastCalled = Date.now();

			return f.apply(f, Array.toArray(arguments));
		};

		function scheduleNextThrottle(lastArgs, waitDuration)
		{
			if(lastEventTimeout)
				clearTimeout(lastEventTimeout);
			lastEventTimeout = setTimeout(function() { lastEventTimeout = null; throttler.apply(throttler, lastArgs); }, waitDuration);
		}

		return throttler;
	}
	exports.throttle = throttle;
})(typeof exports==="undefined" ? window : exports);
