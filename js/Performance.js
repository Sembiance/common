"use strict";
/*global AudioContext: true*/

if(typeof window.performance==="undefined")
	window.performance = {};

if(typeof window.performance.now==="undefined")
{
	(function()
	{
		var startTime = Date.now();
		var ac = null;
		var offset = 0;
		var seen = 0;
		if(typeof AudioContext!=="undefined" || typeof webkitAudioContext!=="undefined")
		{
			var AC = window.AudioContext || window.webkitAudioContext;
			ac = new AC();
			ac.createGainNode();
			ac.createGain();
			ac.createOscillator();
			setTimeout(function()
			{
				// In Mobile safari for example, currentTime won't increase until a sound is played in response to a user action
				// Since we are not willing to do that, we just detect that currentTime is stuck at zero and fall back to date.now()
				if(ac.currentTime===0)
					ac = null;
			}, 2000);
		}

		window.performance.now = function()
		{
			if(ac)
				return ac.currentTime;

			var t = (Date.now()-startTime);
			if(t<seen)
				offset += (seen-t);
			seen = t;

			return t+offset;
		};
	})();
}
