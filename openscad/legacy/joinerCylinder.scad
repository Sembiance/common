include </mnt/compendium/DevLab/common/openscad/common.scad>;

joinerNutDiameter = 8.60;
joinerNutDepth = 3.70;
joinerScrewDiameter = 3.75;
joinerScrewHeadDiameter = 7.40;
joinerScrewHeadDepth = 2.75;
joinerScrewLength = 19.00;

function joinerCylinderWHTotal(wallWidth) = (wallWidth*2)+joinerNutDiameter;
function joinerCylinderBottomDepthTotal(wallWidth) = (wallWidth*2)+joinerNutDepth+(joinerScrewLength-((wallWidth*2)+joinerNutDepth));
function joinerCylinderTopDepthTotal(wallWidth) = wallWidth+joinerScrewHeadDepth+(wallWidth/2);

module joinerCylinderBottomSolid(wallWidth)
{
	extraBottomDepth = (joinerScrewLength-((wallWidth*2)+joinerNutDepth));
	
	joinerWHTotal = joinerCylinderWHTotal(wallWidth);
	joinerDepthTotal = joinerCylinderBottomDepthTotal(wallWidth);
	joinerFullHeight = (wallWidth*2)+joinerNutDepth+extraBottomDepth;
	
	translate([joinerWHTotal/2, joinerWHTotal/2, 0])
	{
		cylinder(d=joinerWHTotal, h=joinerFullHeight);
	}
}

module joinerCylinderBottomDiff(wallWidth)
{
	extraBottomDepth = (joinerScrewLength-((wallWidth*2)+joinerNutDepth));
	
	joinerWHTotal = joinerCylinderWHTotal(wallWidth);
	joinerDepthTotal = joinerCylinderBottomDepthTotal(wallWidth);
	
	translate([-0.1, wallWidth, wallWidth+(extraBottomDepth/1.5)])
	{
		cube([joinerNutDiameter+wallWidth, joinerNutDiameter, joinerNutDepth]);
	}
	
	translate([joinerWHTotal/2, joinerWHTotal/2, wallWidth+0.1])
	{
		cylinder(d=joinerScrewDiameter, h=(joinerScrewLength-wallWidth));
	}
}

module joinerCylinderBottomDiffFlipped(wallWidth)
{
	extraBottomDepth = (joinerScrewLength-((wallWidth*2)+joinerNutDepth))/1.5;
	
	joinerWHTotal = joinerCylinderWHTotal(wallWidth);
	joinerDepthTotal = joinerCylinderBottomDepthTotal(wallWidth);
	joinerFullHeight = (wallWidth*2)+joinerNutDepth+extraBottomDepth;
	
	translate([-0.1, wallWidth, joinerFullHeight-(wallWidth+extraBottomDepth)])
	{
		cube([joinerNutDiameter+wallWidth, joinerNutDiameter, joinerNutDepth]);
	}
	
	translate([joinerWHTotal/2, joinerWHTotal/2, -0.1])
	{
		cylinder(d=joinerScrewDiameter, h=(joinerScrewLength-wallWidth));
	}
}

module joinerCylinderTopSolid(wallWidth)
{
	joinerWHTotal = joinerCylinderWHTotal(wallWidth);
	joinerDepthTotal = joinerCylinderTopDepthTotal(wallWidth);
	
	translate([joinerWHTotal/2, joinerWHTotal/2, 0])
	{
		cylinder(d=joinerWHTotal, h=joinerDepthTotal);		
	}
}

module joinerCylinderTopDiff(wallWidth, extraHeight)
{
	joinerWHTotal = joinerCylinderWHTotal(wallWidth);
	joinerDepthTotal = joinerCylinderTopDepthTotal(wallWidth);
	
	translate([joinerWHTotal/2, joinerWHTotal/2, -0.1])
	{
		cylinder(d=joinerScrewDiameter, h=joinerDepthTotal+0.2);
		translate([0, 0, wallWidth])
		{
			cylinder(d=joinerScrewHeadDiameter, (joinerDepthTotal-wallWidth)+0.2+extraHeight);
		}
	}
}
