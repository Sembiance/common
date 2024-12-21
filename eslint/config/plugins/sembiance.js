import {default as sembiance} from "eslint-plugin-sembiance";

export default
{
	plugins :
	{
		sembiance
	},
	rules :
	{
		"sembiance/await-in-async"                    : 2,
		"sembiance/class-property-semicolon"          : 2,
		"sembiance/no-useless-variables"              : 2,
		"sembiance/prefer-array-force"                : 2,
		"sembiance/prefer-char-at"                    : 2,
		"sembiance/prefer-dataset"                    : 0,
		"sembiance/prefer-object-destructuring"       : 2,
		"sembiance/prefer-parameter-context-matching" : 0,
		"sembiance/prefer-relative-require"           : 0,
		"sembiance/prefer-require-destructuring"      : 0,
		"sembiance/shorter-arrow-funs"                : 2,
		"sembiance/this-in-tiptoe-in-class"           : 2,
		"sembiance/tiptoe-shorter-finish-wrap"        : 2,
		"sembiance/tiptoe-suffix-code"                : 2
	}
};
