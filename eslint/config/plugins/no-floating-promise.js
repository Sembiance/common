const noFloatingPromise = await import("eslint-plugin-no-floating-promise");

export default
{
	plugins :
	{
		"no-floating-promise" : noFloatingPromise.default
	},
	rules :
	{
		// https://github.com/SebastienGllmt/eslint-plugin-no-floating-promise
		"no-floating-promise/no-floating-promise" : 2
	}
};

