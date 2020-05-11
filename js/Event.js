"use strict";

// polyfill IE8: addEventListener/removeEventListener
if(typeof window.addEventListener==="undefined" && typeof window.attachEvent!=="undefined")
{
	window.addEventListener = Element.prototype.addEventListener = document.addEventListener = function addEventListener(e, callback) { return this.attachEvent("on" + e, callback); };
	window.removeEventListener = Element.prototype.removeEventListener = document.removeEventListener = function removeEventListener(e, callback) { return this.detachEvent("on" + e, callback); };
}

// polyfill IE9: CustomEvent constructor support
if(typeof window.CustomEvent!=="function")
{
	(function _CustomEvent()
	{
		function CustomEvent(event, params)
		{
			params = params || { bubbles : false, cancelable : false, detail : undefined };		// eslint-disable-line no-param-reassign
			const evt = document.createEvent("CustomEvent");
			evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
			return evt;
		}

		CustomEvent.prototype = window.Event.prototype;

		window.CustomEvent = CustomEvent;
	})();
}

if(!Event.prototype.preventDefault)
	Event.prototype.preventDefault = function preventDefault() { this.returnValue=false; };

if(!Event.prototype.stopPropagation)
	Event.prototype.stopPropagation = function stopPropagation() { this.cancelBubble=true; };

if(!Event.prototype.stopImmediatePropagation)
{
	(function _stopImmediatePropagation()
	{
		const oldAddEventListener = Element.prototype.addEventListener;
		const oldRemoveEventListener = Element.prototype.removeEventListener;

		Element.prototype.addEventListener = function addEventListener(type, cb, capture)
		{
			oldAddEventListener.call(this, type, cb.hijackedCallback || (cb.hijackedCallback = function hijackedCallback(event)
			{
				if(!event.immediatePropagationStopped)
					cb(event);	// eslint-disable-line node/callback-return
			}), capture);
		};

		Element.prototype.removeEventListener = function removeEventListener(type, cb, capture)
		{
			oldRemoveEventListener.call(this, type, cb.hijackedCallback || cb, capture);
		};
	})();

	Event.prototype.stopImmediatePropagation = function stopImmediatePropagation()
	{
		this.immediatePropagationStopped = true;
		this.stopPropagation();
	};
}
