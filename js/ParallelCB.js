"use strict";
(function _ParallelCB()
{
	// A simple class that allows you to create callbacks and then call a final callback when all other callbacks have finished
	class ParallelCB
	{
		constructor()
		{
			this.finalcb = null;
			this.cbcount = 0;
			this.enabled = false;
		}

		// Get a callback
		getCB()
		{
			this.cbcount++;
			return this.cbHandler.bind(this);
		}

		// Call this with your "final cb" and it will be called when all the callbacks returned by getCB() have been called. This may happen immediately, sync.
		// Thus you should only call this AFTER you have gotten all the cb's you need with getCB()
		enable(finalcb)
		{
			this.finalcb = finalcb;
			this.enabled = true;

			this.checkDone();
		}

		// Internal only function that will check to see if we are done, and if so call our finalcb (if we have one)
		checkDone()
		{
			if(!this.enabled || this.cbcount>0)
				return;

			if(this.finalcb)
				this.finalcb();
		}

		// Called when a cb returned by getCB() is executed
		cbHandler()
		{
			this.cbcount--;
			this.checkDone();
		}
	}

	window.XU = window.XU || {};
	window.XU.ParallelCB = ParallelCB;
})();
