package com.telparia.util;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class MapUtilities
{
	public static Map<Object, Object> copyMapWithoutEmpties(Map<? extends Object, ? extends Object> original)
	{
		Map<Object, Object> result = new HashMap<Object, Object>();
		
		Set<?> keys = original.keySet();
		for(Object key : keys)
		{
			Object value = original.get(key);
			if(value==null || value.toString().length()<1)
				continue;
			
			result.put(key, value);
		}
		
		return result;
	}
}
