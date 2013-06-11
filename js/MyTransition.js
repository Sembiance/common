"use strict";
/*global base, YUI, Modernizr: true*/

YUI.add("MyTransition", function(Y)
{
	//-------------------------------------------------------------------------
	// Private variables
	//-------------------------------------------------------------------------
	var validProps = [ "top", "left", "bottom", "right", "width", "height", "rotate", "rotateOrigin", "opacity", "borderColor", "backgroundColor", "borderBottomWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth" ];
	var invalidPropsForCSS = ["rotateOrigin"];
	var invalidPropsInOpera = ["borderColor"];	// Opera doesn't support transitioning certain properties (http://www.opera.com/docs/specs/presto23/css/transitions/) Sad face-->  :(
	var useCSSTransitions = false;
	
	var propToCSSPropConversionMap =
	{
		"borderColor" : "border-color",
		"backgroundColor" : "background-color",
		"borderBottomWidth" : "border-bottom-width",
		"borderTopWidth" : "border-top-width",
		"borderLeftWidth" : "border-left-width",
		"borderRightWidth" : "border-right-width"
	};

	var easingToJSMap =
	{
		"linear"      : Y.Easing.easeNone,
		"ease-in"     : Y.Easing.easeIn,
		"ease-out"    : Y.Easing.easeOut,
		"ease-in-out" : Y.Easing.easeBoth
	};

	var stylePrefix = Y.UA.webkit ? "Webkit" : (Y.UA.gecko ? "Moz" : (Y.UA.opera ? "O" : (Y.UA.ie ? "ms" : "")));
	var lowerStylePrefix = Y.UA.webkit ? "-webkit-" : (Y.UA.gecko ? "-moz-" : (Y.UA.opera ? "-o-" : (Y.UA.ie ? "-ms-" : "")));
	var endEvent = Y.UA.webkit ? "webkitTransitionEnd" : (Y.UA.gecko ? "transitionend" : (Y.UA.opera ? "OTransitionEnd" : (Y.UA.ie ? "ms" : "msTransitionEnd")));
	Y.Node.DOM_EVENTS[endEvent] = 1;

	//-------------------------------------------------------------------------
	// Private functions
	//-------------------------------------------------------------------------
	function colorToRGBA(color)
	{
		if(color==="transparent")
			return color;

		return Y.Color.toRGBA(color);
	}

	function getTransitionType(prop)
	{
		if(!Modernizr.csstransitions)
			return "js";

		if(!useCSSTransitions)
			return "js";

		if(Y.UA.opera && invalidPropsInOpera.contains(prop))
			return "js";

		if(Y.UA.gecko && Y.UA.gecko>11)	// Glitch with FF 12+ See: https://bugzilla.mozilla.org/show_bug.cgi?id=777590
			return "js";

		return "css";
	}

	function propToCSSProp(prop)
	{
		var cssProp = (propToCSSPropConversionMap[prop] || prop);
		if(cssProp==="rotate")
			cssProp = lowerStylePrefix + "transform";
		else if(cssProp==="rotateOrigin")
			cssProp = lowerStylePrefix + "transform-origin";

		return cssProp;
	}

	function cssPropToProps(cssProp)
	{
		var result = null;
		Object.forEach(propToCSSPropConversionMap, function(key, val) { if(val===cssProp) { result = key; } });
		if(result!==null)
			return [result];
		if(cssProp.endsWith("transform"))
			return ["rotate"];
		if(cssProp.endsWith("transform-origin"))
			return ["rotateOrigin"];

		return [];
	}

	function endHandler(e, jsNode, jsProps)
	{
		var doneProps = jsProps ? jsProps : [e._event.propertyName];
		var node = jsNode ? jsNode : e.currentTarget;

		var transitions = node.getData("transitions");
		var transitionCallbacks = node.getData("transitionCallbacks") || [];

		if(transitions)
		{
			doneProps.forEach(function(doneProp)
			{
				if(transitions.hasOwnProperty(doneProp))
					delete transitions[doneProp];

				cssPropToProps(doneProp).forEach(function(prop)
				{
					if(transitions.hasOwnProperty(prop))
						delete transitions[prop];
				});
			});

			node.setData("transitions", transitions);
		}

		var transitionCallbackIndexesToRemove = [];
		transitionCallbacks.forEach(function(transitionCallback, i)
		{
			if(transitionCallback.props.some(function(transitionCallbackProp) { return transitions.hasOwnProperty(transitionCallbackProp); }))
				return;
			
			transitionCallbackIndexesToRemove.push(i);
			if(transitionCallback.cb)
				transitionCallback.cb();
		});

		transitionCallbackIndexesToRemove.reverse().forEach(function(transitionCallbackIndexToRemove) { transitionCallbacks.splice(transitionCallbackIndexToRemove, 1); });
		node.setData("transitionCallbacks", transitionCallbacks);

		if(transitions)
			postUpdateCSSNode(node, transitions);

		if(node.hasClass("debugTransitions"))
			base.info("Finished props %s with node transitions %s and callbacks %s", JSON.stringify(doneProps), JSON.stringify(transitions), JSON.stringify(transitionCallbacks));
	}

	function postUpdateCSSNode(node, transitions)
	{
		var cssProps = [];
		var cssDurations = [];
		var cssTimings = [];

		Object.forEach(transitions, function(prop, transition)
		{
			if(transition.type!=="css")
				return;

			cssProps.push(prop);
			cssDurations.push(((transition.duration/1000)+"s"));
			cssTimings.push(transition.easing);
		});

		node.setStyle(stylePrefix + "TransitionProperty", cssProps.map(function(cssProp) { return propToCSSProp(cssProp); }).join(", "));
		node.setStyle(stylePrefix + "TransitionDuration", cssDurations.join(", "));
		node.setStyle(stylePrefix + "TransitionTimingFunction", cssTimings.join(", "));
	}

	function calcFromMap(node, config)
	{
		var fromMap = {};

		Object.keys(config).forEach(function(prop)
		{
			if(!validProps.contains(prop))
				return;

			var from = null;

			if(prop==="width")
				from = node.getWidth();
			else if(prop==="height")
				from = node.getHeight();
			else if(prop==="rotate")
				from = (+node.getRotation() || 0);
			else if(prop==="rotateOrigin")
				from = (node.getRotationOrigin() || [0, 0]);
			else if(prop==="backgroundColor")
				from = colorToRGBA(node.getBackgroundColor());
			else if(prop==="borderColor")
				from = colorToRGBA(node.getBorderColor());
			else
				from = node.getStyleAsNumber(prop);

			fromMap[prop] = from;
		});

		return fromMap;
	}

	// NOTE: Modifies fromMap
	function calcToMap(config, fromMap)
	{
		var toMap = {};

		Object.forEach(config, function(prop, value)
		{
			if(!validProps.contains(prop))
				return;

			var to = (typeof config[prop]==="function") ? value() : value;
			var from = fromMap[prop];

			if(prop==="rotate")
			{
				if(from>to && ((360+to)-from)<(from-to))
					to+=360;
				else if(from<to && ((360-to)+from)<(to-from))
					to = (360-to)*-1;
			}

			if(prop.endsWith("Color") && from==="transparent")
			{
				var parts = to.match(Y.Color.re_RGBA);
				from = (parts.length===5) ? ("rgba(" + parts[1] + ", " + parts[2] + ", " + parts[3] + ", 0)") : "rgba(0, 0, 0, 0)";
				fromMap[prop] = from;
			}

			toMap[prop] = to;
		});

		return toMap;
	}

	function calcDiffProps(fromMap, toMap)
	{
		var diffProps = [];

		Object.forEach(fromMap, function(prop, from)
		{
			var to = toMap[prop];
			if(prop==="rotateOrigin")
			{
				if(!to.equals(from))
					diffProps.push(prop);
			}
			else
			{
				if(to!==from)
					diffProps.push(prop);
			}
		});

		return diffProps;
	}

	function run(config)
	{
		var delay = config.delay || 0;
		if(delay)
		{
			config.delay = 0;
			return setTimeout(function() { run(config); }, delay);
		}

		var node = config.node;
		var cb = config.cb;
		var duration = config.duration || 300;
		var easing = config.easing || "ease-out";

		// Determine where we are coming from, where we are going to and what is different
		var fromMap = calcFromMap(node, config);
		var toMap = calcToMap(config, fromMap);
		var diffProps = calcDiffProps(fromMap, toMap);

		// If nothing needs to be animated, return (making sure to call CB after duration)
		if(diffProps.length===0)
			return cb ? setTimeout(cb, duration) : undefined;
		
		var transitions = node.getData("transitions") || {};
		var transitionCallbacks = node.getData("transitionCallbacks") || [];
		var transitionCallback = { props : [], cb : cb };

		var alreadyAnimating = !!transitions.length;

		diffProps.forEach(function(prop)
		{
			var transition = {};
			transition.type = getTransitionType(prop);
			transition.prop = prop;
			transition.duration = duration;
			transition.easing = easing;

			transitions[prop] = transition;

			transitionCallback.props.push(prop);
		});

		transitionCallbacks.push(transitionCallback);

		node.setData("transitions", transitions);
		node.setData("transitionCallbacks", transitionCallbacks);

		var cssProps = [];
		var cssDurations = [];
		var cssTimings = [];
		var jsProps = [];
		var jsFrom = {};
		var jsTo = {};

		Object.forEach(transitions, function(prop, transition)
		{
			if(transition.type==="css")
			{
				cssProps.push(prop);
				cssDurations.push(((transition.duration/1000)+"s"));
				cssTimings.push(transition.easing);
			}
			else if(transition.type==="js" && diffProps.contains(prop))
			{
				jsProps.push(prop);
				jsFrom[prop] = fromMap[prop];
				jsTo[prop] = toMap[prop];
			}
		});

		if(cssProps.length)
		{
			if(node.hasClass("debugTransitions"))
				base.info("CSS Animation for %s", JSON.stringify(cssProps));

			node.setStyle(stylePrefix + "TransitionProperty", cssProps.map(function(cssProp) { return propToCSSProp(cssProp); }).join(", "));
			node.setStyle(stylePrefix + "TransitionDuration", cssDurations.join(", "));
			node.setStyle(stylePrefix + "TransitionTimingFunction", cssTimings.join(", "));

			if(!node.getData("hasTransitionHandler"))
			{
				node.on(endEvent, endHandler);
				node.setData("hasTransitionHandler", true);
			}

			cssProps.forEach(function(prop)
			{
				if(!diffProps.contains(prop))
					return;

				if(prop==="rotate")
					node.setRotateStyle(toMap[prop]);
				else
					node.setStyle(prop, toMap[prop]);
			});
		}

		if(jsProps.length)
		{
			if(node.hasClass("debugTransitions"))
				base.info("JS Animation for %s", JSON.stringify(jsProps));

			var animProps =
			{
				node     : node,
				duration : (duration/1000),
				easing   : (typeof easing==="function") ? easing : easingToJSMap[easing],
				from     : jsFrom,
				to       : jsTo
			};

			var anim = new Y.Anim(animProps);
			anim.on("end", function(e) { endHandler(e, node, jsProps); });
			anim.run();
		}
	}

	function setUseCSSTransitions(enabled)
	{
		useCSSTransitions = enabled;
	}

	//-------------------------------------------------------------------------
	// Public interface
	//-------------------------------------------------------------------------
	Y.MyTransition =
	{
		run : run,
		setUseCSSTransitions : setUseCSSTransitions
	};

	Y.MyTransition.Sequence = function(_configs, _options)
	{
		this.index = -1;

		Y.MyTransition.Sequence.prototype.init = function(configs, options)
		{
			this.configs = configs;
			this.options = options || {};

			this.startIndex = this.options.startIndex || 0;
		};

		Y.MyTransition.Sequence.prototype.run = function(cb)
		{
			this.cb = cb;
			this.next();
		};

		Y.MyTransition.Sequence.prototype.next = function()
		{
			this.index+=1;

			if(this.index>=this.configs.length && this.options.loop)
				this.index = this.startIndex;

			if(this.stopped || this.index>=this.configs.length)
			{
				if(this.cb)
					this.cb();
				if(this.stopCB)
					this.stopCB();
				return;
			}

			var config = this.configs[this.index];
			if(typeof config==="function")
			{
				config();
				this.next();
			}
			else
			{
				run(Object.merge(base.clone(config), {cb : this.next.bind(this)}));
			}
		};

		Y.MyTransition.Sequence.prototype.stop = function(cb)
		{
			this.stopped = true;
			this.stopCB = cb;
		};

		this.init(_configs, _options);
	};
}, "1.0", { requires : ["node"] });
