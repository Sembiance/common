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

		Object.keys(obj).forEach(function(key, i)
		{
			cb(key, obj[key], i);
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
		Object.keys(obj).forEach(function(key, i)
		{
			if(!matches)
				return;
			
			matches = cb(key, obj[key], i);
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
				o1[key] = dupHandler(o1[key], o2[key], key);
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
			if(!Array.isArray(r))
				result[key] = r;
			else if(r.length===1)
				result[key] = r[0];
			else
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

if(!Object.swapKeyValues)
{
	Object.swapKeyValues = function(obj)
	{
		var newObj = {};
		Object.forEach(obj, function(key, val)
		{
			newObj[val] = key;
		});

		return newObj;
	};
}

if(!Object.clone)
{
	Object.clone = function(src, deep)
	{
		var result = {};
		Object.forEach(src, function(key, val)
		{
			if(deep)
				result[key] = (Array.isArray(val) ? val.clone(deep) : (Object.isObject(val) ? Object.clone(val, deep) : val));
			else
				result[key] = val;
		});
		return result;
	};
}

if(!Object.toArray)
{
	Object.toArray = function(obj, keyKey)
	{
		var result = [];
		keyKey = keyKey || "key";

		Object.forEach(obj, function(key, value)
		{
			var objValue = Object.isObject(value) ? Object.clone(value) : {value:Object.clone(value)};
			objValue[keyKey] = key;
			result.push(objValue);
		});

		return result;
	};
}

if(!Object.renameKey)
{
	Object.renameKey = function(obj, oldKey, newKey)
	{
		if(oldKey===newKey)
			return obj;

		if(obj.hasOwnProperty(oldKey))
		{
			obj[newKey] = obj[oldKey];
			delete obj[oldKey];
		}

		return obj;
	};
}

Object.prototype.renameProperty = function (oldName, newName) {
     // Do nothing if the names are the same
     if (oldName == newName) {
         return this;
     }
    // Check for the old property name to avoid a ReferenceError in strict mode.
    if (this.hasOwnProperty(oldName)) {
        this[newName] = this[oldName];
        delete this[oldName];
    }
    return this;
};