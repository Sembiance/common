import {default as nodeModuleConfig} from "/mnt/compendium/DevLab/common/eslint/node-module.eslint.config.js";

nodeModuleConfig.push({
	ignores :
	[
		"forks/",
		"sandbox/"
	]
});

export default nodeModuleConfig;	// eslint-disable-line unicorn/prefer-export-from
