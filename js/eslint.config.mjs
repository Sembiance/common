import {default as browserModuleConfig} from "/mnt/compendium/DevLab/common/eslint/browser-module.eslint.config.js";

browserModuleConfig.push({
	ignores :
	[
		"legacy/",

		// these file originals live in DevLab/deno/xu/ (as that's where the tests lie)
		"array.js",
		"math.js",
		"number.js",
		"object.js",
		"string.js",
		"uint8array.js",
		"xu.js"
	]
});

export default browserModuleConfig;	// eslint-disable-line unicorn/prefer-export-from
