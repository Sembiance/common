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

if(!Array.prototype.contains)
{
	Array.prototype.contains = function(i)
	{
		return this.indexOf(i)!==-1;
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

if(!Array.prototype.unique)
{
	Array.prototype.unique = function(fun)
	{
		return this.filter(function(item, i, a)
		{
			return a.indexOf(item)===i;
		});
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
	Array.isArray = function (arg)
	{
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}

if(!Array.toArray)
{
	Array.toArray = function (arg)
	{
		return Array.isArray(arg) ? arg : [arg];
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

// On average, how far from the average is each number in our set?
// Pass true to calc a sample variance
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
		return this.filter(function(o) { return a.indexOf(o)===-1; });
	};
}

// Array.prototype.pushMany is in base.js
