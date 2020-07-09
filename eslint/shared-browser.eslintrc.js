"use strict";

// This file contains self contained, BROWSER SPECIFIC rules
module.exports =
{
	"env"   : { "browser" : true },
	"rules" :
	{
		// Best Practices (core)
		"no-implicit-globals" : 2,

		// Stylistic Issues (core)
		"no-restricted-syntax" : [2,
			{
				"selector" : "CallExpression[callee.object.name='url'][callee.property.name='parse']",
				"message"  : "Don't use 'url.parse()' as it is deprecated. Instead use new url.URL(\"/the/url/path.html?hello=world\", \"http://host.com/\")"
			},
			{
				"selector" : "CallExpression[callee.property.name='splice'][arguments.length>=3][arguments.0.value=0][arguments.1.value=0]",
				"message"  : "Instead of .splice(0, 0, ...) use: .unshift(...)"
			},
			{
				"selector" : "CallExpression[callee.property.name='charAt'][arguments.length!=1]",
				"message"  : ".charAt() should always have exactly 1 argument."
			}
		]
	}
};
