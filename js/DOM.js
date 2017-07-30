"use strict";
/*global Element, NodeList: true*/

// Adds several helper methods to the built in DOM elements
if(typeof Element!=="undefined")
{
	Element.prototype.getComputedStyle = function()
	{
		return window.getComputedStyle(this);
	};

	Element.prototype.getXY = function()
	{
		var y = 0, x = 0;
		var element = this;
		do
		{
			y += element.offsetTop || 0;
			x += element.offsetLeft || 0;
			element = element.offsetParent;
		} while(element);

		return [x, y];
	};

	Element.prototype.getX = function()
	{
		return this.getXY()[0];
	};

	Element.prototype.getY = function()
	{
		return this.getXY()[1];
	};

	Element.prototype.clear = function()
	{
		while(this.firstChild)
		{
			this.removeChild(this.firstChild);
		}
	};

	if(typeof Element.prototype.addEventListener==='undefined')
		Element.prototype.addEventListener = function(e, callback) { return this.attachEvent('on' + e, callback); };
}

if(typeof window.addEventListener==='undefined')
	window.addEventListener = function(e, callback) { return this.attachEvent('on' + e, callback); };

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