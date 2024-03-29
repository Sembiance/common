"use strict";
/*global XU: true*/
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

		xhr.onreadystatechange = () =>	// eslint-disable-line unicorn/prefer-add-event-listener
		{
			if(xhr.readyState===4 && cb)
				cb(((xhr.status!==200 && (xhr.status!==0 || !xhr.responseText)) ? new Error(`Invalid HTTP status code (${xhr.status}) for URL: ${url}`) : undefined), xhr.responseText);	// eslint-disable-line node/callback-return
		};
	}

	const HTTP = {};
	HTTP.get = function get(url, cb)
	{
		httpRequest("GET", url, undefined, cb);
	};

	HTTP.put = function put(url, data, cb)
	{
		httpRequest("PUT", url, data, cb);
	};

	HTTP.post = function post(url, data, cb)
	{
		httpRequest("POST", url, data, cb);
	};
	
	XU.HTTP = HTTP;
})();
