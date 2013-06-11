"use strict";

var Vector = function()
{
	this.elements = Array.isArray(arguments[0]) ? arguments[0].slice() : Array.prototype.slice.call(arguments);

	Vector.prototype.add = function(v2)
	{
		if(!(v2 instanceof Vector))
			return new Vector(this.elements.map(function(x, i) { return x + v2; }));

		if(this.elements.length!==v2.elements.length)
			return null;
		
		return new Vector(this.elements.map(function(x, i) { return x + v2.elements[i]; }));
	};

	Vector.prototype.subtract = function(v2)
	{
		if(!(v2 instanceof Vector))
			return new Vector(this.elements.map(function(x, i) { return x - v2; }));

		if(this.elements.length!==v2.elements.length)
			return null;
		
		return new Vector(this.elements.map(function(x, i) { return x - v2.elements[i]; }));
	};

	Vector.prototype.multiply = function(v2)
	{
		if(!(v2 instanceof Vector))
			return new Vector(this.elements.map(function(x, i) { return x * v2; }));

		if(this.elements.length!==v2.elements.length)
			return null;
		
		return new Vector(this.elements.map(function(x, i) { return x * v2.elements[i]; }));
	};

	Vector.prototype.toArray = function()
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
