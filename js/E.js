"use strict";
/* global XU: true */

/* Little helper object to make event handling less verbose */

(function _E()
{
	const E =
	{
		dispatch : function dispatch(name, data)
		{
			return window.dispatchEvent(new CustomEvent(name, data!==undefined ? {detail : data} : undefined));
		},

		listen : function listen(name, cb)
		{
			return window.addEventListener(name, cb);
		},

		removeListen : function removeListen(name, cb)
		{
			return window.removeEventListener(name, cb);
		}
	};
	
	XU.E = E;
	XU.freeze(XU.E);
})();
