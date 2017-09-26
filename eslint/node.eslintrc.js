"use strict";
module.exports =
{
	"extends" : ["/mnt/compendium/DevLab/common/eslint/shared.eslintrc.js"],
	"env" : { "node": true },
	"rules" :
	{
		// Best Practices
		"no-implicit-globals" : 0,

		// Node.js and CommonJS
		"callback-return"       : 2,
		"global-require"        : 2,
		"handle-callback-err"   : 2,
		"no-buffer-constructor" : 2,
		"no-mixed-requires"     : 2,
		"no-new-require"        : 2,
		"no-path-concat"        : 2,
		"no-process-env"        : 2,
		"no-process-exit"       : 0,
		"no-restricted-modules" : 0,
		"no-sync"               : 0
	}
};
