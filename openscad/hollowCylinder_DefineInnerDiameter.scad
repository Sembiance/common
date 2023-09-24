/*
	hollowCylinder() v1.0.0 by robert@cosmicrealms.com from https://github.com/Sembiance/openscad-modules
	Allows you to create a hollow cylinder
	
	Usage
	=====
	Prototype: hollowCylinder_DefineInnerDiameter(d, h, wallWidth, $fn)
	Arguments:
		-         d = Diamater of the inner cyalinder wall. Default: 5
		-         h = Height of the cylinder. Default: 10
		- wallWidth = How wide the walls should be. (results in final diameter of d+wallWidth) Default: 1
		-       $fn = How smooth you want the cylinder rounding to be. Default: 128

	Change Log
	==========
	2017-01-04: v1.0.0 - Initial Release
*/

// Example code:
/*
hollowCylinder_DefineInnerDiameter(d=10, h=20);
translate([15, 0, 0]) { hollowCylinder_DefineInnerDiameter(d=15, h=5, wallWidth=0.1); }
translate([30, 0, 0]) { hollowCylinder_DefineInnerDiameter(d=10, h=2, wallWidth=4.5); }
*/

module hollowCylinder_DefineInnerDiameter(d=5, h=10, wallWidth=1, $fn=128)
{
	difference()
	{
		cylinder(d=d+(wallWidth*2), h=h+0.2);
		translate([0, 0, -0.1]) { cylinder(d=d, h=h); }
	}
}
