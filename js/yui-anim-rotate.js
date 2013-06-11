"use strict";
/*global YUI: true*/

YUI.add("yui-anim-rotate", function(Y)
{
	Y.Anim.behaviors.rotate =
	{
		set : function(anim, att, from, to, elapsed, duration, fn)
		{
			var targetAngle = fn(elapsed, +from, +to-+from, duration);
			if(targetAngle<0)
				targetAngle = (360-(targetAngle*-1));
			else if(targetAngle>360)
				targetAngle-=360;
			
			anim._node.setRotateStyle(targetAngle);
		}
	};

	Y.Anim.behaviors.rotateOrigin =
	{
		set : function(anim, att, from, to, elapsed, duration, fn)
		{
			var originX = fn(elapsed, from[0], to[0]-from[0], duration);
			var originY = fn(elapsed, from[1], to[1]-from[1], duration);
			anim._node.setRotateStyle(undefined, [originX, originY]);
		}
	};
}, "1.0", { requires : ["anim"] });
