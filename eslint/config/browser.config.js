import globals from "globals";

export default
{
	languageOptions :
	{
		globals : globals.browser
	},
	rules :
	{
		"sembiance/prefer-dataset" : 2,

		"no-implicit-globals" : 2,
		"no-alert"            : 2,

		// Interactive AST explorer, VERY useful: https://astexplorer.net/
		"no-restricted-syntax" : [2,
			// Prefer specific ways of doing things
			{
				"selector" : "CallExpression[callee.property.name='getAncestor']",
				"message"  : "Instead of .getAncestor() use: .closest()"
			},
			{
				"selector" : "CallExpression[callee.property.name='splice'][arguments.length>=3][arguments.0.value=0][arguments.1.value=0]",
				"message"  : "Instead of .splice(0, 0, ...) use: .unshift(...)"
			}
		]
	}
};
