"use strict";
/*global YUI: true*/

YUI.add("event-rightclick", function(Y)
{
	//-------------------------------------------------------------------------
	// Private variables
	//-------------------------------------------------------------------------
	var config =
	{
		on : function(node, subscription, notifier)
		{
			subscription._handle = node.on("contextmenu", function(e)
			{
				e.preventDefault();
				notifier.fire(e);
			});
		},

		detach : function(node, subscription, notifier)
		{
			subscription._handle.detach();
		}
	};

	Y.Event.define("rightclick", config);
}, "1.0", {});
