"use strict";
/*global YUI: true*/

YUI.add("ZoomMonitor", function(Y)
{
	//-------------------------------------------------------------------------
	// Private variables
	//-------------------------------------------------------------------------
	var IE8_ZOOM_POLL_INTERVAL = 1000;	// IE8 doesn"t seem to fire the resize event on zoom change
	var zoom = null;

	//-------------------------------------------------------------------------
	// Private functions
	//-------------------------------------------------------------------------
	function init()
	{
		checkZoom();
		Y.on("resize", checkZoom);
	}

	function checkZoom()
	{
		var oldZoom = zoom;
		zoom = window.detectZoom.zoom();

		if(Y.UA.ie<9)	// IE8
			setTimeout(checkZoom, IE8_ZOOM_POLL_INTERVAL);

		if(zoom===null)
			return;
		
		if(oldZoom!==zoom)
			Y.fire("zoom:changed", { zoom : +zoom, zoomFixed : +zoom.toFixed(1) });
	}

	//-------------------------------------------------------------------------
	// Public interface
	//-------------------------------------------------------------------------
	Y.ZoomMonitor =
	{
		
	};

	Y.on("domready", init);
}, "1.0", { requires : ["dom"] });