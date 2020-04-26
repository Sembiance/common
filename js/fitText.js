"use strict";

/* Need this in your .styl:

.sizer
	position absolute
	left -2000px
	top -2000px

*/

(function _fitText()
{
	function fitText(text, dim, wrap=false, classNames=[])
	{
		if(!text)
			throw new Error("No text from FitText call!");

		const sizer = document.createElement("span");
		sizer.classList.add("sizer");
		if(wrap)
			sizer.style.width = dim[0] + "px";

		classNames.forEach(className => sizer.classList.add(className));

		sizer.appendChild(document.createTextNode(text));
		document.body.appendChild(sizer);

		const stepSize = Math.max(1, Math.min(Math.floor(dim[1]*0.20), 6));

		let fontSize = getFontSize(sizer, dim, 1, stepSize);
		fontSize = getFontSize(sizer, dim, fontSize, 1);
		sizer.style.fontSize = fontSize + "px";

		let lineHeight = getLineHeight(sizer, dim, 1, stepSize);
		lineHeight = getLineHeight(sizer, dim, lineHeight, 1);

		document.body.removeChild(sizer);

		if(wrap)
		{
			const longestWord = text.split(" ").sort((a, b) => b.length-a.length)[0];
			const noWrapResult = fitText(longestWord, dim, false, classNames);
			if(noWrapResult.fontSize<fontSize)
				fontSize = noWrapResult.fontSize;	// eslint-disable-line prefer-destructuring
		}

		return { lineHeight, fontSize };
	}

	function getFontSize(sizer, dim, _fontSize, stepSize)
	{
		let fontSize = _fontSize;
		sizer.style.fontSize = fontSize + "px";

		let sizerDim = [sizer.getWidth(), sizer.getHeight()];

		while(sizerDim[1]<=dim[1] && sizerDim[0]<=dim[0])
		{
			fontSize += stepSize;
			sizer.style.fontSize = fontSize + "px";
			sizerDim = [sizer.getWidth(), sizer.getHeight()];
		}

		return fontSize-stepSize;
	}

	function getLineHeight(sizer, dim, _lineHeight, stepSize)
	{
		let lineHeight = _lineHeight;
		sizer.style.lineHeight = lineHeight + "px";

		let sizerDim = [sizer.getWidth(), sizer.getHeight()];

		while(sizerDim[1]<=dim[1] && sizerDim[0]<=dim[0])
		{
			lineHeight += stepSize;
			sizer.style.lineHeight = lineHeight + "px";
			sizerDim = [sizer.getWidth(), sizer.getHeight()];
		}

		return lineHeight-stepSize;
	}

	window.fitText = fitText;
})();
