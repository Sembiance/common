import arrayFunc from "eslint-plugin-array-func";

export default
{
	plugins :
	{
		"array-func" : arrayFunc
	},
	rules :
	{
		// https://github.com/freaktechnik/eslint-plugin-array-func
		"array-func/from-map"                : 2,
		"array-func/no-unnecessary-this-arg" : 2,
		"array-func/prefer-array-from"       : 2,
		"array-func/avoid-reverse"           : 2,
		"array-func/prefer-flat-map"         : 0,	// It doesn't understand that flatMap only works if .flat() has no argument https://github.com/freaktechnik/eslint-plugin-array-func/issues/61  So I use unicorn/prefer-flat-map instead
		"array-func/prefer-flat"             : 2
	}
};
