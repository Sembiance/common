/*
	roundedCube() v1.0.0 by robert@cosmicrealms.com from https://github.com/Sembiance/openscad-modules
	Allows you to round any edge of a cube
	
	Usage
	=====
	Prototype: roundedCube(dim, r, x, y, z, xcorners, ycorners, zcorners, $fn)
	Arguments:
		-      dim = Array of x,y,z numbers representing cube size
		-        r = Radius of corners. Default: 1
		-        x = Round the corners along the X axis of the cube. Default: false
		-        y = Round the corners along the Y axis of the cube. Default: false
		-        z = Round the corners along the Z axis of the cube. Default: true
		- xcorners = Array of 4 booleans, one for each X side of the cube, if true then round that side. Default: [true, true, true, true]
		- ycorners = Array of 4 booleans, one for each Y side of the cube, if true then round that side. Default: [true, true, true, true]
		- zcorners = Array of 4 booleans, one for each Z side of the cube, if true then round that side. Default: [true, true, true, true]
		-   center = Whether to render the cube centered or not. Default: false
		-      $fn = How smooth you want the rounding to be. Default: 128

	Change Log
	==========
	2017-05-15: v1.0.2 - Fixed bugs relating to rounding corners on the X axis
	2017-04-22: v1.0.1 - Added center option
	2017-01-04: v1.0.0 - Initial Release

	Thanks to Sergio Vilches for the initial code inspiration
*/

// Example code:

/*cube([5, 10, 4]);

translate([8, 0, 0]) { roundedCube([5, 10, 4], r=1); }
translate([16, 0, 0]) { roundedCube([5, 10, 4], r=1, zcorners=[true, false, true, false]); }

translate([24, 0, 0]) { roundedCube([5, 10, 4], r=1, y=true, z=false); }
translate([32, 0, 0]) { roundedCube([5, 10, 4], r=1, x=true, z=false); }
translate([40, 0, 0]) { roundedCube([5, 10, 4], r=1, x=true, y=true, z=true); }
*/

module roundedCube(dim, r=1, x=false, y=false, z=true, xcorners=[true,true,true,true], ycorners=[true,true,true,true], zcorners=[true,true,true,true], center=false, $fn=128)
{
	translate([(center==true ? (-(dim[0]/2)) : 0), (center==true ? (-(dim[1]/2)) : 0), (center==true ? (-(dim[2]/2)) : 0)])
	{
		difference()
		{
			cube(dim);

			if(z)
			{
				translate([0, 0, -0.1])
				{
					if(zcorners[0])
						translate([0, dim[1]-r]) { rotateAround([0, 0, 90], [r/2, r/2, 0]) { meniscus(h=dim[2], r=r, fn=$fn); } }
					if(zcorners[1])
						translate([dim[0]-r, dim[1]-r]) { meniscus(h=dim[2], r=r, fn=$fn); }
					if(zcorners[2])
						translate([dim[0]-r, 0]) { rotateAround([0, 0, -90], [r/2, r/2, 0]) { meniscus(h=dim[2], r=r, fn=$fn); } }
					if(zcorners[3])
						rotateAround([0, 0, -180], [r/2, r/2, 0]) { meniscus(h=dim[2], r=r, fn=$fn); }
				}
			}

			if(y)
			{
				translate([0, -0.1, 0])
				{
					if(ycorners[0])
						translate([0, 0, dim[2]-r]) { rotateAround([0, 180, 0], [r/2, 0, r/2]) { rotateAround([-90, 0, 0], [0, r/2, r/2]) { meniscus(h=dim[1], r=r); } } }
					if(ycorners[1])
						translate([dim[0]-r, 0, dim[2]-r]) { rotateAround([0, -90, 0], [r/2, 0, r/2]) { rotateAround([-90, 0, 0], [0, r/2, r/2]) { meniscus(h=dim[1], r=r); } } }
					if(ycorners[2])
						translate([dim[0]-r, 0]) { rotateAround([-90, 0, 0], [0, r/2, r/2]) { meniscus(h=dim[1], r=r); } }
					if(ycorners[3])
						rotateAround([0, 90, 0], [r/2, 0, r/2]) { rotateAround([-90, 0, 0], [0, r/2, r/2]) { meniscus(h=dim[1], r=r); } }
				}
			}

			if(x)
			{
				translate([-0.1, 0, 0])
				{
					if(xcorners[0])
						translate([0, dim[1]-r]) { rotateAround([0, 90, 0], [r/2, 0, r/2]) { meniscus(h=dim[0], r=r); } }
					if(xcorners[1])
						translate([0, dim[1]-r, dim[2]-r]) { rotateAround([90, 0, 0], [0, r/2, r/2]) { rotateAround([0, 90, 0], [r/2, 0, r/2]) { meniscus(h=dim[0], r=r); } } }
					if(xcorners[2])
						translate([0, 0, dim[2]-r]) { rotateAround([180, 0, 0], [0, r/2, r/2]) { rotateAround([0, 90, 0], [r/2, 0, r/2]) { meniscus(h=dim[0], r=r); } } }
					if(xcorners[3])
						rotateAround([-90, 0, 0], [0, r/2, r/2]) { rotateAround([0, 90, 0], [r/2, 0, r/2]) { meniscus(h=dim[0], r=r); } }
				}
			}
		}
	}
}

module meniscus(h, r, fn=128)
{
	$fn=fn;

	difference()
	{
		cube([r+0.2, r+0.2, h+0.2]);
		translate([0, 0, -0.1]) { cylinder(h=h+0.4, r=r); }
	}
}

module rotateAround(a, v) { translate(v) { rotate(a) { translate(-v) { children(); } } } }
