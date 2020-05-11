"use strict";

// This file contains self contained, NODE SPECIFIC rules
module.exports =
{
	"env"     : { "node" : true },
	"plugins" : ["node"],
	"rules"   :
	{
		// Best Practices (core)
		"no-implicit-globals" : 0,

		// Possible Errors
		"node/handle-callback-err"                   : 0,
		"node/no-callback-literal"                   : 0,
		"node/no-exports-assign"                     : 2,
		"node/no-extraneous-import"                  : 2,
		"node/no-extraneous-require"                 : [2, {allowModules : ["@sembiance/xu"]}],
		"node/no-missing-import"                     : 2,
		"node/no-missing-require"                    : [2, {allowModules : ["vscode"]}],
		"node/no-new-require"                        : 2,
		"node/no-path-concat"                        : 2,
		"node/no-process-exit"                       : 0,
		"node/no-unpublished-bin"                    : 2,
		"node/no-unpublished-import"                 : 2,
		"node/no-unpublished-require"                : 2,
		"node/no-unsupported-features/es-builtins"   : 2,
		"node/no-unsupported-features/es-syntax"     : 2,
		"node/no-unsupported-features/node-builtins" : 2,
		"node/process-exit-as-throw"                 : 2,
		"node/shebang"                               : 0,

		// Best Practices
		"node/no-deprecated-api" : 0,

		// Stylistic Issues
		"node/callback-return"                 : [2, ["cb", "callback", "subcb"]],
		"node/exports-style"                   : 0,
		"node/file-extension-in-import"        : 2,
		"node/global-require"                  : 2,
		"node/no-mixed-requires"               : 0,
		"node/no-process-env"                  : 2,
		"node/no-restricted-import"            : 2,
		"node/no-restricted-require"           : [2, ["mkdirp", "rimraf", "nan"]],
		"node/no-sync"                         : 0,
		"node/prefer-global/buffer"            : 0,
		"node/prefer-global/console"           : 2,
		"node/prefer-global/process"           : 2,
		"node/prefer-global/text-decoder"      : 2,
		"node/prefer-global/text-encoder"      : 2,
		"node/prefer-global/url-search-params" : 2,
		"node/prefer-global/url"               : 2,
		"node/prefer-promises/dns"             : 0,
		"node/prefer-promises/fs"              : 0
	}
};
