function drywallScrewShaftDiameter() = 4.25 + 0.75;
function drywallScrewHeadDiameter() = 7.75 + 1.50;
function drywallScrewHeadDepth() = 3.50;
function drywallScrewSlideTrackLength() = 5.00;

module drywallScrewSlideDiff(depth, trackLength=drywallScrewSlideTrackLength(), $fn=128)
{
	cylinder(d=drywallScrewHeadDiameter(), h=depth);

	hull()
	{
		translate([0, 0, depth-drywallScrewHeadDepth()])
		{
			cylinder(d=drywallScrewHeadDiameter(), h=drywallScrewHeadDepth());
			translate([0, trackLength+(drywallScrewHeadDiameter()/2), 0]) cylinder(d=drywallScrewHeadDiameter(), h=drywallScrewHeadDepth());
		}
	}

	hull()
	{
		cylinder(d=drywallScrewShaftDiameter(), h=depth);
		translate([0, trackLength+(drywallScrewHeadDiameter()/2), 0]) cylinder(d=drywallScrewShaftDiameter(), h=depth);
	}

	translate([0, trackLength+(drywallScrewHeadDiameter()/2), depth-drywallScrewHeadDepth()]) cylinder(d=drywallScrewHeadDiameter(), h=drywallScrewHeadDepth());
}
