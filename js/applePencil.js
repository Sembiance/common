"use strict";
/* global bowser: true */
/* eslint-disable indent */

// This will handle simulating mouse events for when the Apple pencil is being used
(function applePencil()
{
	if(typeof bowser==="undefined" || bowser.ios!==true)
		return;

	const clickms = 300;
	const locClickMaxDistance = 15;
	let lastTouchDown = -1;
	let lastClick = -1;
	let lastTouchDownLoc = [-1000, -1000];
	let lastClickLock = [-1000, -1000];

	function touchHandler(event)
	{
		if(event.type==="touch" || event.type==="pointerout")
			return;

		let type = null;
		const touch = event.changedTouches ? event.changedTouches[0] : event;

		const when = Date.now();
		switch(event.type)
		{
			case "touchstart":
				lastTouchDown = when;
				lastTouchDownLoc = [touch.screenX, touch.screenY];
				break;

			case "touchmove":
				if(lastTouchDown > -1 && Math.abs(lastTouchDownLoc[0]-touch.screenX)>=locClickMaxDistance && Math.abs(lastTouchDownLoc[1]-touch.screenY)>=locClickMaxDistance)
				{
					lastTouchDown = -1;
					lastClick = -1;
					lastTouchDownLoc = [-1000, -1000];
				}
				break;

			case "touchend":
				if(lastTouchDown > -1 && ((when - lastTouchDown) < clickms) && Math.abs(lastTouchDownLoc[0]-touch.screenX)<locClickMaxDistance && Math.abs(lastTouchDownLoc[1]-touch.screenY)<locClickMaxDistance)
				{
					lastTouchDown = -1;
					lastTouchDownLoc = [-1000, -1000];
					type="click";
					break;
				}
				break;

			default:
				return;
		}

		if(!type)
			return;

		if(lastClick>-1 && (when-lastClick)<clickms && Math.abs(lastClickLock[0]-touch.screenX)<locClickMaxDistance && Math.abs(lastClickLock[1]-touch.screenY)<locClickMaxDistance)
		{
			lastClickLock = [-1000, -1000];
			lastClick = -1;
			type = "dblclick";
		}
		else
		{
			lastClick = when;
			lastClickLock = [touch.screenX, touch.screenY];
		}

		let simulatedEvent = document.createEvent("MouseEvent");
		simulatedEvent.initMouseEvent(type, true, true, window, 1,
			touch.screenX, touch.screenY,
			touch.clientX, touch.clientY, false,
			false, false, false, 0, null);

		touch.target.dispatchEvent(simulatedEvent);
		event.preventDefault();

		if(type==="click")
		{
			simulatedEvent = document.createEvent("MouseEvent");
			simulatedEvent.initMouseEvent("mouseup", true, true, window, 1,
				touch.screenX, touch.screenY,
				touch.clientX, touch.clientY, false,
				false, false, false, 0, null);

			touch.target.dispatchEvent(simulatedEvent);

			if(touch.target.nodeName && ["input", "select"].contains(touch.target.nodeName.toLowerCase()))
				touch.target.focus();
		}
	}

	document.addEventListener("touchstart", touchHandler, true);
	document.addEventListener("touchmove", touchHandler, true);
	document.addEventListener("touchend", touchHandler, true);
	document.addEventListener("touchcancel", touchHandler, true);
})();
