"use strict";

if(!Array.prototype.indexOf)
{
	Array.prototype.indexOf = function (searchElement /*, fromIndex */ )
	{
		if(this===null)
			throw new TypeError();

		var t = Object(this);
		var len = t.length >>> 0;
		if(len===0)
			return -1;

		var n = 0;
		if(arguments.length>0)
		{
			n = Number(arguments[1]);
			if(n!==n)
				n = 0;
			else if(n!==0 && n !== Infinity && n !== -Infinity)
				n = (n > 0 || -1) * Math.floor(Math.abs(n));
		}

		if(n>=len)
			return -1;

		var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
		for (;k<len;k++)
		{
			if(k in t && t[k]===searchElement)
				return k;
		}

		return -1;
	};
}

if(!Array.prototype.lastIndexOf)
{
	Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/)
	{
		if(this===null)
			throw new TypeError();

		var t = Object(this);
		var len = t.length >>> 0;
		if(len===0)
			return -1;

		var n = len;
		if(arguments.length>1)
		{
			n = Number(arguments[1]);
			if(n!==n)
				n = 0;
			else if(n!==0 && n!==(1 / 0) && n!==-(1 / 0))
				n = (n > 0 || -1) * Math.floor(Math.abs(n));
		}

		var k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);
		for(;k>=0;k--)
		{
			if(k in t && t[k]===searchElement)
				return k;
		}

		return -1;
	};
}

if(!Array.prototype.filter)
{
	Array.prototype.filter = function(fun /*, thisp */)
	{
		if(this===null)
			throw new TypeError();

		var t = Object(this);
		var len = t.length >>> 0;
		if(typeof fun!=="function")
			throw new TypeError();

		var res = [];
		var thisp = arguments[1];
		for(var i=0;i<len;i++)
		{
			if(i in t)
			{
				var val = t[i];
				if(fun.call(thisp, val, i, t))
					res.push(val);
			}
		}

		return res;
	};
}

if(!Array.prototype.forEach)
{
	Array.prototype.forEach = function(callback, thisArg)
	{
		var T, k;

		if(typeof this==="undefined" || this===null)
			throw new TypeError(" this is null or not defined");

		var O = Object(this);
		var len = O.length >>> 0;

		if ({}.toString.call(callback)!=="[object Function]")
			throw new TypeError(callback + " is not a function");

		if(thisArg)
			T = thisArg;

		k = 0;

		while(k<len)
		{
			var kValue;

			if(k in O)
			{
				kValue = O[k];
				callback.call(T, kValue, k, O);
			}

			k++;
		}
	};
}

Array.prototype.forEachBatch = function(callback, numAtOnce, thisArg)
{
	var T, k;

	numAtOnce = numAtOnce || 1;

	if(typeof this==="undefined" || this===null)
		throw new TypeError(" this is null or not defined");

	var O = Object(this);
	var len = O.length >>> 0;

	if ({}.toString.call(callback)!=="[object Function]")
		throw new TypeError(callback + " is not a function");

	if(thisArg)
		T = thisArg;

	k = 0;

	var kIndexes = [];
	var kArgs = [];
	while(k<len)
	{
		var kValue;

		if(k in O)
		{
			kIndexes.push(k);
			kArgs.push(O[k]);
		}

		if(kArgs.length===numAtOnce)
		{
			kArgs.push(kIndexes, O);
			callback.apply(T, kArgs);
			kArgs = [];
			kIndexes = [];
		}

		k++;
	}

	if(kArgs.length>0)
	{
		while(kArgs.length<numAtOnce)
		{
			kArgs.push(undefined);
			kIndexes.push(undefined);
		}

		kArgs.push(kIndexes, O);
		callback.apply(T, kArgs);
	}
};

if(!Array.prototype.every)
{
	Array.prototype.every = function(fun /*, thisp */)
	{
		if(this===null)
			throw new TypeError();

		var t = Object(this);
		var len = t.length >>> 0;
		if(typeof fun!=="function")
			throw new TypeError();

		var thisp = arguments[1];
		for(var i=0;i<len;i++)
		{
			if(i in t && !fun.call(thisp, t[i], i, t))
				return false;
		}

		return true;
	};
}

