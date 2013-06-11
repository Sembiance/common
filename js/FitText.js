"use strict";
/*global YUI: true*/

YUI.add("FitText", function(Y)
{
	//-------------------------------------------------------------------------
	// Private variables
	//-------------------------------------------------------------------------

	//-------------------------------------------------------------------------
	// Private functions
	//-------------------------------------------------------------------------
	function fit(text, maxWidth, maxHeight, wrap, classNames)
	{
		if(!text)
			throw new Error("No text from FitText call!");

		var sizer = Y.Node.create("<span>");
		sizer.addClass("sizer");
		if(wrap)
			sizer.setStyle("width", maxWidth + "px");

		(classNames || []).forEach(function(className)
		{
			sizer.addClass(className);
		});

		sizer.appendChild(document.createTextNode(text));

		Y.one(document.body).append(sizer);

		var stepSize = Math.max(1, Math.min(Math.floor(maxHeight*0.20), 6));

		var fontSize = getFontSize(sizer, maxWidth, maxHeight, 1, stepSize);
		fontSize = getFontSize(sizer, maxWidth, maxHeight, fontSize, 1);
		sizer.setStyle("fontSize", fontSize + "px");

		var lineHeight = getLineHeight(sizer, maxWidth, maxHeight, 1, stepSize);
		lineHeight = getLineHeight(sizer, maxWidth, maxHeight, lineHeight, 1);

		sizer.remove(true);

		if(wrap)
		{
			var longestWord = text.split(" ").sort(function(a, b) { return b.length - a.length; })[0];
			var noWrapResult = Y.FitText.fit(longestWord, maxWidth, maxHeight, false, classNames);
			if(noWrapResult.fontSize<fontSize)
				fontSize = noWrapResult.fontSize;
		}

		return { lineHeight : lineHeight, fontSize : fontSize };
	}

	function getFontSize(sizer, maxWidth, maxHeight, fontSize, stepSize)
	{
		sizer.setStyle("fontSize", fontSize + "px");

		var sizerHeight = sizer.getHeight();
		var sizerWidth = sizer.getWidth();

		while(sizerHeight<=maxHeight && sizerWidth<=maxWidth)
		{
			fontSize += stepSize;
			sizer.setStyle("fontSize", fontSize + "px");
			sizerHeight = sizer.getHeight();
			sizerWidth = sizer.getWidth();
		}

		return fontSize-stepSize;
	}

	function getLineHeight(sizer, maxWidth, maxHeight, lineHeight, stepSize)
	{
		sizer.setStyle("lineHeight", lineHeight + "px");

		var sizerHeight = sizer.getHeight();
		var sizerWidth = sizer.getWidth();

		while(sizerHeight<=maxHeight && sizerWidth<=maxWidth)
		{
			lineHeight += stepSize;
			sizer.setStyle("lineHeight", lineHeight + "px");
			sizerHeight = sizer.getHeight();
			sizerWidth = sizer.getWidth();
		}

		return lineHeight-stepSize;
	}

	//-------------------------------------------------------------------------
	// Public interface
	//-------------------------------------------------------------------------
	Y.FitText =
	{
		fit : fit
	};
}, "1.0", { requires : [ ]});
