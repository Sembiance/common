"use strict";

const assert = require("assert"),
	path = require("path");

require(path.join(__dirname, "..", "Math.js"));
require(path.join(__dirname, "..", "Number.js"));
require(path.join(__dirname, "..", "Object.js"));
require(path.join(__dirname, "..", "Array.js"));


// Arrays to use below
let a=null, b=null, c=null, x=null, r=null, r2=null, r3=null, TESTNAME=null;

TESTNAME = "isArray";
a = [1, 2, 3, 4, 5];
x = {notArray : true};
assert.ok(Array.isArray(a), TESTNAME);
assert.ok(!Array.isArray(x), TESTNAME);

TESTNAME = "toArray";
a = 3;
b = [3];
r = [3];
assert.ok(r.equals(Array.toArray(a)), TESTNAME);
assert.ok(r.equals(Array.toArray(b)), TESTNAME);

TESTNAME = "equals";
a = [1, 2, 3, 4, 5];
b = [1, 2, 3, 4, 5];
x = [1, 2, 3];
assert.ok(a.equals(b), TESTNAME);
assert.ok(!a.equals(x), TESTNAME);

TESTNAME = "clone";
a = [1, 2, 3, 4, 5];
r = [1, 2, 3, 4, 5];
r2 = [1, 2, 3, 4, 5, 6];
assert.ok(r.equals(a.clone()), TESTNAME);
a.push(6);
assert.ok(r2.equals(a), TESTNAME);

TESTNAME = "filter && filterInPlace";
a = [1, 2, 3, 4, 5];
b = [1, 2, 3, 4, 5];
assert.ok(a.filter(v => v>=3).equals(b.filterInPlace(v => v>=3)), TESTNAME);
assert.ok(a.filter(v => v>=3).equals(b), TESTNAME);

TESTNAME = "map && mapInPlace";
a = [1, 2, 3, 4, 5];
b = [1, 2, 3, 4, 5];
r = [2, 4, 6, 8, 10];
assert.ok(Object.equals(a.map(v => v*2), b.mapInPlace(v => v*2)), TESTNAME);
assert.ok(Object.equals(a.map(v => v*2), b), TESTNAME);
assert.ok(Object.equals(b, r), TESTNAME);

TESTNAME = "mapToObject";
a = ["red", "green", "yellow"];
r = {red : 3, green : 5, yellow : 6};
assert.ok(Object.equals(a.mapToObject(v => v.length), r), TESTNAME);

TESTNAME = "contains";
a = [1, 2, 3, 4, 5];
assert.ok(a.contains(3), TESTNAME);
assert.ok(!a.contains(7), TESTNAME);

TESTNAME = "containsAll";
a = [1, 2, 3, 4, 5];
b = [2, 4];
c = 3;
x = [1, 2, 3, 4, 5, 7];
assert.ok(a.containsAll(b), TESTNAME);
assert.ok(a.containsAll(c), TESTNAME);
assert.ok(!a.containsAll(x), TESTNAME);

TESTNAME = "containsAny";
a = [1, 2, 3, 4, 5];
b = [2, 4];
c = 3;
x = [7, 8, 9];
assert.ok(a.containsAny(b), TESTNAME);
assert.ok(a.containsAny(c), TESTNAME);
assert.ok(!a.containsAny(x), TESTNAME);

TESTNAME = "count";
a = [1, 1, 2, 2, 2, 3];
assert.strictEqual(a.count(2), 3, TESTNAME);
assert.notEqual(a.count(3), 2, TESTNAME);

TESTNAME = "remove";
a = [1, 2, 3, 3, 3, 4, 5];
b = 3;
c = 7;
r = [1, 2, 3, 3, 4, 5];
assert.ok(r.equals(a.remove(b)), TESTNAME);
a = [1, 2, 3, 3, 3, 4, 5];
assert.ok(a.equals(a.remove(c)), TESTNAME);

TESTNAME = "removeAll";
a = [1, 2, 3, 3, 3, 4, 5];
b = 3;
r = [1, 2, 4, 5];
assert.ok(r.equals(a.removeAll(b)), TESTNAME);
assert.ok(r.equals(a), TESTNAME);
a = [1, 2, 3, 3, 3, 4, 5];
c = [3, 4];
r = [1, 2, 5];
assert.ok(a.equals(a.removeAll(c)), TESTNAME);
assert.ok(r.equals(a), TESTNAME);
a = [1, 2, 3, 3, 3, 4, 5];
assert.ok(a.equals(a.removeAll(7)), TESTNAME);
assert.ok(a.equals(a.removeAll([7, 8, 9])), TESTNAME);

TESTNAME = "clear";
a = [1, 2, 3, 4, 5];
r = [];
assert.ok(r.equals(a.clear()), TESTNAME);
assert.ok(r.equals(a), TESTNAME);

TESTNAME = "sum";
a = [1, 2, 3, 4, 5];
r = 15;
assert.strictEqual(r, a.sum(), TESTNAME);

TESTNAME = "average";
a = [1, 2, 4, 4, 5];
r = 3.2;
assert.strictEqual(r, a.average(), TESTNAME);

