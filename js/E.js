/*
 * E.js - Event functions
 * Author - robert@cosmicrealms.com
 */

var E =
{
	add : function(element, eventType, eventCallback, eventArgument, eventScope)
	{
		return YAHOO.util.Event.addListener(element, eventType, eventCallback, eventArgument, eventScope);
	},

	remove : function(element, eventType, eventCallback)
	{
		return YAHOO.util.Event.removeListener(element, eventType, eventCallback);
	},

	stop : function(e)
	{
		YAHOO.util.Event.stopEvent(e);
	},

	preventDefault : function(e)
	{
		YAHOO.util.Event.preventDefault(e);
	},

	create : function(type, scope)
	{
		return new YAHOO.util.CustomEvent(type, scope ? scope : window);
	}
};
