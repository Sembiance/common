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

	Element.prototype.getWidthHeight = function()
	{
		var r = this.getBoundingClientRect();
		return [r.width, r.height];
	};

	Element.prototype.clear = function()
	{
		while(this.firstChild)
		{
			this.removeChild(this.firstChild);
		}
	};

	Element.prototype.setText = function(text)
	{
		if(!this.childNodes || this.childNodes.length!==1)
		{
			this.clear();
			this.appendChild(document.createTextNode(text));
			return this;
		}

		this.childNodes[0].nodeValue = text;

		return this;
	};

	// Returns the first ancestor that the passed in function returns true to upon receiving it passed in
	Element.prototype.getAncestor = function(f)
	{
		for(var c=this;c;c=c.parentNode)
		{
			if(f(c))
				return c;

			if(c.nodeName.toLowerCase()==="html")
				return null;
		}

		return null;
	};

	// Returns the elements width
	Element.prototype.getWidth = function()
	{
		return this.getBoundingClientRect().width;
	};

	// Returns the elements height
	Element.prototype.getHeight = function()
	{
		return this.getBoundingClientRect().height;
	};

	// Returns the elements computed padding width
	Element.prototype.getPaddingWidth = function()
	{
		var cs = this.getComputedStyle();
		return (parseFloat(cs.paddingLeft)+parseFloat(cs.paddingRight));
	};

	// Returns the elements computed padding height
	Element.prototype.getPaddingHeight = function()
	{
		var cs = this.getComputedStyle();
		return (parseFloat(cs.paddingTop)+parseFloat(cs.paddingBottom));
	};

	// Returns the elements computed margin width
	Element.prototype.getMarginWidth = function()
	{
		var cs = this.getComputedStyle();
		return (parseFloat(cs.marginLeft)+parseFloat(cs.marginRight));
	};

	// Returns the elements computed margin height
	Element.prototype.getMarginHeight = function()
	{
		var cs = this.getComputedStyle();
		return (parseFloat(cs.marginTop)+parseFloat(cs.marginBottom));
	};

	// Disables the element by setting the disabled attribute and class
	Element.prototype.disable = function()
	{
		this.classList.add("disabled");
		this.setAttribute("disabled", "disabled");
	};	

	// Enables the element by removing the disabled attribute and class
	Element.prototype.enable = function()
	{
		this.classList.remove("disabled");
		this.removeAttribute("disabled");
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
