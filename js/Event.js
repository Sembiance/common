"use strict";
/*global Element: true*/

// polyfill IE8: addEventListener/removeEventListener
if(typeof window.addEventListener==="undefined" && typeof window.attachEvent!=="undefined")
{
	window.addEventListener = Element.prototype.addEventListener = document.addEventListener = function(e, callback) { return this.attachEvent("on" + e, callback); };
	window.removeEventListener = Element.prototype.removeEventListener = document.removeEventListener = function(e, callback) { return this.detachEvent("on" + e, callback); };
}

// polyfill IE9: CustomEvent constructor support
if(typeof window.CustomEvent!=="function")
{
	(function ()
	{
		function CustomEvent(event, params)
		{
			params = params || { bubbles: false, cancelable: false, detail: undefined };
			var evt = document.createEvent("CustomEvent");
			evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
			return evt;
		}

		CustomEvent.prototype = window.Event.prototype;

		window.CustomEvent = CustomEvent;
	})();
}

if(!Event.prototype.preventDefault)
	Event.prototype.preventDefault = function() { this.returnValue=false; };

if(!Event.prototype.stopPropagation)
	Event.prototype.stopPropagation = function() { this.cancelBubble=true; };

if(!Event.prototype.stopImmediatePropagation)
{
	(function()
	{
		var addEventListener = Element.prototype.addEventListener, removeEventListener = Element.prototype.removeEventListener;

		Element.prototype.addEventListener = function(type, callback, capture)
		{
			addEventListener.call(this, type, callback.hijackedCallback || (callback.hijackedCallback = function(event)
			{
				if(!event.immediatePropagationStopped)
					callback(event);
			}), capture);
		};

		Element.prototype.removeEventListener = function(type, callback, capture)
		{
			removeEventListener.call(this, type, callback.hijackedCallback || callback, capture);
		};
	}());

	Event.prototype.stopImmediatePropagation = function()
	{
		this.immediatePropagationStopped = true;
		this.stopPropagation();
	};
}
