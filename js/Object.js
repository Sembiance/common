"use strict";

// This polyfill does NOT support IE<9 or Safari<5

// Returns 'true' if the val is an Object and NOT an Array
if(!Object.isObject)
{
	Object.isObject = function isObject(val)
	{
		return val!==null && !Array.isArray(val) && typeof val==="object";
	};
}

// Returns whether two objects are equal or not
if(!Object.equals)
{
	Object.equals = function equals(o1, o2)
	{
		if(o1===o2)
			return true;

		for(const k in o1)
		{
			if(!o1.hasOwnProperty(k))
				continue;

			if(!o2.hasOwnProperty(k))
				return false;

			if(o1[k]===o2[k])
				continue;

			if(typeof o1[k]!=="object")
				return false;

			if(!Object.equals(o1[k], o2[k]))
				return false;
		}

		for(const k in o2)
		{
			if(o2.hasOwnProperty(k) && !o1.hasOwnProperty(k))
				return false;
		}

		return true;
	};
}

// Deep copies an object unless shallow is set to true. Can also pass an array of keys to skip
if(!Object.clone)
{
	Object.clone = function clone(src, skipKeys=[], shallow)
	{
		const result = {};
		Object.forEach(src, (k, v) =>
		{
			if(skipKeys.contains(k))
				return;

			if(shallow)
				result[k] = v;
			else
				result[k] = (Array.isArray(v) ? v.clone() : (Object.isObject(v) ? Object.clone(v, skipKeys) : v));
		});
		return result;
	};
}

// Returns an array of the vaules for this object
if(!Object.values)
{
	Object.values = function values(obj)
	{
		const r = [];
		Object.keys(obj).forEach(key => r.push(obj[key]));
		return r;
	};
}

// Allows you to iterate over entries in an object calling cb with [key, value] entries
if(!Object.forEach)
{
	Object.forEach = function forEach(o, cb)
	{
		if(!cb)
			return;

		Object.keys(o).forEach((key, i) => cb(key, o[key], i));
	};
}

// Filters out keys from an object by calling cb(key, value, i) and deleting entries when that cb() returns a falsy value. Modifies the object directly.
if(!Object.filter)
{
	Object.filter = function filter(o, cb)
	{
		if(!cb)
			return o;

		const keysToDelete = [];

		Object.keys(o).forEach((k, i) =>
		{
			if(!cb(k, o[k], i))
				keysToDelete.push(k);
		});

		keysToDelete.forEach(keyToDelete => { delete o[keyToDelete]; });
		return o;
	};
}

// Returns true if every key/value pair passed to cb() returns a truthy value
if(!Object.every)
{
	Object.every = function every(o, cb)
	{
		if(!cb)
			return true;

		let matches = true;
		Object.keys(o).forEach((k, i) =>
		{
			if(!matches)
				return;
			
			matches = cb(k, o[k], i);
		});

		return matches;
	};
}

// Returns a new object by calling cb(k, v) and expects a result of either 'newVal' or [newKey, newVal]
if(!Object.map)
{
	Object.map = function map(o, cb)
	{
		if(!cb)
			return o;

		const result = {};

		Object.forEach(o, (k, v) =>
		{
			const r = cb(k, v);
			if(!Array.isArray(r))
				result[k] = r;
			else if(r.length===1)
				result[k] = r[0];
			else
				result[r[0]] = r[1];
		});

		return result;
	};
}

// Returns a new object with the key/values swapped
if(!Object.swapKeyValues)
{
	Object.swapKeyValues = function swapKeyValues(o)
	{
		const newObj = {};
		Object.forEach(o, (k, v) => { newObj[v] = k; });
		return newObj;
	};
}

// Returns an array of [key, val] sub arrays
if(!Object.entries)
{
	Object.entries = function entries(o)
	{
		const ownProps = Object.keys(o);
		let i=ownProps.length;
		const resArray = new Array(i);
		while(i--)
			resArray[i] = [ownProps[i], o[ownProps[i]]];

		return resArray;
	};
}

// Shorthand for Object.entries
if(!Object.toArray)
	Object.toArray = Object.entries;

// Merges the key/values from o2 into o1. Overwriting same key names unless dupHandler cb exists then it sets the value to the result returned from dupHandler(o1Value, o2Value, key)
// Can pass an array of onlyKeys and any keys not in that array won't be merged
if(!Object.merge || typeof Object.merge!=="function")
{
	Object.merge = function merge(o1, o2, dupHandler, onlyKeys)
	{
		const hop = Object.prototype.hasOwnProperty;

		Object.forEach(o2, key =>
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

// Renames a key in the object with a new name. Returns the object for chaining
if(!Object.renameKey)
{
	Object.renameKey = function renameKey(o, oldKey, newKey)
	{
		if(oldKey===newKey)
			return o;

		if(o.hasOwnProperty(oldKey))
		{
			o[newKey] = o[oldKey];
			delete o[oldKey];
		}

		return o;
	};
}

// Reduce an object into something else, similar to Array.reduce
if(!Object.reduce)
{
	Object.reduce = function reduce(o, cb, startResult)
	{
		if(!cb)
			return;

		let result = ((typeof startResult!=="undefined") ? startResult : undefined);

		Object.keys(o).forEach(key => { result = cb(key, o[key], result); });

		return result;
	};
}

// Just like Object.reduce but stops once it gets a non-undefined result
if(!Object.reduceOnce)
{
	Object.reduceOnce = function reduceOnce(o, cb, startResult)
	{
		if(!cb)
			return;

		let result = ((typeof startResult!=="undefined") ? startResult : undefined);

		Object.keys(o).forEach(key =>
		{
			if(typeof result!=="undefined")
				return;
			
			result = cb(key, o[key], result);
		});

		return result;
	};
}

// Clear an object. Useful to clear an object that is 'const'
if(!Object.clear)
{
	Object.clear = function clear(o)
	{
		Object.keys(o).forEach(k => { delete o[k]; });
		return o;
	};
}
