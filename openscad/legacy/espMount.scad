$fn = 128;

espMountHolesDia = 4.50;
espWidth = 25.50;
espLength = 37.75;
espMountDepth = 4.50;
espMountMiddleSectionWidth = 7.00;
espMountMiddleSectionLength= 27.00;
espMountLegWidth = 3.00;
espMountLegLength = 11.00;
espScrewDepth = 3.00;
espScrewDia = 2.50;

capacitorDia = 10.25;
capacitorLength = 21.50;
capacitorMountExtra = 2.75;
capacitorMountDia = capacitorDia+capacitorMountExtra;
capacitorMountWidth = 3.00;
capacitorMountClip = 3.00;
capacitorMountClipPlacementPercentage = 0.20;

module espMountPost()
{
	difference()
	{
		cube([espMountHolesDia, espMountHolesDia, espMountDepth]);
		translate([((espMountHolesDia-espScrewDia)/2)+(espScrewDia/2), ((espMountHolesDia-espScrewDia)/2)+(espScrewDia/2), -0.1]) { cylinder(d=espScrewDia, h=espScrewDepth); }
	}
}

module espMount(capacitor=false, postsOnly=false)
{
	translate([0, espMountHolesDia, espMountDepth])
	{
		rotate([180, 0, 0])
		{
			difference()
			{
				union()
				{
					espMountPost();
					translate([espWidth-espMountHolesDia, 0, 0]) { espMountPost(); }
					
					translate([0, -(espLength-espMountHolesDia), 0])
					{
						espMountPost();
						translate([espWidth-espMountHolesDia, 0, 0]) { espMountPost(); }
					}

					if(postsOnly!=true)
					{
						translate([espMountHolesDia, 0, 0]) { cube([espWidth-(espMountHolesDia*2), espMountHolesDia, espMountDepth]); }
						translate([(espWidth-espMountMiddleSectionWidth)/2, -espMountMiddleSectionLength, 0]) { cube([espMountMiddleSectionWidth, espMountMiddleSectionLength, espMountDepth]); }
						translate([0, -(espLength-(espMountHolesDia)), 0])
						{
							translate([(espWidth-espMountLegWidth)-(espMountHolesDia-espMountLegWidth), 2, 0]) { rotate([0, 0, 49]) { cube([espMountLegWidth, espMountLegLength, espMountDepth]); } }
							translate([espWidth, 2, espMountDepth]) { rotate([0, 180, 0]) { translate([(espWidth-espMountLegWidth)-(espMountHolesDia-espMountLegWidth), 0, 0]) { rotate([0, 0, 49]) { cube([espMountLegWidth, espMountLegLength, espMountDepth]); } } } }
						}
					}
				}
				
				translate([((espMountHolesDia-espScrewDia)/2)+(espScrewDia/2), ((espMountHolesDia-espScrewDia)/2)+(espScrewDia/2), -0.1])
				{
					cylinder(d=espScrewDia, h=espScrewDepth);
					translate([espWidth-(((espMountHolesDia-espScrewDia)/2)+(espScrewDia/2)*3), 0, 0]) { cylinder(d=espScrewDia, h=espScrewDepth); }
				}
				
			}

			if(capacitor==true)
			{
				translate([(capacitorMountDia/2)+(espWidth-capacitorMountDia)/2, -capacitorLength, ((capacitorMountDia/2))+(espMountDepth-0.8)]) { rotate([-90, 00, 0]) { capacitorMount(); } }
			}
		}
	}
}

module capacitorMount()
{
	difference()
	{
		intersection()
		{
			difference()
			{
				cylinder(d=capacitorMountDia, h=capacitorLength);
				translate([0, 0, -0.1]) { cylinder(d=capacitorDia, h=capacitorLength+0.2); }
			}
			
			union()
			{
				translate([-((capacitorMountDia/2)+0.1), -((capacitorMountDia/2)+0.1), capacitorLength*capacitorMountClipPlacementPercentage]) { cube([capacitorMountDia+0.2, capacitorMountDia+0.2, capacitorMountWidth]); }
				translate([-((capacitorMountDia/2)+0.1), -((capacitorMountDia/2)+0.1), capacitorLength*(1-capacitorMountClipPlacementPercentage)]) { cube([capacitorMountDia+0.2, capacitorMountDia+0.2, capacitorMountWidth]); }
			}
		}
		
		translate([-((capacitorMountDia/2)+0.1), -(capacitorMountDia+0.1+capacitorMountClip), 0]) { cube([capacitorMountDia+0.2, capacitorDia+capacitorMountExtra+0.2, capacitorLength]); }
	}
}