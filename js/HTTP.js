"use strict";
/* global setImmediate: true */

(function _HTTP()
{
	function httpRequest(method, url, data, cb)
	{
		const xhr = new XMLHttpRequest();
		xhr.open(method, url, true);
		
		if(data)
		{
			xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
			xhr.send(JSON.stringify(data));
		}
		else
		{
			xhr.send();
		}

		xhr.onreadystatechange = () =>
		{
			if(xhr.readyState===4 && cb)
				setImmediate(cb, ((xhr.status!==200 && xhr.status!==0) ? new Error("Invalid HTTP status code: " + xhr.status) : undefined), xhr.responseText);
		};
	}

	const HTTP =
	{
		get : function get(url, cb)
		{
			httpRequest("GET", url, undefined, cb);
		},

		put : function put(url, data, cb)
		{
			httpRequest("PUT", url, data, cb);
		},

		post : function post(url, data, cb)
		{
			httpRequest("POST", url, data, cb);
		}
	};

	window.HTTP = HTTP;
})();