TESTNAME = "median";
a = [1, 3, 4, 4, 5];
r = 4;
assert.strictEqual(r, a.median(), TESTNAME);

TESTNAME = "variance";
a = [1, 2, 3, 4, 5];
r = 2;
assert.strictEqual(r, a.variance(), TESTNAME);
r = 2.5;
assert.strictEqual(r, a.variance(true), TESTNAME);

TESTNAME = "standardDeviation";
a = [1, 2, 3, 4, 5];
r = 1.4142135623730951;
assert.strictEqual(r, a.standardDeviation(), TESTNAME);
r = 1.5811388300841898;
assert.strictEqual(r, a.standardDeviation(true), TESTNAME);

TESTNAME = "min";
a = [1, 2, 3, 4, 5];
r = 1;
assert.strictEqual(r, a.min(), TESTNAME);

TESTNAME = "max";
a = [1, 2, 3, 4, 5];
r = 5;
assert.strictEqual(r, a.max(), TESTNAME);

TESTNAME = "unique";
a = [1, 2, 2, 3, 3, 3, 4, 5, 5];
b = [1, 2, 2, 3, 3, 3, 4, 5, 5];
r = [1, 2, 3, 4, 5];
assert.ok(r.equals(a.unique()), TESTNAME);
assert.ok(a.equals(b), TESTNAME);

TESTNAME = "uniqueBySort";
a = [1, 2, 2, 3, 3, 3, 4, 5, 5];
b = [1, 2, 2, 3, 3, 3, 4, 5, 5];
r = [1, 2, 3, 4, 5];
assert.ok(r.equals(a.uniqueBySort()), TESTNAME);
assert.ok(a.equals(b), TESTNAME);

TESTNAME = "pushAll";
a = [1, 2, 3];
b = [4, 5];
r = [1, 2, 3, 4, 5];
assert.ok(r.equals(a.pushAll(b)), TESTNAME);
assert.ok(r.equals(a), TESTNAME);

TESTNAME = "pushUnique";
a = [1, 2, 3, 4, 5];
r = [1, 2, 3, 4, 5, 7, 9];
assert.ok(r.equals(a.pushUnique(1, 7, 9)), TESTNAME);
assert.ok(r.equals(a), TESTNAME);

TESTNAME = "pushSequence";
a = [1, 2, 3];
r = [1, 2, 3, 4, 5, 6];
assert.ok(r.equals(a.pushSequence(4, 6)), TESTNAME);
assert.ok(r.equals(a), TESTNAME);
a = [];
r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
assert.ok(r.equals(a.pushSequence(0, 9)), TESTNAME);
assert.ok(r.equals(a), TESTNAME);
a = [1, 2, 3];
r = [1, 2, 3, 2, 1, 0];
assert.ok(r.equals(a.pushSequence(2, 0)), TESTNAME);
assert.ok(r.equals(a), TESTNAME);

TESTNAME = "pushMany";
a = [1, 2, 3, 4, 5, 6];
r = [1, 2, 3, 4, 5, 6, 7, 7, 7];
assert.ok(r.equals(a.pushMany(7, 3)), TESTNAME);
assert.ok(r.equals(a), TESTNAME);

TESTNAME = "pushCopyInPlace";
a = [7];
r = [7, 7, 7];
assert.ok(r.equals(a.pushCopyInPlace(2)), TESTNAME);

TESTNAME = "pull";
a = [1, 2, 3, 3, 4, 5];
b = 3;
r = [1, 2, 3, 4, 5];
assert.strictEqual(b, a.pull(b), TESTNAME);
assert.ok(r.equals(a), TESTNAME);

TESTNAME = "pullAll";
a = [1, 2, 3, 3, 4, 5];
b = 3;
r = [3, 3];
r2 = [1, 2, 4, 5];
assert.ok(r.equals(a.pullAll(b)), TESTNAME);
assert.ok(r2.equals(a), TESTNAME);
a = [1, 2, 3, 3, 4, 5];
b = [3, 5];
r = [3, 3, 5];
r2 = [1, 2, 4];
assert.ok(r.equals(a.pullAll(b)), TESTNAME);
assert.ok(r2.equals(a), TESTNAME);

TESTNAME = "last";
a = [1, 2, 3, 4, 5];
r = 5;
assert.strictEqual(r, a.last(), TESTNAME);

TESTNAME = "subtract";
a = [1, 2, 3, 4, 5];
b = [2, 4];
r = [1, 3, 5];
r2 = [1, 2, 3, 4, 5];
assert.ok(r.equals(a.subtract(b)), TESTNAME);
assert.ok(r2.equals(a), TESTNAME);

TESTNAME = "filterEmpty";
a = [1, 0, 0, 2, undefined, undefined, 3, null, null, 4, "", "", 5, NaN];
r = [1, 2, 3, 4, 5];
assert.ok(r.equals(a.filterEmpty()), TESTNAME);

