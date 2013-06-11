"use strict";
/*global YUI: true*/

YUI.add("event-windowresize", function(Y) {
	//-------------------------------------------------------------------------
	// Private variables
	//-------------------------------------------------------------------------
	var resizeMinimumDelay = 300;
	var resizeLastWidth = 0;
	var resizeLastHeight = 0;
	var resizeLastEvent = null;

	//-------------------------------------------------------------------------
	// Private functions
	//-------------------------------------------------------------------------
	function handleWindowResizeFollowup()
	{
		if(resizeLastEvent===null)
			return;

		var rightNow = new Date().getTime();
		if((rightNow-resizeLastEvent)<resizeMinimumDelay)
		{
			setTimeout(handleWindowResizeFollowup, resizeMinimumDelay);
			return;
		}

		resizeLastEvent = null;

		Y.fire("window:resized");
	}

	function handleWindowResize()
	{
		resizeLastWidth = Y.one(document).getWidth();
		resizeLastHeight = Y.one(document).getHeight();
		resizeLastEvent = new Date().getTime();

		setTimeout(handleWindowResizeFollowup, resizeMinimumDelay);
	}

	function zoomChangedHandler()
	{
		if(Y.UA.ie<9)
			Y.fire("window:resized");
	}
	
	//-------------------------------------------------------------------------
	// Public interface
	//-------------------------------------------------------------------------

	Y.on("resize", handleWindowResize);
	Y.on("zoom:changed", zoomChangedHandler);
}, "1.0", { requires : ["yui-node-extensions", "dom"] });
