"use strict";
/* eslint-env browser */
/* eslint-disable logical-assignment-operators, node/callback-return */

////////////////////
//// Polyfills /////
////////////////////

//------------//
//// ES2016 ////
//------------//

// Returns true if the valueToFind can be located in the array
if(!Array.prototype.includes)
	Array.prototype.includes = function includes(valueToFind, fromIndex) { return this.indexOf(valueToFind, fromIndex)!==-1; };		// eslint-disable-line unicorn/prefer-includes

//------------//
//// ES2015 ////
//------------//

// Returns true if the passed in value is an authentic Array and not an Object
if(!Array.isArray)
	Array.isArray = function isArray(value) { return Object.prototype.toString.call(value)==="[object Array]"; };

// Converts Objects that are 'like' arrays (such as the NodeList returned from querySelectorAll) into real arrays
if(!Array.from)
{
	Array.from = function from(arrayLike, mapFn, thisArg)
	{
		const len = ("length" in arrayLike) ? Number(arrayLike.length) : 0;
		const r=[];
		for(let i=0;i<len;i++)
			r.push(mapFn ? mapFn.call((thisArg || undefined), arrayLike[i], i) : arrayLike[i]);

		return r;
	};
}

// Iterates over the array, calling the cb for each element, returning the first element that the cd returns a truthy response for
// I FORCEFULLY OVERWRITE Array.prototype.find() always because stupid Internet Explorer implements a non-standard, different version of this method which of course causes problems
Array.prototype.find = function find(cb)
{
	for(let i=0, len=this.length;i<len;i++)
	{
		if(cb(this[i], i, this))
			return this[i];
	}

	return undefined;
};

////////////////
//// Custom ////
////////////////

// Calls cb(ele, i, arr) for each element in the array and if cb() returns true then that element is removed from the array. This happens just once.
Array.prototype.findAndRemove = function findAndRemove(cb)
{
	for(let i=0, len=this.length;i<len;i++)
	{
		if(cb(this[i], i, this))
			return this.splice(i, 1)[0];
	}

	return undefined;
};

// Forces the passed in variable to be an Array. Just returns it if it already is an Array, otherwise it returns [v]
if(!Array.force)
{
	Array.force = function force(v)
	{
		return (Array.isArray(v) ? v : [v]);	// eslint-disable-line sembiance/prefer-array-force
	};
}

// Returns an array of 1 or more random values from an array. Can pass an array of values to exclude
if(!Array.prototype.pickRandom)
{
	Array.prototype.pickRandom = function pickRandom(num=1, excludedItems=[])
	{
		if(excludedItems.length===0 && num===1)
			return [this[Math.floor(Math.random()*this.length)]];
		
		if(excludedItems.length===0 && num>=this.length)
			return this.slice().shuffle();

		const excludedIndexes = excludedItems.map(excludedItem => this.indexOf(excludedItem)).unique().filter(v => v!==-1);

		const pickedIndexes=[];
		for(let i=0;i<num;i++)
			pickedIndexes.push(Math.randomInt(0, (this.length-1), [...pickedIndexes, ...excludedIndexes]));

		return pickedIndexes.map(pickedIndex => this[pickedIndex]);
	};
}

// Returns true if the array contains the same values in the same order as another array
if(!Array.prototype.equals)
{
	Array.prototype.equals = function equals(a)
	{
		if(this.length!==a.length)
			return false;
		
		for(let i=0, len=this.length;i<len;i++)
		{
			if(Array.isArray(a[i]) && Array.isArray(this[i]))
			{
				if(!a[i].equals(this[i]))
					return false;
			}
			else if(Object.isObject(a[i]) && Object.isObject(this[i]))
			{
				if(!Object.equals(a[i], this[i]))
					return false;
			}
			else if(a[i]!==this[i])
			{
				return false;
			}
		}

		return true;
	};
}

// Returns a deep copy of the array unless you pass true then you get a shallow copy
if(!Array.prototype.clone)
{
	Array.prototype.clone = function clone(shallow)
	{
		const r = [];
		for(let i=0, len=this.length;i<len;i++)
		{
			if(shallow)
				r.push(this[i]);
			else
				r.push((Array.isArray(this[i]) ? this[i].clone() : (Object.isObject(this[i]) ? Object.clone(this[i]) : this[i])));
		}

		return r;
	};
}

