const nodePlugin = await import("eslint-plugin-n");

export default
{
	plugins :
	{
		n : nodePlugin.default
	},
	rules :
	{
		// https://github.com/eslint-community/eslint-plugin-n#-rules
		"n/callback-return"                       : [2, ["cb", "callback", "subcb"]],
		"n/exports-style"                         : 0,
		"n/file-extension-in-import"              : 2,
		"n/global-require"                        : 2,
		"n/handle-callback-err"                   : 0,
		"n/hashbang"                              : 0,
		"n/no-callback-literal"                   : 0,
		"n/no-deprecated-api"                     : 0,
		"n/no-exports-assign"                     : 2,
		"n/no-extraneous-import"                  : 2,
		"n/no-extraneous-require"                 : [2, {allowModules : ["@sembiance/xu"]}],
		"n/no-missing-import"                     : 2,
		"n/no-missing-require"                    : [2, {allowModules : ["vscode"]}],	// , resolvePaths : [__dirname]
		"n/no-mixed-requires"                     : 0,
		"n/no-new-require"                        : 2,
		"n/no-path-concat"                        : 2,
		"n/no-process-env"                        : 0,
		"n/no-process-exit"                       : 0,
		"n/no-restricted-import"                  : 2,
		"n/no-restricted-require"                 : [2, ["mkdirp", "rimraf", "nan", "glob", "accounting", "minimist", "commander", "optimist", "yargs", "vorpal", "shelljs", "meow"]],
		"n/no-sync"                               : 0,
		"n/no-unpublished-bin"                    : 2,
		"n/no-unpublished-import"                 : 0,
		"n/no-unpublished-require"                : 0,
		"n/no-unsupported-features/es-builtins"   : 2,
		"n/no-unsupported-features/es-syntax"     : 2,
		"n/no-unsupported-features/node-builtins" : 2,
		"n/prefer-global/buffer"                  : 0,
		"n/prefer-global/console"                 : 2,
		"n/prefer-global/process"                 : 2,
		"n/prefer-global/text-decoder"            : 2,
		"n/prefer-global/text-encoder"            : 2,
		"n/prefer-global/url"                     : 2,
		"n/prefer-global/url-search-params"       : 2,
		"n/prefer-node-protocol"                  : 0,
		"n/prefer-promises/dns"                   : 0,
		"n/prefer-promises/fs"                    : 0,
		"n/process-exit-as-throw"                 : 2
	}
};
