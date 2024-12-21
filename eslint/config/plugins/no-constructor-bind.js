const noConstructorBindPlugin = await import("eslint-plugin-no-constructor-bind");

export default
{
	plugins :
	{
		"no-constructor-bind" : noConstructorBindPlugin.default
	},
	rules :
	{
		// https://github.com/markalfred/eslint-plugin-no-constructor-bind
		"no-constructor-bind/no-constructor-bind"  : 2,
		"no-constructor-bind/no-constructor-state" : 2
	}
};
