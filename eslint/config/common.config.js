import {default as eslint} from "./plugins/eslint.js";
import {default as unicorn} from "./plugins/unicorn.js";
import {default as stylistic} from "./plugins/stylistic.js";
import {default as sembiance} from "./plugins/sembiance.js";
import {default as arrayFunc} from "./plugins/array-func.js";
import {default as sonarjs} from "./plugins/sonarjs.js";
import {default as noFloatingPromise} from "./plugins/no-floating-promise.js";
import {default as comments} from "./plugins/comments.js";
import {default as noConstructorBind} from "./plugins/no-constructor-bind.js";

export default
{
	// https://eslint.org/docs/latest/use/configure/language-options
	languageOptions :
	{
		ecmaVersion : "latest"
	},
	plugins :
	{
		...unicorn.plugins,
		...stylistic.plugins,
		...sembiance.plugins,
		...arrayFunc.plugins,
		...sonarjs.plugins,
		...noFloatingPromise.plugins,
		...comments.plugins,
		...noConstructorBind.plugins
	},
	rules :
	{
		...eslint.rules,
		...unicorn.rules,
		...stylistic.rules,
		...sembiance.rules,
		...arrayFunc.rules,
		...sonarjs.rules,
		...noFloatingPromise.rules,
		...comments.rules,
		...noConstructorBind.rules
	}
};
