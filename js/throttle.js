"use strict";

(function(exports)
{
	function throttle(f, minInterval)
	{
		var lastCalled = 0;

		var throttler = function()
		{
			if((Date.now()-lastCalled)<minInterval)
				return;

			lastCalled = Date.now();

			return f.apply(f, Array.toArray(arguments));
		};

		return throttler;
	}
	exports.throttle = throttle;
})(typeof exports==="undefined" ? window : exports);
