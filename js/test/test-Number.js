"use strict";

const assert = require("assert");

require("../Array.js");
require("../Object.js");
require("../Math.js");
require("../Number.js");


// Vars to use below
let a=null, b=null, c=null, d=null, e=null, f=null, ra=null, rb=null, rc=null, rd=null, re=null, rf=null, TESTNAME=null;

TESTNAME = "toLocaleString";
a = Number(1000);
ra = "1,000";

b = 1234.56;
rb = "1,234.56";
assert.strictEqual( ra, a.toLocaleString(), TESTNAME);
assert.strictEqual(rb, b.toLocaleString(), TESTNAME);

TESTNAME = "toClock";
a = Number(136);
ra = "02:16";

b = Number(44);
rb = "00:44";
rc = "44";
assert.strictEqual(ra, a.toClock(), TESTNAME);
assert.strictEqual(rb, b.toClock(), TESTNAME);
assert.strictEqual(rc, b.toClock(true), TESTNAME);

TESTNAME = "secondsAsHumanReadable";
a = Number(136);
ra = "2 minutes, 16 seconds";
assert.strictEqual(a.secondsAsHumanReadable(), ra, TESTNAME);

b = Number(44);
rb = "44 seconds";
assert.strictEqual(b.secondsAsHumanReadable(), rb, TESTNAME);

c = Number(1_700_355);
rc = "19d16h19m15s";
assert.strictEqual(c.secondsAsHumanReadable({short : true}), rc, TESTNAME);
rc = "19d16h";
assert.strictEqual(c.secondsAsHumanReadable({short : true, maxParts : 2}), rc, TESTNAME);

d = Number(0.5);
rd = "500ms";
assert.strictEqual(d.secondsAsHumanReadable({short : true}), rd, TESTNAME);

e = Number(1_209_601);
re = "14d1s";
assert.strictEqual(e.secondsAsHumanReadable({short : true}), re, TESTNAME);

f = Number(48_923_789_432.25);
rf = "1,550 years, 3 months, 18 days, 18 hours, 32 seconds, 250 milliseconds";
assert.strictEqual(f.secondsAsHumanReadable(), rf, TESTNAME);

TESTNAME = "getBits";
a = Number(47);
ra = [1, 1, 1, 1, 0, 1, 0, 0];
assert.ok(ra.equals(a.getBits().slice(0, 8)), TESTNAME);

TESTNAME = "getBit";
a = Number(47);
assert.strictEqual(1, a.getBit(3), TESTNAME);
assert.strictEqual(0, a.getBit(4), TESTNAME);

TESTNAME = "setBit";
a = Number(47);
ra = Number(63);
assert.strictEqual(ra, a.setBit(4), TESTNAME);

TESTNAME = "clearBit";
a = Number(47);
ra = Number(39);
assert.strictEqual(ra, a.clearBit(3), TESTNAME);

TESTNAME = "flipBit";
a = Number(47);
ra = Number(39);
assert.strictEqual(ra, a.flipBit(3), TESTNAME);
assert.strictEqual(a, a.flipBit(3).flipBit(3), TESTNAME);

console.log("ALL TESTS PASSED");