// Returns true if the array contains all of the values in the passed in array vals
if(!Array.prototype.includesAll)
{
	Array.prototype.includesAll = function includesAll(vals)
	{
		return !vals.some(v => !this.includes(v));
	};
}

// Returns true if the array contains any of the values in the passed in array vals
if(!Array.prototype.includesAny)
{
	Array.prototype.includesAny = function includesAny(vals)
	{
		return vals.some(v => this.includes(v));
	};
}

// Removes the first occurence of the passed in val from the array. Returns the array. Modifies array in place.
if(!Array.prototype.removeOnce)
{
	Array.prototype.removeOnce = function removeOnce(val)
	{
		const loc = this.indexOf(val);
		if(loc===-1)
			return this;
		
		this.splice(loc, 1);

		return this;
	};
}

// Removes every occurrence of the passed in val from the array. Returns the array. Modifies array in place.
if(!Array.prototype.removeAll)
{
	Array.prototype.removeAll = function removeAll(val)
	{
		do
		{
			const loc = this.indexOf(val);
			if(loc===-1)
				break;
			
			this.splice(loc, 1);
		} while(true);

		return this;
	};
}

// Returns the sum of all the numbers in the array
if(!Array.prototype.sum)
{
	Array.prototype.sum = function sum()
	{
		if(!this.length)
			return 0;
		
		return this.reduce((p, c) => (((+p) || 0) + ((+c) || 0)));
	};
}

// Returns an average of all the numbers in the array (arithmetic mean)
if(!Array.prototype.average)
{
	Array.prototype.average = function average()
	{
		return this.sum()/this.length;
	};
}

// Returns the median of all the numbers in the array (middle number)
if(!Array.prototype.median)
{
	Array.prototype.median = function median()
	{
		const w = this.slice().sort((a, b) => a-b);
		const half = Math.floor(w.length/2);

		if(w.length % 2)
			return w[half];

		return (w[half-1] + w[half]) / 2.0;
	};
}

// On average, how far from the average is each number in our set?
// Pass true to calc a sample variance (if the data only represents a small sample of the whole of possible data)
if(!Array.prototype.variance)
{
	Array.prototype.variance = function variance(sample)
	{
		const avg = this.average();
		return (this.map(n => ((n-avg)*(n-avg))).sum() / (this.length - (sample ? 1 : 0)));
	};
}

// A better way of expressing variance. Basically how much variation exists from the average
// Pass true to use a 'sample' variance as the basis for the standard deviation
if(!Array.prototype.standardDeviation)
{
	Array.prototype.standardDeviation = function standardDeviation(sample)
	{
		return Math.sqrt(this.variance(sample));
	};
}

// Returns the lowest value in the array
if(!Array.prototype.min)
{
	Array.prototype.min = function min()
	{
		if(this.length<1)
			return;

		let r=this[0];
		for(let i=1, len=this.length;i<len;i++)
			r = Math.min(r, this[i]);

		return r;
	};
}

// Returns the highest value in the array
if(!Array.prototype.max)
{
	Array.prototype.max = function max()
	{
		if(this.length<1)
			return;

		let r=this[0];
		for(let i=1, len=this.length;i<len;i++)
			r = Math.max(r, this[i]);

		return r;
	};
}

// Clears the array and returns itself. Modifies the array in place.
if(!Array.prototype.clear)
{
	Array.prototype.clear = function clear()
	{
		this.length = 0;
		return this;
	};
}

// Returns the last element of the array
if(!Array.prototype.last)
{
	Array.prototype.last = function last()
	{
		return this[this.length-1];	// eslint-disable-line unicorn/prefer-at
	};
}

