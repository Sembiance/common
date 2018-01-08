"use strict";
(function _HTTP()
{
	function httpRequest(method, url, data, cb)
	{
		const xhr = new XMLHttpRequest();
		xhr.open(method, url, true);
		
		try
		{
			if(data)
			{
				xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
				xhr.send(JSON.stringify(data));
			}
			else
			{
				xhr.send();
			}
		}
		catch(err)
		{
			return cb(err);
		}

		xhr.onreadystatechange = () =>
		{
			if(xhr.readyState===4 && cb)
				cb(((xhr.status!==200) ? new Error("Invalid HTTP status code (" + xhr.status + ") for URL: " + url) : undefined), xhr.responseText);
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
