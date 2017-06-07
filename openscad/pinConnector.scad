/*
   pinConnector() v1.0.0 by robert@cosmicrealms.com from https://github.com/Sembiance/openscad-modules
   Allows you to create male and female pin connectors to easily connect two objects together

   NOTE: Original version is from Bushmills @ http://www.thingiverse.com/thing:1818594
   
   Usage
   =====
   Prototype: pinConnector(length, width, depth, slack, wall, bulge, tension)
   Arguments:
	  -   length = Max length of the female part, including walls. Default: 40
	  -    width = Width of tongue without bulge. Default: 24
	  -    depth = Depth of the male tongue. Default: 14
	  -    slack = Increases size of block where pin parts fit in. Default: 0.7
	  -     wall = Size of block walls at flat sides of pin and remaning size of seat of bulge. Default: 1.5
	  -    bulge = Determines how much bulge protrudes over width. Default: 1.0
	  - tensions = Changes slot width and recess to modulate forces for connecting and holding. Default: 3.2
	  -   female = Set to true if you want the female version of the connector. Default: false

   Change Log
   ==========
   2017-04-23: v1.0.0 - Initial Release
*/

// Example code:
/*
pinConnector(female=true);
pinConnector();
*/

function pinConnectorLength() = 40;
function pinConnectorWidth() = 24;
function pinConnectorDepth() = 14;
function pinConnectorSlack() = 0.7;
function pinConnectorWall() = 1.5;
function pinConnectorBulge() = 1.0;
function pinConnectorTension() = 3.2;
function pinMaleBaseHeight(wall=pinConnectorWall(), slack=pinConnectorSlack()) = wall+slack+0.1;
function pinConnectorFemaleDepth(depth=pinConnectorDepth(), wall=pinConnectorWall(), slack=pinConnectorSlack()) = depth+((wall+slack)*2);

module pinConnector(length=pinConnectorLength(), width=pinConnectorWidth(), depth=pinConnectorDepth(), slack=pinConnectorSlack(), wall=pinConnectorWall(), bulge=pinConnectorBulge(), tension=pinConnectorTension(), female=false)
{	
	fullWidth = width;

	length = length-((wall+slack));
	width = width-((bulge+wall+slack)*2);
	depth = depth-((wall+slack)*2);

	if(female==true)
	{
		block(length, width, depth, bulge, wall, slack);
	}
	else
	{
		translate([0, ((pinConnectorFemaleDepth(depth, wall, slack)-depth)/2), 0])
		{
			translate([(fullWidth-width)/2, depth, wall+slack]) { rotate([90, 0, 0]) { pin(length, width, depth, bulge, tension); } }
			cube([fullWidth, depth, pinMaleBaseHeight(wall, slack)]);
		}
	}
}

module pin_and_block(length, width, depth, bulge, slack)
{
	radius = min(width/2+bulge+slack, length/2);
	linear_extrude(depth+2*slack)
	{
		union()
		{
			square([width+slack*2, length-radius]);
			translate([width/2+slack, length-radius])
				circle(radius, $fn=100);
		}
	}
}

module pin(len, width, depth, bulge, tension)
{
	radius = width/2+bulge;
	difference()
	{
		pin_and_block(len, width, depth, bulge, 0);
		translate([width/2, len-tension*radius, -0.1])
			wedge(tension*radius, tension*bulge, depth+0.2);
	}
}

module block(len, width, depth, bulge, wall, slack)
{
	w = wall+slack;
	l = len+w;
	translate([0, 0, l])
	{
		rotate([270, 0, 0])
		{
			difference()
			{
				cube([width+2*(bulge+w), l, depth+2*w]);
				translate([bulge+wall-0.1, -0.1, wall-0.1])
				pin_and_block(len, width+0.2, depth, bulge, slack);
			}
		}
	}
}

module rotateAround(a, v) { translate(v) { rotate(a) { translate(-v) { children(); } } } }

module wedge(length, width, depth)
{
	linear_extrude(depth)
	{
		hull()
		{
			circle(0.5, $fn=50);
			for(i=[-2,2])
			{
				translate([width/i, length])
					circle(0.01, $fn=0);
			}
		}
	}
}
