"use strict";

const assert = require("assert");

require("../Array.js");
require("../Object.js");
require("../Math.js");
require("../Number.js");


// Vars to use below
let a=null, b=null, c=null, r=null, r2=null, r3=null, TESTNAME=null;

TESTNAME = "toLocaleString";
a = Number(1000);
b = 1234.56;
r = "1,000";
r2 = "1,234.56";
assert.strictEqual(r, a.toLocaleString(), TESTNAME);
assert.strictEqual(r2, b.toLocaleString(), TESTNAME);

TESTNAME = "toClock";
a = Number(136);
b = Number(44);
r = "02:16";
r2 = "00:44";
r3 = "44";
assert.strictEqual(r, a.toClock(), TESTNAME);
assert.strictEqual(r2, b.toClock(), TESTNAME);
assert.strictEqual(r3, b.toClock(true), TESTNAME);

TESTNAME = "secondsAsHumanReadable";
a = Number(136);
b = Number(44);
c = Number(1700355);
r = "2 minutes, 16 seconds";
r2 = "44 seconds";
r3 = "19d16h";
assert.strictEqual(r, a.secondsAsHumanReadable(), TESTNAME);
assert.strictEqual(r2, b.secondsAsHumanReadable(), TESTNAME);
assert.strictEqual(r3, c.secondsAsHumanReadable(undefined, true), TESTNAME);

TESTNAME = "getBits";
a = Number(47);
r = [1, 1, 1, 1, 0, 1, 0, 0];
assert.ok(r.equals(a.getBits().slice(0, 8)), TESTNAME);

TESTNAME = "getBit";
a = Number(47);
assert.strictEqual(1, a.getBit(3), TESTNAME);
assert.strictEqual(0, a.getBit(4), TESTNAME);

TESTNAME = "setBit";
a = Number(47);
r = Number(63);
assert.strictEqual(r, a.setBit(4), TESTNAME);

TESTNAME = "clearBit";
a = Number(47);
r = Number(39);
assert.strictEqual(r, a.clearBit(3), TESTNAME);

TESTNAME = "flipBit";
a = Number(47);
r = Number(39);
assert.strictEqual(r, a.flipBit(3), TESTNAME);
assert.strictEqual(a, a.flipBit(3).flipBit(3), TESTNAME);

console.log("ALL TESTS PASSED");
