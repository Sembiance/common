module nailHoleDiff(shaftDiameter, headDiameter, headDepth, holeDepth, $fn=128)
{
	cylinder(d=shaftDiameter, h=holeDepth);
	translate([0, 0, holeDepth-headDepth]) cylinder(d=headDiameter, h=headDepth);
}