TESTNAME = "flatten";
a = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10, [11, 12]]], 13, 14];
r = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, [11, 12]], 13, 14];
r2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [11, 12], 13, 14];
r3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
assert.ok(r.equals(a.flatten()), TESTNAME);
assert.ok(!r.equals(a), TESTNAME);
assert.ok(r2.equals(a.flatten(2)), TESTNAME);
assert.ok(r3.equals(a.flatten(3)), TESTNAME);

TESTNAME = "replaceAt";
a = [1, 2, 3, 4, 5];
r = [1, 2, 7, 4, 5];
assert.ok(r.equals(a.replaceAt(2, 7)), TESTNAME);
assert.ok(r.equals(a), TESTNAME);

TESTNAME = "reduceOnce";
a = {a : "apple", b : "banana", c : "cocktail"};
b = ["x", "y", "b", "z"];
r = "banana";
assert.strictEqual(r, b.reduceOnce(v => (a.hasOwnProperty(v) ? a[v] : undefined)), TESTNAME);
assert.strictEqual(r, b.reduce((res, v) => (!r && a.hasOwnProperty(v) ? a[v] : r), null), TESTNAME);

TESTNAME = "replaceAll";
a = [1, 2, 3, 3, 3, 4, 5];
r = [1, 2, 7, 7, 7, 4, 5];
assert.ok(r.equals(a.replaceAll(3, 7)), TESTNAME);
assert.ok(r.equals(a), TESTNAME);

TESTNAME = "multiSort";
a = [{name : "d", value : 999}, {name : "a", value : 7}, {name : "b", value : 10}, {name : "a", value : 9}];
r = [{name : "a", value : 9}, {name : "a", value : 7}, {name : "b", value : 10}, {name : "d", value : 999}];
assert.ok(r.equals(a.multiSort([v => v.name, v => v.value], [false, true])), TESTNAME);
assert.ok(r.equals(a), TESTNAME);
a = [{name : "d", value : 999}, {name : "a", value : 7}, {name : "b", value : 10}, {name : "a", value : 9}];
r = [{name : "d", value : 999}, {name : "b", value : 10}, {name : "a", value : 9}, {name : "a", value : 7}];
assert.ok(r.equals(a.multiSort([v => v.name, v => v.value], true)), TESTNAME);
assert.ok(r.equals(a), TESTNAME);

TESTNAME = "pickRandom";
a = [1];
r = 1;
assert.strictEqual(r, a.pickRandom(1, 7), TESTNAME);
assert.strictEqual(r, a.pickRandom(1), TESTNAME);
a = [].pushSequence(0, 1000);
r = [].pushSequence(0, 1000);
assert.ok(!r.equals(a.pickRandom(1000)), TESTNAME);	// In theory this could shuffle all 10,000 elements the same, but highly unlikely.
assert.ok(r.equals(a), TESTNAME);
a = [1, 2, 3, 4, 5];
assert.ok(Number.isNumber(a.pickRandom()), TESTNAME);
assert.ok(a.contains(a.pickRandom()), TESTNAME);
assert.ok(Number.isNumber(a.pickRandom(1)), TESTNAME);
assert.ok(a.contains(a.pickRandom(1)), TESTNAME);
assert.strictEqual(3, a.pickRandom(3).length, TESTNAME);
assert.ok(a.containsAll(a.pickRandom(3)), TESTNAME);
for(let i=0;i<10000;i++)
{
	assert.ok(!a.pickRandom(4, 3).contains(3), TESTNAME);
	assert.ok(!a.pickRandom(3, [1, 5]).containsAny([1, 5]), TESTNAME);
}

TESTNAME = "shuffle";
a = [].pushSequence(0, 1000);
r = [].pushSequence(0, 1000);
assert.ok(!r.equals(a.shuffle()), TESTNAME);	// In theory this could shuffle all 1,000 elements the same, but highly unlikely.
assert.ok(!r.equals(a), TESTNAME);

TESTNAME = "find";
a = [1, 2, 3, 4, 5];
assert.strictEqual(3, a.find(v => v>2 && v<4), TESTNAME);
assert.strictEqual(3, a.find((v, i) => i===2), TESTNAME);

TESTNAME = "rotate";
a = [1, 2, 3, 4, 5];
r = [4, 5, 1, 2, 3];
assert.ok(r.equals(a.rotate(3)), TESTNAME);

TESTNAME = "batch";
a = [1, 2, 3, 4, 5, 6, 7];
r = [[1, 2], [3, 4], [5, 6], [7]];
assert.ok(r.equals(a.batch(2)), TESTNAME);
assert.ok(!r.equals(a), TESTNAME);

TESTNAME = "serialForEach";
a = [1, 2, 3, 4, 5];
r = [1, 3, 6, 10, 15];
r2=0;
a.serialForEach((v, cb, i) =>
{
	r2 += v;
	assert.strictEqual(r[i], r2, TESTNAME);
	cb();
}, () => assert.strictEqual(r2, 15, TESTNAME));

TESTNAME = "parallelForEach";
a = [1, 2, 3, 4, 5];
r2=0;
a.parallelForEach((v, cb) =>
{
	r2 += v;
	cb();
}, () => assert.strictEqual(r2, 15, TESTNAME), 3);

console.log("ALL TESTS PASSED");

