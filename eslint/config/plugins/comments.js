import {default as comments} from "@eslint-community/eslint-plugin-eslint-comments";

export default
{
	plugins :
	{
		"@eslint-community/eslint-comments" : comments
	},
	rules :
	{
		// https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/

		// Best Prcatices
		"@eslint-community/eslint-comments/disable-enable-pair"   : 0,
		"@eslint-community/eslint-comments/no-aggregating-enable" : 2,
		"@eslint-community/eslint-comments/no-duplicate-disable"  : 2,
		"@eslint-community/eslint-comments/no-unlimited-disable"  : 2,
		"@eslint-community/eslint-comments/no-unused-disable"     : 2,
		"@eslint-community/eslint-comments/no-unused-enable"      : 2,
		
		// Stylistic Issues
		"@eslint-community/eslint-comments/no-restricted-disable" : 0,
		"@eslint-community/eslint-comments/no-use"                : 0,
		"@eslint-community/eslint-comments/require-description"   : 0
	}
};
