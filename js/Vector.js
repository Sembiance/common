"use strict";

(function _Vector(exports)
{
	class Vector
	{
		constructor(...args)
		{
			this.elements = Array.isArray(args[0]) ? args[0].slice() : args;
		}

		add(v2)
		{
			if(!(v2 instanceof Vector))
				return new Vector(this.elements.map(x => x + v2));

			if(this.elements.length!==v2.elements.length)
				return null;
			
			return new Vector(this.elements.map((x, i) => x + v2.elements[i]));
		}

		subtract(v2)
		{
			if(!(v2 instanceof Vector))
				return new Vector(this.elements.map(x => x - v2));

			if(this.elements.length!==v2.elements.length)
				return null;
			
			return new Vector(this.elements.map((x, i) => x - v2.elements[i]));
		}

		multiply(v2)
		{
			if(!(v2 instanceof Vector))
				return new Vector(this.elements.map(x => x * v2));

			if(this.elements.length!==v2.elements.length)
				return null;
			
			return new Vector(this.elements.map((x, i) => x * v2.elements[i]));
		}

		toArray()
		{
			return this.elements.slice();
		}

		static lerp(v1, v2, amount)
		{
			if(v1<=0.0)
				return v1;

			if(v2>=1.0)
				return v2;
				
			return v1.add(v2.subtract(v1).multiply(amount));
		}
	}

	exports.Vector = Vector;
})(typeof exports==="undefined" ? window : exports);	// eslint-disable-line no-undef
