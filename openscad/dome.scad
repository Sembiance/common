/*
	dome() v1.0.0 by robert@cosmicrealms.com from https://github.com/Sembiance/openscad-modules
	Allows you to create a dome
	
	Usage
	=====
	Prototype: dome(d, h, hollow, wallWidth, $fn)
	Arguments:
		-         d = Diamater of the dome. Default: 5
		-         h = Height of the dome. Default: 2
		-    hollow = Whether or not you want the dome to be hollow. Default: false
		- wallWidth = If the dome is hollow, how wide should the walls be. Default: 0.5
		-       $fn = How smooth you want the dome rounding to be. Default: 128

	Change Log
	==========
	2017-01-04: v1.0.0 - Initial Release

	Thanks to VincentD for the initial code inspiration (http://www.thingiverse.com/thing:277694)
*/

// Example code:
/*
dome(d=10, h=5);
translate([15, 0, 0]) { dome(d=8, h=3, hollow=true); }
*/

module dome(d=5, h=2, hollow=false, wallWidth=0.5, $fn=128)
{
	sphereRadius = (pow(h, 2) + pow((d/2), 2) ) / (2*h);

	translate([0, 0, (sphereRadius-h)*-1])
	{
		difference()
		{
			sphere(sphereRadius);
			translate([0, 0, -h])
			{
				cube([2*sphereRadius, 2*sphereRadius, 2*sphereRadius], center=true);
			}

			if(hollow)
				sphere(sphereRadius-wallWidth);
			
		}
	}
}
