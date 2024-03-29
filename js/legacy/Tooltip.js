"use strict";
/* global Modernizr, XU: true */
/* eslint-disable prefer-template, no-constructor-bind/no-constructor-bind */

(function _Tooltip()
{
	let tooltipsDisabled = false;

	class Tooltip
	{
		constructor(node, text, extraClass, delay=XU.SECOND*0.5, options={})
		{
			this.node = node;
			this.text = text;
			this.options = options;
			this.tooltip = document.createElement("div");
			this.tooltip.classList.add("tooltip");
			if(extraClass)
				this.tooltip.classList.add(extraClass);
			this.tooltipOffset = 15;
			this.tooltipLeft = this.tooltipBelow = false;
			this.tooltipDelay = delay;
			this.tooltipDelayTimeout = null;
			this.lastPageX = this.lastPageY = null;
			this.visible = this.disabled = this.skipNextShow = false;

			this.boundMouseEnterHandler = this.mouseEnterHandler.bind(this);
			this.boundMouseLeaveHandler = this.mouseLeaveHandler.bind(this);
			this.boundMouseMoveHandler = this.mouseMoveHandler.bind(this);
			this.boundTouchStartHandler = this.touchStartHandler.bind(this);

			this.node.addEventListener("mouseenter", this.boundMouseEnterHandler);
			this.node.addEventListener("mouseleave", this.boundMouseLeaveHandler);
			this.node.addEventListener("touchstart", this.boundTouchStartHandler, Modernizr.passiveeventlisteners ? { passive : true } : undefined);
		}

		// Called to destroy this tooltip
		destroy()
		{
			this.hide();
			
			this.node.removeEventListener("touchstart", this.boundTouchStartHandler);
			this.node.removeEventListener("mouseenter", this.boundMouseEnterHandler);
			this.node.removeEventListener("mouseleave", this.boundMouseLeaveHandler);

			document.body.removeEventListener("mousemove", this.boundMouseMoveHandler);
		}

		// Called when the mouse enters the node
		mouseEnterHandler(e)
		{
			this.show(e);
		}

		// Called when the mouse leaves the node
		mouseLeaveHandler()
		{
			this.hide();
		}

		// Shows the tooltip
		show(e, tooltipText, instant)
		{
			if(this.disabled || this.visible || this.skipNextShow || tooltipsDisabled)
				return (this.skipNextShow = false), undefined;

			document.body.addEventListener("mousemove", this.boundMouseMoveHandler);
			document.body.append(this.tooltip);

			this.tooltipLeft = this.options.alwaysLeft ? true : (this.options.alwaysRight ? false : (e ? e.pageX : this.node.getXY()[0])>(document.body.getWidth()/2));
			this.tooltipBelow = this.options.alwaysBelow ? true : (this.options.alwaysAbove ? false : (e ? e.pageY : this.node.getXY()[1])<(document.body.getHeight()/2));

			this.tooltip.innerHTML = (tooltipText || (typeof this.text==="function" ? this.text() : this.text));

			this.visible = true;

			this.tooltipDelayTimeout = setTimeout(() =>
			{
				this.tooltipDelayTimeout = null;

				this.tooltip.style.display = "block";
				this.mouseMoveHandler();
			}, (instant ? 0 :this.tooltipDelay));
		}

		// Hides the tooltip
		hide()
		{
			if(!this.visible)
				return;

			this.visible = false;

			document.body.removeEventListener("mousemove", this.boundMouseMoveHandler);
			this.tooltip.remove();

			this.tooltip.style.display = "none";

			if(this.tooltipDelayTimeout)
			{
				clearTimeout(this.tooltipDelayTimeout);
				this.tooltipDelayTimeout = null;
			}
		}

		// Called when the mouse is moved
		mouseMoveHandler(e)
		{
			if(e)
			{
				this.lastPageX = e.pageX;
				this.lastPageY = e.pageY;
			}

			this.tooltip.style.top = this.tooltipBelow ? (this.lastPageY+this.tooltipOffset) + "px" : Math.max(((this.lastPageY-this.tooltip.getHeight())-this.tooltipOffset), 0) + "px";
			this.tooltip.style.left = this.tooltipLeft ? ((this.lastPageX-this.tooltip.getWidth())-this.tooltipOffset) + "px" : (this.lastPageX+this.tooltipOffset) + "px";
		}

		// Don't show tooltips for touch interactions
		touchStartHandler()
		{
			this.skipNextShow = true;
		}

		// Called to disable the tooltip
		disable()
		{
			this.disabled = true;

			if(this.visible)
				this.hide();
		}

		// Called to re-enable the tooltip
		enable()
		{
			this.disabled = false;
		}

		// Call this to disable all tooltips
		static disableTooltips()
		{
			tooltipsDisabled = true;
		}

		// Call this to re-enable all tooltips
		static enableTooltips()
		{
			tooltipsDisabled = false;
		}
	}

	XU.Tooltip = Tooltip;
})();
