export class SegmentedControl
{
	constructor(node)
	{
		this.node = node;
		this.thumb = this.node.querySelector(".thumb");
		if(!this.getSelectedSegment())
			this.node.querySelector(".segment").classList.add("selected");
		
		if(this.getSelectedSegment()===this.node.querySelector(".segment"))
			this.thumb.classList.add("left");

		this.onChange = null;

		this.node.addEventListener("click", this.clickHandler);
	}

	// Returns the currently selected tabid
	getSelectedSegment()
	{
		return this.node.querySelector(".selected") || null;
	}

	// Called to destroy this tooltip
	destroy()
	{
		this.node.removeEventListener("click", this.boundClickHandler);
	}

	// Disables the control
	disable()
	{
		this.node.classList.add("disabled");
	}

	// Enables the control
	enable()
	{
		this.node.classList.remove("disabled");
	}

	// Toggles the control
	toggle(skipNotification=false)
	{
		this.thumb.classList.toggle("left");
		this.thumb.classList.toggle("right");

		Array.from(this.node.querySelectorAll(".segment")).forEach(segment => segment.classList.toggle("selected"));

		if(this.onChange && !skipNotification)
			this.onChange(this.getSelectedSegment());
	}

	// Called when the segmented control is click, simply switch which segment is selected
	clickHandler = e =>
	{
		if(this.node.classList.contains("disabled"))
			return;
		
		this.toggle();
	};
}
