"use strict";

if(!Object.equals)
{
	Object.equals = function(obj1, obj2)
	{
		if(obj1===obj2)
			return true;

		for(var k in obj1)
		{
			if(!obj1.hasOwnProperty(k))
				continue;

			if(!obj2.hasOwnProperty(k))
				return false;

			if(obj1[k]===obj2[k])
				continue;

			if(typeof obj1[k]!=="object")
				return false;

			if(!Object.equals(obj1[k], obj2[k]))
				return false;
		}

		for(k in obj2)
		{
			if(obj2.hasOwnProperty(k) && !obj1.hasOwnProperty(k))
				return false;
		}

		return true;
	};
}

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

if(!Object.filter)
{
	Object.filter = function(obj, cb)
	{
		if(!cb)
			return obj;

		var keysToDelete = [];

		Object.keys(obj).forEach(function(key, i)
		{
			if(!cb(key, obj[key], i))
				keysToDelete.push(key);
		});

		keysToDelete.forEach(function(keyToDelete)
		{
			delete obj[keyToDelete];
		});

		return obj;
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

if(!Object.mutateOnce)
{
	Object.mutateOnce = function(obj, cb, startResult)
	{
		if(!cb)
			return;

		var result = ((typeof startResult!=="undefined") ? startResult : undefined);

		Object.keys(obj).forEach(function(key)
		{
			if(typeof result!=="undefined")
				return;
			
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
	Object.clone = function(src, skipKeys, shallow)
	{
		skipKeys = skipKeys || [];

		var result = {};
		Object.forEach(src, function(key, val)
		{
			if(skipKeys.contains(key))
				return;

			if(shallow)
				result[key] = val;
			else
				result[key] = (Array.isArray(val) ? val.clone() : (Object.isObject(val) ? Object.clone(val, skipKeys) : val));
		});
		return result;
	};
}

if(!Object.entries)
{
	Object.entries = function(obj)
	{
		var ownProps = Object.keys(obj), i=ownProps.length, resArray = new Array(i);
		while(i--)
		{
			resArray[i] = [ownProps[i], obj[ownProps[i]]];
		}

		return resArray;
	};
}

if(!Object.toArray)
{
	Object.toArray = Object.entries;
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

if(!Object.defineProperties)
{
	Object.defineProperties = function(obj, properties)
	{
		function convertToDescriptor(desc)
		{
			function hasProperty(obj, prop)
			{
				return Object.prototype.hasOwnProperty.call(obj, prop);
			}

			function isCallable(v)
			{
				// NB: modify as necessary if other values than functions are callable.
				return typeof v === 'function';
			}

			if(typeof desc !== 'object' || desc === null)
				throw new TypeError('bad desc');

			var d = {};

			if(hasProperty(desc, 'enumerable'))
				d.enumerable = !!desc.enumerable;
			if(hasProperty(desc, 'configurable'))
				d.configurable = !!desc.configurable;
			if(hasProperty(desc, 'value'))
				d.value = desc.value;
			if(hasProperty(desc, 'writable'))
				d.writable = !!desc.writable;
			if(hasProperty(desc, 'get'))
			{
				var g = desc.get;

				if(!isCallable(g) && typeof g!=='undefined')
					throw new TypeError('bad get');
			
				d.get = g;
			}
			
			if(hasProperty(desc, 'set'))
			{
				var s = desc.set;
				if(!isCallable(s) && typeof s!=='undefined')
					throw new TypeError('bad set');
			
				d.set = s;
			}

			if(('get' in d || 'set' in d) && ('value' in d || 'writable' in d))
				throw new TypeError('identity-confused descriptor');

			return d;
		}

		if(typeof obj !== 'object' || obj === null)
			throw new TypeError('bad obj');

		properties = Object(properties);

		var keys = Object.keys(properties);
		var descs = [];
		var i;

		for(i=0;i<keys.length;i++)
		{
			descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
		}

		for(i=0;i<descs.length;i++)
		{
			Object.defineProperty(obj, descs[i][0], descs[i][1]);
		}

		return obj;
	};
}
