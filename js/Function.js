"use strict";

////////////////////
//// Polyfills /////
////////////////////

//------------//
//// ES2015 ////
//------------//

// Binds a given function to always execute with a this environment equal to oThis
if(!Function.prototype.bind)
{
	Function.prototype.bind = function bind(oThis)
	{
		if(typeof this!=="function")
			throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");

		const aArgs = Array.prototype.slice.call(arguments, 1),		// eslint-disable-line prefer-rest-params
			fToBind = this,		// eslint-disable-line consistent-this
			FNOP = function FNOP() {},
			fBound = function fBound()
			{
				return fToBind.apply(this instanceof FNOP ? this : oThis || window, aArgs.concat(Array.prototype.slice.call(arguments)));	// eslint-disable-line prefer-rest-params
			};

		if(this.prototype)
			FNOP.prototype = this.prototype;
		fBound.prototype = new FNOP();

		return fBound;
	};
}