// Flattens an array
if(!Array.prototype.flat)
{
	Array.prototype.flat = function flat(depth=1)
	{
		if(depth<1)
			return Array.prototype.slice.call(this);

		return (function _flat(arr, _depth)
		{
			const flattened = [];
			arr.forEach(v =>
			{
				if(Array.isArray(v) && _depth>0)
					flattened.push(..._flat(v, _depth-1));
				else
					flattened.push(v);
			});

			return flattened;
		})(this, depth);
	};
}

// Sorts an array, IN PLACE, based on the values returned by the sorter cb functions passed in. reverse can be `true` or an array of booleans corresponding to each sorter cb
if(!Array.prototype.multiSort)
{
	Array.prototype.multiSort = function multiSort(_sorters, reverse)
	{
		const sorters = Array.force(_sorters).filterEmpty();
		if(sorters.length===0)
			sorters.push(v => v);

		this.sort((a, b) =>
		{
			for(let i=0, len=sorters.length;i<len;i++)
			{
				const sorter = sorters[i];

				const aVal = sorter(a);
				const bVal = sorter(b);

				if(typeof aVal==="string")
				{
					const stringCompareResult = aVal.localeCompare(bVal);
					if(stringCompareResult<0)
						return (reverse && (!Array.isArray(reverse) || reverse[i]) ? 1 : -1);

					if(stringCompareResult>0)
						return (reverse && (!Array.isArray(reverse) || reverse[i]) ? -1 : 1);
				}
				else
				{
					if(aVal<bVal)
						return (reverse && (!Array.isArray(reverse) || reverse[i]) ? 1 : -1);

					if(aVal>bVal)
						return (reverse && (!Array.isArray(reverse) || reverse[i]) ? -1 : 1);
				}
			}

			return 0;
		});

		return this;
	};
}

// Shuffles an array of numbers, Correctly. Does so IN PLACE and returns the array.
if(!Array.prototype.shuffle)
{
	Array.prototype.shuffle = function shuffle()
	{
		let m=this.length, t=null, i=0;
		while(m)
		{
			i = Math.randomInt(0, --m);
			t = this[m];
			this[m] = this[i];
			this[i] = t;
		}

		return this;
	};
}

// Returns a NEW array containing just the unique items from this array
if(!Array.prototype.unique)
{
	Array.prototype.unique = function unique()
	{
		return this.filter((item, i, a) => a.indexOf(item)===i);
	};
}

// Returns a NEW array containing just unique items from this array. Does it via sorting first
if(!Array.prototype.uniqueBySort)
{
	Array.prototype.uniqueBySort = function uniqueBySort()
	{
		this.sort();

		const out = [];
		const len = this.length-1;
		if(len>=0)
		{
			for(let i=0;i<len;i++)
			{
				if(this[i]!==this[i+1])
					out.push(this[i]);
			}

			out.push(this[len]);
		}

		return out;
	};
}

// Returns a NEW array with any "empty" elements removed. Any element that has "falsy" truthiness is removed.
if(!Array.prototype.filterEmpty)
{
	Array.prototype.filterEmpty = function filterEmpty()
	{
		return this.filter(a => !!a);
	};
}

// Reduce the array just like .reduce() but only once. Stopping once you return a non-null/non-undefined result
if(!Array.prototype.reduceOnce)
{
	Array.prototype.reduceOnce = function reduceOnce(cb)
	{
		return this.reduce((r, ...args) =>
		{
			if(r!==null)
				return r;

			const cbRes = cb(...args);
			return (typeof cbRes==="undefined" ? null : cbRes);
		}, null);
	};
}

// Same as .filter() but does the filtering in place, returning the array itself as a result for chaining purposes
if(!Array.prototype.filterInPlace)
{
	Array.prototype.filterInPlace = function filterInPlace(cb, thisArg)
	{
		let j=0, squeezing=false;
		this.forEach((e, i) =>
		{
			if(cb.call(thisArg, e, i, this))
			{
				if(squeezing)
					this[j] = e;
				j++;
			}
			else
			{
				squeezing = true;
			}
		});

		this.length = j;

		return this;
	};
}

// Same as .map() but does the mapping in place, returning the array itself as a result for chaining purposes
if(!Array.prototype.mapInPlace)
{
	Array.prototype.mapInPlace = function mapInPlace(callback, thisArg)
	{
		this.splice(0, this.length, ...this.map(callback, thisArg));
		return this;
	};
}

