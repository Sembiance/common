"use strict";
/*global Element: true*/

// Adds several helper methods to the built in DOM elements

Element.prototype.hasClass = function(className)
{
	var re = new RegExp("(?:^|\\s+)" + className + "(?:\\s+|$)");
	return re.test(this.className);
};

Element.prototype.addClass = function(className)
{
	if(!this.hasClass(className))
		this.className = [this.className, className].join(' ').trim();
};

Element.prototype.removeClass = function(className)
{
	while(this.hasClass(className))
	{
		this.className = this.className.replace(new RegExp("(?:^|\\s+)" + className + "(?:\\s+|$)"), " ").trim();
	}
};
