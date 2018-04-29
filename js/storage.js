"use strict";
(function _storage()
{
	const storage = {};
	let useMem = false;
	const mem = {};

	function serialize(v)
	{
		return JSON.stringify(v);
	}

	function deserialize(v)
	{
		let r = undefined;
		try
		{
			r = JSON.parse(v);
		}
		catch(e)
		{
			r = v;
		}

		return r;
	}

	storage.get = function get(k)
	{
		return useMem ? deserialize(mem[k]) : deserialize(localStorage.getItem(k));
	};

	storage.set = function set(k, v)
	{
		if(useMem)
		{
			mem[k] = serialize(v);
			return;
		}

		try
		{
			localStorage.setItem(k, serialize(v));
		}
		catch(err)
		{
			// We failed to save in localStorage, so fall back to using memory
			// Let's copy all values out of localStorage and save to mem object so we only have to look at it from this point on
			storage.forEach((subKey, subValue) => { mem[subKey] = serialize(subValue); });
			useMem = true;
			mem[k] = serialize(v);
		}
	};

	storage.forEach = function forEach(cb)
	{
		if(useMem)
			return Object.forEach(mem, (k, v) => cb(k, deserialize(v)));

		for(let i=localStorage.length-1;i>=0;i--)
		{
			const k = localStorage.key(i);
			cb(k, storage.get(k));
		}
	};

	storage.remove = function remove(k)
	{
		if(useMem)
			delete mem[k];
		else
			localStorage.removeItem(k);
	};

	storage.clearAll = function clearAll()
	{
		if(useMem)
			Object.clear(mem);
		else
			localStorage.clear();
	};
	
	// Make sure localStorage works, otherwise fall back to using memory
	try
	{
		const testKey = "__storage__test";
		const testVal = "storage__value__test";
		storage.set(testKey, testVal);
		if(storage.get(testKey)!==testVal)
			useMem = true;
	}
	catch(err)
	{
		useMem = true;
	}

	window.XU = window.XU || {};
	window.XU.storage = storage;
})();