// Rotates the array elements by x places returning a new array
if(!Array.prototype.rotate)
{
	Array.prototype.rotate = function rotate(x=0)
	{
		return this.slice().rotateInPlace(x);
	};
}

// Rotates the array elements by x places, in place.
if(!Array.prototype.rotateInPlace)
{
	Array.prototype.rotateInPlace = function rotateInPlace(x=0)
	{
		this.unshift.apply(this, this.splice(x, this.length));	// eslint-disable-line prefer-spread
		return this;
	};
}

// Returns a NEW Array containing all the elements of the base array after any matches of any vals were removed
if(!Array.prototype.subtractAll)
{
	Array.prototype.subtractAll = function subtractAll(vals=[])
	{
		return this.filter(v => !vals.includes(v));
	};
}

// Returns a NEW Array containing all the elements of the base array after any matches of any vals were removed once
if(!Array.prototype.subtractOnce)
{
	Array.prototype.subtractOnce = function subtractOnce(vals=[])
	{
		const r = this.slice();
		vals.forEach(val => r.removeOnce(val));

		return r;
	};
}

// Batches up the values in the array into sub arrays of x length
if(!Array.prototype.batch)
{
	Array.prototype.batch = function batch(num=1, vertical)
	{
		const a = this.slice();
		const batches = [];
		if(vertical)
		{
			const rowCount = Math.ceil(a.length/num);
			for(let y=0;y<rowCount;y++)
			{
				batches.push([]);
				for(let x=0;x<num;x++)
				{
					const idx = y+(x*rowCount);
					if(idx<a.length)
						batches.last().push(a[idx]);
				}
			}
		}
		else
		{
			while(a.length>0)
				batches.push(a.splice(0, num));
		}

		return batches;
	};
}

// Replaces a particular value at index idx, returning the array for chaining
if(!Array.prototype.replaceAt)
{
	Array.prototype.replaceAt = function replaceAt(idx, v)
	{
		this[idx] = v;
		return this;
	};
}

// Returns an object where the keys are the values in the array and the values are the result of cb(val, i)
if(!Array.prototype.mapToObject)
{
	Array.prototype.mapToObject = function mapToObject(cb, thisArg)
	{
		const r = {};

		for(let i=0, len=this.length;i<len;i++)
			r[this[i]] = cb.call(thisArg, this[i], i);

		return r;
	};
}

// Replaces all values in the array that match oldVal with newVal. MODIFIES ARRAY IN PLACE
if(!Array.prototype.replaceAll)
{
	Array.prototype.replaceAll = function replaceAll(oldVal, newVal)
	{
		if(oldVal===newVal)
			return this;
		
		do
		{
			const loc = this.indexOf(oldVal);
			if(loc===-1)
				break;

			this.splice(loc, 1, newVal);
		} while(true);
		
		return this;
	};
}

// Pushes the passed in values onto the array, but only if they are not already present within the array
if(!Array.prototype.pushUnique)
{
	Array.prototype.pushUnique = function pushUnique(...vals)
	{
		for(let i=0, len=vals.length;i<len;i++)
		{
			if(!this.includes(vals[i]))
				this.push(vals[i]);
		}

		return this;
	};
}

// Pushes a sequence of numbers onto the end of an array
if(!Array.prototype.pushSequence)
{
	Array.prototype.pushSequence = function pushSequence(startAt, endAt)
	{
		if(endAt>startAt)
		{
			for(let i=startAt;i<=endAt;i++)
				this.push(i);
		}
		else if(endAt<startAt)
		{
			for(let i=startAt;i>=endAt;i--)
				this.push(i);
		}
		else
		{
			this.push(startAt);
		}

		return this;
	};
}

// Pushs the given val onto the array x times
if(!Array.prototype.pushMany)
{
	Array.prototype.pushMany = function pushMany(val, _x)
	{
		let x = _x;
		while((x--)>0)
			this.push((Array.isArray(val) ? val.clone() : (Object.isObject(val) ? Object.clone(val) : val)));

		return this;
	};
}

