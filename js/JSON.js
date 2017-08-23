"use strict";

if(!JSON.stringifyJS)
{
	JSON.stringifyJS = function(v)
	{
		var result = "";

		if(Object.isObject(v))
		{
			result += "{";
			Object.forEach(v, function(key, val, i)
			{
				if(i>0)
					result+=",";

				result += key + ":" + JSON.stringifyJS(val);
			});
			result += "}";
		}
		else if(Array.isArray(v))
		{
			result += "[";
			v.forEach(function(val, i)
			{
				if(i>0)
					result+=",";

				result += JSON.stringifyJS(val);
			});
			result += "]";
		}
		else
		{
			result += JSON.stringify(v);
		}

		return result;
	};
}