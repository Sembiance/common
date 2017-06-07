/*
   pcbMount() v1.0.0 by robert@cosmicrealms.com from https://github.com/Sembiance/openscad-modules
   Allows you to create mounting holes for a PCB board

   REQUIRES: hollowCylinder.scad

   Usage
   =====
   Prototype: pcbMount(width, length, screwDiameter, screwLength, screwWallWidth, screwOffsetX, screwOffsetY)
   Arguments:
	  -          width = Width of the PCB board, X dimension
	  -         length = Length of the PCB board, Y dimension
	  -  screwDiameter = Diameter of the screw. 0.25 of clearance is automatically added. Default: 2.00
	  -    screwLength = Length of the screw. Default: 5.00
	  - screwWallWidth = Width of the wall around the screw hole. Default: 1.50
	  -   screwOffsetX = X offset from side of board for each screw hole. Default: 0
	  -   screwOffsetY = Y offset from side of board for each screw hole. Default: 0

   Change Log
   ==========
   2017-05-05: v1.0.0 - Initial Release
*/

// Example code:
/*
pcbMount(width=63.50, length=59.00);
*/

include <hollowCylinder.scad>;

function pcbMountScrewDiameter() = 2.00;
function pcbMountScrewLength() = 5.00;
function pcbMountScrewWallWidth() = 1.50;

module pcbMount(width, length, screwDiameter=pcbMountScrewDiameter(), screwLength=pcbMountScrewLength(), screwWallWidth=pcbMountScrewWallWidth(), screwOffsetX=0, screwOffsetY=0)
{	
	screwDiameter = screwDiameter+0.25;
	
	totalOffset = (screwDiameter/2)+screwWallWidth;
	totalOffsetX = totalOffset+screwOffsetX;
	totalOffsetY = totalOffset+screwOffsetY;
	totalDiameter = screwDiameter+(screwWallWidth*2);

	translate([totalOffsetX, totalOffsetY, 0])
		hollowCylinder(d=totalDiameter, h=screwLength, wallWidth=screwWallWidth);
	translate([width-totalOffsetX, totalOffsetY, 0])
		hollowCylinder(d=totalDiameter, h=screwLength, wallWidth=screwWallWidth);
	translate([width-totalOffsetX, length-totalOffsetY, 0])
		hollowCylinder(d=totalDiameter, h=screwLength, wallWidth=screwWallWidth);
	translate([totalOffsetX, length-totalOffsetY, 0])
		hollowCylinder(d=totalDiameter, h=screwLength, wallWidth=screwWallWidth);
}