// Pushes copies of itself x times
if(!Array.prototype.pushCopyInPlace)
{
	Array.prototype.pushCopyInPlace = function pushCopyInPlace(_x)
	{
		const x = (_x || 1);	// eslint-disable-line unicorn/prefer-default-parameters
		const copy = this.slice();
		for(let i=0;i<x;i++)
			this.push(...copy);

		return this;
	};
}

(function _arrayAsyncFuncs()
{
	const p = (typeof window!=="undefined" && typeof window.performance!=="undefined") ? window.performance : ((typeof process!=="undefined" && typeof process.versions!=="undefined" && typeof process.versions.node!=="undefined") ? require("perf_hooks").performance : Date);	// eslint-disable-line max-len, node/global-require

	function CBRunner(_fun, _val, _i, _finish)
	{
		this.fun = _fun;
		this.val = _val;
		this.i = _i;
		this.finish = _finish;

		CBRunner.prototype.run = function run(delay)
		{
			if(delay)
				setTimeout(this.runActual.bind(this), delay);
			else
				this.runActual();
		};

		CBRunner.prototype.runActual = function runActual()
		{
			this.fun(this.val, (err, result) => this.finish(err, result, this.i), this.i);
		};
	}

	function CBIterator(_a, _fun, o={})
	{
		this.a = _a.slice();
		this.fun = _fun;
		this.atOnce = o.atOnce || 5;
		this.results = [];
		this.i = this.lastRunTime = 0;
		this.running=[];
		this.minInterval = o.minInterval || 0;
		this.tick = o.tick;
		this.scheduledTimeoutid = null;
		this.errors = [];
		this.fillFast = o.fillFast;

		CBIterator.prototype.go = function go(cb)
		{
			this.cb = cb || function _cb() {};
			if(this.a.length<1)
				return this.cb(undefined, []);

			this.next();
		};

		CBIterator.prototype.next = function next()
		{
			if(this.minInterval>0)
			{
				const timeSinceLast = p.now()-this.lastRanTime;
				if(timeSinceLast<this.minInterval)
				{
					this.scheduledTimeoutid = setTimeout(this.next.bind(this), (this.minInterval-timeSinceLast)+1);
					return;
				}
			}

			this.scheduledTimeoutid = null;

			if(this.a.length<=0)
				return;

			const curi = this.i++;

			this.running.push(curi);
			if(this.minInterval>0)
				this.lastRanTime = p.now();
			new CBRunner(this.fun, this.a.shift(), curi, this.finish.bind(this)).run();		// eslint-disable-line sembiance/tiptoe-shorter-finish-wrap

			if(this.a.length>0 && this.running.length<this.atOnce)
			{
				if(this.fillFast)
					this.next();
				else
					this.scheduledTimeoutid = setTimeout(this.next.bind(this), this.minInterval+1);
			}
		};

		CBIterator.prototype.finish = function finish(err, result, curi)
		{
			if(this.tick)
				this.tick();

			if(err)
				this.errors.push(err);

			this.results[curi] = result;
			this.running.removeOnce(curi);

			if(this.running.length===0 && this.a.length===0)
				return this.cb(this.errors.length>0 ? (this.errors.length===1 ? this.errors[0] : this.errors) : undefined, this.results);

			if(this.scheduledTimeoutid===null)
				this.next();
		};
	}

	if(!Array.prototype.serialForEach)
	{
		Array.prototype.serialForEach = function serialForEach(fun, cb, _options)
		{
			const minInterval = typeof _options==="number" ? _options : ((_options || {}).minInterval || 0);	// eslint-disable-line @typescript-eslint/prefer-optional-chain
			const tick = typeof _options==="object" ? _options.tick : undefined;
			(new CBIterator(this, fun, {atOnce : 1, minInterval, tick})).go(cb);
		};
	}

	if(!Array.prototype.parallelForEach)
	{
		Array.prototype.parallelForEach = function parallelForEach(fun, cb, o)
		{
			(new CBIterator(this, fun, typeof o==="number" ? {atOnce : o} : o)).go(cb);
		};
	}
})();
