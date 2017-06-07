include </mnt/compendium/DevLab/common/openscad/common.scad>;

module nailTab()
{
	nailDiameter = 2.00;
	nailHeadDiameter = 4.00;
	nailHeadDepth = 0.50;

	nailTabLength = 7.00;
	nailTabWidth = 5.00;
	nailTabDepth = 1.50;
	
	difference()
	{
		roundedCube([nailTabLength, nailTabWidth, nailTabDepth], r=1.0, corners=[false, true, false, true]);
		
		union()
		{
			translate([nailTabLength*0.60, 2.50, -0.1]) { cylinder(d=nailDiameter, h=nailTabDepth+0.2); }
			color("red") translate([nailTabLength*0.60, 2.50, nailTabDepth-(nailHeadDepth)]) { cylinder(d=nailHeadDiameter, h=nailHeadDepth+0.2); }
		}
	}
}

screwHeadDiameter = 9.75;
screwShaftDiameter = 5.00;
screwHeadHeight = 3.40;
screwBackDepth = 1.50;

screwTabDepth = screwBackDepth+screwHeadHeight;
screwTabHeight = screwHeadDiameter*1.5;
screwTabWidth = 15.0;

module screwHole(extraHeight=0)
{
    $fn=64;

    cylinder(d=screwShaftDiameter, h=screwBackDepth+0.2);
    translate([0, 0, screwBackDepth])
    {        
        cylinder(d=screwHeadDiameter, h=screwHeadHeight+0.2+extraHeight);
    }
}

module screwTab(extraHeight=0, round=false, corners=[true, true, true, true])
{
    difference()
    {
    	if(round==true)
	        roundedCube([screwTabDepth+extraHeight, screwTabWidth, screwTabHeight], corners=corners, horizontal=true);
	    else
	    	cube([screwTabDepth+extraHeight, screwTabWidth, screwTabHeight]);

        translate([-0.1, screwTabWidth/2, screwTabHeight/2])
        {
            rotate(a=90, v=[0, 1, 0])
            {
                screwHole(extraHeight);
            }
        }
    }
}

module screwTabFlat(extraHeight=0, round=false, corners=[true, true, true, true])
{
	rotateAround([0, -90, 0], [screwTabHeight/2, 0, screwTabHeight/2])
	{
		screwTab(extraHeight, round, corners);
	}
}

pcbStandoffHoleRadius = 3.2 / 2;
pcbStandoffHoleBottom = pcbStandoffHoleRadius+2;
pcbStandoffHoleTop = pcbStandoffHoleRadius+1;

module pcbStandoff(extraHeight=0)
{
	$fn=64;

	union()
	{
		difference()
		{
			cylinder(r1=pcbStandoffHoleBottom, r2=pcbStandoffHoleTop, h=10+extraHeight);
			cylinder(r=pcbStandoffHoleRadius, h=(10+extraHeight)*4, center=true);
		}
	} 
}
