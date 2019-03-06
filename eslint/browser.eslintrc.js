"use strict";
module.exports =
{
	"extends" : ["/mnt/compendium/DevLab/common/eslint/shared.eslintrc.js"],
	"env" : { "browser" : true },
	"rules" :
	{
		// Best Practices
		"no-implicit-globals" : 2,

		// Node.js and CommonJS
		"callback-return"       : 0,
		"global-require"        : 0,
		"handle-callback-err"   : 0,
		"no-buffer-constructor" : 0,
		"no-mixed-requires"     : 0,
		"no-new-require"        : 0,
		"no-path-concat"        : 0,
		"no-process-env"        : 0,
		"no-process-exit"       : 0,
		"no-restricted-modules" : 0,
		"no-sync"               : 0
	}
};
