"use strict";

const assert = require("assert"),
	path = require("path");

require(path.join(__dirname, "..", "Math.js"));
require(path.join(__dirname, "..", "Number.js"));
require(path.join(__dirname, "..", "Array.js"));
require(path.join(__dirname, "..", "Object.js"));


// Vars to use below
let a=null, b=null, c=null, r=null, r2=null, TESTNAME=null;

TESTNAME = "isObject";
a = {abc : 123, hello : "world"};
b = {};
c = [];
assert.ok(Object.isObject(a), TESTNAME);
assert.ok(Object.isObject(b), TESTNAME);
assert.ok(!Object.isObject(c), TESTNAME);

TESTNAME = "equals";
a = {abc : 123, hello : "world"};
b = {hello : "world", abc : 123};
c = {goobye : "world", 123 : "abc"};
assert.ok(Object.equals(a, b), TESTNAME);
assert.ok(!Object.equals(a, c), TESTNAME);

TESTNAME = "clone";
const sub = {red : "apple"};
a = {abc : 123, hello : "world", kitty : true, sub};
r = {abc : 123, hello : "world", kitty : true, sub};
r2 = {abc : 123, hello : "world", sub};
assert.ok(Object.equals(r, Object.clone(a)), TESTNAME);
assert.notStrictEqual(Object.clone(a).sub, sub, TESTNAME);
assert.ok(Object.equals(r2, Object.clone(a, ["kitty"])), TESTNAME);
assert.strictEqual(Object.clone(a, undefined, true).sub, sub, TESTNAME);

TESTNAME = "values";
a = {abc : 123, hello : "world"};
r = [123, "world"];
assert.ok(r.containsAll(Object.values(a)), TESTNAME);

TESTNAME = "forEach";
a = {abc : 123, hello : "world"};
r = ["hello", 123, "world", "abc"];
r2 = [];
Object.forEach(a, (k, v) => r2.push(k, v));
assert.ok(r.containsAll(r2), TESTNAME);

TESTNAME = "filter";
a = {abc : 123, hello : "world", green : true};
r = {hello : "world"};
assert.ok(Object.equals(r, Object.filter(a, (k, v) => typeof v==="string")), TESTNAME);
assert.ok(Object.equals(r, a), TESTNAME);

TESTNAME = "every";
a = {abc : 123, jon : "kitty", other : true};
b = {abc : 123, jon : "kitty", other : 999};
assert.ok(Object.every(a, (k, v) => k.length===3 || typeof v==="boolean"), TESTNAME);
assert.ok(!Object.every(b, (k, v) => k.length===3 || typeof v==="boolean"), TESTNAME);

TESTNAME = "map";
a = {hello : "world", jon : "super kitty"};
r = {"super kitty" : "jon", world : "hello"};
r2 = {hello : 5, jon : 11};
assert.ok(Object.equals(r, Object.map(a, (k, v) => [v, k])), TESTNAME);
assert.ok(!Object.equals(r, a), TESTNAME);
assert.ok(Object.equals(r2, Object.map(a, (k, v) => v.length)), TESTNAME);

TESTNAME = "swapKeyValues";
a = {hello : "world", jon : "super kitty"};
r = {"super kitty" : "jon", world : "hello"};
assert.ok(Object.equals(r, Object.swapKeyValues(a)), TESTNAME);
assert.ok(!Object.equals(r, a), TESTNAME);

TESTNAME = "entries";
a = {hello : "world", jon : "super kitty", abc : 123, kittyIsCute : true};
r = [["hello", "world"], ["jon", "super kitty"], ["abc", 123], ["kittyIsCute", true]];
assert.ok(r.equals(Object.entries(a)), TESTNAME);

TESTNAME = "toArray";
a = {hello : "world", jon : "super kitty", abc : 123, kittyIsCute : true};
r = [["hello", "world"], ["jon", "super kitty"], ["abc", 123], ["kittyIsCute", true]];
assert.ok(r.equals(Object.toArray(a)), TESTNAME);

TESTNAME = "merge";
a = {hello : "world", jon : "super kitty"};
b = {abc : 123, kittyIsCute : true, jon : "fluffy"};
r = {hello : "world", jon : "fluffy", abc : 123, kittyIsCute : true};
r2 = {hello : "world", jon : "fluffy super kitty", kittyIsCute : true};
assert.ok(Object.equals(r, Object.merge(a, b)), TESTNAME);
assert.ok(Object.equals(r, a), TESTNAME);
a = {hello : "world", jon : "super kitty"};
b = {abc : 123, kittyIsCute : true, jon : "fluffy"};
r = {hello : "world", jon : "fluffy super kitty", kittyIsCute : true};
assert.ok(Object.equals(r, Object.merge(a, b, (v1, v2, k) => (k==="jon" ? (v2 + " " + v1) : v2), ["hello", "jon", "kittyIsCute"])), TESTNAME);
assert.ok(Object.equals(r, a), TESTNAME);

TESTNAME = "renameKey";
a = {hello : "world", abc : 123, kittyIsCute : true};
r = {hello : "world", xyz : 123, kittyIsCute : true};
assert.ok(Object.equals(r, Object.renameKey(a, "abc", "xyz")), TESTNAME);

TESTNAME = "renameKey";
a = {hello : "world", abc : 123, kittyIsCute : true};
r = ["world", "hello", 123, "abc", true, "kittyIsCute"];
assert.ok(r.containsAll(Object.reduce(a, (k, v, res) => { res.push(v, k); return res; }, [])));

TESTNAME = "renameKey";
a = {hello : "world", abc : 123, kittyIsCute : true};
r = ["world", "hello"];
assert.ok(r.containsAll(Object.reduceOnce(a, (k, v, res) => { res.push(v, k); return res; }, [])));

TESTNAME = "clear";
a = {hello : "world", abc : 123, kittyIsCute : true};
r = {};
assert.strictEqual(JSON.stringify(r), JSON.stringify(Object.clear(a)));
assert.strictEqual(JSON.stringify(r), JSON.stringify(a));

console.log("ALL TESTS PASSED");

