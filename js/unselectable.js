"use strict";
/*global YUI, Modernizr: true*/

YUI.add("unselectable", function(Y)
{
	//-------------------------------------------------------------------------
	// Private variables
	//-------------------------------------------------------------------------

	//-------------------------------------------------------------------------
	// Private functions
	//-------------------------------------------------------------------------
	function init()
	{
		var body = Y.one(document.body);
		if(body.hasClass("unselectable"))
		{
			// Some browsers (firefox) ignore the 'unselectable' class on body. So need to add it to each child node of body
			var children = body.get("children");
			if(children)
				children.addClass("unselectable");
		}

		Y.all("input[type='text']").concat(Y.all("input[type='password']")).addClass("selectable");

		if(!Modernizr.testAllProps("userSelect"))
		{
			Y.getAll(".unselectable").forEach(function(node)
			{
				makeUnselectable(node);
			});
		}

		// This fixes ickyness in chrome where even though it doesn't allow text selection with userSelect, the text cursor still appears
		body.on("selectstart", selectStartHandler);
	}

	function selectStartHandler(e)
	{
		if(e.target.ancestor(".selectable", true))
			return;

		if(e.target.ancestor(".unselectable", true))
		{
			if(window.getSelection)
			{
				var selection = window.getSelection();
				if(selection.empty)
					selection.empty();
				else if(selection.removeAllRanges)
					selection.removeAllRanges();
			}
			else if(document.selection)
			{
				document.selection.empty();
			}

			e.halt(true);
		}
	}

	function makeUnselectable(node)
	{
		// If we have selectstart event, that's the best way to prevent selection (IE browsers)
		if(Modernizr.hasEvent("selectstart"))
		{
			if(node.hasClass("selectable"))
			{
				node.on("selectstart", function(e)
				{
					try { e.stopPropagation(); } catch(exception) { }	// For some reason, stopPropagation isn't valid in IE6,7,8 but is in stand alone tests. Werid. Oh well.
				});
				return;
			}
			else if(node.hasClass("unselectable"))
			{
				node.on("selectstart", function(e)
				{
					try { e.halt(); } catch(exception) { }
				});
			}
		}
		else
		{
			// Otherwise try and set unselectable on (Opera)
			node.getDOMNode().unselectable = "on";
		}

		// If we don't have the selectstart event and our current element is selectable, stop going any deeper to allow selection
		if(!Modernizr.hasEvent("selectstart") && node.hasClass("selectable"))
			return;
		
		var children = node.get("children");
		if(!children)
			return;

		children.toArray().forEach(function(child)
		{
			makeUnselectable(child);
		});
	}

	//-------------------------------------------------------------------------
	// Public interface
	//-------------------------------------------------------------------------
	Y.unselectable =
	{

	};

	Y.on("domready", init);
}, "1.0", { });