/*
	funnel() v1.0.0 by robert@cosmicrealms.com from https://github.com/Sembiance/openscad-modules
	Allows you to create a funnel
	
	Usage
	=====
	Prototype: funnel(dim, wall, center, steps, $fn)
	Arguments:
		-      dim = Array of arrays. Each sub array should be [z, diameter]. MUST order in ascending z
		-     wall = Width of the funnel wall: Default 2
		-    solid = Set to true to make a solid funnel. Useful if you need to subtract it from something
		-      $fn = How smooth you want the rounding to be. Default: 128


	Change Log
	==========
	2017-01-04: v1.0.0 - Initial Release
*/

// Example code: funnel([[0, 15], [38, 15], [38+45, 48]], wall=1.75);

module funnel(dim, wall=2, solid=false, $fn=128)
{
	segCount = len(dim);
	
	difference()
	{
		union()
		{
			for(i=[0:segCount-1])
			{
				if(i<segCount-1)
				{
					translate([0, 0, dim[i][0]])
						cylinder(d1=dim[i][1], d2=dim[i+1][1], h=dim[i+1][0]-dim[i][0], $fn=$fn);
				}
			}
		}

		if(!solid)
		{
			union()
			{
				for(i=[0:segCount-1])
				{
					if(i<segCount-1)
					{
						translate([0, 0, dim[i][0]])
							cylinder(d1=dim[i][1]-wall, d2=dim[i+1][1]-wall, h=(dim[i+1][0]-dim[i][0]), $fn=$fn);
					}
				}
			}
		}
	}	
}

