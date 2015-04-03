"use strict";

var base = require("./base.js");

var REDIS_KEYS =
{
	username                : "u",
	password                : "p",
	created                 : "c",
	hash                    : "h",
	email                   : "e",
	optionCardSize          : "ocs",
	optionAnimateCards      : "oac",
	optionAnimateDeal       : "oad",
	optionAnimateSpeed      : "oas",
	optionAutoPlay          : "oap",
	optionAutoFlip          : "oaf",
	optionShowTimer         : "ost",
	optionShowScore         : "oss",
	optionShowMoves         : "osm",
	optionMenuRequiresClick : "omrc",
	optionDeck              : "od",
	optionBackground        : "ob",
	optionGame              : "og",
	optionHasSavedOnce      : "ohso"
};

base.info(Object.swapKeyValues(REDIS_KEYS));