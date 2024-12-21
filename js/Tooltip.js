import {xu} from "./xu.js";
import "./DOM.js";

export class Tooltip
{
	constructor(node, text, {classNames=[], delay=xu.SECOND*0.5, alwaysLeft, alwaysRight, alwaysAbove, alwaysBelow, useTextAsDIV})
	{
		this.node = node;
		this.node.dataset.tooltipid = xu.randStr();
		this.text = text;
		this.alwaysLeft = alwaysLeft;
		this.alwaysRight = alwaysRight;
		this.alwaysAbove = alwaysAbove;
		this.alwaysBelow = alwaysBelow;

		if(useTextAsDIV)
		{
			this.tooltip = text;
		}
		else
		{
			this.tooltip = document.createElement("div");
			this.tooltip.innerHTML = (typeof this.text==="function" ? this.text() : this.text);
		}
		for(const className of classNames)
			this.tooltip.classList.add(className);
		this.tooltip.dataset.tooltipid = this.node.dataset.tooltipid;

		this.tooltipOffset = 15;
		this.tooltipLeft = this.tooltipBelow = false;
		this.tooltipDelay = delay;
		this.tooltipDelayTimeout = null;
		this.lastPageX = this.lastPageY = null;
		this.visible = this.disabled = this.skipNextShow = false;

		document.body.addEventListener("click", this.bodyClickHandler);
		this.node.addEventListener("click", this.clickHandler);
		this.node.addEventListener("mouseenter", this.mouseEnterHandler);
		this.node.addEventListener("mouseleave", this.mouseLeaveHandler);
	}

	// Called to destroy this tooltip
	destroy()
	{
		this.hide();
		
		this.node.removeEventListener("click", this.clickHandler);
		this.node.removeEventListener("mouseenter", this.mouseEnterHandler);
		this.node.removeEventListener("mouseleave", this.mouseLeaveHandler);

		document.body.removeEventListener("mousemove", this.mouseMoveHandler);
	}

	// Called when the mouse enters the node
	mouseEnterHandler = e => this.show(e);

	// Called when the mouse leaves the node
	mouseLeaveHandler = () => this.hide();

	// Shows the tooltip
	show(e, clicked)
	{
		if(this.disabled || this.visible || this.skipNextShow)
			return (this.skipNextShow = false), undefined;

		if(!clicked)
			document.body.addEventListener("mousemove", this.mouseMoveHandler);
		document.body.append(this.tooltip);

		this.tooltipLeft = this.alwaysLeft ? true : (this.alwaysRight ? false : (e ? e.pageX : this.node.getXY()[0])>(document.body.getWidth()/2));
		this.tooltipBelow = this.alwaysBelow ? true : (this.alwaysAbove ? false : (e ? e.pageY : this.node.getXY()[1])<(document.body.getHeight()/2));

		this.visible = true;

		this.tooltipDelayTimeout = setTimeout(() =>
		{
			this.tooltipDelayTimeout = null;

			this.tooltip.style.display = "block";
			this.mouseMoveHandler();
		}, this.tooltipDelay);
	}

	// Hides the tooltip
	hide(clicked)
	{
		if(!this.visible || (this.fixedOpen && !clicked))
			return;

		this.fixedOpen = false;

		this.visible = false;

		if(!clicked)
			document.body.removeEventListener("mousemove", this.mouseMoveHandler);
		this.tooltip.remove();

		this.tooltip.style.display = "none";

		if(this.tooltipDelayTimeout)
		{
			clearTimeout(this.tooltipDelayTimeout);
			this.tooltipDelayTimeout = null;
		}
	}


	// Called when the mouse is moved
	mouseMoveHandler = e =>
	{
		if(this.fixedOpen)
			return;
		
		if(e)
		{
			this.lastPageX = e.pageX;
			this.lastPageY = e.pageY;
		}

		const tooltipHeight = this.tooltip.getHeight();
		const tooltipWidth = this.tooltip.getWidth();

		let y = this.tooltipBelow ? this.lastPageY+this.tooltipOffset : Math.max(((this.lastPageY-tooltipHeight)-this.tooltipOffset), 0);
		const yOverflow = (y+tooltipHeight)-document.body.getHeight();
		if(yOverflow>0)
			y -= yOverflow;
		this.tooltip.style.top = `${y}px`;

		this.tooltip.style.left = this.tooltipLeft ? `${((this.lastPageX-tooltipWidth)-this.tooltipOffset)}px` : `${(this.lastPageX+this.tooltipOffset)}px`;
	};

	clickHandler = e =>
	{
		if(this.node.nodeName.toLowerCase()==="a")
			return;
		
		this.fixedOpen = true;
	};

	bodyClickHandler = e =>
	{
		if(!this.fixedOpen || e.target.closest(`*[data-tooltipid="${this.node.dataset.tooltipid}"]`))
			return;

		this.hide(true);
	};

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
}
