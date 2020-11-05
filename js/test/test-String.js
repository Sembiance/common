"use strict";

const assert = require("assert");

require("../Array.js");
require("../Object.js");
require("../Math.js");
require("../Number.js");
require("../String.js");


// Vars to use below
let a=null, b=null, c=null, d=null, e=null, r=null, r2=null, TESTNAME=null;

TESTNAME = "includes";
a = "Hello there my good Kitty";
assert.ok(a.includes("good"), TESTNAME);

TESTNAME = "isNumber";
a = "1000";
b = "1234.56";
c = "-100";
d = "100hj";
e = "hj2000";
assert.ok(a.isNumber());
assert.ok(b.isNumber());
assert.ok(c.isNumber());
assert.ok(d.isNumber());
assert.ok(!e.isNumber());

TESTNAME = "startsWith";
a = "To be, or not to be, that is the question.";
assert.ok(a.startsWith("To be"), TESTNAME);
assert.ok(!a.startsWith("not to be"), TESTNAME);
assert.ok(a.startsWith("not to be", 10), TESTNAME);

TESTNAME = "endsWith";
a = "To be, or not to be, that is the question.";
assert.ok(a.endsWith("question."), TESTNAME);
assert.ok(!a.endsWith("to be"), TESTNAME);
assert.ok(a.endsWith("to be", 19), TESTNAME);

TESTNAME = "repeat";
a = "hi";
r = "hihihihihi";
r2 = "hi hi hi hi";
assert.strictEqual(r, a.repeat(5), TESTNAME);
assert.strictEqual(r2, a.repeat(4, " "), TESTNAME);

TESTNAME = "lastIndexOf";
a = "hello world";
b = "hehehe";
r = 7;
r2 = 4;
assert.strictEqual(r, a.lastIndexOf("o"), TESTNAME);
assert.strictEqual(r2, b.lastIndexOf("he"), TESTNAME);

TESTNAME = "padStart";
a = "hello";
r = "---hello";
assert.strictEqual(r, a.padStart(8, "-"), TESTNAME);

TESTNAME = "padEnd";
a = "hello";
r = "hello_____";
assert.strictEqual(r, a.padEnd(10, "_"), TESTNAME);

TESTNAME = "reverse";
a = "hello";
r = "olleh";
assert.strictEqual(r, a.reverse(), TESTNAME);

TESTNAME = "replaceAll";
a = "hello world hello kitty hello fluffy";
r = "abc world abc kitty abc fluffy";
assert.strictEqual(r, a.replaceAll("hello", "abc"), TESTNAME);

TESTNAME = "innerTrim";
a = "hello  	\nbig  bad  world";
r = "hello big bad world";
assert.strictEqual(r, a.innerTrim(), TESTNAME);

TESTNAME = "capitalize";
a = "hello";
r = "Hello";
assert.strictEqual(r, a.capitalize(), TESTNAME);

TESTNAME = "toProperCase";
a = "hello THERE my good Friend";
r = "Hello There My Good Friend";
assert.strictEqual(r, a.toProperCase(), TESTNAME);

TESTNAME = "strip";
a = "hello world";
r = "hll wrld";
assert.strictEqual(r, a.strip("aeiou"), TESTNAME);
assert.strictEqual(r, a.strip(["a", "e", "i", "o", "u"]), TESTNAME);

console.log("ALL TESTS PASSED");
