"use strict";

if(!Function.prototype.bind)
{
	Function.prototype.bind = function (oThis)
	{
		if(typeof this!=="function")
			throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");

		var aArgs = Array.prototype.slice.call(arguments, 1),
			fToBind = this,
			FNOP = function () {},
			fBound = function ()
			{
				return fToBind.apply(this instanceof FNOP ? this : oThis || window, aArgs.concat(Array.prototype.slice.call(arguments)));
			};

		if(this.prototype)
			FNOP.prototype = this.prototype;
		fBound.prototype = new FNOP();

		return fBound;
	};
}
