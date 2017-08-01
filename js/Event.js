"use strict";
/*global Element: true*/

if(typeof Element!=="undefined" && typeof Element.prototype.addEventListener==="undefined")
	Element.prototype.addEventListener = function(e, callback) { return this.attachEvent("on" + e, callback); };
if(typeof Element!=="undefined" && typeof Element.prototype.removeEventListener==="undefined")
	Element.prototype.removeEventListener = function(e, callback) { return this.detachEvent("on" + e, callback); };

if(typeof window.addEventListener==="undefined")
	window.addEventListener = function(e, callback) { return this.attachEvent("on" + e, callback); };
if(typeof window.removeEventListener==="undefined")
	window.removeEventListener = function(e, callback) { return this.detachEvent("on" + e, callback); };

if(typeof document.addEventListener==="undefined")
	document.addEventListener = function(e, callback) { return this.attachEvent("on" + e, callback); };
if(typeof document.removeEventListener==="undefined")
	document.removeEventListener = function(e, callback) { return this.detachEvent("on" + e, callback); };

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
