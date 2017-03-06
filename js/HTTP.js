"use strict";

var HTTP = 
{
	get : function(url, cb)
	{
		HTTP.REQUEST("GET", url, undefined, cb);
	},

	put : function(url, data, cb)
	{
		HTTP.REQUEST("PUT", url, data, cb);
	},

	post : function(url, data, cb)
	{
		HTTP.REQUEST("POST", url, data, cb);
	},

	REQUEST : function(method, url, data, cb)
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
				cb(xhr.responseText);
		};
	}
};