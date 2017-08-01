"use strict";
/*global TextRectangle, Element, NodeList: true*/

// Adds several helper methods to the built in DOM elements
if(typeof Element!=="undefined")
{
	Element.prototype.getComputedStyle = function()
	{
		return window.getComputedStyle(this);
	};

	Element.prototype.getXY = function()
	{
		var r=this.getBoundingClientRect();
		return [r.left, r.top];
	};

	Element.prototype.clear = function()
	{
		while(this.firstChild)
		{
			this.removeChild(this.firstChild);
		}
	};
}

if(typeof NodeList!=="undefined")
{
	NodeList.prototype.toArray = function()
	{
		var a=[];
		for(var i=0;i<this.length;i++)
		{
			a.push(this[i]);
		}
		return a;
	};
}

// Adds width/height properties to getBoundingClientRect for IE8
if("TextRectangle" in window && !("width" in TextRectangle.prototype))
	Object.defineProperties(TextRectangle.prototype, { "width": { get: function() { return this.right - this.left; } }, "height": { get: function() { return this.bottom - this.top; } } });
