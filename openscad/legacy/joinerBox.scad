nutDiameter = 8.60;
nutDepth = 3.70;
screwDiameter = 3.75;
screwHeadDiameter = 7.40;
screwHeadDepth = 2.75;
screwLength = 19.00;

function joinerBoxWHTotal(wallWidth) = (wallWidth*2)+nutDiameter;
function joinerBoxBottomDepthTotal(wallWidth) = (wallWidth*2)+nutDepth+(screwLength-((wallWidth*2)+nutDepth));
function joinerBoxTopDepthTotal(wallWidth) = wallWidth+screwHeadDepth+(wallWidth/2);

module joinerBoxBottom(wallWidth)
{
	extraBottomDepth = (screwLength-((wallWidth*2)+nutDepth));
	
	boxWHTotal = joinerBoxWHTotal(wallWidth);
	boxDepthTotal = joinerBoxBottomDepthTotal(wallWidth);
	
	difference()
	{
		cube([boxWHTotal, boxWHTotal, (wallWidth*2)+nutDepth+extraBottomDepth]);
		translate([-0.1, wallWidth, wallWidth+(extraBottomDepth/1.5)])
		{
			cube([nutDiameter+wallWidth, nutDiameter, nutDepth]);
		}
		
		translate([boxWHTotal/2, boxWHTotal/2, wallWidth+0.1])
		{
			cylinder(d=screwDiameter, h=(screwLength-wallWidth));
		}
	}
}

module joinerBoxTop(wallWidth)
{
	boxWHTotal = joinerBoxWHTotal(wallWidth);
	boxDepthTotal = joinerBoxTopDepthTotal(wallWidth);
	
	difference()
	{
		cube([boxWHTotal, boxWHTotal, boxDepthTotal]);
		translate([boxWHTotal/2, boxWHTotal/2, -0.1])
		{
			cylinder(d=screwDiameter, h=boxDepthTotal+0.2);
			translate([0, 0, wallWidth])
			{
				cylinder(d=screwHeadDiameter, (boxDepthTotal-wallWidth)+0.2);
			}
		}
	}
}
