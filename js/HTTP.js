"use strict";

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
				setImmediate(cb, undefined, xhr.responseText);
		};
	}

	class HTTP
	{
		static get(url, cb)
		{
			httpRequest("GET", url, undefined, cb);
		}

		static put(url, data, cb)
		{
			httpRequest("PUT", url, data, cb);
		}

		static post(url, data, cb)
		{
			httpRequest("POST", url, data, cb);
		}
	}

	window.HTTP = HTTP;
})();
