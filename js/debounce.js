"use strict";

// COPIED AND MODIFIED FROM: https://github.com/component/debounce/blob/master/index.js

(function _debounce(exports)
{
	/**
	 * Returns a function, that, as long as it continues to be invoked, will not
	 * be triggered. The function will be called after it stops being called for
	 * N milliseconds. If `immediate` is passed, trigger the function on the
	 * leading edge, instead of the trailing. The function also has a property 'clear'
	 * that is a function which will clear the timer to prevent previously scheduled executions.
	 *
	 * @source underscore.js
	 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
	 * @param {Function} function to wrap
	 * @param {Number} timeout in ms (`100`)
	 * @param {Boolean} whether to execute at the beginning (`false`)
	 * @api public
	 */
	function debounce(func, wait=100, immediate=false)
	{
		let timeoutid = null;
		let args = null;
		let context = null;
		let timestamp = null;
		let result = null;

		function later()
		{
			const last = Date.now()-timestamp;
			if(last<wait && last>=0)
			{
				timeoutid = setTimeout(later, wait-last);
			}
			else
			{
				timeoutid = null;
				if(!immediate)
				{
					result = func.apply(context, args);
					context = args = null;
				}
			}
		}

		const debounced = function()
		{
			context = this;	// eslint-disable-line consistent-this
			args = arguments;	// eslint-disable-line prefer-rest-params
			timestamp = Date.now();
			const callNow = immediate && !timeoutid;

			if(!timeoutid)
				timeoutid = setTimeout(later, wait);

			if(callNow)
			{
				result = func.apply(context, args);
				context = args = null;
			}

			return result;
		};

		debounced.clear = function clear()
		{
			if(timeoutid)
			{
				clearTimeout(timeoutid);
				timeoutid = null;
			}
		};

		debounced.flush = function flush()
		{
			if(timeoutid)
			{
				result = func.apply(context, args);
				context = args = null;

				clearTimeout(timeoutid);
				timeoutid = null;
			}
		};

		return debounced;
	}

	exports.debounce = debounce;
})(typeof exports==="undefined" ? window : exports);
