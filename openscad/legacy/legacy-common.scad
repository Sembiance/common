module ventingLines(x, y)
{
	translate([(x/2)*-1, (y/2)*-1, 0])
	{
		for(i=[0:y])
		{
			if(i%2==0)
			{
				translate([0, i, 0]) { cube([x+0.2, 0.8, 0.6]); }
			}
		}
	}
}
