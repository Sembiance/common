"use strict";
/*global YUI: true*/

YUI.add("yui-node-extensions", function(Y)
{
	//-------------------------------------------------------------------------
	// Yahoo Module extensions and modifications
	//-------------------------------------------------------------------------
	var BROWSER_STYLE_PREFIX = (Y.UA.webkit ? "Webkit" : (Y.UA.gecko ? "Moz" : (Y.UA.opera ? "O" : (Y.UA.ie ? "ms" : ""))));

	Y.Node.prototype.getHeight = function()
	{
		return this.get("offsetHeight");
	};

	Y.Node.prototype.getWidth = function()
	{
		return this.get("offsetWidth");
	};

	Y.Node.prototype.getContentWidth = function()
	{
		var width = this.getWidth();
		width -= (this.getComputedStyleAsNumber("paddingLeft") + this.getComputedStyleAsNumber("paddingRight"));
		width -= (this.getComputedStyleAsNumber("borderLeftWidth") + this.getComputedStyleAsNumber("borderRightWidth"));
		return width;
	};

	Y.Node.prototype.getContentHeight = function()
	{
		var height = this.getHeight();
		height -= (this.getComputedStyleAsNumber("paddingTop") + this.getComputedStyleAsNumber("paddingBottom"));
		height -= (this.getComputedStyleAsNumber("borderTopWidth") + this.getComputedStyleAsNumber("borderBottomWidth"));
		return height;
	};

	Y.Node.prototype.getContentPoly = function()
	{
		var padding = ["Top", "Right", "Bottom", "Left"].map(function(s) { return this.getComputedStyleAsNumber("padding" + s); }.bind(this));
		var width = this.getWidth();
		var height = this.getHeight();

		return [padding[3], padding[0],
				width-padding[1], padding[0],
				width-padding[1], height-padding[2],
				padding[3], height-padding[2]];
	};

	function styleToNumber(style, regex, matchNum)
	{
		if(!style)
			return 0;

		style = "" + style;

		if(!regex)
		{
			regex = /([0-9.-]+)(em|ex|px|ch|in|cm|mm|pt|pc|%)?/;
			matchNum = 1;
		}
		
		var matches = style.match(regex);
		if(matches && matches.length>=(matchNum+1))
			return +matches[matchNum];

		return 0;
	}

	Y.Node.prototype.getStyleAsNumber = function(styleName, regex, matchNum)
	{
		return styleToNumber(this.getStyle(styleName), regex, matchNum);
	};

	Y.Node.prototype.getComputedStyleAsNumber = function(styleName, regex, matchNum)
	{
		return styleToNumber(this.getComputedStyle(styleName), regex, matchNum);
	};

	Y.Node.prototype.setRotateStyle = function(angle, origin)
	{
		var isBadVersionOfSafari = (Y.UA.safari && Y.UA.safari<535);	// Strange bug where I have to rotate in anonymous function callback in order to prevent the card from disappearing in Safari 5.1 or earlier

		if(typeof angle!=="undefined" && angle!==null)
		{
			this.setData("rotation-angle", angle);
			if(isBadVersionOfSafari)
			{
				setTimeout(function()
				{
					this.setStyle(BROWSER_STYLE_PREFIX + "Transform", "rotate(" + angle + "deg)");
					//this.setStyle("transform", "rotate(" + angle + "deg)");
				}.bind(this), 0);
			}
			else
			{
				this.setStyle(BROWSER_STYLE_PREFIX + "Transform", "rotate(" + angle + "deg)");
				//this.setStyle("transform", "rotate(" + angle + "deg)");
			}
		}

		if(typeof origin!=="undefined" && origin!==null && origin && origin.length===2)
		{
			this.setData("rotation-origin", origin);
			if(isBadVersionOfSafari)
			{
				setTimeout(function()
				{
					this.setStyle(BROWSER_STYLE_PREFIX + "TransformOrigin", origin[0] + "px " + origin[1] + "px");
					//this.setStyle("transformOrigin", origin[0] + "px " + origin[1] + "px");
				}.bind(this), 0);
			}
			else
			{
				this.setStyle(BROWSER_STYLE_PREFIX + "TransformOrigin", origin[0] + "px " + origin[1] + "px");
				//this.setStyle("transformOrigin", origin[0] + "px " + origin[1] + "px");
			}
		}

		return this;
	};

	Y.Node.prototype.setBorderRadiusStyle = function(value)
	{
		this.setStyle(BROWSER_STYLE_PREFIX + "BorderRadius", value);
		this.setStyle("borderRadius", value);
	};

	Y.Node.prototype.getRotation = function()
	{
		return this.getData("rotation-angle") || 0;
		//return this.getStyleAsNumber(BROWSER_STYLE_PREFIX + "Transform", /rotate\(([0-9.-]+)deg\)/, 1);
	};

	Y.Node.prototype.getRotationOrigin = function()
	{
		return this.getData("rotation-origin");
		//return [this.getStyleAsNumber(BROWSER_STYLE_PREFIX + "TransformOrigin", /([0-9.-]+)px [0-9.-]+px/, 1),
		//		this.getStyleAsNumber(BROWSER_STYLE_PREFIX + "TransformOrigin", /[0-9.-]+px ([0-9.-]+)px/, 1)];
	};

	Y.Node.prototype.setZIndex = function(zIndex)
	{
		this.setData("zIndex", zIndex);
		this.setStyle("zIndex", zIndex);
	};

	Y.Node.prototype.getZIndex = function()
	{
		var zIndex = this.getData("zIndex");
		if(zIndex===null || typeof zIndex==="undefined")
		{
			zIndex = this.getStyleAsNumber("zIndex");
			if(zIndex)
				this.setData("zIndex", zIndex);
		}

		return zIndex;
	};

	function cleanupColor(color)
	{
		if(color.startsWith("#"))
			color = color.substring(1);

		return color.toLowerCase();
	}

	Y.Node.prototype.getBorderColor = function()
	{
		return cleanupColor(this.getStyle("borderColor"));
	};

	Y.Node.prototype.getBackgroundColor = function()
	{
		return cleanupColor(this.getStyle("backgroundColor"));
	};

	Y.Node.prototype.centerX = function()
	{
		this.setStyle("left", Math.floor(((this.get("parentNode").getWidth()-this.getWidth())/2)) + "px");
	};

	Y.Node.prototype.centerY = function()
	{
		this.setStyle("top", Math.floor(((this.get("parentNode").getHeight()-this.getHeight())/2)) + "px");
	};

	Y.Node.prototype.containsPoint = function(x, y)
	{
		if(this.getRotation())
			return document.elementFromPoint(x, y)===this._node;	// HUGE HACK just for world of card games

		var nodeXY = this.getXY();
		if(!nodeXY)
			return false;
		
		var nodeX = nodeXY[0];
		var nodeY = nodeXY[1];

		if(x<nodeX)
			return false;

		if(y<nodeY)
			return false;

		if(x>(nodeX+this.getWidth()))
			return false;

		if(y>(nodeY+this.getHeight()))
			return false;

		return true;


		//return !(x<nodeXY[0] || y<nodeXY[1] || x>(nodeXY[0]+this.getWidth()) || y>(nodeXY[1]+this.getHeight()));
	};

	YUI.prototype.getAll = function(selector)
	{
		return Y.all(selector).toArray();
	};

	Y.Node.prototype.getAll = function(selector)
	{
		return this.all(selector).toArray();
	};

	Y.NodeList.prototype.toArray = function()
	{
		return this._nodes.map(function(dom) { return Y.one(dom); });
	};
}, "1.0", { requires : ["node", "dom", "anim"] });
