"use strict";
/* global AudioContext: true */

if(typeof window.performance==="undefined")
	window.performance = {};

if(typeof window.performance.now==="undefined")
{
	(function _()
	{
		const startTime = Date.now();
		let ac = null;
		let offset = 0;
		let seen = 0;
		if(typeof AudioContext!=="undefined" || typeof webkitAudioContext!=="undefined")
		{
			const AC = window.AudioContext || window.webkitAudioContext;
			ac = new AC();
			ac.createGainNode();
			if(ac.createGain)
				ac.createGain();
			if(ac.createOscillator)
				ac.createOscillator();
			setTimeout(() =>
			{
				// In Mobile safari for example, currentTime won't increase until a sound is played in response to a user action
				// Since we are not willing to do that, we just detect that currentTime is stuck at zero and fall back to date.now()
				if(ac.currentTime===0)
					ac = null;
			}, 1200);
		}

		window.performance.now = function now()
		{
			if(ac)
				return ac.currentTime;

			const t = (Date.now()-startTime);
			if(t<seen)
				offset += (seen-t);
			seen = t;

			return t+offset;
		};
	})();
}
