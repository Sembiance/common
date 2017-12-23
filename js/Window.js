"use strict";

if(!window.setImmediate)
{
	window.setImmediate = function setImmediate(func, ...params)
	{
		setTimeout(() => func(...params), 0);
	};
}
