"use strict";

if(!Number.prototype.toClock)
{
	Number.prototype.toClock = function(omitMinutes)
	{
		var clockText = "";
		var secondsElapsed = this;
        if(secondsElapsed>=(60*60))
        {
            var hourText = "" + parseInt((secondsElapsed / (60*60)), 10);
            clockText += hourText + ":";
            secondsElapsed %= (60*60);
            secondsElapsed = parseInt(secondsElapsed, 10);
        }

        if(secondsElapsed>=(60))
        {
            var minuteText = "" + parseInt((secondsElapsed / 60), 10);
            clockText += (minuteText.length===0 ? "00" : (minuteText.length===1) ? "0" : "") + minuteText + ":";
            secondsElapsed %= 60;
            secondsElapsed = parseInt(secondsElapsed, 10);
        }
        else if(typeof omitMinutes==="undefined" || !omitMinutes)
            clockText += "00:";

        var secondText = "" + Math.floor(secondsElapsed);
        clockText += (secondText.length===0 ? "00" : (secondText.length===1) ? "0" : "") + secondText;

        return clockText;
	};
}

if(!Number.prototype.zeroPad)
{
    Number.prototype.zeroPad = function(width)
    {
        var number = +this;

        width -= number.toString().length;
        if(width>0)
            return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;

        return number + "";
    };
}

if(!Number.isNumber)
{
    Number.isNumber = function(n)
    {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
}