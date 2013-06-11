"use strict";
/*global Raphael: true*/

if(typeof Raphael!=="undefined")
{
	Raphael.fn.polygon = function(_coords)
	{
		var self = this.path();
		self.coords = _coords.slice();

		self.update = function () {
			var pathlist = [];
			pathlist.push("M" + self.coords[0] + " " + self.coords[1]);	// Move the cursor
			pathlist.push("L");	// Draw a line
			for (var i=2;i<self.coords.length;i++) {
				pathlist.push(self.coords[i]);
			}
			pathlist.push("Z");	// Close the path
			self.attr("path", pathlist.join(" "));
		};

		self.update();
		return self;
	};
}
