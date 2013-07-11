"use strict";

if(!Object.keys)
{
	Object.keys = (function()
	{
		var hop = Object.prototype.hasOwnProperty,
			hasDontEnumBug = !({toString: null}).propertyIsEnumerable("toString"),
			dontEnums = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ],
			dontEnumsLength = dontEnums.length;

		return function (obj)
		{
			if(typeof obj!=="object" && typeof obj!=="function" || obj === null)
				throw new TypeError("Object.keys called on non-object");

			var result = [];

			for(var prop in obj)
			{
				if(hop.call(obj, prop))
					result.push(prop);
			}

			if(hasDontEnumBug)
			{
				for(var i=0;i<dontEnumsLength;i++)
				{
					if(hop.call(obj, dontEnums[i]))
						result.push(dontEnums[i]);
				}
			}
			
			return result;
		};
	})();
}

if(!Object.values)
{
	Object.values = function(obj)
	{
		var result = [];

		Object.keys(obj).forEach(function(key)
		{
			result.push(obj[key]);
		});

		return result;
	};
}

if(!Object.forEach)
{
	Object.forEach = function(obj, cb)
	{
		if(!cb)
			return;

		Object.keys(obj).forEach(function(key)
		{
			cb(key, obj[key]);
		});
	};
}

if(!Object.every)
{
	Object.every = function(obj, cb)
	{
		if(!cb)
			return true;

		var matches = true;
		Object.keys(obj).forEach(function(key)
		{
			matches = cb(key, obj[key]);
		});

		return matches;
	};
}

if(!Object.mutate)
{
	Object.mutate = function(obj, cb, startResult)
	{
		if(!cb)
			return;

		var result = ((typeof startResult!=="undefined") ? startResult : undefined);

		Object.keys(obj).forEach(function(key)
		{
			result = cb(key, obj[key], result);
		});

		return result;
	};
}

if(!Object.merge)
{
	Object.merge = function(o1, o2, dupHandler, onlyKeys)
	{
		var hop = Object.prototype.hasOwnProperty;

		Object.forEach(o2, function(key)
		{
			if(onlyKeys && onlyKeys.indexOf(key)===-1)
				return;
			
			if(!hop.call(o1, key) || !dupHandler)
				o1[key] = o2[key];
			else
				o1[key] = dupHandler(o1[key], o2[key]);
		});

		return o1;
	};
}

if(!Object.map)
{
	Object.map = function(obj, cb)
	{
		if(!cb)
			return obj;

		var result = {};

		Object.forEach(obj, function(key, value)
		{
			var r = cb(key, value);
			result[r[0]] = r[1];
		});

		return result;
	};
}

if(!Object.isObject)
{
	Object.isObject = function (arg)
	{
		return arg!==null && !Array.isArray(arg) && typeof arg==="object";
	};
}
