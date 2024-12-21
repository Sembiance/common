import {default as common} from "./config/common.config.js";
import {default as browser} from "./config/browser.config.js";

export default
[
	{
		// https://eslint.org/docs/latest/use/configure/language-options
		languageOptions :
		{
			...common.languageOptions,
			...browser.languageOptions,
			sourceType : "script"
		},
		plugins :
		{
			...common.plugins,
			...browser.plugins
		},
		rules :
		{
			...common.rules,
			...browser.rules
		}
	}
];
