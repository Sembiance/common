"use strict";

const assert = require("assert"),
	path = require("path");

require(path.join(__dirname, "..", "Number.js"));
require(path.join(__dirname, "..", "Array.js"));
require(path.join(__dirname, "..", "Object.js"));
require(path.join(__dirname, "..", "Math.js"));


// Vars to use below
let a=null, r=null, TESTNAME=null;

TESTNAME = "randomInt";
for(let i=0;i<1000;i++)
{
	const num = Math.randomInt(1, 7);
	assert.ok(num<=7, TESTNAME);
	assert.ok(num>=1, TESTNAME);
}

TESTNAME = "randomIntExcluding";
for(let i=0;i<1000;i++)
{
	const num = Math.randomIntExcluding(1, 7, [3, 5]);
	assert.ok(num<=7, TESTNAME);
	assert.ok(num>=1, TESTNAME);
	assert.ok(num!==3, TESTNAME);
	assert.ok(num!==5, TESTNAME);
}

TESTNAME = "getRotatedDimensions";
r = [205, 217];
assert.ok(r.equals(Math.getRotatedDimensions(40, 100, 200)), TESTNAME);

TESTNAME = "degreesToRadians";
a = 45;
r = 0.7853981633974483;
assert.strictEqual(r, Math.degreesToRadians(a), TESTNAME);

TESTNAME = "radiansToDegrees";
a = 0.7853981633974483;
r = 45;
assert.strictEqual(r, Math.radiansToDegrees(a), TESTNAME);

TESTNAME = "rotatePointInBox";
r = [416.68584287042086, 248.08657048910064];
assert.ok(r.equals(Math.rotatePointInBox(15, 20, 120, 300, 500)), TESTNAME);

TESTNAME = "expandToBounds";
r = [10, 20];
assert.ok(r.equals(Math.expandToBounds(25, 50, 100, 20)));

console.log("ALL TESTS PASSED");

