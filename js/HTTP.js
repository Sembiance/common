"use strict";

(function() {
	function httpRequest(method, url, data, cb)
	{
		var xhr = new XMLHttpRequest();
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

		xhr.onreadystatechange = function(o)
		{
			if(xhr.readyState===4 && cb)
				setImmediate(cb, undefined, xhr.responseText);
		};
	}

	var HTTP = 
	{
		get : function(url, cb)
		{
			httpRequest("GET", url, undefined, cb);
		},

		put : function(url, data, cb)
		{
			httpRequest("PUT", url, data, cb);
		},

		post : function(url, data, cb)
		{
			httpRequest("POST", url, data, cb);
		}
	};

	window.HTTP = HTTP;
})();
