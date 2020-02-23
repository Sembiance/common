"use strict";
/* eslint-disable no-underscore-dangle, no-void */

(function _localforageMemoryDriver()
{
	function getSerializerPromise(localForageInstance)
	{
		if(getSerializerPromise.result)
			return getSerializerPromise.result;

		if(!localForageInstance || typeof localForageInstance.getSerializer!=="function")
			return Promise.reject(new Error("localforage.getSerializer() was not available! localforage v1.4+ is required!"));
		
		getSerializerPromise.result = localForageInstance.getSerializer();
		return getSerializerPromise.result;
	}

	function executeCallback(promise, cb)
	{
		if(cb)
			promise.then(result => cb(null, result), error => cb(error));
	}

	const storage = {};

	window.localforageMemoryDriver =
	{
		_driver : "memoryDriver",

		_initStorage(options)
		{
			const dbInfo = {};
			if(options)
				Object.assign(dbInfo, options);

			const database = storage[dbInfo.name] = storage[dbInfo.name] || {};
			const table = database[dbInfo.storeName] = database[dbInfo.storeName] || {};
			dbInfo.db = table;

			this._dbInfo = dbInfo;

			return getSerializerPromise(this).then(serializer => { dbInfo.serializer = serializer; });
		},

		clear(cb)
		{
			const promise = this.ready().then(() => Object.forEach(this._dbInfo.db, k => delete this._dbInfo.db[k]));
			executeCallback(promise, cb);
			return promise;
		},

		getItem(_key, cb)
		{
			const key = ((typeof _key==="string") ? _key : String(_key));

			const promise = this.ready().then(() =>
			{
				let result = this._dbInfo.db[key];
				if(result)
					result = this._dbInfo.serializer.deserialize(result);

				return result;
			});

			executeCallback(promise, cb);
			return promise;
		},

		iterate(iterator, cb)
		{
			const promise = this.ready().then(() =>
			{
				const db = this._dbInfo.db;

				let iterationNumber = 1;
				for(const key in db)
				{
					if(!db.hasOwnProperty(key))
						continue;

					let value = db[key];
					if(value)
						value = this._dbInfo.serializer.deserialize(value);

					value = iterator(value, key, iterationNumber++);

					if(value!== void 0)
						return value;
				}
			});

			executeCallback(promise, cb);
			return promise;
		},

		key(n, cb)
		{
			const promise = this.ready().then(() =>
			{
				const db = this._dbInfo.db;
				let result = null;
				let index = 0;

				for(const key in db)
				{
					if(!db.hasOwnProperty(key))
						continue;

					if(n===index)
					{
						result = key;
						break;
					}
					index++;
				}

				return result;
			});

			executeCallback(promise, cb);
			return promise;
		},

		keys(cb)
		{
			const promise = this.ready().then(() => Object.keys(this._dbInfo.db));
			executeCallback(promise, cb);
			return promise;
		},

		length(cb)
		{
			const promise = this.keys().then(keys => keys.length);
			executeCallback(promise, cb);
			return cb;
		},

		removeItem(_key, cb)
		{
			const key = ((typeof _key==="string") ? _key : String(_key));

			const promise = this.ready().then(() =>
			{
				const db = self._dbInfo.db;
				if(db.hasOwnProperty(key))
					delete db[key];
			});

			executeCallback(promise, cb);
			return promise;
		},

		setItem(_key, _value, cb)
		{
			const key = ((typeof _key==="string") ? _key : String(_key));
			const value = (_value===undefined ? null : _value);	// Convert undefined values to null: https://github.com/mozilla/localForage/pull/42

			const promise = this.ready().then(() =>
			{
				// Save the original value to pass to the callback.
				const originalValue = value;

				const self=this;
				function serializeAsync()
				{
					return new Promise((resolve, reject) =>
					{
						self._dbInfo.serializer.serialize(value, (val, error) =>
						{
							if(error)
								reject(error);
							else
								resolve(val);
						});
					});
				}

				return serializeAsync(value).then(v =>
				{
					this._dbInfo.db[key] = v;
					return originalValue;
				});
			});

			executeCallback(promise, cb);
			return promise;
		}
	};
})();
