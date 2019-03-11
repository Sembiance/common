"use strict";
/*global Modernizr, debounce, XU: true*/

// This only supports 1 or 2 header rows. More than 2 then weird things may happen or break.
(function _Table()
{
	class Table
	{
		constructor(t)
		{
			this.t = t;
			this.t.classList.add("table");
			this.debouncedResizeHandler = debounce(this.resizeHandler.bind(this), 100);

			window.addEventListener("resize", this.debouncedResizeHandler, (typeof Modernizr!=="undefined" && Modernizr.passiveeventlisteners) ? { passive : true } : undefined);

			if((!this.t.parentNode || this.t.parentNode.getComputedStyle().position==="static"))
				console.error("Table [%s] parent must have a position other than static. Otherwise the headers will be positioned incorrectly.", Array.from(this.t.classList).join(" "));
		}

		// Called to destroy this dialog
		destroy()
		{
			window.removeEventListener("resize", this.debouncedResizeHandler);
		}

		// Will resize things correctly
		resize()
		{
			const tdWidths = Array.from(this.t.querySelectorAll("tbody tr:first-child td")).map(td => td.getWidth());

			const headerRows = Array.from(this.t.querySelectorAll("thead tr"));
			if(headerRows.length>1)
				this.t.classList.add("twoHeaderRows");

			const rowspans = [];

			headerRows.forEach((tr, rowNum) =>
			{
				let rowspanCounter = 0;
				let colCounter = 0;
				Array.from(tr.querySelectorAll("th")).forEach(th =>
				{
					const colspan = ((+(th.getAttribute("colspan") || "1")) || 1);
					const rowspan = ((+(th.getAttribute("rowspan") || "1")) || 1);

					if(rowNum===0)
					{
						rowspans.pushMany(rowspan>1 ? 1 : 0, colspan);
					}
					else
					{
						const skipColCount = rowspans.slice(rowspanCounter).reduceOnce((v, i) => (v===0 ? i : undefined));
						rowspanCounter += skipColCount + 1;
						colCounter += skipColCount;
						th.style.marginTop = "1.25em";
					}

					if(rowspan>1)
						th.classList.add("doubleHeight");

					th.style.left = (colCounter===0 ? 0 : tdWidths.slice(0, colCounter).sum()) + "px";
					th.style.width = tdWidths.slice(colCounter, colCounter+colspan).sum() + "px";

					colCounter += colspan;
				});
			});
		}

		// Called when the window is resized
		resizeHandler(e)
		{
			this.resize();
		}
	}

	XU.Table = Table;
})();
