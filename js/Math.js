"use strict";

if(!Math.trueRandom)
{
	Math.trueRandom = function()
	{
		var result = Math.random();
		
		try
		{
			if(window && window.chrome && window.crypto && window.crypto.getRandomValues)
				result = window.crypto.getRandomValues(new Uint32Array(1))[0] / 0x100000000;
		}
		catch(err)
		{
			result = Math.random();
		}

		return result;
	};
}

if(!Math.randomInt)
{
	Math.randomInt = function(min, max)
	{
		return Math.floor(Math.trueRandom() * (max - min + 1)) + min;
	};
}

if(!Math.randomIntExcluding)
{
	Math.randomIntExcluding = function(min, max, excluding)
	{
		excluding = Array.toArray(excluding).map(function(i) { return i.truncate(); }).filter(function(i) { return i>=min && i<=max; }).uniqueBySort();
		if(excluding.length===((max-min)+1))
			throw new RangeError("randomIntExcluding called with excluding all nums, no possible return value");
		
		var num;
		do
		{
			num = Math.randomInt(min, max);
		} while(excluding.contains(num));

		return num;
	};
}

if(!Math.getRotatedDimensions)
{
	Math.getRotatedDimensions = function(angle_in_degrees, width, height)
	{
		var angle = angle_in_degrees * Math.PI / 180,
			sin   = Math.sin(angle),
			cos   = Math.cos(angle);
		var x1 = cos * width,
			y1 = sin * width;
		var x2 = -sin * height,
			y2 = cos * height;
		var x3 = cos * width - sin * height,
			y3 = sin * width + cos * height;
		var minX = Math.min(0, x1, x2, x3),
			maxX = Math.max(0, x1, x2, x3),
			minY = Math.min(0, y1, y2, y3),
			maxY = Math.max(0, y1, y2, y3);

		return [ Math.floor((maxX - minX)), Math.floor((maxY - minY)) ];
	};
}

if(!Math.degreesToRadians)
{
	Math.degreesToRadians = function(degrees)
	{
		return degrees * (Math.PI/180);
	};
}

if(!Math.radiansToDegrees)
{
	Math.radiansToDegrees = function(radians)
	{
		return radians * (180/Math.PI);
	};
}

if(!Math.rotatePointInBox)
{
	Math.rotatePointInBox = function(x, y, angle, width, height)
	{
		angle = Math.degreesToRadians(angle);

		var centerX = width / 2.0;
		var centerY = height / 2.0;
		var dx = x - centerX;
		var dy = y - centerY;
		var dist = Math.sqrt(dx * dx + dy * dy);
		var a =  Math.atan2(dy, dx) + angle;
		var dx2 = Math.cos(a) * dist;
		var dy2 = Math.sin(a) * dist;

		return [ dx2 + centerX, dy2 + centerY ];
	};
}