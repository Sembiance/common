/*
	dovetailJoint() v1.0.0 by robert@cosmicrealms.com from https://github.com/Sembiance/openscad-modules
	Allows you to create male and female dovetail joints to allow parts to fit together
	
	Usage
	=====
	Prototype: dovetailJoint(width, length, female)
	Arguments:
		-      width = Maximum width of the dovetail joint. Default: 20
		-     length = Length of the dovetail joint. Default: 60
		-      depth = Maximum depth of the dovetail joint. Default: 10
		-     female = Set to true if you want the female version of the joint. Default: false
		- stopLength = Length of stop bit. Default: 0

	Change Log
	==========
	2017-04-22: v1.0.0 - Initial Release
*/

// Example code:
/*
dovetailJoint();
translate([20+30, 0, 10])
	rotate([0, 180, 0])
		dovetailJoint(female=true);
*/

function dovetailJointWidth() = 20;
function dovetailJointLength() = 60;
function dovetailJointDepth() = 10;
function dovetailJointBaseDepth(depth=dovetailJointDepth()) = depth*0.20;

module dovetailJoint(width=dovetailJointWidth(), length=dovetailJointLength(), depth=dovetailJointDepth(), female=false, stopLength=0)
{
	dovetailClearanceX = 0.90;
	dovetailClearanceY = 0.30;

	if(female==true)
		dovetailJointFemale(width, length, depth, stopLength);
	else
		dovetailJointMale(width, length, depth, stopLength, dovetailClearanceX, dovetailClearanceY);
}

module dovetailJointFemale(width, length, depth, stopLength)
{
	baseDepth = depth*0.20;

	difference()
	{
		cube([width, length, depth]);

		translate([0, -0.1, -baseDepth])
			dovetailJointMale(width, length+0.2, depth, stopLength, 0, 0);
	}
}

module dovetailJointMale(width, length, depth, stopLength, clearanceX, clearnaceY)
{
	jointDepth = (depth*0.80)-clearnaceY;
	baseDepth = dovetailJointBaseDepth(depth);
	jointWidthWide = (width*0.70)-clearanceX;
	jointWidthNarrow = (width*0.40)-clearanceX;

	cube([width, length, baseDepth]);
	translate([(width-jointWidthNarrow)/2, length, baseDepth])
		rotate([90, 0, 0])
			trapezoid(jointWidthNarrow, jointWidthWide, jointDepth, length);

	if(stopLength>0)
		cube([width, stopLength, jointDepth+baseDepth]);
}

// From: https://github.com/robofun/openscad-utils/blob/master/trapezoid.scad
module trapezoid(width_base, width_top, height, thickness)
{
	linear_extrude(height = thickness) polygon(points=[[0,0],[width_base,0],[width_base-(width_base-width_top)/2,height],[(width_base-width_top)/2,height]], paths=[[0,1,2,3]]); 
}
