"use strict";

(function _PieChart()
{
	const PIE_COLORS = ["#7cb5ec", "#90ed7d", "#f7a35c", "#5668E2", "#f15c80", "#e4d354", "#ad6673", "#91e8e1"];

	function render(canvas, data)
	{
		const ctx = canvas.getContext("2d");
		const canvasDim = [canvas.width, canvas.height];
		const radius = Math.min(canvasDim[0], canvasDim[1]) / 2;
		const center = [canvasDim[0]/2, canvasDim[1]/2];
		const total = data.map(v => v[1]).sum();
		const containerWidth = canvas.parentNode.getWidth();
		const containerHeight = canvas.parentNode.getHeight();
		const containerXY = canvas.parentNode.getXY();

		let sofar = 0;
		for(let i=0;i<data.length;i++)
		{
			const value = data[i][1] / total;

			ctx.beginPath();
			ctx.moveTo(center[0], center[1]);
			ctx.arc(center[0], center[1], radius,
				Math.PI * (-0.5 + (2 * sofar)),
				Math.PI * (-0.5 + (2 * (sofar + value))),
				false);

			ctx.lineTo(center[0], center[1]);
			ctx.closePath();
			ctx.fillStyle = PIE_COLORS[i];
			ctx.fill();

			// Draw label line
			const sliceStart = Math.PI * (2 * sofar);
			const sliceEnd = Math.PI * (2 * (sofar + value));
			let normalisedAngle = (sliceStart + sliceEnd)/2;
			if(normalisedAngle>Math.PI*2)
				normalisedAngle = normalisedAngle - (Math.PI*2);
			else if(normalisedAngle<0)
				normalisedAngle = normalisedAngle + (Math.PI*2);

			const labelLineFromX = center[0] + (Math.sin(normalisedAngle) * (radius * 0.9));
			const labelLineFromY = center[1] - (Math.cos(normalisedAngle) * (radius * 0.9));
			const labelLineToX = Math.max(0, (center[0] + (Math.sin(normalisedAngle) * (radius + 20))));
			const labelLineToY = Math.min(canvasDim[1], (center[1] - (Math.cos(normalisedAngle) * (radius + 20))));

			ctx.beginPath();
			ctx.shadowBlur = 0;
			ctx.moveTo(labelLineFromX, labelLineFromY);
			ctx.lineTo(labelLineToX, labelLineToY);
			ctx.lineWidth = 3;
			ctx.strokeStyle = "#2a2d36";
			ctx.stroke();

			ctx.beginPath();
			ctx.shadowBlur = 0;
			ctx.moveTo(labelLineFromX, labelLineFromY);
			ctx.lineTo(labelLineToX, labelLineToY);
			ctx.lineWidth = 1;
			ctx.strokeStyle = "#FFFFFF";
			ctx.stroke();

			// Draw label
			const percentage = value * 100;
			const chartLabel = document.createElement("span");
			chartLabel.classList.add("pieChartLabel");

			const chartLabelGameName = document.createElement("span");
			chartLabelGameName.classList.add("label");
			chartLabelGameName.appendChild(document.createTextNode(data[i][0]));
			chartLabel.appendChild(chartLabelGameName);

			chartLabel.appendChild(document.createTextNode(": " + Math.floor(percentage) + "%"));

			canvas.parentNode.insertBefore(chartLabel, canvas.parentNode.lastChild);

			const labelDim = [chartLabel.getWidth(), chartLabel.getHeight()];

			const labelMarginX = (labelLineToX - (labelLineToX<center[0] ? (labelDim[0]+3) : -3));
			chartLabel.style.marginLeft = "" + labelMarginX + "px";

			const labelMarginY = (labelLineToY - (labelLineToY<center[1] ? labelDim[1] : 0));
			chartLabel.style.marginTop = "" + labelMarginY + "px";

			// Now fix any labels that run off the side of the container
			const labelXY = chartLabel.getXY();
			
			const offRightBy = Math.max(0, (labelXY[0]+labelDim[0])-(containerXY[0]+containerWidth));
			const offLeftBy = Math.max(0, (0-(labelXY[0]-containerXY[0])));
			if(offLeftBy)
				chartLabel.style.marginLeft = "" + (labelMarginX + (offLeftBy+3)) + "px";
			else
				chartLabel.style.marginLeft = "" + (labelMarginX - (offRightBy+3)) + "px";

			const offBottomBy = Math.max(0, (labelXY[1]+labelDim[1])-(containerXY[1]+containerHeight));
			const offTopBy = Math.max(0, (0-(labelXY[1]-containerXY[1])));
			if(offTopBy)
				chartLabel.style.marginTop = "" + (labelMarginY + (offTopBy+3)) + "px";
			else
				chartLabel.style.marginTop = "" + (labelMarginY - (offBottomBy+5)) + "px";

			sofar += value;
		}
	}

	window.XU = window.XU || {};
	window.XU.PieChart = { render };
})();
