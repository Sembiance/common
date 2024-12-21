import {default as n} from "./plugins/node.js";
import globals from "globals";

export default
{
	languageOptions :
	{
		globals : globals.node
	},
	plugins :
	{
		...n.plugins
	},
	rules :
	{
		...n.rules,

		"sembiance/prefer-require-destructuring" : 2,
		"sembiance/prefer-relative-require"      : 2,

		"no-implicit-globals" : 0,

		// Interactive AST explorer, VERY useful: https://astexplorer.net/
		"no-restricted-syntax" : [2,
			{
				"selector" : "CallExpression[callee.object.name='url'][callee.property.name='parse']",
				"message"  : "Don't use 'url.parse()' as it is deprecated. Instead use new url.URL(\"/the/url/path.html?hello=world\", \"http://host.com/\")"
			},
			{
				"selector" : "ReturnStatement[argument.callee.name='setImmediate'][argument.arguments.length=1][argument.arguments.0.type='ThisExpression']",
				"message"  : "Don't use 'return setImmediate(this)' as setImmediate returns an ID and thus this() is executed twice.)"
			},
			{
				"selector" : "MemberExpression[property.name='then']",
				"message"  : "Instead of .then() use: util.callbackify"
			},

			// These rules are ALSO located in shared-browser
			{
				"selector" : "CallExpression[callee.property.name='splice'][arguments.length>=3][arguments.0.value=0][arguments.1.value=0]",
				"message"  : "Instead of .splice(0, 0, ...) use: .unshift(...)"
			}
		]
	}
};
