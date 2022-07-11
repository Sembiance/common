"use strict";

// This file contains self contained, BROWSER SPECIFIC rules
module.exports =
{
	"env"   : { "browser" : true },
	"parserOptions" :
	{
		"sourceType" : "script"
	},
	"rules" :
	{
		// Plugins
		"sembiance/prefer-dataset" : 2,

		// Best Practices (core)
		"no-implicit-globals" : 2,

		// Stylistic Issues (core)
		// Interactive AST explorer, VERY useful: https://astexplorer.net/
		"no-restricted-syntax" : [2,
			// Prefer specific ways of doing things
			{
				"selector" : "CallExpression[callee.property.name='getAncestor']",
				"message"  : "Instead of .getAncestor() use: .closest()"
			},

			// These rules are ALSO located in shared-node
			{
				"selector" : "CallExpression[callee.property.name='splice'][arguments.length>=3][arguments.0.value=0][arguments.1.value=0]",
				"message"  : "Instead of .splice(0, 0, ...) use: .unshift(...)"
			}
		]
	}
};