if(!Array.prototype.map)
{
	Array.prototype.map = function(callback, thisArg)
	{
		var T, A, k;

		if(this===null)
			throw new TypeError(" this is null or not defined");

		var O = Object(this);
		var len = O.length >>> 0;
		if({}.toString.call(callback)!=="[object Function]")
			throw new TypeError(callback + " is not a function");

		if(thisArg)
			T = thisArg;

		A = new Array(len);
		k = 0;
		while(k<len)
		{
			var kValue, mappedValue;
			if (k in O)
			{
				kValue = O[k];
				mappedValue = callback.call(T, kValue, k, O);
				A[k] = mappedValue;
			}
			
			k++;
		}

		return A;
	};
}

if(!Array.prototype.mapToObject)
{
	Array.prototype.mapToObject = function(callback, thisArg)
	{
		var result = {};

		for(var i=0,len=this.length;i<len;i++)
		{
			result[this[i]] = callback.call(thisArg, this[i]);
		}

		return result;
	};
}

if(!Array.prototype.some)
{
	Array.prototype.some = function(fun /*, thisp */)
	{
		if(this === void 0 || this === null)
			throw new TypeError();

		var t = Object(this);
		var len = t.length >>> 0;

		if(typeof fun !== "function")
			throw new TypeError();

		var thisp = arguments[1];
		
		for(var i=0;i<len;i++)
		{
			if (i in t && fun.call(thisp, t[i], i, t))
			return true;
		}

		return false;
	};
}

if(!Array.prototype.reduce)
{
	Array.prototype.reduce = function reduce(accumulator)
	{
		var i, l = this.length, curr;

		if(typeof accumulator !== "function")
			throw new TypeError("First argument is not callable");

		if((l == 0 || l === null) && (arguments.length <= 1)) // == on purpose to test 0 and false.
			throw new TypeError("Array length is 0 and no second argument");

		if(arguments.length <= 1)
		{
			curr = this[0];
			i = 1;
		}
		else
		{
			curr = arguments[1];
		}

		for(i=i||0;i<l;++i)
		{
			if(i in this)
				curr = accumulator.call(undefined, curr, this[i], i, this);
		}

		return curr;
	};
}

if(!Array.prototype.reduceRight)
{
	Array.prototype.reduceRight = function(callbackfn /*, initialValue */)
	{
		if(this===null)
			throw new TypeError();

		var t = Object(this);
		var len = t.length >>> 0;
		if(typeof callbackfn!=="function")
			throw new TypeError();

		if(len===0 && arguments.length===1)
			throw new TypeError();

		var k = len - 1;
		var accumulator;
		if(arguments.length >= 2)
		{
			accumulator = arguments[1];
		}
		else
		{
			do
			{
				if(k in this)
				{
					accumulator = this[k--];
					break;
				}

				if(--k<0)
					throw new TypeError();
			}
			while(true);
		}

		while(k>=0)
		{
			if(k in t)
				accumulator = callbackfn.call(undefined, accumulator, t[k], k, t);
			k--;
		}

		return accumulator;
	};
}

if(!Array.prototype.replaceAll)
{
	Array.prototype.replaceAll = function(oldVal, newVal)
	{
		if(oldVal===newVal)
			return this;
		
		do
		{
			var valLoc = this.indexOf(oldVal);
			if(valLoc===-1)
				break;

			this.splice(valLoc, 1, newVal);
		} while(true);
		
		return this;
	};
}

if(!Array.prototype.contains)
{
	Array.prototype.contains = function(val)
	{
		return this.indexOf(val)!==-1;
	};
}

if(!Array.prototype.count)
{
	Array.prototype.count = function(val)
	{
		var r=0;
		for(var i=0,len=this.length;i<len;i++)
		{
			if(this[i]===val)
				r++;
		}

		return r;
	};
}

if(!Array.prototype.containsAll)
{
	Array.prototype.containsAll = function(vals)
	{
		for(var i=0,len=vals.length;i<len;i++)
		{
			if(this.indexOf(vals[i])===-1)
				return false;
		}

		return true;
	};
}

