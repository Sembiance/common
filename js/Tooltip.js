"use strict";
/*global base: true*/

(function(exports)
{
	var Tooltip = function(_node, _text, _delay, _extraClass)
	{
		this.node = _node;
		this.text = _text;
		this.tooltip = document.createElement("div");
		this.tooltip.classList.add("tooltip", _extraClass || undefined);
		this.tooltipOffset = 15;
		this.tooltipLeft = false;
		this.tooltipBelow = false;
		this.tooltipDelay = typeof _delay!=="undefined" ? _delay : base.SECOND;
		this.tooltipDelayTimeout = null;
		this.lastPageX = null;
		this.lastPageY = null;
		this.visible = false;
		this.disabled = false;

		// Called to destroy this tooltip
		Tooltip.prototype.destroy = function()
		{
			this.hide();
			
			this.node.removeEventListener("mouseenter", this.boundMouseEnterHandler);
			this.node.removeEventListener("mouseleave", this.boundMouseLeaveHandler);

			document.body.removeEventListener("mousemove", this.boundMouseMoveHandler);
		};

		// Called when the mouse enters the node
		Tooltip.prototype.mouseEnterHandler = function(e)
		{
			if(this.disabled)
				return;

			document.body.addEventListener("mousemove", this.boundMouseMoveHandler);
			document.body.appendChild(this.tooltip);

			this.tooltipLeft = e.pageX>(document.body.getWidth()/2);
			this.tooltipBelow = e.pageY<(document.body.getHeight()/2);
			this.tooltip.innerHTML = (typeof this.text==="function" ? this.text() : this.text);

			this.visible = true;

			this.tooltipDelayTimeout = setTimeout(function()
			{
				this.tooltipDelayTimeout = null;

				this.tooltip.style.display = "block";
				this.mouseMoveHandler();
			}.bind(this), this.tooltipDelay);
		};

		// Called when the mouse leaves the node
		Tooltip.prototype.mouseLeaveHandler = function(e)
		{
			this.hide();
		};

		// Hides the tooltip
		Tooltip.prototype.hide = function(e)
		{
			if(!this.visible)
				return;

			this.visible = false;

			document.body.removeEventListener("mousemove", this.boundMouseMoveHandler);
			document.body.removeChild(this.tooltip);

			this.tooltip.style.display = "none";

			if(this.tooltipDelayTimeout)
			{
				clearTimeout(this.tooltipDelayTimeout);
				this.tooltipDelayTimeout = null;
			}
		};

		// Called when the mouse is moved
		Tooltip.prototype.mouseMoveHandler = function(e)
		{
			if(e)
			{
				this.lastPageX = e.pageX;
				this.lastPageY = e.pageY;
			}

			if(this.tooltipBelow)
				this.tooltip.style.top =  (this.lastPageY+this.tooltipOffset) + "px";
			else
				this.tooltip.style.top =  Math.max(((this.lastPageY-this.tooltip.getHeight())-this.tooltipOffset), 0) + "px";

			if(this.tooltipLeft)
				this.tooltip.style.left = ((this.lastPageX-this.tooltip.getWidth())-this.tooltipOffset) + "px";
			else
				this.tooltip.style.left = (this.lastPageX+this.tooltipOffset) + "px";
		};

		// Called to disable the tooltip
		Tooltip.prototype.disable = function()
		{
			this.disabled = true;

			if(this.visible)
				this.hide();
		};

		// Called to re-enable the tooltip
		Tooltip.prototype.enable = function()
		{
			this.disabled = false;
		};
		
		this.boundMouseEnterHandler = this.mouseEnterHandler.bind(this);
		this.boundMouseLeaveHandler = this.mouseLeaveHandler.bind(this);
		this.boundMouseMoveHandler = this.mouseMoveHandler.bind(this);

		this.node.addEventListener("mouseenter", this.boundMouseEnterHandler );
		this.node.addEventListener("mouseleave", this.boundMouseLeaveHandler );
	};

	exports.Tooltip = Tooltip;
})(typeof exports==="undefined" ? window : exports);
