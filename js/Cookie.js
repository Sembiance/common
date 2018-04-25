"use strict";
(function _Cookie()
{
	const Cookie = {};
	Cookie.get = function get(name, defaultValue=null)
	{
		const v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
		return v ? v[2] : defaultValue;
	};

	Cookie.set = function set(name, value, expiration, domain)
	{
	    let cookieText = encodeURIComponent(name) + "=";
	    if(value)
			cookieText += encodeURIComponent(value);
		cookieText += ";path=/";
		if(domain)
			cookieText += ";domain=" + (!domain.startsWith(".") ? "." : "") + domain;

		let cookieExpirationDate = "Fri, 31 Dec 1999 23:59:59 GMT";
		if(expiration!==-1)
		{
		    const d = new Date();
		    d.setTime(d.getTime() + expiration);
		    cookieExpirationDate = d.toGMTString();
		}

		cookieText += ";expires=" + cookieExpirationDate;

	    document.cookie = cookieText;
	};

	Cookie.remove = function remove(name, domain)
	{
		Cookie.set(name, undefined, -1, domain);
	};

	window.XU = window.XU || {};
	window.XU.Cookie = Cookie;
})();
