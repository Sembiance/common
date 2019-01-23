"use strict";

const assert = require("assert"),
	path = require("path");

require(path.join(__dirname, "..", "Array.js"));
require(path.join(__dirname, "..", "Object.js"));
require(path.join(__dirname, "..", "Math.js"));
require(path.join(__dirname, "..", "Number.js"));
require(path.join(__dirname, "..", "String.js"));


// Vars to use below
let a=null, b=null, r=null, r2=null, TESTNAME=null;

TESTNAME = "startsWith";
a = "Hello there my good Kitty";
assert.ok(a.startsWith("Hello"), TESTNAME);

TESTNAME = "endsWith";
a = "Hello there my good Kitty";
assert.ok(a.endsWith("Kitty"), TESTNAME);

TESTNAME = "includes";
a = "Hello there my good Kitty";
assert.ok(a.includes("good"), TESTNAME);

TESTNAME = "reverse";
a = "hello";
r = "olleh";
assert.strictEqual(r, a.reverse(), TESTNAME);

TESTNAME = "replaceAll";
a = "hello world hello kitty hello fluffy";
r = "abc world abc kitty abc fluffy";
assert.strictEqual(r, a.replaceAll("hello", "abc"), TESTNAME);

TESTNAME = "replaceAll";
a = "hello world";
r = "hll wrld";
assert.strictEqual(r, a.strip("aeiou"), TESTNAME);
assert.strictEqual(r, a.strip(["a", "e", "i", "o", "u"]), TESTNAME);

TESTNAME = "capitalize";
a = "hello";
r = "Hello";
assert.strictEqual(r, a.capitalize(), TESTNAME);

TESTNAME = "toProperCase";
a = "hello THERE my good Friend";
r = "Hello There My Good Friend";
assert.strictEqual(r, a.toProperCase(), TESTNAME);

TESTNAME = "toArray";
a = "hello";
r = ["h", "e", "l", "l", "o"];
assert.ok(r.equals(a.toArray()), TESTNAME);

TESTNAME = "repeat";
a = "hi";
r = "hihihihihi";
r2 = "hi hi hi hi";
assert.strictEqual(r, a.repeat(5), TESTNAME);
assert.strictEqual(r2, a.repeat(4, " "), TESTNAME);

TESTNAME = "repeatAsArray";
a = "hi";
r = ["hi", "hi", "hi"];
assert.ok(r.equals(a.repeatAsArray(3)), TESTNAME);

TESTNAME = "padStart";
a = "hello";
r = "---hello";
assert.strictEqual(r, a.padStart(8, "-"), TESTNAME);

TESTNAME = "padEnd";
a = "hello";
r = "hello_____";
assert.strictEqual(r, a.padEnd(10, "_"), TESTNAME);

TESTNAME = "lastIndexOf";
a = "hello world";
b = "hehehe";
r = 7;
r2 = 4;
assert.strictEqual(r, a.lastIndexOf("o"), TESTNAME);
assert.strictEqual(r2, b.lastIndexOf("he"), TESTNAME);

TESTNAME = "replaceCharAt";
a = "hello";
r = "hEllo";
assert.strictEqual(r, a.replaceCharAt(1, "E"), TESTNAME);

TESTNAME = "shortenBy";
a = "hello world";
r = "hello";
assert.strictEqual(r, a.shortenBy(6), TESTNAME);

TESTNAME = "isWhiteSpace";
a = "	  \n\r";
b = "_	  \n\r";
assert.ok(a.isWhiteSpace(), TESTNAME);
assert.ok(!b.isWhiteSpace(), TESTNAME);

TESTNAME = "innerTrim";
a = "hello  	\nbig  bad  world";
r = "hello big bad world";
assert.strictEqual(r, a.innerTrim(), TESTNAME);

console.log("ALL TESTS PASSED");

