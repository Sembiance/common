import {} from "./array.js";

/** Converts an angle from degrees to radians */
Math.degreesToRadians ||= function degreesToRadians(degrees)
{
	return degrees * (Math.PI/180);
};

/** Converts an angle from radians to degrees */
Math.radiansToDegrees ||= function radiansToDegrees(radians)
{
	return radians * (180/Math.PI);
};

/** Returns a random integer between min and max INCLUSIVE. Options: exclude : [] (array of numbers to exclude, brute force) */
Math.randomInt ||= function randomInt(min, max, {exclude=[]}={})
{
	if(!Array.isArray(exclude))
		throw new TypeError("pickRandom called with exclude option not of type array");
		
	if(exclude.length===0)
		return Math.floor(Math.trueRandom() * (max - min + 1)) + min;
	
	const excluding = exclude.map(i => Math.trunc(i)).filter(i => (i>=min && i<=max)).unique();
	if(excluding.length===((max-min)+1))
		throw new RangeError("randomInt called with exclude of all nums, no possible return value");
	
	let num = undefined;
	do
		num = Math.randomInt(min, max);
	while(excluding.includes(num));

	return num;
};

/** Rotates a box of width x height by angleInDegrees (in degrees) */
Math.rotatedDimensions ||= function rotatedDimensions(angleInDegrees, width, height)
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

/** Rotates a point within a box by the angle (in degrees) and returns the place that point should now be */
Math.rotatePointInBox ||= function rotatePointInBox(x, y, _angle, width, height)
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

// Returns a truly random number, taking advantage of crypto if available
Math.trueRandom ||= function trueRandom()
{
	try
	{
		if(crypto.getRandomValues)
			return crypto.getRandomValues(new Uint32Array(1))[0] / 0x1_00_00_00_00;
	}
	catch {}

	return Math.random();
};
