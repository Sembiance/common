import {default as common} from "./config/common.config.js";
import {default as node} from "./config/node.config.js";

export default
[
	{
		// https://eslint.org/docs/latest/use/configure/language-options
		languageOptions :
		{
			...common.languageOptions,
			...node.languageOptions,
			sourceType : "module"
		},
		plugins :
		{
			...common.plugins,
			...node.plugins
		},
		rules :
		{
			...common.rules,
			...node.rules
		}
	}
];
