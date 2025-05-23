"use strict";
/* eslint-disable logical-assignment-operators, n/no-unsupported-features/node-builtins */

////////////////////
//// Polyfills /////
////////////////////

//------------//
//// ES2015 ////
//------------//

// Drops anything after the decimal. Similar to Math.floor but doesn't matter for negatives
if(!Math.trunc)
{
	Math.trunc = function trunc(x)
	{
		x = +x;
		return (x-(x%1)) || (!isFinite(x) || x===0 ? x : (x<0 ? -0 : 0));
	};
}

////////////////
//// Custom ////
////////////////

// Returns a truly random number, taking advantage of window.crypto if available
if(!Math.trueRandom)
{
	Math.trueRandom = function trueRandom()
	{
		let result = Math.random();
		
		try
		{
			if(window && window.chrome && window.crypto && window.crypto.getRandomValues)
				result = window.crypto.getRandomValues(new Uint32Array(1))[0] / 0x1_00_00_00_00;
		}
		catch
		{
			result = Math.random();
		}

		return result;
	};
}

// Returns a random integer between min and max inclusive. Optional array of numbers to exclude
if(!Math.randomInt)
{
	Math.randomInt = function randomInt(min, max, _excluding)
	{
		if(!_excluding || !Array.isArray(_excluding) || _excluding.length===0)
			return Math.floor(Math.trueRandom() * (max - min + 1)) + min;
		
		const excluding = Array.force(_excluding).map(i => Math.trunc(i)).filter(i => (i>=min && i<=max)).unique();
		if(excluding.length===((max-min)+1))
			throw new RangeError("randomIntExcluding called with excluding all nums, no possible return value");
		
		let num;
		do
			num = Math.randomInt(min, max);
		while(excluding.includes(num));

		return num;
	};
}

// Rotates a box of width x height by angleInDegrees (in degrees)
if(!Math.getRotatedDimensions)
{
	Math.getRotatedDimensions = function getRotatedDimensions(angleInDegrees, width, height)
	{
		const angle = angleInDegrees * Math.PI / 180,
			sin = Math.sin(angle),
			cos = Math.cos(angle);
		const x1 = cos * width,
			y1 = sin * width;
		const x2 = -sin * height,
			y2 = cos * height;
		const x3 = (cos * width) - (sin * height),
			y3 = (sin * width) + (cos * height);
		const minX = Math.min(0, x1, x2, x3),
			maxX = Math.max(0, x1, x2, x3),
			minY = Math.min(0, y1, y2, y3),
			maxY = Math.max(0, y1, y2, y3);

		return [Math.floor((maxX - minX)), Math.floor((maxY - minY))];
	};
}

// Converts an angle from degrees to radians
if(!Math.degreesToRadians)
{
	Math.degreesToRadians = function degreesToRadians(degrees)
	{
		return degrees * (Math.PI/180);
	};
}

// Converts an angle from radians to degrees
if(!Math.radiansToDegrees)
{
	Math.radiansToDegrees = function radiansToDegrees(radians)
	{
		return radians * (180/Math.PI);
	};
}

// Rotates a point within a box by the angle (in degrees) and returns the place that point should now be
if(!Math.rotatePointInBox)
{
	Math.rotatePointInBox = function rotatePointInBox(x, y, _angle, width, height)
	{
		const angle = Math.degreesToRadians(_angle);

		const centerX = width / 2.0;
		const centerY = height / 2.0;
		const dx = x - centerX;
		const dy = y - centerY;
		const dist = Math.sqrt((dx * dx) + (dy * dy));	// eslint-disable-line unicorn/prefer-modern-math-apis
		const a = Math.atan2(dy, dx) + angle;
		const dx2 = Math.cos(a) * dist;
		const dy2 = Math.sin(a) * dist;

		return [dx2 + centerX, dy2 + centerY];
	};
}

// Expands or contracts the given w x h box to mw x mh
if(!Math.expandToBounds)
{
	Math.expandToBounds = function expandToBounds(w, h, mw, mh)
	{
		const scale = Math.min((mw/w), (mh/h));
		return [w*scale, h*scale];
	};
}
