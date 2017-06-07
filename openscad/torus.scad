/*
	torus() v1.0.0 by robert@cosmicrealms.com from https://github.com/Sembiance/openscad-modules
	Allows you to create a torus
	
	Usage
	=====
	Prototype: torus(d1, d2, $fn)
	Arguments:
		-   d1 = Internal diamater of the torus ring. Default: 10
		-   d2 = Diameter of the torus pipe. Default: 2
		- fill = Whether to fill the interiour of the ring or not. Default: false
		-  $fn = How smooth you want the dome rounding to be. Default: 128

	Change Log
	==========
	2017-02-28: v1.0.0 - Initial Release
*/

// Example code:
/*
torus(d1=20, d2=4, fill=true);
*/

module torus(d1=10, d2=2, fill=false, $fn=128)
{
	rotate_extrude()
	{
		translate([(d1/2)+(d2/2), 0, 0])
		{
			circle(d=d2);
		}
	}

	if(fill)
		translate([0, 0, -(d2/2)]) { cylinder(d=d1+d2, h=d2); }
}