if(!Array.prototype.containsAny)
{
	Array.prototype.containsAny = function(vals)
	{
		vals = Array.toArray(vals);
		for(var i=0,len=vals.length;i<len;i++)
		{
			if(this.indexOf(vals[i])!==-1)
				return true;
		}

		return false;
	};
}

if(!Array.prototype.unique)
{
	Array.prototype.unique = function()
	{
		return this.filter(function(item, i, a)
		{
			return a.indexOf(item)===i;
		});
	};
}

if(!Array.prototype.multiSort)
{
	Array.prototype.multiSort = function(sorters, reverse)
	{
		sorters = Array.toArray(sorters);

		this.sort(function(a, b)
		{
			for(var i=0,len=sorters.length;i<len;i++)
			{
				var sort = sorters[i];

				var aVal = sort(a);
				var bVal = sort(b);

				if(typeof aVal==="string")
				{
					var stringCompareResult = aVal.localeCompare(bVal);
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

if(!Array.prototype.uniqueBySort)
{
	Array.prototype.uniqueBySort = function()
	{
		this.sort();

		var out = [];
		var len = this.length-1;
		if(len>=0)
		{
			for(var i=0;i<len;i++)
			{
				if(this[i]!==this[i+1])
				{
					out.push(this[i]);
				}
			}

			out.push(this[len]);
		}

		return out;
	};
}

if(!Array.prototype.pickRandom)
{
	Array.prototype.pickRandom = function(num, excludedItems)
	{
		if(typeof num==="undefined")
			return this[Math.floor(Math.random()*this.length)];

		if(num>=this.length)
			return this;

		var a=this;
		var excludedIndexes=[];
		if(excludedItems)
		{
			Array.toArray(excludedItems).forEach(function(excludedItem)
			{
				if(a.contains(excludedItem))
					excludedIndexes.push(a.indexOf(excludedItem));
			});
		}

		var pickedIndexes=[];
		for(var i=0;i<num;i++)
		{
			pickedIndexes.push(Math.randomIntExcluding(0, (this.length-1), pickedIndexes.concat(excludedIndexes)));
		}

		return pickedIndexes.map(function(pickedIndex) { return a[pickedIndex]; });
	};
}

if(!Array.isArray)
{
	Array.isArray = function(arg)
	{
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}

if(!Array.toArray)
{
	Array.toArray = function(arg)
	{
		if(Array.isArray(arg))
			return arg;

		if(Object.isObject(arg) && "length" in arg)
		{
			var a=[];
			for(var i=0,len=arg.length;i<len;i++)
			{
				a.push(arg[i]);
			}
			return a;
		}
	
		return [arg];
	};
}

if(!Array.prototype.pushUnique)
{
	Array.prototype.pushUnique = function()
	{
		for(var i=0;i<arguments.length;i++)
		{
			if(this.indexOf(arguments[i])===-1)
				this.push(arguments[i]);
		}
	};
}

if(!Array.prototype.pushSequence)
{
	Array.prototype.pushSequence = function(startAt, endAt)
	{
		var i;
		if(endAt>startAt)
		{
			for(i=startAt;i<=endAt;i++)
			{
				this.push(i);
			}
		}
		else if(endAt<startAt)
		{
			for(i=startAt;i>=endAt;i--)
			{
				this.push(i);
			}
		}
		else
		{
			this.push(startAt);
		}

		return this;
	};
}

if(!Array.prototype.pull)
{
	Array.prototype.pull = function(val)
	{
		var loc = this.indexOf(val);
		if(loc===-1)
			return undefined;
		
		return this.splice(loc, 1)[0];
	};
}

if(!Array.prototype.remove)
{
	Array.prototype.remove = function(val)
	{
		var loc = this.indexOf(val);
		if(loc===-1)
			return undefined;
		
		this.splice(loc, 1);

		return this;
	};
}

if(!Array.prototype.removeAll)
{
	Array.prototype.removeAll = function(vals)
	{
		vals = Array.toArray(vals);
		
		var a=this;
		vals.forEach(function(val)
		{
			while(a.remove(val)) { }
		});

		return this;
	};
}

if(!Array.prototype.pullAll)
{
	Array.prototype.pullAll = function(vals)
	{
		vals = Array.toArray(vals);
		var results=[];
		
		var a=this;
		vals.forEach(function(val)
		{
			var result;
			do
			{
				result = a.pull(val);
				if(typeof result!=="undefined")
					results.push(result);
			} while(result);
		});
		
		return results;
	};
}

if(!Array.prototype.equals)
{
	Array.prototype.equals = function(a)
	{
		if(this.length!==a.length)
			return false;
		
		var i=0, len=this.length;
		for(;i<len;i++)
		{
			if(a[i]!==this[i])
				return false;
		}

		return true;
	};
}

Array.prototype.rotate = (function()
{
	var push = Array.prototype.push, splice = Array.prototype.splice;

	return function(count)
	{
		var len = this.length >>> 0;	// convert to uint
		count = count >> 0;				// convert to int

		// convert count to value in range [0, len[
		count = ((count % len) + len) % len;

		// use splice.call() instead of this.splice() to make function generic
		push.apply(this, splice.call(this, 0, count));
		return this;
	};
})();


if(!Array.prototype.shuffle)
{
	Array.prototype.shuffle = function()
	{
		var m = this.length, t, i;
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

if(!Array.prototype.mutate)
{
	Array.prototype.mutate = function(fun, startRes)
	{
		if(this===null)
			throw new TypeError();
		if(typeof fun!=="function")
			throw new TypeError();

		var res = startRes;
		for(var i=0,len=this.length;i<len;i++)
		{
			res = fun(this[i], res, i, this);
		}

		return res;
	};
}

if(!Array.prototype.mutateOnce)
{
	Array.prototype.mutateOnce = function(fun)
	{
		if(this===null)
			throw new TypeError();
		if(typeof fun!=="function")
			throw new TypeError();

		for(var i=0,len=this.length;i<len;i++)
		{
			var res = fun(this[i], i, this);
			if(typeof res!=="undefined")
				return res;
		}
	};
}

if(!Array.prototype.mutateRightOnce)
{
	Array.prototype.mutateRightOnce = function(fun)
	{
		if(this===null)
			throw new TypeError();
		if(typeof fun!=="function")
			throw new TypeError();

		for(var i=(this.length-1);i>=0;i--)
		{
			var res = fun(this[i], i, this);
			if(typeof res!=="undefined")
				return res;
		}
	};
}

if(!Array.prototype.mutateRight)
{
	Array.prototype.mutateRight = function(fun, startRes)
	{
		if(this===null)
			throw new TypeError();
		if(typeof fun!=="function")
			throw new TypeError();

		var res = startRes;
		for(var i=(this.length-1);i>=0;i--)
		{
			res = fun(this[i], res, i, this);
		}
		return res;
	};
}

if(!Array.prototype.clear)
{
	Array.prototype.clear = function()
	{
		this.length = 0;
	};
}

if(!Array.prototype.pushAll)
{
	Array.prototype.pushAll = function(arr)
	{
		this.push.apply(this, arr);
		
		return this;
	};
}

// Sums all the numbers in the array
if(!Array.prototype.sum)
{
	Array.prototype.sum = function()
	{
		if(!this.length)
			return 0;
		
		return this.reduce(function(p,c,i) { return (+p || 0) + (+c || 0); });
	};
}

// Returns an average of all the numbers in the array (arithmetic mean)
if(!Array.prototype.average)
{
	Array.prototype.average = function()
	{
		return this.sum()/this.length;
	};
}

// Returns the median of all the numbers in the array (middle number)
if(!Array.prototype.median)
{
	Array.prototype.median = function()
	{
		var w = this.clone().sort(function(a,b) {return a-b;} );
		var half = Math.floor(w.length/2);

		if(w.length % 2)
			return w[half];
		else
			return (w[half-1] + w[half]) / 2.0;
	};
}

// On average, how far from the average is each number in our set?
// Pass true to calc a sample variance (if the data only represents a small sample of the whole of possible data)
if(!Array.prototype.variance)
{
	Array.prototype.variance = function(sample)
	{
		var avg = this.average();
		return (this.map(function(n) { return ((n-avg)*(n-avg)); }).sum() / (this.length - (sample ? 1 : 0)));
	};
}

// A better way of expressing variance. Basically how much variation exists from the average
if(!Array.prototype.standardDeviation)
{
	Array.prototype.standardDeviation = function(sample)
	{
		return Math.sqrt(this.variance(sample));
	};
}

if(!Array.prototype.flatten)
{
	Array.prototype.flatten = function(sep)
	{
		var result = [];
		this.forEach(function(a, i)
		{
			if(i>0 && sep)
				result.push(sep);

			result = result.concat(a);
		});

		return result;
	};
}

if(!Array.prototype.filterEmpty)
{
	Array.prototype.filterEmpty = function()
	{
		return this.filter(function(a) { return !!a; });
	};
}

if(!Array.prototype.subtract)
{
	Array.prototype.subtract = function(a)
	{
		var result = this.slice();
		a.forEach(function(o) { result.remove(o); });
		return result;
	};
}


if(!Array.prototype.last)
{
	Array.prototype.last = function()
	{
		return this[this.length-1];
	};
}

if(!Array.prototype.clone)
{
	Array.prototype.clone = function(deep)
	{
		var result = [];
		var src = this;
		for(var i=0,len=src.length;i<len;i++)
		{
			if(deep)
				result.push((Array.isArray(src[i]) ? src[i].clone(deep) : (Object.isObject(src[i]) ? Object.clone(src[i], deep) : src[i])));
			else
				result.push(src[i]);
		}

		return result;
	};
}

function CBRunner(_fun, _val, _i, _finish)
{
	this.fun = _fun;
	this.val = _val;
	this.i = _i;
	this.finish = _finish;

	CBRunner.prototype.run = function()
	{
		this.fun(this.val, function(err, result) { this.finish(err, result, this.i); }.bind(this), this.i);
	};
}

function CBIterator(_a, _fun, _atOnce)
{
	this.a = _a.clone();
	this.fun = _fun;
	this.atOnce = _atOnce || 1;
	this.results = [];
	this.i=0;
	this.running=[];

	CBIterator.prototype.go = function(cb)
	{
		this.cb = cb || function(){};
		if(this.a.length<1)
			return this.cb(undefined, []);

		this.next();
	};

	CBIterator.prototype.next = function()
	{
		var toRun = [];
		while(this.running.length<this.atOnce && this.a.length>0)
		{
			var _i = this.i++;
			this.running.push(_i);
			toRun.push(new CBRunner(this.fun, this.a.shift(), _i, this.finish.bind(this)));
		}

		while(toRun.length)
		{
			toRun.shift().run();
		}
	};

	CBIterator.prototype.finish = function(err, result, _i)
	{
		if(err)
			return this.cb(err, this.results);

		this.results[_i] = result;
		this.running.remove(_i);

		if(this.running.length===0 && this.a.length===0)
			return this.cb(undefined, this.results);

		this.next();
	};
}

if(!Array.prototype.serialForEach)
{
	Array.prototype.serialForEach = function(fun, cb)
	{
		(new CBIterator(this, fun, 1)).go(cb);
	};
}

if(!Array.prototype.parallelForEach)
{
	Array.prototype.parallelForEach = function(fun, cb, atOnce)
	{
		(new CBIterator(this, fun, atOnce||3)).go(cb);
	};
}

if(!Array.prototype.pushMany)
{
	Array.prototype.pushMany = function(val, count)
	{
		while((count--)>0)
		{
			this.push((Array.isArray(val) ? val.clone(true) : (Object.isObject(val) ? Object.clone(val, true) : val)));
		}

		return this;
	};
}

if(!Array.prototype.batch)
{
	Array.prototype.batch = function(count)
	{
		var batches = [];
		while(this.length>0)
		{
			batches.push(this.splice(0, count));
		}

		return batches;
	};
}

if(!Array.prototype.min)
{
	Array.prototype.min = function()
	{
		if(this.length<1)
			return;

		var min=this[0];
		for(var i=1;i<this.length;i++)
		{
			min=Math.min(min, this[i]);
		}
		return min;
	};
}

if(!Array.prototype.max)
{
	Array.prototype.max = function()
	{
		if(this.length<1)
			return;

		var max=this[0];
		for(var i=1;i<this.length;i++)
		{
			max=Math.max(max, this[i]);
		}
		return max;
	};
}
