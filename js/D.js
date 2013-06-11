/*
 * D.js - DOM functions
 * Author - robert@cosmicrealms.com
 */

var D =
{
	clearEmpty : function(element, recurseLevel)
	{
		if(element && element.childNodes && element.childNodes.length && element.childNodes.length>0)
		{
			for(var i=element.childNodes.length-1;i>=0;i--)
			{
				var targetElement = element.childNodes[i];
				if(targetElement.nodeName=="#text" && S.isWhiteSpace(targetElement.data))
					element.removeChild(targetElement);
				else if(targetElement.nodeName=="#comment")
					element.removeChild(targetElement);

				if(typeof recurseLevel==="undefined" || recurseLevel===null || recurseLevel>0)
					D.clearEmpty(targetElement, ((typeof recurseLevel!=="undefined" && recurseLevel!==null) ? recurseLevel-1 : null));
			}
		}
	},

	clear : function(element)
	{
		if(!element)
			return;

		for(var i=element.childNodes.length-1;i>=0;i--)
		{
			element.removeChild(element.childNodes[i]);
		}
	},

	addClass : function(element, className)
	{
		return YAHOO.util.Dom.addClass(element, className);
	},

	hasClass : function(element, className)
	{
		return YAHOO.util.Dom.hasClass(element, className);
	},

	removeClass : function(element, className)
	{
		return YAHOO.util.Dom.removeClass(element, className);
	},

	replaceClass : function(element, oldClassName, newClassName)
	{
		return YAHOO.util.Dom.replaceClass(element, oldClassName, newClassName);
	},

	xy : function(element)
	{
		return YAHOO.util.Dom.getXY(element);
	},

	region: function(element)
	{
		return YAHOO.util.Dom.getRegion(element);
	},

	width : function(element)
	{
		var elementRegion = YAHOO.util.Dom.getRegion(element);

		return elementRegion===false || !elementRegion.hasOwnProperty("right") || !elementRegion.hasOwnProperty("left") ? 0 : elementRegion.right - elementRegion.left;
	},

	height : function(element)
	{
		var elementRegion = YAHOO.util.Dom.getRegion(element);

		return elementRegion===false || !elementRegion.hasOwnProperty("bottom") || !elementRegion.hasOwnProperty("top") ? 0 : elementRegion.bottom - elementRegion.top;
	},

	get : function(selector, context)
	{
		return Sizzle(selector, context);
	},

	get1 : function(selector, context)
	{
		return D.get(selector, context)[0];
	},

	batch : function(el, method, o, overrides)
	{
		return YAHOO.util.Dom.batch(el, method, o, overrides);
	},

	randomColor : function()
	{
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for(var i=0;i<6;i++)
	    {
	        color += letters[Math.round(Math.random() * 15)];
	    }

	    return color;
	}
};
