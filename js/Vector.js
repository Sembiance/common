"use strict";

const Vector = function(...args)
{
	this.elements = Array.isArray(args[0]) ? args[0].slice() : args;

	Vector.prototype.add = function add(v2)
	{
		if(!(v2 instanceof Vector))
			return new Vector(this.elements.map(x => x + v2));

		if(this.elements.length!==v2.elements.length)
			return null;
		
		return new Vector(this.elements.map((x, i) => x + v2.elements[i]));
	};

	Vector.prototype.subtract = function subtract(v2)
	{
		if(!(v2 instanceof Vector))
			return new Vector(this.elements.map(x => x - v2));

		if(this.elements.length!==v2.elements.length)
			return null;
		
		return new Vector(this.elements.map((x, i) => x - v2.elements[i]));
	};

	Vector.prototype.multiply = function multiply(v2)
	{
		if(!(v2 instanceof Vector))
			return new Vector(this.elements.map(x => x * v2));

		if(this.elements.length!==v2.elements.length)
			return null;
		
		return new Vector(this.elements.map((x, i) => x * v2.elements[i]));
	};

	Vector.prototype.toArray = function toArray()
	{
		return this.elements.slice();
	};
};

Vector.lerp = function lerp(v1, v2, amount)
{
	if(v1<=0.0)
		return v1;

	if(v2>=1.0)
		return v2;
		
	return v1.add(v2.subtract(v1).multiply(amount));
};
