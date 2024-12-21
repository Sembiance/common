import {default as common} from "./config/common.config.js";
import {default as node} from "./config/node.config.js";
import {default as browser} from "./config/browser.config.js";

export default
[
	{
		// https://eslint.org/docs/latest/use/configure/language-options
		languageOptions :
		{
			...common.languageOptions,
			globals : {...node.languageOptions.globals, ...browser.languageOptions.globals},
			sourceType : "script"
		},
		plugins :
		{
			...common.plugins,
			...node.plugins,
			...browser.plugins
		},
		rules :
		{
			...common.rules,
			...node.rules,
			...browser.rules,
		}
	}
];
