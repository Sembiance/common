"use strict";

(function(exports)
{
	exports.SUPERTYPES = ["Basic", "Legendary", "Snow", "World", "Ongoing"];
	exports.TYPES = ["Instant", "Sorcery", "Artifact", "Creature", "Enchantment", "Land", "Planeswalker", "Tribal", "Plane", "Phenomenon", "Scheme", "Vanguard", "Conspiracy"];

	// Unglued/Unhinged types
	exports.TYPES.push("Enchant", "Player", "Summon", "Interrupt", "Scariest", "You'll", "Ever", "See", "Eaturecray");

	exports.LAST_PRINTINGS_RESET = "V14";

	exports.SETS_LACKING_HQ_SVG_SYMBOL_ICONS = [];

	exports.SETS_NOT_ON_GATHERER = ["ATH", "ITP", "DKM", "RQS", "DPA"];
	exports.SETS_WITH_NO_IMAGES = [];

	exports.SETS =
	[
		{
			name : "Limited Edition Alpha",
			code : "LEA",
			gathererCode : "1E",
			magicCardsInfoCode : "al",
			releaseDate : "1993-08-05",
			border : "black",
			type : "core",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Limited Edition Beta",
			code : "LEB",
			gathererCode : "2E",
			magicCardsInfoCode : "be",
			releaseDate : "1993-10-01",
			border : "black",
			type : "core",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Arabian Nights",
			code : "ARN",
			gathererCode : "AN",
			magicCardsInfoCode : "an",
			releaseDate : "1993-12-01",
			border : "black",
			type : "expansion",
			booster : ["uncommon", "uncommon", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Unlimited Edition",
			code : "2ED",
			gathererCode : "2U",
			magicCardsInfoCode : "un",
			releaseDate : "1993-12-01",
			border : "white",
			type : "core",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Dragon Con",
			code : "pDRC",
			magicCardsInfoCode : "drc",
			isMCISet : true,
			releaseDate : "1994-01-01",
			border : "black",
			type : "promo"
		},
		{
			name : "Antiquities",
			code : "ATQ",
			gathererCode : "AQ",
			magicCardsInfoCode : "aq",
			releaseDate : "1994-03-01",
			border : "black",
			type : "expansion",
			booster : ["uncommon", "uncommon", "common", "common", "common", "common", "common", "common"]			
		},
		{
			name : "Revised Edition",
			code : "3ED",
			gathererCode : "3E",
			magicCardsInfoCode : "rv",
			releaseDate : "1994-04-01",
			border : "white",
			type : "core",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Legends",
			code : "LEG",
			gathererCode : "LE",
			magicCardsInfoCode : "lg",
			releaseDate : "1994-06-01",
			border : "black",
			type : "expansion",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "The Dark",
			code : "DRK",
			gathererCode : "DK",
			magicCardsInfoCode : "dk",
			releaseDate : "1994-08-01",
			border : "black",
			type : "expansion",
			booster : ["uncommon", "uncommon", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Media Inserts",
			code : "pMEI",
			magicCardsInfoCode : "mbp",
			magicRaritiesCodes : ["189-rarities-agent-of-artifice-novel-promo-insert", "109-rarities-harperprism-book-inserts", "20-rarities-armada-comics-book-promos", "175-rarities-coro-coro-comic-book-inserts", "296-rarities-dengeki-maoh-magazine-inserts",
								  "81-rarities-gotta-magazine-cards", "196-rarities-hachette-french-magic-encyclopedia-inserts", "197-rarities-hachette-italian-magic-encyclopedia-inserts", "765-rarities-idw-comics-book-inserts",
								  "16-rarities-kartefakt-magazine-promo", "121-rarities-players-guide-inserts", "228-rarities-rpg-magazine-inserts", "135-rarities-salvat-magic-encyclopedia-cards", "134-rarities-the-cardz-magazine-inserts",
								  "22-rarities-the-duelist-cards", "18-rarities-topdeck-cards", "258-rarities-buy-a-box-promos", "787-rarities-holiday-gift-box", "224-rarities-duels-of-the-planeswalkers-software-promos",
								  "160-rarities-resale-promos", "686-rarities-convention-and-various-promos"],
			isMCISet : true,
			releaseDate : "1995-01-01",
			border : "black",
			type : "promo"
		},
		{
			name : "Fallen Empires",
			code : "FEM",
			gathererCode : "FE",
			magicCardsInfoCode : "fe",
			releaseDate : "1994-11-01",
			border : "black",
			type : "expansion",
			booster : ["uncommon", "uncommon", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Legend Membership",
			code : "pLGM",
			magicCardsInfoCode : "dcilm",
			magicRaritiesCodes : "23-rarities-dci-legend-membership-promos",
			isMCISet : true,
			releaseDate : "1995-01-01",
			border : "black",
			type : "promo"
		},
		{
			name : "Fourth Edition",
			code : "4ED",
			gathererCode : "4E",
			magicCardsInfoCode : "4e",
			essentialMagicCode : "6",
			releaseDate : "1995-04-01",
			border : "white",
			type : "core",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Ice Age",
			code : "ICE",
			gathererCode : "IA",
			magicCardsInfoCode : "ia",
			releaseDate : "1995-06-01",
			border : "black",
			type : "expansion",
			block : "Ice Age",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Chronicles",
			code : "CHR",
			gathererCode : "CH",
			magicCardsInfoCode : "ch",
			releaseDate : "1995-07-01",
			border : "white",
			type : "reprint",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Homelands",
			code : "HML",
			gathererCode : "HM",
			magicCardsInfoCode : "hl",
			releaseDate : "1995-10-01",
			border : "black",
			type : "expansion",
			booster : [["rare", "uncommon"], ["rare", "uncommon"], "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Alliances",
			code : "ALL",
			gathererCode : "AL",
			magicCardsInfoCode : "ai",
			releaseDate : "1996-06-10",
			border : "black",
			type : "expansion",
			block : "Ice Age",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Rivals Quick Start Set",
			code : "RQS",
			releaseDate : "1996-07-01",
			border : "white",
			type : "box"
		},
		{
			name : "Arena League",
			code : "pARL",
			magicCardsInfoCode : "arena",
			magicRaritiesCodes : "7-rarities-arena-league-promos",
			isMCISet : true,
			releaseDate : "1996-08-02",
			border : "black",
			type : "promo"
		},
		{
			name : "Celebration",
			code : "pCEL",
			magicCardsInfoCode : "uqc",
			magicRaritiesCodes : ["353-rarities-unique-cards", "352-rarities-garfield-event-cards", "798-rarities-special-guest-gift-cards"],
			isMCISet : true,
			releaseDate : "1996-08-14",
			border : "black",
			type : "promo"
		},
		{
			name : "Mirage",
			code : "MIR",
			gathererCode : "MI",
			magicCardsInfoCode : "mr",
			releaseDate : "1996-10-08",
			border : "black",
			type : "expansion",
			block : "Mirage",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Multiverse Gift Box",
			code : "MGB",
			magicCardsInfoCode : "mgbc",
			magicRaritiesCodes : "145-rarities-multiverse-gift-box-cards",
			isMCISet : true,
			releaseDate : "1996-11-01",
			border : "black",
			type : "box"
		},
		{
			name : "Introductory Two-Player Set",
			code : "ITP",
			oldCode : "I2P",
			magicCardsInfoCode : "itp",
			releaseDate : "1996-12-31",
			border : "white",
			type : "starter"
		},
		{
			name : "Visions",
			code : "VIS",
			gathererCode : "VI",
			magicCardsInfoCode : "vi",
			releaseDate : "1997-02-03",
			border : "black",
			type : "expansion",
			block : "Mirage",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Fifth Edition",
			code : "5ED",
			gathererCode : "5E",
			magicCardsInfoCode : "5e",
			releaseDate : "1997-03-24",
			border : "white",
			type : "core",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Portal Demo Game",
			code : "pPOD",
			magicCardsInfoCode : "pot",
			isMCISet : true,
			releaseDate : "1997-05-01",
			border : "black",
			type : "promo"
		},
		{
			name : "Portal",
			code : "POR",
			gathererCode : "PO",
			magicCardsInfoCode : "po",
			releaseDate : "1997-05-01",
			border : "black",
			type : "starter",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Vanguard",
			code : "VAN",
			releaseDate : "1997-05-01",
			border : "black",
			type : "vanguard"
		},
		{
			name : "Weatherlight",
			code : "WTH",
			gathererCode : "WL",
			magicCardsInfoCode : "wl",
			releaseDate : "1997-06-09",
			border : "black",
			type : "expansion",
			block : "Mirage",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Prerelease Events",
			code : "pPRE",
			magicCardsInfoCode : "ptc",
			magicRaritiesCodes : "82-rarities-prerelease-events-promos",
			isMCISet : true,
			releaseDate : "1997-10-04",
			border : "black",
			type : "promo"
		},
		{
			name : "Tempest",
			code : "TMP",
			gathererCode : "TE",
			magicCardsInfoCode : "tp",
			releaseDate : "1997-10-14",
			border : "black",
			type : "expansion",
			block : "Tempest",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Stronghold",
			code : "STH",
			gathererCode : "ST",
			magicCardsInfoCode : "sh",
			releaseDate : "1998-03-02",
			border : "black",
			type : "expansion",
			block : "Tempest",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Portal Second Age",
			code : "PO2",
			gathererCode : "P2",
			magicCardsInfoCode : "po2",
			oldCode : "P02",
			releaseDate : "1998-06-01",
			border : "black",
			type : "starter",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Judge Gift Program",
			code : "pJGP",
			magicCardsInfoCode : "jr",
			magicRaritiesCodes : "56-rarities-judge-gift-cards",
			isMCISet : true,
			releaseDate : "1998-06-01",
			border : "black",
			type : "promo"
		},
		{
			name : "Exodus",
			code : "EXO",
			gathererCode : "EX",
			magicCardsInfoCode : "ex",
			releaseDate : "1998-06-15",
			border : "black",
			type : "expansion",
			block : "Tempest",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Unglued",
			code : "UGL",
			gathererCode : "UG",
			magicCardsInfoCode : "ug",
			releaseDate : "1998-08-11",
			border : "silver",
			type : "un",
			booster : ["rare", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "land"]
		},
		{
			name : "Asia Pacific Land Program",
			code : "pALP",
			magicCardsInfoCode : "apac",
			isMCISet : true,
			releaseDate : "1998-09-01",
			border : "black",
			type : "promo"
		},				
		{
			name : "Urza's Saga",
			code : "USG",
			gathererCode : "UZ",
			magicCardsInfoCode : "us",
			releaseDate : "1998-10-12",
			border : "black",
			type : "expansion",
			block : "Urza's",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Anthologies",
			code : "ATH",
			magicCardsInfoCode : "at",
			releaseDate : "1998-11-01",
			border : "white",
			type : "box"
		},
		{
			name : "Urza's Legacy",
			code : "ULG",
			gathererCode : "GU",
			magicCardsInfoCode : "ul",
			releaseDate : "1999-02-15",
			border : "black",
			type : "expansion",
			block : "Urza's",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Classic Sixth Edition",
			code : "6ED",
			gathererCode : "6E",
			magicCardsInfoCode : "6e",
			releaseDate : "1999-04-21",
			border : "white",
			type : "core",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Portal Three Kingdoms",
			code : "PTK",
			gathererCode : "PK",
			magicCardsInfoCode : "p3k",
			releaseDate : "1999-05-01",
			border : "white",
			type : "starter",
			booster : ["rare", "uncommon", "uncommon", "common", "common", "common", "common", "common", "land", "land"]
		},
		{
			name : "Urza's Destiny",
			code : "UDS",
			gathererCode : "CG",
			magicCardsInfoCode : "ud",
			releaseDate : "1999-06-07",
			border : "black",
			type : "expansion",
			block : "Urza's",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Starter 1999",
			code : "S99",
			gathererCode : "P3",
			magicCardsInfoCode : "st",
			releaseDate : "1999-07-01",
			border : "white",
			type : "starter",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "land"]
		},
		{
			name : "Guru",
			code : "pGRU",
			magicCardsInfoCode : "guru",
			magicRaritiesCodes : "50-rarities-guru-lands",
			isMCISet : true,
			releaseDate : "1999-07-12",
			border : "black",
			type : "promo"
		},		
		{
			name : "Worlds",
			code : "pWOR",
			magicCardsInfoCode : "wrl",
			magicRaritiesCodes : "15-rarities-worlds-card",
			isMCISet : true,
			releaseDate : "1999-08-04",
			border : "black",
			type : "promo"
		},
		{
			name : "Wizards of the Coast Online Store",
			code : "pWOS",
			magicCardsInfoCode : "wotc",
			magicRaritiesCodes : "51-rarities-wizards-of-the-coast-online-store",
			isMCISet : true,
			releaseDate : "1999-09-04",
			border : "black",
			type : "promo"
		},
		{
			name : "Mercadian Masques",
			code : "MMQ",
			gathererCode : "MM",
			magicCardsInfoCode : "mm",
			releaseDate : "1999-10-04",
			border : "black",
			type : "expansion",
			block : "Masques",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Battle Royale Box Set",
			code : "BRB",
			gathererCode : "BR",
			magicCardsInfoCode : "br",
			releaseDate : "1999-11-12",
			border : "white",
			type : "box"
		},
		{
			name : "Super Series",
			code : "pSUS",
			magicCardsInfoCode : "sus",
			magicRaritiesCodes : "36-rarities-junior-super-series",
			isMCISet : true,
			releaseDate : "1999-12-01",
			border : "black",
			type : "promo"
		},
		{
			name : "Friday Night Magic",
			code : "pFNM",
			magicCardsInfoCode : "fnmp",
			magicRaritiesCodes : "72-rarities-friday-night-magic",
			isMCISet : true,
			releaseDate : "2000-02-01",
			border : "black",
			type : "promo"
		},
		{
			name : "European Land Program",
			code : "pELP",
			magicCardsInfoCode : "euro",
			isMCISet : true,
			releaseDate : "2000-02-05",
			border : "black",
			type : "promo"
		},
		{
			name : "Nemesis",
			code : "NMS",
			gathererCode : "NE",
			magicCardsInfoCode : "ne",
			oldCode : "NEM",
			releaseDate : "2000-02-14",
			border : "black",
			type : "expansion",
			block : "Masques"		,
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]	
		},
		{
			name : "Starter 2000",
			code : "S00",
			gathererCode : "P4",
			magicCardsInfoCode : "st2k",
			releaseDate : "2000-04-01",
			border : "white",
			type : "starter"
		},
		{
			name : "Prophecy",
			code : "PCY",
			gathererCode : "PR",
			magicCardsInfoCode : "pr",
			releaseDate : "2000-06-05",
			border : "black",
			type : "expansion",
			block : "Masques",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Beatdown Box Set",
			code : "BTD",
			gathererCode : "BD",
			magicCardsInfoCode : "bd",
			releaseDate : "2000-10-01",
			border : "white",
			type : "box"
		},
		{
			name : "Invasion",
			code : "INV",
			gathererCode : "IN",
			magicCardsInfoCode : "in",
			releaseDate : "2000-10-02",
			border : "black",
			type : "expansion",
			block : "Invasion",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Planeshift",
			code : "PLS",
			gathererCode : "PS",
			magicCardsInfoCode : "ps",
			releaseDate : "2001-02-05",
			border : "black",
			type : "expansion",
			block : "Invasion",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Seventh Edition",
			code : "7ED",
			gathererCode : "7E",
			magicCardsInfoCode : "7e",
			releaseDate : "2001-04-11",
			border : "white",
			type : "core",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land"]
		},
		{
			name : "Magic Player Rewards",
			code : "pMPR",
			magicCardsInfoCode : "mprp",
			magicRaritiesCodes : "29-rarities-magic-player-rewards",
			isMCISet : true,
			releaseDate : "2001-05-01",
			border : "black",
			type : "promo"
		},
		{
			name : "Apocalypse",
			code : "APC",
			gathererCode : "AP",
			magicCardsInfoCode : "ap",
			releaseDate : "2001-06-04",
			border : "black",
			type : "expansion",
			block : "Invasion",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Odyssey",
			code : "ODY",
			gathererCode : "OD",
			magicCardsInfoCode : "od",
			essentialMagicCode : "41",
			releaseDate : "2001-10-01",
			border : "black",
			type : "expansion",
			block : "Odyssey",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Deckmasters",
			code : "DKM",
			magicCardsInfoCode : "dm",
			releaseDate : "2001-12-01",
			border : "white",
			type : "box"
		},
		{
			name : "Torment",
			code : "TOR",
			magicCardsInfoCode : "tr",
			releaseDate : "2002-02-04",
			border : "black",
			type : "expansion",
			block : "Odyssey",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Judgment",
			code : "JUD",
			magicCardsInfoCode : "ju",
			releaseDate : "2002-05-27",
			border : "black",
			type : "expansion",
			block : "Odyssey",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Onslaught",
			code : "ONS",
			magicCardsInfoCode : "on",
			releaseDate : "2002-10-07",
			border : "black",
			type : "expansion",
			block : "Onslaught",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Legions",
			code : "LGN",
			magicCardsInfoCode : "le",
			releaseDate : "2003-02-03",
			border : "black",
			type : "expansion",
			block : "Onslaught",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Scourge",
			code : "SCG",
			magicCardsInfoCode : "sc",
			releaseDate : "2003-05-26",
			border : "black",
			type : "expansion",
			block : "Onslaught",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Release Events",
			code : "pREL",
			magicCardsInfoCode : "rep",
			magicRaritiesCodes : "94-rarities-release-events-promos",
			isMCISet : true,
			releaseDate : "2003-07-26",
			border : "black",
			type : "promo"
		},		
		{
			name : "Eighth Edition",
			code : "8ED",
			oldCode : "8E",
			magicCardsInfoCode : "8e",
			releaseDate : "2003-07-28",
			border : "white",
			type : "core",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land"]
		},
		{
			name : "Eighth Edition Box Set",
			code : "8BS",
			magicCardsInfoCode : "8eb",
			magicRaritiesCodes : "540-rarities-eighth-edition-box-set-cards",
			isMCISet : true,
			releaseDate : "2003-07-28",
			border : "white",
			type : "box"
		},
		{
			name : "Mirrodin",
			code : "MRD",
			magicCardsInfoCode : "mi",
			releaseDate : "2003-10-02",
			border : "black",
			type : "expansion",
			block : "Mirrodin",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Darksteel",
			code : "DST",
			magicCardsInfoCode : "ds",
			releaseDate : "2004-02-06",
			border : "black",
			type : "expansion",
			block : "Mirrodin",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Fifth Dawn",
			code : "5DN",
			magicCardsInfoCode : "5dn",
			releaseDate : "2004-06-04",
			border : "black",
			type : "expansion",
			block : "Mirrodin",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Champions of Kamigawa",
			code : "CHK",
			magicCardsInfoCode : "chk",
			releaseDate : "2004-10-01",
			border : "black",
			type : "expansion",
			block : "Kamigawa",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Unhinged",
			code : "UNH",
			magicCardsInfoCode : "uh",
			releaseDate : "2004-11-20",
			border : "silver",
			type : "un",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land"]
		},
		{
			name : "Betrayers of Kamigawa",
			code : "BOK",
			magicCardsInfoCode : "bok",
			releaseDate : "2005-02-04",
			border : "black",
			type : "expansion",
			block : "Kamigawa",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Saviors of Kamigawa",
			code : "SOK",
			magicCardsInfoCode : "sok",
			releaseDate : "2005-06-03",
			border : "black",
			type : "expansion",
			block : "Kamigawa",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Ninth Edition",
			code : "9ED",
			oldCode : "9E",
			magicCardsInfoCode : "9e",
			releaseDate : "2005-07-29",
			border : "white",
			type : "core",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land"]
		},
		{
			name : "Ninth Edition Box Set",
			code : "9BS",
			magicCardsInfoCode : "9eb",
			magicRaritiesCodes : "531-rarities-ninth-edition-box-set-cards",
			isMCISet : true,
			releaseDate : "2005-07-29",
			border : "white",
			type : "box"
		},
		{
			name : "Ravnica: City of Guilds",
			code : "RAV",
			magicCardsInfoCode : "rav",
			releaseDate : "2005-10-07",
			border : "black",
			type : "expansion",
			block : "Ravnica",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Two-Headed Giant Tournament",
			code : "p2HG",
			magicCardsInfoCode : "thgt",
			magicRaritiesCodes : "13-rarities-two-headed-giant",
			isMCISet : true,
			releaseDate : "2005-12-09",
			border : "black",
			type : "promo"
		},
		{
			name : "WPN and Gateway",
			code : "pWPN",
			magicCardsInfoCode : "grc",
			magicRaritiesCodes : ["255-rarities-wpn-promos", "76-rarities-gateway-promos"],
			isMCISet : true,
			releaseDate : "2006-01-01",
			border : "black",
			type : "promo"
		},
		{
			name : "Guildpact",
			code : "GPT",
			magicCardsInfoCode : "gp",
			releaseDate : "2006-02-03",
			border : "black",
			type : "expansion",
			block : "Ravnica",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Champs and States",
			code : "pCMP",
			magicCardsInfoCode : "cp",
			magicRaritiesCodes : "54-rarities-champs-cards",
			isMCISet : true,
			releaseDate : "2006-03-18",
			border : "black",
			type : "promo"
		},
		{
			name : "Dissension",
			code : "DIS",
			magicCardsInfoCode : "di",
			releaseDate : "2006-05-05",
			border : "black",
			type : "expansion",
			block : "Ravnica",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Coldsnap",
			code : "CSP",
			magicCardsInfoCode : "cs",
			releaseDate : "2006-07-21",
			border : "black",
			type : "expansion",
			block : "Ice Age",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common"]
		},
		{
			name : "Coldsnap Theme Decks",
			code : "CST",
			magicCardsInfoCode : "cstd",
			magicRaritiesCodes : "230-rarities-coldsnap-preconstructed-reprint-cards",
			isMCISet : true,
			useMagicRaritiesNumber : true,
			releaseDate : "2006-07-21",
			border : "black",
			type : "box"
		},
		{
			name : "Time Spiral",
			code : "TSP",
			magicCardsInfoCode : "ts",
			releaseDate : "2006-10-06",
			border : "black",
			type : "expansion",
			block : "Time Spiral",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "timeshifted purple"]
		},
		{
			name : 'Time Spiral "Timeshifted"',
			code : "TSB",
			magicCardsInfoCode : "tsts",
			releaseDate : "2006-10-06",
			border : "black",
			type : "expansion",
			block : "Time Spiral"
		},
		{
			name : "Happy Holidays",
			code : "pHHO",
			oldCode : "HHO",
			magicCardsInfoCode : "hho",
			magicRaritiesCodes : "19-rarities-happy-holidays-gift-card",
			isMCISet : true,
			releaseDate : "2006-12-31",
			border : "silver",
			type : "promo"
		},
		{
			name : "Planar Chaos",
			code : "PLC",
			magicCardsInfoCode : "pc",
			releaseDate : "2007-02-02",
			border : "black",
			type : "expansion",
			block : "Time Spiral",
			booster : ["rare", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "timeshifted common", "timeshifted common", "timeshifted common", ["timeshifted rare", "timeshifted uncommon"]]
		},
		{
			name : "Pro Tour",
			code : "pPRO",
			magicCardsInfoCode : "pro",
			magicRaritiesCodes : "14-rarities-pro-tour-card",
			isMCISet : true,
			releaseDate : "2007-02-09",
			border : "black",
			type : "promo"
		},
		{
			name : "Grand Prix",
			code : "pGPX",
			magicCardsInfoCode : "gpx",
			magicRaritiesCodes : "73-rarities-grand-prix-promos",
			isMCISet : true,
			releaseDate : "2007-02-24",
			border : "black",
			type : "promo"
		},
		{
			name : "Future Sight",
			code : "FUT",
			magicCardsInfoCode : "fut",
			releaseDate : "2007-05-04",
			border : "black",
			type : "expansion",
			block : "Time Spiral",
			booster : [["rare", "timeshifted rare"], ["uncommon", "timeshifted uncommon"], ["uncommon", "timeshifted uncommon"], ["uncommon", "timeshifted uncommon"], ["common", "timeshifted common"], ["common", "timeshifted common"], ["common", "timeshifted common"], ["common", "timeshifted common"], ["common", "timeshifted common"], ["common", "timeshifted common"], ["common", "timeshifted common"], ["common", "timeshifted common"], ["common", "timeshifted common"], ["common", "timeshifted common"], ["common", "timeshifted common"]]
		},
		{
			name : "Tenth Edition",
			code : "10E",
			magicCardsInfoCode : "10e",
			releaseDate : "2007-07-13",
			border : "black",
			type : "core",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Magic Game Day",
			code : "pMGD",
			magicCardsInfoCode : "mgdc",
			magicRaritiesCodes : "119-rarities-magic-game-day-cards",
			isMCISet : true,
			releaseDate : "2007-07-14",
			border : "black",
			type : "promo"
		},
		{
			name : "Masters Edition",
			code : "MED",
			magicCardsInfoCode : "med",
			releaseDate : "2007-09-10",
			border : "black",
			type : "masters",
			onlineOnly : true,
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land"]
		},
		{
			name : "Lorwyn",
			code : "LRW",
			magicCardsInfoCode : "lw",
			releaseDate : "2007-10-12",
			border : "black",
			type : "expansion",
			block : "Lorwyn",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "marketing"]
		},
		{
			name : "Duel Decks: Elves vs. Goblins",
			code : "EVG",
			magicCardsInfoCode : "evg",
			releaseDate : "2007-11-16",
			border : "black",
			type : "duel deck"
		},
		{
			name : "Launch Parties",
			code : "pLPA",
			magicCardsInfoCode : "mlp",
			magicRaritiesCodes : "226-rarities-pre-launch-party-cards",
			isMCISet : true,
			releaseDate : "2008-02-01",
			border : "black",
			type : "promo"
		},		
		{
			name : "Morningtide",
			code : "MOR",
			magicCardsInfoCode : "mt",
			releaseDate : "2008-02-01",
			border : "black",
			type : "expansion",
			block : "Lorwyn",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "marketing"]
		},
		{
			name : "15th Anniversary",
			code : "p15A",
			magicCardsInfoCode : "15ann",
			magicRaritiesCodes : "178-rarities-mtg-15th-anniversary",
			isMCISet : true,
			releaseDate : "2008-04-01",
			border : "black",
			type : "promo"
		},		
		{
			name : "Shadowmoor",
			code : "SHM",
			magicCardsInfoCode : "shm",
			releaseDate : "2008-05-02",
			border : "black",
			type : "expansion",
			block : "Shadowmoor",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "marketing"]
		},
		{
			name : "Summer of Magic",
			code : "pSUM",
			magicCardsInfoCode : "sum",
			magicRaritiesCodes : "118-rarities-summer-of-magic-tournament",
			isMCISet : true,
			releaseDate : "2007-07-21",
			border : "black",
			type : "promo"
		},		
		{
			name : "Eventide",
			code : "EVE",
			magicCardsInfoCode : "eve",
			releaseDate : "2008-07-25",
			border : "black",
			type : "expansion",
			block : "Shadowmoor",
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "marketing"]
		},
		{
			name : "From the Vault: Dragons",
			code : "DRB",
			magicCardsInfoCode : "fvd",
			releaseDate : "2008-08-29",
			border : "black",
			type : "from the vault"
		},
		{
			name : "Masters Edition II",
			code : "ME2",
			magicCardsInfoCode : "me2",
			releaseDate : "2008-09-22",
			border : "black",
			type : "masters",
			onlineOnly : true,
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land"]
		},
		{
			name : "Shards of Alara",
			code : "ALA",
			magicCardsInfoCode : "ala",
			releaseDate : "2008-10-03",
			border : "black",
			type : "expansion",
			block : "Alara",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Duel Decks: Jace vs. Chandra",
			code : "DD2",
			oldCode : "D2",
			magicCardsInfoCode : "jvc",
			releaseDate : "2008-11-07",
			border : "black",
			type : "duel deck"
		},
		{
			name : "Conflux",
			code : "CON",
			oldCode : "CFX",
			magicCardsInfoCode : "cfx",
			releaseDate : "2009-02-06",
			border : "black",
			type : "expansion",
			block : "Alara",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Duel Decks: Divine vs. Demonic",
			code : "DDC",
			magicCardsInfoCode : "dvd",
			releaseDate : "2009-04-10",
			border : "black",
			type : "duel deck"
		},
		{
			name : "Alara Reborn",
			code : "ARB",
			magicCardsInfoCode : "arb",
			releaseDate : "2009-04-30",
			border : "black",
			type : "expansion",
			block : "Alara",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Magic 2010",
			code : "M10",
			magicCardsInfoCode : "m10",
			releaseDate : "2009-07-17",
			border : "black",
			type : "core",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "From the Vault: Exiled",
			code : "V09",
			oldCode : "FVE",
			magicCardsInfoCode : "fve",
			releaseDate : "2009-08-28",
			border : "black",
			type : "from the vault"
		},
		{
			name : "Planechase",
			code : "HOP",
			oldCode : "PCH",
			magicCardsInfoCode : "pch",
			releaseDate : "2009-09-04",
			border : "black",
			type : "planechase"
		},
		{
			name : "Masters Edition III",
			code : "ME3",
			magicCardsInfoCode : "me3",
			releaseDate : "2009-09-07",
			border : "black",
			type : "masters",
			onlineOnly : true,
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land"]
		},		
		{
			name : "Zendikar",
			code : "ZEN",
			magicCardsInfoCode : "zen",
			releaseDate : "2009-10-02",
			border : "black",
			type : "expansion",
			block : "Zendikar",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Duel Decks: Garruk vs. Liliana",
			code : "DDD",
			magicCardsInfoCode : "gvl",
			releaseDate : "2009-10-30",
			border : "black",
			type : "duel deck"
		},
		{
			name : "Premium Deck Series: Slivers",
			code : "H09",
			magicCardsInfoCode : "pds",
			releaseDate : "2009-11-20",
			border : "black",
			type : "premium deck"
		},
		{
			name : "Worldwake",
			code : "WWK",
			magicCardsInfoCode : "wwk",
			releaseDate : "2010-02-05",
			border : "black",
			type : "expansion",
			block : "Zendikar",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Duel Decks: Phyrexia vs. the Coalition",
			code : "DDE",
			magicCardsInfoCode : "pvc",
			releaseDate : "2010-03-19",
			border : "black",
			type : "duel deck"
		},
		{
			name : "Rise of the Eldrazi",
			code : "ROE",
			magicCardsInfoCode : "roe",
			releaseDate : "2010-04-23",
			border : "black",
			type : "expansion",
			block : "Zendikar",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Duels of the Planeswalkers",
			code : "DPA",
			magicCardsInfoCode : "dpa",
			releaseDate : "2010-06-04",
			border : "black",
			type : "box"
		},
		{
			name : "Archenemy",
			code : "ARC",
			magicCardsInfoCode : "arc",
			releaseDate : "2010-06-18",
			border : "black",
			type : "archenemy"
		},
		{
			name : "Magic 2011",
			code : "M11",
			magicCardsInfoCode : "m11",
			releaseDate : "2010-07-16",
			border : "black",
			type : "core",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "From the Vault: Relics",
			code : "V10",
			magicCardsInfoCode : "fvr",
			releaseDate : "2010-08-27",
			border : "black",
			type : "from the vault"
		},
		{
			name : "Duel Decks: Elspeth vs. Tezzeret",
			code : "DDF",
			magicCardsInfoCode : "ddf",
			releaseDate : "2010-09-03",
			border : "black",
			type : "duel deck"
		},
		{
			name : "Scars of Mirrodin",
			code : "SOM",
			magicCardsInfoCode : "som",
			releaseDate : "2010-10-01",
			border : "black",
			type : "expansion",
			block : "Scars of Mirrodin",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Premium Deck Series: Fire and Lightning",
			code : "PD2",
			magicCardsInfoCode : "pd2",
			releaseDate : "2010-11-19",
			border : "black",
			type : "premium deck"
		},
		{
			name : "Masters Edition IV",
			code : "ME4",
			magicCardsInfoCode : "me4",
			releaseDate : "2011-01-10",
			border : "black",
			type : "masters",
			onlineOnly : true,
			booster : ["rare", "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "urza land"]
		},
		{
			name : "Mirrodin Besieged",
			code : "MBS",
			magicCardsInfoCode : "mbs",
			releaseDate : "2011-02-04",
			border : "black",
			type : "expansion",
			block : "Scars of Mirrodin",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Duel Decks: Knights vs. Dragons",
			code : "DDG",
			magicCardsInfoCode : "ddg",
			releaseDate : "2011-04-01",
			border : "black",
			type : "duel deck"
		},
		{
			name : "New Phyrexia",
			code : "NPH",
			magicCardsInfoCode : "nph",
			releaseDate : "2011-05-13",
			border : "black",
			type : "expansion",
			block : "Scars of Mirrodin",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Magic: The Gathering-Commander",
			code : "CMD",
			oldCode : "COM",
			magicCardsInfoCode : "cmd",
			releaseDate : "2011-06-17",
			border : "black",
			type : "commander"
		},
		{
			name : "Magic 2012",
			code : "M12",
			magicCardsInfoCode : "m12",
			releaseDate : "2011-07-15",
			border : "black",
			type : "core",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "From the Vault: Legends",
			code : "V11",
			oldCode : "FVL",
			magicCardsInfoCode : "fvl",
			releaseDate : "2011-08-26",
			border : "black",
			type : "from the vault"
		},
		{
			name : "Duel Decks: Ajani vs. Nicol Bolas",
			code : "DDH",
			magicCardsInfoCode : "ddh",
			releaseDate : "2011-09-02",
			border : "black",
			type : "duel deck"
		},
		{
			name : "Innistrad",
			code : "ISD",
			magicCardsInfoCode : "isd",
			releaseDate : "2011-09-30",
			border : "black",
			type : "expansion",
			block : "Innistrad",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", ["land", "checklist"], "marketing", "double faced"]
		},
		{
			name : "Premium Deck Series: Graveborn",
			code : "PD3",
			magicCardsInfoCode : "pd3",
			releaseDate : "2011-11-18",
			border : "black",
			type : "premium deck"
		},
		{
			name : "Dark Ascension",
			code : "DKA",
			magicCardsInfoCode : "dka",
			releaseDate : "2012-02-03",
			border : "black",
			type : "expansion",
			block : "Innistrad",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Duel Decks: Venser vs. Koth",
			code : "DDI",
			magicCardsInfoCode : "ddi",
			releaseDate : "2012-03-30",
			border : "black",
			type : "duel deck"
		},
		{
			name : "Avacyn Restored",
			code : "AVR",
			magicCardsInfoCode : "avr",
			releaseDate : "2012-05-04",
			border : "black",
			type : "expansion",
			block : "Innistrad",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Planechase 2012 Edition",
			code : "PC2",
			magicCardsInfoCode : "pc2",
			releaseDate : "2012-06-01",
			border : "black",
			type : "planechase"
		},
		{
			name : "Magic 2013",
			code : "M13",
			magicCardsInfoCode : "m13",
			releaseDate : "2012-07-13",
			border : "black",
			type : "core",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "From the Vault: Realms",
			code : "V12",
			oldCode : "FVR",
			magicCardsInfoCode : "v12",
			releaseDate : "2012-08-31",
			border : "black",
			type : "from the vault"
		},
		{
			name : "Duel Decks: Izzet vs. Golgari",
			code : "DDJ",
			magicCardsInfoCode : "ddj",
			releaseDate : "2012-09-07",
			border : "black",
			type : "duel deck"
		},
		{
			name : "Return to Ravnica",
			code : "RTR",
			magicCardsInfoCode : "rtr",
			releaseDate : "2012-10-05",
			border : "black",
			type : "expansion",
			block : "Return to Ravnica",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Commander's Arsenal",
			code : "CM1",
			oldCode : "CMA",
			magicCardsInfoCode : "cma",
			releaseDate : "2012-11-02",
			border : "black",
			type : "commander"
		},
		{
			name : "Gatecrash",
			code : "GTC",
			magicCardsInfoCode : "gtc",
			releaseDate : "2013-02-01",
			border : "black",
			type : "expansion",
			block : "Return to Ravnica",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Duel Decks: Sorin vs. Tibalt",
			code : "DDK",
			magicCardsInfoCode : "ddk",
			releaseDate : "2013-03-15",
			border : "black",
			type : "duel deck"
		},
		{
			name : "World Magic Cup Qualifiers",
			code : "pWCQ",
			magicCardsInfoCode : "wmcq",
			magicRaritiesCodes : "780-rarities-world-magic-cup-qualifiers-promos",
			isMCISet : true,
			releaseDate : "2013-04-06",
			border : "black",
			type : "promo"
		},		
		{
			name : "Dragon's Maze",
			code : "DGM",
			magicCardsInfoCode : "dgm",
			releaseDate : "2013-05-03",
			border : "black",
			type : "expansion",
			block : "Return to Ravnica",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Modern Masters",
			code : "MMA",
			magicCardsInfoCode : "mma",
			releaseDate : "2013-06-07",
			border : "black",
			type : "reprint",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", ["foil mythic rare", "foil rare", "foil uncommon", "foil common"]]
		},
		{
			name : "Magic 2014 Core Set",
			code : "M14",
			magicCardsInfoCode : "m14",
			releaseDate : "2013-07-19",
			border : "black",
			type : "core",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "From the Vault: Twenty",
			code : "V13",
			magicCardsInfoCode : "v13",
			releaseDate : "2013-08-23",
			border : "black",
			type : "from the vault"
		},
		{
			name : "Duel Decks: Heroes vs. Monsters",
			code : "DDL",
			magicCardsInfoCode : "ddl",
			releaseDate : "2013-09-06",
			border : "black",
			type : "duel deck"
		},
		{
			name : "Theros",
			code : "THS",
			magicCardsInfoCode : "ths",
			releaseDate : "2013-09-27",
			border : "black",
			type : "expansion",
			block : "Theros",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Commander 2013 Edition",
			code : "C13",
			magicCardsInfoCode : "c13",
			releaseDate : "2013-11-01",
			border : "black",
			type : "commander"
		},
		{
			name : "Born of the Gods",
			code : "BNG",
			magicCardsInfoCode : "bng",
			releaseDate : "2014-02-07",
			border : "black",
			type : "expansion",
			block : "Theros",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Duel Decks: Jace vs. Vraska",
			code : "DDM",
			magicCardsInfoCode : "ddm",
			releaseDate : "2014-03-14",
			border : "black",
			type : "duel deck"
		},
		{
			name : "Journey into Nyx",
			code : "JOU",
			magicCardsInfoCode : "jou",
			releaseDate : "2014-05-02",
			border : "black",
			type : "expansion",
			block : "Theros",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "Modern Event Deck 2014",
			code : "MD1",
			magicCardsInfoCode : "md1",
			releaseDate : "2014-05-30",
			border : "black",
			type : "box"
		},
		{
			name : "Magic: The Gathering—Conspiracy",
			code : "CNS",
			magicCardsInfoCode : "cns",
			releaseDate : "2014-06-06",
			border : "black",
			type : "conspiracy",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "draft-matters", "marketing"]
		},
		{
			name : "Vintage Masters",
			code : "VMA",
			magicCardsInfoCode : "vma",
			releaseDate : "2014-06-16",
			border : "black",
			type : "masters",
			onlineOnly : true,
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", ["power nine", "foil"]]
		},
		{
			name : "Magic 2015 Core Set",
			code : "M15",
			magicCardsInfoCode : "m15",
			releaseDate : "2014-07-18",
			border : "black",
			type : "core",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		},
		{
			name : "From the Vault: Annihilation (2014)",
			code : "V14",
			releaseDate : "2014-08-22",
			border : "black",
			type : "from the vault"
		},
		{
			name : "Duel Decks: Speed vs. Cunning",
			code : "DDN",
			releaseDate : "2014-09-05",
			border : "black",
			type : "duel deck"
		},
		{
			name : "Khans of Tarkir",
			code : "KTK",
			magicCardsInfoCode : "ktk",
			releaseDate : "2014-09-26",
			border : "black",
			type : "expansion",
			block : "Khans of Tarkir",
			booster : [["rare", "mythic rare"], "uncommon", "uncommon", "uncommon", "common", "common", "common", "common", "common", "common", "common", "common", "common", "common", "land", "marketing"]
		}
	];

	exports.NON_GATHERER_SET_CARD_LISTS =
	{
		ATH : [ "Aesthir Glider", "Armageddon", "Armored Pegasus", "Benalish Knight", "Black Knight", "Brushland", "Canopy Spider", "Carnivorous Plant", "Combat Medic", "Cuombajj Witches", "Disenchant", "Drifting Meadow", "Erhnam Djinn", "Feast of the Unicorn", "Fireball", "Forest", "Freewind Falcon", "Giant Growth", "Giant Spider", "Goblin Balloon Brigade", "Goblin Digging Team", "Goblin Grenade", "Goblin Hero", "Goblin King", "Goblin Matron", "Goblin Mutant", "Goblin Offensive", "Goblin Recruiter", "Goblin Snowman", "Goblin Tinkerer", "Goblin Vandal", "Goblin Warrens", "Gorilla Chieftain", "Hurricane", "Hymn to Tourach", "Hypnotic Specter", "Icatian Javelineers", "Ihsan's Shade", "Infantry Veteran", "Jalum Tome", "Knight of Stromgald", "Lady Orca", "Lightning Bolt", "Llanowar Elves", "Mirri, Cat Warrior", "Mogg Fanatic", "Mogg Flunkies", "Mogg Raider", "Mountain", "Nevinyrral's Disk", "Order of the White Shield", "Overrun", "Pacifism", "Pegasus Charger", "Pegasus Stampede", "Pendelhaven", "Plains", "Polluted Mire", "Pyrokinesis", "Pyrotechnics", "Raging Goblin", "Ranger en-Vec", "Samite Healer", "Scavenger Folk", "Serra Angel", "Serrated Arrows", "Slippery Karst", "Smoldering Crater", "Spectral Bears", "Strip Mine", "Swamp", "Swords to Plowshares", "Terror", "Unholy Strength", "Uthden Troll", "Volcanic Dragon", "Warrior's Honor", "White Knight", "Woolly Spider", "Youthful Knight" ],
		ITP : [ "Alabaster Potion", "Battering Ram", "Bog Imp", "Bog Wraith", "Circle of Protection: Black", "Circle of Protection: Red", "Clockwork Beast", "Cursed Land", "Dark Ritual", "Detonate", "Disintegrate", "Durkwood Boars", "Elven Riders", "Elvish Archers", "Energy Flux", "Feedback", "Fireball", "Forest", "Glasses of Urza", "Grizzly Bears", "Healing Salve", "Hill Giant", "Ironclaw Orcs", "Island", "Jayemdae Tome", "Lost Soul", "Merfolk of the Pearl Trident", "Mesa Pegasus", "Mons's Goblin Raiders", "Mountain", "Murk Dwellers", "Orcish Artillery", "Orcish Oriflamme", "Pearled Unicorn", "Phantom Monster", "Plains", "Power Sink", "Pyrotechnics", "Raise Dead", "Reverse Damage", "Rod of Ruin", "Scathe Zombies", "Sorceress Queen", "Swamp", "Terror", "Twiddle", "Unsummon", "Untamed Wilds", "Vampire Bats", "Wall of Bone", "War Mammoth", "Warp Artifact", "Weakness", "Whirling Dervish", "Winter Blast", "Zephyr Falcon", "Scryb Sprites" ],
		DKM : ["Abyssal Specter", "Balduvian Bears", "Balduvian Horde", "Barbed Sextant", "Bounty of the Hunt", "Contagion", "Dark Banishing", "Dark Ritual", "Death Spark", "Elkin Bottle", "Elvish Bard", "Folk of the Pines", "Forest", "Foul Familiar", "Fyndhorn Elves", "Giant Growth", "Giant Trap Door Spider", "Goblin Mutant", "Guerrilla Tactics", "Hurricane", "Icy Manipulator", "Incinerate", "Jokulhaups", "Karplusan Forest", "Lava Burst", "Lhurgoyf", "Mountain", "Mountain", "Mountain", "Necropotence", "Orcish Cannoneers", "Phantasmal Fiend", "Phyrexian War Beast", "Pillage", "Pyroclasm", "Shatter", "Soul Burn", "Storm Shaman", "Sulfurous Springs", "Swamp", "Swamp", "Swamp", "Underground River", "Walking Wall", "Woolly Spider", "Yavimaya Ancients", "Yavimaya Ants", "Lim-Dûl's High Guard"],
		RQS : ["Alabaster Potion", "Battering Ram", "Bog Imp", "Bog Wraith", "Circle of Protection: Black", "Circle of Protection: Red", "Clockwork Beast", "Cursed Land", "Dark Ritual", "Detonate", "Disintegrate", "Durkwood Boars", "Elven Riders", "Elvish Archers", "Energy Flux", "Feedback", "Fireball", "Forest", "Glasses of Urza", "Grizzly Bears", "Healing Salve", "Hill Giant", "Ironclaw Orcs", "Island", "Jayemdae Tome", "Lost Soul", "Merfolk of the Pearl Trident", "Mesa Pegasus", "Mons's Goblin Raiders", "Mountain", "Murk Dwellers", "Orcish Artillery", "Orcish Oriflamme", "Pearled Unicorn", "Plains", "Power Sink", "Pyrotechnics", "Raise Dead", "Reverse Damge", "Rod of Ruin", "Scath Zombies", "Scryb Sprites", "Sorceress Queen", "Swamp", "Terror", "Twiddle", "Unsummon", "Untamed Wilds", "Vampire Bats", "Wall of Bone", "War Mammoth", "Warp Artifact", "Weakness", "Whirling Dervish", "Winter Blast", "Zephyr Falcon"],
		DPA : ["Abyssal Specter", "Act of Treason", "Air Elemental", "Ascendant Evincar", "Banefire", "Blanchwood Armor", "Blaze", "Bloodmark Mentor", "Boomerang", "Cancel", "Cinder Pyromancer", "Civic Wayfinder", "Cloud Sprite", "Coat of Arms", "Consume Spirit", "Counterbore", "Crowd of Cinders", "Deluge", "Demon's Horn", "Denizen of the Deep", "Dragon's Claw", "Drove of Elves", "Drudge Skeletons", "Dusk Imp", "Duskdale Wurm", "Earth Elemental", "Elven Riders", "Elvish Champion", "Elvish Eulogist", "Elvish Promenade", "Elvish Visionary", "Elvish Warrior", "Enrage", "Essence Drain", "Essence Scatter", "Evacuation", "Eyeblight's Ending", "Forest", "Forest", "Forest", "Forest", "Furnace of Rath", "Gaea's Herald", "Giant Growth", "Giant Spider", "Goblin Piker", "Goblin Sky Raider", "Greenweaver Druid", "Hill Giant", "Howl of the Night Pack", "Immaculate Magistrate", "Imperious Perfect", "Incinerate", "Island", "Island", "Island", "Island", "Jagged-Scar Archers", "Kamahl, Pit Fighter", "Kraken's Eye", "Lightning Elemental", "Loxodon Warhammer", "Lys Alana Huntmaster", "Mahamoti Djinn", "Megrim", "Mind Control", "Mind Rot", "Mind Shatter", "Mind Spring", "Molimo, Maro-Sorcerer", "Moonglove Winnower", "Mortivore", "Mountain", "Mountain", "Mountain", "Mountain", "Natural Spring", "Naturalize", "Nature's Spiral", "Negate", "Overrun", "Phantom Warrior", "Prodigal Pyromancer", "Rage Reflection", "Rampant Growth", "Ravenous Rats", "River Boa", "Roughshod Mentor", "Runeclaw Bear", "Sengir Vampire", "Severed Legion", "Shivan Dragon", "Shock", "Snapping Drake", "Spined Wurm", "Swamp", "Swamp", "Swamp", "Swamp", "Talara's Battalion", "Terror", "The Rack", "Thieving Magpie", "Trained Armodon", "Troll Ascetic", "Underworld Dreams", "Unholy Strength", "Unsummon", "Verdant Force", "Vigor", "Wall of Spears", "Wall of Wood", "Wurm's Tooth"]
	};

	exports.SET_CORRECTIONS =
	{
		LEA :
		[
			{ match : {name : ["Elvish Archers", "Goblin Balloon Brigade", "Wall of Air"]}, flavorAddExclamation : true},
			{ match : {name : ["Jade Statue", "Scathe Zombies"]}, flavorAddDash : true},
			{ match : {name : "Mahamoti Djinn"}, replace : {flavor : "Of royal blood among the spirits of the air, the Mahamoti Djinn rides on the wings of the winds. As dangerous in the gambling hall as he is in battle, he is a master of trickery and misdirection."}},
			{ match : {name : "Pearled Unicorn"}, replace : {flavor : "\"‘Do you know, I always thought Unicorns were fabulous monsters, too? I never saw one alive before!' ‘Well, now that we have seen each other,' said the Unicorn, ‘if you'll believe in me, I'll believe in you.'\" —Lewis Carroll"}},
			{ match : {name : "Roc of Kher Ridges"}, replace : {flavor : "We encountered a valley topped with immense boulders and eerie rock formations. Suddenly one of these boulders toppled from its perch and sprouted gargantuan wings, casting a shadow of darkness and sending us fleeing in terror."}},
			{ match : {name : "Wall of Ice"}, replace : {flavor : "\"And through the drifts the snowy cliffs/ Did send a dismal sheen:/ Nor shapes of men nor beasts we ken—/ The ice was all between.\"/—Samuel Coleridge, \"The Rime of the Ancient Mariner\""}},
			{ match : {name : "Air Elemental"}, replace : {flavor : "These spirits of the air are winsome and wild, and cannot be truly contained. Only marginally intelligent, they often substitute whimsy for strategy, delighting in mischief and mayhem."}},
			{ match : {name : "Uthden Troll"}, replace : {flavor : "\"Oi oi oi, me gotta hurt in 'ere,\nOi oi oi, me smell a ting is near,\nGonna bosh 'n gonna nosh 'n da\nhurt'll disappear.\"\n—Traditional"}},
			{ match : {name : "Scathe Zombies"}, replace : {flavor : "\"They groaned, they stirred, they all uprose,/ Nor spake, nor moved their eyes;/ It had been strange, even in a dream,/ To have seen those dead men rise.\"/ —Samuel Coleridge, \"The Rime of the Ancient Mariner\""}},
			{ match : {name : "Granite Gargoyle"}, replace : {flavor : "\"While most overworlders fortunately don't realize this, Gargoyles can be most delicious, providing you have the appropriate tools to carve them.\"\n—The Underworld Cookbook, by Asmoranomardicadaistinaculdacar"}},
			{ match : {name : "Obsianus Golem"}, replace : {flavor : "\"The foot stone is connected to the ankle stone, the ankle stone is connected to the leg stone...\"\n—Song of the Artificer"}},
			{ match : {name : "Wall of Brambles"}, replace : {flavor : "\"What else, when chaos draws all forces inward to shape a single leaf.\"\n —Conrad Aiken"}},
			{ match : {name : ["Ancestral Recall", "Badlands", "Bayou", "Black Lotus", "Blaze of Glory", "Braingeyser", "Chaos Orb", "Contract from Below", "Copy Artifact", "Cyclopean Tomb", "Darkpact", "Demonic Attorney", "Demonic Hordes", "Farmstead",
							   "Fastbond", "Forcefield", "Fork", "Gauntlet of Might", "Granite Gargoyle", "Illusionary Mask", "Kudzu", "Lich", "Mox Emerald", "Mox Jet", "Mox Pearl", "Mox Ruby", "Mox Sapphire", "Natural Selection",
							   "Plateau", "Raging River", "Roc of Kher Ridges", "Rock Hydra", "Savannah", "Scrubland", "Sedge Troll", "Taiga", "Time Vault", "Time Walk", "Timetwister", "Tropical Island", "Tundra", "Two-Headed Giant of Foriys",
							   "Underground Sea", "Vesuvan Doppelganger", "Veteran Bodyguard", "Volcanic Island", "Wheel of Fortune", "Word of Command"]}, replace : {reserved : true}},
			// Using multiverseid here because these rules get copied into LEB and 2ED
			{ match : {multiverseid: 243}, replace : {artist : "Mark Tedin"} },
			{ match : {multiverseid: 248}, replace : {artist : "Mark Poole"} },
			{ match : {multiverseid: 220}, replace : {artist : "Dan Frazier"} },
			{ match : {multiverseid: 285}, replace : {artist : "Jesper Myrfors"} }
		],
		LEB : 
		[
			{ match : {name : "Ley Druid"}, replace : {flavor : "After years of training, the Druid becomes one with nature, drawing power from the land and returning it when needed."}}
			// All of LEA rules are copied into here (see below)
		],
		ARN :
		[
			{ match : {name : "Bazaar of Baghdad"}, replace : {artist : "Jeff A. Menges"} },
			{ match : {name : "Bottle of Suleiman"}, replace : {originalText : "{1}: Flip a coin, with opponent calling heads or tails while coin is in the air. If the flip ends up in opponent's favor, Bottle of Suleiman does 5 damage to you. Otherwise, a 5/5 flying Djinn immediately comes into play on your side. Use a counter to represent Djinn. Djinn is treated exactly like a normal artifact creature except that if it leaves play it is removed from the game entirely. No matter how the flip turns out, Bottle of Suleiman is discarded after use."} },
			{ match : {name : "Library of Alexandria"}, replace : {artist : "Mark Poole"} },
			{ match : {name : "Ali Baba"}, replace : {flavor : "\"When he reached the entrance of the cavern, he pronounced the words, ‘Open, Sesame!'\" —The Arabian Nights, Junior Classics trans."} },
			{ match : {name : ["Aladdin's Ring", "Juzám Djinn", "King Suleiman", "Repentant Blacksmith"]}, flavorAddDash : true},
			{ match : {name : ["Ali from Cairo", "Bazaar of Baghdad", "City in a Bottle", "Diamond Valley", "Drop of Honey", "Elephant Graveyard", "Guardian Beast", "Ifh-Biff Efreet", "Island of Wak-Wak", "Jihad", "Juzam Djinn", "Khabal Ghoul",
							   "King Suleiman", "Library of Alexandria", "Merchant Ship", "Old Man of the Sea", "Pyramids", "Ring of Ma'ruf", "Sandals of Abdallah", "Serendib Djinn", "Shahrazad", "Singing Tree"]}, replace : {reserved : true}}
		],
		"2ED" :
		[
			// All of LEA rules are copied into here (see below)
		],
		ATQ :
		[
			{ match : {name : "Gate to Phyrexia"}, flavorAddDash : true },
			{ match : {name : "Feldon's Cane"}, replace : {flavor : "Feldon found the first of these canes frozen in the Ronom Glacier."} },
			{ match : {name : "Triskelion"}, replace : {flavor : "A brainchild of Tawnos, the Triskelion proved its versatility and usefulness in many of the later battles between the brothers."} },
			{ match : {name : ["Argivian Archaeologist", "Candelabra of Tawnos", "Citanul Druid", "Damping Field", "Gaea's Avenger", "Gate to Phyrexia", "Golgothian Sylex", "Haunting Wind", "Martyrs of Korlis", "Mightstone",
							   "Mishra's Workshop", "Power Artifact", "Powerleech", "Su-Chi", "Tawnos's Coffin", "Transmute Artifact", "Urza's Miter", "Weakstone"]}, replace : {reserved : true}}
		],
		"3ED" :
		[
			{ match : {name : ["Elvish Archers", "Wall of Air", "Goblin Balloon Brigade"]}, flavorAddExclamation : true},
			{ match : {name : "Aladdin's Ring"}, replace : {flavor : "\"After these words the magician drew a ring off his finger, and put it on one of Aladdin's, saying: 'It is a talisman against all evil, so long as you obey me.'\" —The Arabian Nights, Junior Classics trans."}},
			{ match : {name : "Dwarven Weaponsmith"}, replace : {flavor : "\"Work with zeal as hammers peal! Melt, anneal, and pound the steel!\"\n—Old Dwarvish forge-chant"} },
			{ match : {name : "Mahamoti Djinn"}, replace : {flavor : "Of royal blood among the spirits of the air, the Mahamoti Djinn rides on the wings of the winds. As dangerous in the gambling hall as he is in battle, he is a master of trickery and misdirection."}},
			{ match : {name : "Pearled Unicorn"}, replace : {flavor : "\"‘Do you know, I always thought Unicorns were fabulous monsters, too? I never saw one alive before!' ‘Well, now that we have seen each other,' said the Unicorn, ‘if you'll believe in me, I'll believe in you.'\" —Lewis Carroll"}},
			{ match : {name : "Roc of Kher Ridges"}, replace : {flavor : "We encountered a valley topped with immense boulders and eerie rock formations. Suddenly one of these boulders toppled from its perch and sprouted gargantuan wings, casting a shadow of darkness and sending us fleeing in terror."}},
			{ match : {name : "Wall of Wood"}, replace : {flavor : "Everybody knows that to ward off trouble, you knock on wood. But usually it's better to make a wall out of the wood and let trouble do the knocking."} },
			{ match : {name : "Onulet"}, replace : {artist : "Anson Maddocks"} },
			{ match : {name : "Fungusaur"}, replace : {flavor : "Rather than sheltering her young, the female Fungusaur often injures her own offspring, thereby ensuring their rapid growth."} },
			{ match : {name : "Grizzly Bears"}, replace : {flavor : "Don't try to outrun one of Dominia's Grizzlies; it'll catch you, knock you down, and eat you. Of course, you could run up a tree. In that case you'll get a nice view before it knocks the tree down and eats you."}},
			{ match : {name : "Plateau"}, replace : {artist : "Cornelius Brudi"} },
			{ match : {name : "Nightmare"}, replace : {flavor : "The Nightmare arises from its lair in the swamps. As the poisoned land spreads, so does the Nightmare's rage and terrifying strength."} },
			{ match : {name : "Hypnotic Specter"}, replace : {flavor : "\"...There was no trace/ Of aught on that illumined face....\" —Samuel Coleridge, \"Phantom\""} },
			{ match : {name : "Uthden Troll"}, replace : {flavor : "\"Oi oi oi, me gotta hurt in 'ere,\nOi oi oi, me smell a ting is near,\nGonna bosh 'n gonna nosh 'n da\nhurt'll disappear.\"\n—Traditional"}},
			{ match : {name : "Scathe Zombies"}, replace : {flavor : "\"They groaned, they stirred, they all uprose,/ Nor spake, nor moved their eyes;/ It had been strange, even in a dream,/ To have seen those dead men rise.\"/ —Samuel Coleridge, \"The Rime of the Ancient Mariner\""}},
			{ match : {name : "Granite Gargoyle"}, replace : {flavor : "\"While most overworlders fortunately don't realize this, Gargoyles can be most delicious, providing you have the appropriate tools to carve them.\"\n—The Underworld Cookbook, by Asmoranomardicadaistinaculdacar"}},
			{ match : {name : "Obsianus Golem"}, replace : {flavor : "\"The foot stone is connected to the ankle stone, the ankle stone is connected to the leg stone...\"\n—Song of the Artificer"}}
		],
		LEG :
		[
			{ match : {name : "The Tabernacle at Pendrell Vale"}, replace : {artist : "Nicola Leonard"} },
			{ match : {name : ["Active Volcano", "Psionic Entity"]}, replace : {artist : "Justin Hampton"} },
			{ match : {name : "Disharmony"}, replace : {artist : "Bryon Wackwitz"} },
			{ match : {name : "Barktooth Warbeard"}, replace : {flavor : "He is devious and cunning, in both appearance and deed. Beware the Warbeard, for this brute bites as well as he barks!"}},
			{ match : {name : "Boomerang"}, replace : {flavor : "\"O! call back yesterday, bid time return.\" —William Shakespeare, King Richard the Second"} },
			{ match : {name : "Craw Giant"}, replace : {flavor : "Harthag gave a jolly laugh as he surveyed the army before him. \"Ho ho ho! Midgets! You think you can stand in my way?\""} },
			{ match : {name : "Gaseous Form"}, replace : {flavor : "\". . . [A]nd gives to airy nothing/ A local habitation and a name.\" —William Shakespeare, A Midsummer-Night's Dream"} },
			{ match : {name : "Giant Strength"}, replace : {flavor : "\"O! it is excellent/ To have a giant's strength, but it is tyrannous/ To use it like a giant.\" —William Shakespeare, Measure for Measure"} },
			{ match : {name : "Hammerheim"}, replace : {flavor : "\"‘Tis distance lends enchantment to the view,/ And robes the mountain in its azure hue.\" —Thomas Campbell, \"Pleasures of Hope\""} },
			{ match : {name : "Keepers of the Faith"}, replace : {flavor : "And then the Archangel Anthius spoke to them, saying, \"Fear shall be vanquished by the Sword of Faith.\""} },
			{ match : {name : "Lifeblood"}, replace : {flavor : "\"Foolish wizard! As you tap the power of your lofty keep, so grows my strength.\" —Malvern Xelionos, Letters"}},
			{ match : {name : "Pendelhaven"}, replace : {flavor : "\"This is the forest primeval. The murmuring pines and the hemlocks . . . / Stand like Druids of old.\" —Henry Wadsworth Longfellow, \"Evangeline\""} },
			{ match : {name : "Pyrotechnics" }, replace : {flavor : "\"Hi! ni! ya! Behold the man of flint, that's me!/ Four lightnings zigzag from me, strike and return.\"\n—Navajo war chant"}},
			{ match : {name : "Remove Soul"}, replace : {flavor : "Nethya stiffened suddenly, head cocked as if straining to hear some distant sound, then fell lifeless to the ground."} },
			{ match : {name : "Rust"}, replace : {flavor : "\"How dull it is to pause, to make an end,/ To rust unburnished, not to shine in use,/ As though to breathe were life!\" —Alfred, Lord Tennyson, \"Ulysses\""} },
			{ match : {name : "Segovian Leviathan"}, replace : {flavor : "\"Leviathan, too! Can you catch him with a fish-hook/ or run a line round his tongue?\" —Job 40:25"} },
			{ match : {name : "Sir Shandlar of Eberyn"}, replace : {flavor : "\"Remember Sir Shandlar! Remember and stand firm!\" —rallying cry of the Eberyn militia"} },
			{ match : {name : "Wall of Caltrops"}, replace : {flavor : "\"Ow! Ow ow ow! Oooh, ow, OW!\""} },
			{ match : {name : "Wall of Wonder"}, replace : {flavor : "So confusing is the Wall's appearance that few of its victims even see it move."} },
			{ match : {name : "Winter Blast"}, replace : {flavor : "\"Blow, winds, and crack your cheeks! rage! blow!\" —William Shakespeare, King Lear"} },
			{ match : {name : ["Syphon Soul", "Transmutation", "Visions", "Holy Day", "Kobold Overlord"]}, flavorAddExclamation : true},
			{ match : {name : ["Adun Oakenshield", "Alabaster Potion", "Angus Mackenzie", "Carrion Ants", "Dakkon Blackblade", "Darkness", "Devouring Deep", "Dream Coat", "Durkwood Boars", "Elven Riders", "Firestorm Phoenix", "Flash Counter",
							   "Giant Turtle", "Glyph of Doom", "Greed", "Headless Horseman", "Hellfire", "Hornet Cobra", "Horror of Horrors", "Hyperion Blacksmith", "Karakas", "Lady Evangela", "Lady Orca", "Part Water", "Quarum Trench Gnomes",
							   "Raging Bull", "Revelation", "Shimian Night Stalker", "Spinal Villain", "The Abyss", "The Brute", "Thunder Spirit", "Tolaria", "Touch of Darkness", "Underworld Dreams", "Urborg", "Vampire Bats", "Wall of Vapor",
							   "Winds of Change", "Wolverine Pack", "Kobold Overlord", "Holy Day"]}, flavorAddDash : true},
			{ match : {name : ["The Abyss", "Acid Rain", "Adun Oakenshield", "Al-abara's Carpet", "Alchor's Tomb", "All Hallow's Eve", "Angus Mackenzie", "Bartel Runeaxe", "Boris Devilboon", "Caverns of Despair", "Chains of Mephistopheles",
							   "Cleanse", "Disharmony", "Divine Intervention", "Elder Spawn", "Eureka", "Falling Star", "Field of Dreams", "Firestorm Phoenix", "Forethought Amulet", "Gosta Dirk", "Gravity Sphere", "Gwendlyn Di Corci",
							   "Halfdane", "Hazezon Tamar", "Hellfire", "Imprison", "In the Eye of Chaos", "Infinite Authority", "Invoke Prejudice", "Jacques le Vert", "Jovial Evil", "Knowledge Vault", "Kobold Overlord", "Lady Caleria",
							   "Lady Evangela", "Land Equilibrium", "Life Matrix", "Lifeblood", "Living Plane", "Livonya Silone", "Mana Matrix", "Master of the Hunt", "Mirror Universe", "Moat", "Mold Demon", "Nether Void", "North Star",
							   "Nova Pentacle", "Pixie Queen", "Planar Gate", "Quarum Trench Gnomes", "Ragnar", "Ramses Overdark", "Rapid Fire", "Rasputin Dreamweaver", "Reverberation", "Ring of Immortals", "Rohgahh of Kher Keep",
							   "Spinal Villain", "Spiritual Sanctuary", "Storm World", "Sword of the Ages", "The Tabernacle at Pendrell Vale", "Telekinesis", "Tetsuo Umezawa", "Thunder Spirit", "Tuknir Deathlock",
							   "Typhoon", "Ur-Drago", "Willow Satyr", "Wood Elemental"]}, replace : {reserved : true}}
		],
		DRK :
		[
			{ match : {name : "Goblin Digging Team"}, flavorAddExclamation : true },
			{ match : {name : ["Amnesia", "Carnivorous Plant", "Coal Golem", "Dark Sphere", "Diabolic Machine", "Elves of Deep Shadow", "Fissure", "Ghost Ship", "Goblin Shrine", "Grave Robbers", "Hidden Path", "Holy Light", "Inferno", "Knights of Thorn",
			                    "Land Leeches", "Marsh Gas", "Martyr's Cry", "Miracle Worker", "Morale", "Orc General", "People of the Woods", "Pikemen", "Squire", "Venom", "Word of Binding"] }, flavorAddDash : true },
			{ match : {name : "Goblin Hero"}, replace : {flavor : "They attacked in an orgy of rage and madness, but only one seemed as focused on killing us as on the sheer joy of battle."} },
			{ match : {name : "Marsh Viper"}, replace : {flavor : "\"All we had left were their black and bloated bodies.\" —Maeveen O'Donagh, Memoirs of a Soldier"} },
			{ match : {name : "Savaen Elves"}, replace : {flavor : "\"Purity of magic can only come from purity of the land. How can a meal nourish if the ingredients are spoiled?\" —Sidaine of Savaen"}},,
			{ match : {name : ["City of Shadows", "Cleansing", "Eternal Flame", "Exorcist", "Frankenstein's Monster", "Goblin Wizard", "Grave Robbers", "Hidden Path", "Knights of Thorn", "Lurker", "Mana Vortex", "Martyr's Cry",
							   "Nameless Race", "Niall Silvain", "Preacher", "Psychic Allergy", "Scarwood Bandits", "Season of the Witch", "Sorrow's Path", "Stone Calendar", "Tracker", "Worms of the Earth", "Wormwood Treefolk"]}, replace : {reserved : true}}
		],
		pMEI :
		[
			{match : {name : "Arrest"}, replace : {flavor : "Fayden didn't know if the giant had created the spehere's magic—only that he had to escape it to find Sifa."}},
			{match : {name : ["Bloodthrone Vampire", "Kor Skyfisher", "Merfolk Mesmerist"]}, replace : {flavor : "www.MagicTheGathering.com"}},
			{match : {name : "Knight Exemplar"}, replace : {flavor : "\"If you think you are brave enough to walk the path of honor, follow me into the dragon's den.\""}},
			{match : {name : ["Blue Elemental Blast", "Fireball", "Spined Wurm"]}, replace : {border : "white"}},
			{match : {name : "Wash Out"}, replace : {releaseDate : "2014-01-15"}},
			{match : {name : "Duress"}, replace : {artist : "Michael Komarck"}},
			{match : {name : "Avalance Tusker"}, replace : {name:"Avalanche Tusker", imageName : "avalanche tusker", manaCost : "{2}{G}{U}{R}"}}
		],
		FEM :
		[
			{ renumberImages : "Armor Thrull", order : [1841, 1840, 1838, 1839] },
			{ renumberImages : "Basal Thrull", order : [1842, 1844, 1843, 1845] },
			{ renumberImages : "Brassclaw Orcs", order : [1966, 1938, 1937, 1940] },
			{ renumberImages : "Combat Medic", order : [1971, 1972, 1970, 1973] },
			{ renumberImages : "Elven Fortress", order : [1905, 1904, 1906, 1907] },
			{ renumberImages : "Elvish Hunter", order : [1910, 1911, 1909] },
			{ renumberImages : "Elvish Scout", order : [1913, 1912, 1914] },
			{ renumberImages : "Goblin Chirurgeon", order : [1948, 1949, 1947] },
			{ renumberImages : "Goblin War Drums", order : [1955, 1957, 1956, 1958] },
			{ renumberImages : "High Tide", order : [1873, 1872, 1874] },
			{ renumberImages : "Homarid Warrior", order : [1882, 1881, 1883] },
			{ renumberImages : "Homarid", order : [1875, 1876, 1877, 1878] },
			{ renumberImages : "Hymn to Tourach", order : [1850, 1849, 1851, 1852] },
			{ renumberImages : "Icatian Infantry", order : [1981, 1982, 1983, 1984] },
			{ renumberImages : "Icatian Moneychanger", order : [1989, 1990, 1991] },
			{ renumberImages : "Icatian Scout", order : [1994, 1997, 1996, 1995] },
			{ renumberImages : "Initiates of the Ebon Hand", order : [1855, 1854, 1853] },
			{ renumberImages : "Merseine", order : [1884, 1885, 1887, 1886] },
			{ renumberImages : "Mindstab Thrull", order : [1857, 1856, 1858] },
			{ renumberImages : "Necrite", order : [1860, 1859, 1861] },
			{ renumberImages : "Night Soil", order : [1918, 1917, 1919] },
			{ renumberImages : "Orcish Spy", order : [1962, 1961, 1963] },
			{ renumberImages : "Orcish Veteran", order : [1967, 1965, 1939, 1964] },
			{ renumberImages : "Order of Leitbur", order : [2001, 2000, 2002] },
			{ renumberImages : "Order of the Ebon Hand", order : [1863, 1862, 1864] },
			{ renumberImages : "Spore Cloud", order : [1920, 1922, 1921] },
			{ renumberImages : "Thallid", order : [1924, 1926, 1927, 1925] },
			{ renumberImages : "Thorn Thallid", order : [1933, 1934, 1935, 1936] },
			{ renumberImages : "Tidal Flats", order : [1891, 1892, 1893] },
			{ renumberImages : "Vodalian Mage", order : [1896, 1898, 1897] },
			{ renumberImages : "Vodalian Soldiers", order : [1899, 1901, 1900, 1902] },
			{ match : {name : "Thrull Champion"}, flavorAddExclamation : true },
			{ match : {name : "Delif's Cone"}, flavorAddDash : true },
			{ match : {name : ["Aeolipile", "Balm of Restoration", "Conch Horn", "Delif's Cube", "Draconian Cylix", "Dwarven Armorer", "Ebon Praetor", "Elven Lyre", "Elvish Farmer", "Fungal Bloom", "Goblin Flotilla", "Hand of Justice",
							   "Homarid Shaman", "Icatian Lieutenant", "Icatian Skirmishers", "Implements of Sacrifice", "Rainbow Vale", "Ring of Renewal", "River Merfolk", "Spirit Shield", "Thelon's Curse", "Thelonite Monk", "Thrull Champion",
							   "Tourach's Gate", "Vodalian Knights", "Vodalian War Machine", "Zelyon Sword"]}, replace : {reserved : true}}
		],
		"4ED" :
		[
			{ match : {name : "Pyrotechnics" }, replace : {flavor : "\"Hi! ni! ya! Behold the man of flint, that's me!\nFour lightnings zigzag from me, strike and return.\" —Navajo war chant"}},
			{ renumberImages : "Forest", order : [2377, 2378, 2379] },
			{ renumberImages : "Island", order : [2390, 2389, 2391] },
			{ renumberImages : "Mountain", order : [2383, 2381, 2382] },
			{ renumberImages : "Plains", order : [2386, 2385, 2384] },
			{ renumberImages : "Swamp", order : [2375, 2376, 2374] },
			{ match : {name : "Cosmic Horror"}, replace : {flavor : "\". . . [S]creams of horror rend th' affrighted skies.\" —Alexander Pope, The Rape of the Lock"}},
			{ match : {name : "Aladdin's Ring"}, replace : {flavor : "\"After these words the magician drew a ring off his finger, and put it on one of Aladdin's, saying: 'It is a talisman against all evil, so long as you obey me.'\" —The Arabian Nights, Junior Classics trans."}},
			{ match : {name : "Giant Strength"}, replace : {flavor : "\"O! it is excellent\nTo have a giant's strength, but it is tyrannous\nTo use it like a giant.\"\n—William Shakespeare, Measure for Measure"}},
			{ match : {name : "Ley Druid"}, replace : {flavor : "After years of training, the Druid becomes one with nature, drawing power from the land and returning it when needed."}},
			{ match : {name : "Pearled Unicorn"}, replace : {flavor : "\"‘Do you know, I always thought Unicorns were fabulous monsters, too? I never saw one alive before!' ‘Well, now that we have seen each other,' said the Unicorn, ‘if you'll believe in me, I'll believe in you.'\" —Lewis Carroll"}},
			{ match : {name : "Segovian Leviathan"}, replace : {flavor : "\"Leviathan, too! Can you catch him with a fish-hook or run a line round his tongue?\" —Job 40:25"} },
			{ match : {name : "Winter Blast"}, replace : {flavor : "\"Blow, winds, and crack your cheeks! rage! blow!\" —William Shakespeare, King Lear"} },
			{ match : {name : "Hypnotic Specter"}, replace : {flavor : "\"...There was no trace\nOf aught on that illumined face....\"\n—Samuel Coleridge, \"Phantom\""} },
			{ match : {name : "Marsh Viper"}, replace : {flavor : "\"All we had left were their black and bloated bodies.\" —Maeveen O'Donagh, Memoirs of a Soldier"} },
			{ match : {name : "Gaseous Form"}, replace : {flavor : "\". . . [A]nd gives to airy nothing\nA local habitation and a name.\"\n—William Shakespeare, A Midsummer-Night's Dream"} },
			{ match : {name : "Scathe Zombies"}, replace : {flavor : "\"They groaned, they stirred, they all uprose, Nor spake, nor moved their eyes; It had been strange, even in a dream, To have seen those dead men rise.\" —Samuel Coleridge, \"The Rime of the Ancient Mariner\""}},
			{ match : {name : "Ali Baba"}, replace : {flavor : "\"When he reached the entrance of the cavern, he pronounced the words, ‘Open, Sesame!'\"\n—The Arabian Nights, Junior Classics trans."}},
			{ match : {name : ["Elvish Archers", "Goblin Balloon Brigade", "Visions", "Wall of Air"]}, flavorAddExclamation : true },
			{ match : {name : ["Dragon Whelp", "Northern Paladin"]}, flavorAddDash : true }
		],
		ICE :
		[
			{ renumberImages : "Forest", order : [2748, 2746, 2747] },
			{ renumberImages : "Island", order : [2768, 2767, 2769] },
			{ renumberImages : "Mountain", order : [2763, 2765, 2764] },
			{ renumberImages : "Plains", order : [2773, 2771, 2772] },
			{ renumberImages : "Swamp", order : [2744, 2743, 2745] },
			{ match : {name : ["Aegis of the Meek", "Conquer", "Despotic Scepter", "Disenchant", "Fanatical Fever", "Goblin Ski Patrol", "Knight of Stromgald", "Lava Burst", "Panic", "Polar Kraken", "Spoils of War",
							   "Woolly Mammoths"]}, flavorAddExclamation : true },
			{ match : {name : ["Fiery Justice", "Mind Whip", "Prismatic Ward", "Snow Devil"]}, flavorAddDash : true },
			{ match : {name : "Blinking Spirit"}, replace : {flavor : "\"Don't look at it! Maybe it'll go away!\"\n—Ib Halfheart, Goblin Tactician"}},
			{ match : {name : "Breath of Dreams"}, replace : {flavor : "\"Get up, blast you! They're attacking! Why are you all so slow?\"\n—General Jarkeld, the Arctic Fox"}},
			{ match : {name : "Grizzled Wolverine"}, replace : {flavor : "\"Before you release a Wolverine from the trap, make sure it's really dead.\"\n—Lovisa Coldeyes,\nBalduvian Chieftain"}},
			{ match : {name : "Mercenaries"}, replace : {flavor : "\"Blasted amateurs! Doesn't the queen think we can fight well enough on our own?\"\n—Avram Garrisson, Leader of the Knights of Stromgald"}},
			{ match : {name : "Lhurgoyf"}, replace : {flavor : "\"Ach! Hans, run! It's the Lhurgoyf!\"\n—Saffi Eriksdotter, last words"}},
			{ match : {name : "Rally"}, replace : {flavor : "\"Stand your ground, troops! This shall be our finest hour!\"\n—General Jarkeld, the Arctic Fox, last words"}},
			{ match : {name : ["Aegis of the Meek", "Altar of Bone", "Amulet of Quoz", "Balduvian Hydra", "Blizzard", "Brand of Ill Omen", "Call to Arms", "Chromatic Armor", "Earthlink", "Energy Storm", "Flow of Maggots", "Formation", "Fyndhorn Pollen",
							   "General Jarkeld", "Glacial Crevasses", "Gravebind", "Halls of Mist", "Hot Springs", "Ice Cauldron", "Illusionary Presence", "Illusions of Grandeur", "Infernal Denizen", "Jester's Mask", "Kjeldoran Knight",
							   "Kjeldoran Phalanx", "Land Cap", "Lava Tubes", "Lightning Blow", "Marton Stromgald", "Mercenaries", "Mesmeric Trance", "Minion of Tevesh Szat", "Mountain Titan", "Mudslide", "Musician", "Mystic Might", "Polar Kraken",
							   "Reality Twist", "River Delta", "Ritual of Subdual", "Skeleton Ship", "Snowblind", "Soldevi Golem", "Spoils of Evil", "Spoils of War", "Storm Spirit", "Timberline Ridge", "Trailblazer",
							   "Veldt", "Winter's Chill"]}, replace : {reserved : true}}
		],
		CHR :
		[
			{ match : {name : "Boomerang"}, replace : {flavor : "\"O! call back yesterday, bid time return.\" —William Shakespeare, King Richard the Second"} },
			{ match : {name : "Craw Giant"}, replace : {flavor : "Harthag gave a jolly laugh as he surveyed the army before him. \"Ho ho ho! Midgets! You think you can stand in my way?\""} },
			{ match : {name : "Keepers of the Faith"}, replace : {flavor : "And then the Archangel Anthius spoke to them, saying, \"Fear shall be vanquished by the Sword of Faith.\""} },
			{ match : {name : "Scavenger Folk"}, replace : {flavor : "String, weapons, wax, or jewels—it makes no difference. Leave nothing unguarded in Scarwood."} },
			{ match : {name : "Wall of Vapor"}, replace : {flavor : "\"Walls of a castle are made out of stone,/ Walls of a house out of bricks or of wood./ My walls are made out of magic alone,/ Stronger than any that ever have stood.\" —Chrysoberyl Earthsdaughter, Incantations"}},
			{ match : {name : ["Goblin Digging Team", "Transmutation"]}, flavorAddExclamation : true },
			{ match : {name : ["Goblin Shrine", "Revelation"]}, flavorAddDash : true },
			{ match : {name : "Divine Offering"}, replace : {flavor : "D'Haren stared at the twisted lump of metal that had been a prized artifact. The fight was getting ugly."}},
			{ match : {name : "Xira Arien"}, replace : {flavor : "A regular guest at the Royal Masquerade, Arien is the envy of the Court. She appears in a new costume every hour."}}
		],
		HML :
		[
			{ renumberImages : "Abbey Matron", order : [3011, 3012] },
			{ renumberImages : "Ambush Party", order : [2989, 2988] },
			{ renumberImages : "Anaba Bodyguard", order : [2992, 2993] },
			{ renumberImages : "Anaba Shaman", order : [2995, 2994] },
			{ renumberImages : "Carapace", order : [2963, 2964] },
			{ renumberImages : "Dark Maze", order : [2940, 2939] },
			{ renumberImages : "Dwarven Trader", order : [3000, 3001] },
			{ renumberImages : "Folk of An-Havva", order : [2968, 2967] },
			{ renumberImages : "Hungry Mist", order : [2969, 2970] },
			{ renumberImages : "Mesa Falcon", order : [3022, 3021] },
			{ renumberImages : "Reef Pirates", order : [2955, 2954] },
			{ renumberImages : "Sengir Bats", order : [2930, 2929] },
			{ renumberImages : "Willow Faerie", order : [2982, 2983] },
			{ match : {name : ["Narwhal"]}, flavorAddExclamation : true },
			{ match : {name : ["Baron Sengir", "Spectral Bears"]}, flavorAddDash : true },
			{ match : {name : "Roterothopter"}, replace : {flavor : "\"The Roterothopter is as insidious as it is ingenious. It is one of the few creations of our school that I take no pride in.\" —Baki, Wizard Attendant"}},
			{ match : {name : ["An-Zerrin Ruins", "Anaba Ancestor", "Anaba Spirit Crafter", "Apocalypse Chime", "Autumn Willow", "Aysen Crusader", "Aysen Highway", "Baki's Curse", "Baron Sengir", "Beast Walkers", "Black Carriage", "Chain Stasis",
							   "Daughter of Autumn", "Didgeridoo", "Dwarven Pony", "Dwarven Sea Clan", "Faerie Noble", "Grandmother Sengir", "Hazduhr the Abbot", "Heart Wolf", "Koskun Falls", "Leeches", "Mammoth Harness", "Marjhan", "Mystic Decree",
							   "Narwhal", "Reveka, Wizard Savant", "Rysorian Badger", "Serra Aviary", "Soraya the Falconer", "Timmerian Fiends", "Veldrane of Sengir", "Wall of Kelp", "Willow Priestess", "Winter Sky"]}, replace : {reserved : true}}
		],
		ALL :
		[
			{ renumberImages : "Astrolabe", order : [3044, 3043] },
			{ renumberImages : "Balduvian War-Makers", order : [3162, 3163] },
			{ renumberImages : "Benthic Explorers", order : [3102, 3101] },
			{ renumberImages : "Deadly Insect", order : [3129, 3130] },
			{ renumberImages : "Enslaved Scout", order : [3169, 3170] },
			{ renumberImages : "Errand of Duty", order : [3193, 3192] },
			{ renumberImages : "False Demise", order : [3106, 3105] },
			{ renumberImages : "Foresight", order : [3108, 3109] },
			{ renumberImages : "Gift of the Woods", order : [3138, 3139] },
			{ renumberImages : "Gorilla Berserkers", order : [3140, 3141] },
			{ renumberImages : "Gorilla Chieftain", order : [3143, 3142] },
			{ renumberImages : "Gorilla War Cry", order : [3173, 3174] },
			{ renumberImages : "Kjeldoran Pride", order : [3201, 3202] },
			{ renumberImages : "Lim-Dûl's High Guard", order : [3083, 3082] },
			{ renumberImages : "Phyrexian War Beast", order : [3053, 3054] },
			{ renumberImages : "Royal Herbalist", order : [3213, 3212] },
			{ renumberImages : "Soldevi Sage", order : [3117, 3116] },
			{ renumberImages : "Soldevi Steam Beast", order : [3061, 3062] },
			{ renumberImages : "Taste of Paradise", order : [3150, 3149] },
			{ renumberImages : "Varchild's Crusader", order : [3186, 3185] },
			{ renumberImages : "Viscerid Armor", order : [3126, 3125] },
			{ renumberImages : "Whip Vine", order : [3154, 3155] },
			{ renumberImages : "Wild Aesthir", order : [3220, 3219] },
			{ match : {name : ["Burnout", "Mystic Compass", "Omen of Fire", "Urza's Engine"]}, flavorAddExclamation : true },
			{ match : {name : ["Misinformation", "Nature's Blessing", "Sol Grail", "Urza's Engine", "Varchild's War-Riders"]}, flavorAddDash : true },
			{ match : {name : "Kaysa"}, replace : {flavor : "Kaysa speaks as the Elder Druid, but the Yavimaya recognizes only one voice: its own."}},
			{ match : {name : ["Ashnod's Cylix", "Balduvian Trading Post", "Chaos Harlequin", "Dystopia", "Fatal Lore", "Floodwater Dam", "Gargantuan Gorilla", "Gustha's Scepter", "Heart of Yavimaya", "Helm of Obedience", "Ivory Gargoyle",
							   "Kaysa", "Keeper of Tresserhorn", "Kjeldoran Outpost", "Krovikan Horror", "Lake of the Dead", "Lodestone Bauble", "Lord of Tresserhorn", "Misfortune", "Nature's Wrath", "Omen of Fire", "Phantasmal Sphere",
							   "Phelddagrif", "Phyrexian Devourer", "Phyrexian Portal", "Ritual of the Machine", "Rogue Skycaptain", "Royal Decree", "Sheltered Valley", "Soldevi Digger", "Soldevi Excavations", "Splintering Wind", "Sustaining Spirit",
							   "Sworn Defender", "Thawing Glaciers", "Thought Lash", "Tidal Control", "Tornado", "Varchild's War-Riders", "Wandering Mage", "Winter's Night"]}, replace : {reserved : true}}
		],	
		pARL :
		[
			{ match : {name : ["Ashnod's Coupon", "Booster Tutor", "Circle of Protection: Art", "Goblin Mime", "Granny's Payback", "Mise"]}, replace : {border : "silver"}},
			{ match : {name : "Castigate"}, replace : {flavor : "\"We have no need for military might. We wield two of the sharpest swords ever forged: Faith in our left hand, Wealth in our right.\"\n—Vuliev of the Ghost Council"}},
			{ match : {name : "Goblin Mime"}, replace : {flavor : "Mung noticed a few clouds gathering in the sky. Perhaps today he could perform his \"walking against the wind\" routine."}},
			{ match : {name : "Man-o'-War"}, replace : {flavor : "\"Beauty to the eye does not always translate to the touch.\"\n—Naimah, Femeref philospher"}},
			{ match : {name : "Pouncing Jaguar"}, replace : {flavor : "One pounce, she's hungry—you die quickly. Two, she's teaching her cubs—you're in for a long day."}},
			{ match : {name : "Rewind"}, replace : {flavor : "\"Time flows like a river. In Tolaria we practice the art of building dams.\"\n—Barrin, master wizard"}}
		],
		MIR :
		[
			{ renumberImages : "Forest", order : [3569, 3567, 3568, 3566] },
			{ renumberImages : "Island", order : [3584, 3582, 3583, 3581] },
			{ renumberImages : "Mountain", order : [3580, 3578, 3579, 3577] },
			{ renumberImages : "Plains", order : [3585, 3587, 3586, 3588] },
			{ renumberImages : "Swamp", order : [3562, 3563, 3564, 3565] },
			{ match : {name : ["Acidic Dagger", "Harbor Guardian"]}, replace : {artist : "Stuart Beel"}},
			{ match : {name : ["Cerulean Wyvern", "Dwarven Miner", "Ekundu Cyclops", "Ether Well", "Floodgate", "Goblin Scouts", "Infernal Contract"]}, flavorAddExclamation : true },
			{ match : {name : ["Ersatz Gnomes", "Mtenda Griffin"]}, flavorAddDash : true },
			{ match : {name : ["Cinder Cloud", "Dwarven Miner", "Kukemssa Pirates"]}, replace : {artist : "JOCK"}},
			{ match : {name : "Femeref Knight"}, replace : {flavor : "\"I will return / with lizard skins for your sandals. Paint your eyes black and wait for me.\" —\"Love Song of Night and Day\""}},
			{ match : {name : "Kaervek's Torch"}, replace : {flavor : "The pulsing heat of the midday Sun burns in the Lion's eye.\n—Stone inscription, source unknown"}},
			{ match : {name : "Merfolk Raiders"}, replace : {flavor : "\"Turn your back for a second and they just vanish! As if they weren't shifty enough before.\"\n—Rhirhok, goblin archer"}},
			{ match : {name : "Mtenda Lion"}, replace : {flavor : "\"The lion drank that lake right up! In thanks, he gave Siti the power to speak with lions and make them leave the goats alone.\"\n—Afari, Tales"}},
			{ match : {name : "Polymorph"}, replace : {flavor : "\"Ahh! Opposable digits!\""}},
			{ match : {name : "Savage Twister"}, replace : {flavor : "\"Frozen, we watched the funnel pluck up three of the goats—pook! pook! pook!—before we ran for the wadi.\"\n—Travelogue of Najat"}},
			{ match : {name : "Wall of Corpses"}, replace : {flavor : "\"I shall make walls of their flesh, and their blood will be my mortar.\"\n—Kaervek"}},
			{ match : {name : "Ersatz Gnomes"}, replace : {flavor : "From jungle to sea, from sea to stone, from stone to field, from field to bone. What am I? —Zhalfirin riddle"}},
			{ match : {name : ["Acidic Dagger", "Afiya Grove", "Amulet of Unmaking", "Asmira, Holy Avenger", "Auspicious Ancestor", "Barreling Attack", "Bazaar of Wonders", "Benthic Djinn", "Bone Mask", "Brushwagg", "Cadaverous Bloom",
							   "Canopy Dragon", "Carrion", "Catacomb Dragon", "Chaosphere", "Circle of Despair", "Cycle of Life", "Discordant Spirit", "Divine Retribution", "Emberwilde Caliph", "Emberwilde Djinn", "Energy Bolt", "Energy Vortex",
							   "Forsaken Wastes", "Frenetic Efreet", "Grim Feast", "Hakim, Loreweaver", "Hall of Gemstone", "Harbinger of Night", "Hivis of the Scale", "Jabari's Influence", "Jungle Patrol", "Kukemssa Pirates", "Leering Gargoyle",
							   "Lion's Eye Diamond", "Lure of Prey", "Malignant Growth", "Mangara's Tome", "Mindbender Spores", "Misers' Cage", "Mist Dragon", "Natural Balance", "Null Chamber", "Paupers' Cage", "Phyrexian Dreadnought", "Phyrexian Purge",
							   "Phyrexian Tribute", "Political Trickery", "Preferred Selection", "Prismatic Lace", "Purgatory", "Purraj of Urborg", "Rashida Scalebane", "Razor Pendulum", "Reflect Damage", "Reparations", "Rock Basilisk", "Sawback Manticore",
							   "Seeds of Innocence", "Shallow Grave", "Shauku, Endbringer", "Shimmer", "Sidar Jabari", "Soul Echo", "Spectral Guardian", "Spirit of the Night", "Subterranean Spirit", "Tainted Specter", "Taniwha", "Teeka's Dragon",
							   "Teferi's Imp", "Teferi's Isle", "Telim'Tor", "Telim'Tor's Edict", "Tombstone Stairwell", "Torrent of Lava", "Unfulfilled Desires", "Ventifact Bottle", "Warping Wurm", "Wellspring",
							   "Yare", "Zirilan of the Claw", "Zuberi, Golden Feather"]}, replace : {reserved : true}}
		],
		MGB :
		[
			{ match : "*", remove : ["source", "releaseDate", "number"]}
		],
		ITP :
		[
			{ match : {name : "Alabaster Potion"}, replace : {originalText : "Target player gains X life, or prevent X damage to any creature or player."}},
			{ match : {name : "Battering Ram"}, replace : {originalText : "Banding when attacking\nWhenever a wall blocks Battering Ram, destroy that creature at end of combat."}},
			{ match : {name : "Bog Wraith"}, replace : {originalText : "Swampwalk"}},
			{ match : {name : "Circle of Protection: Black"}, replace : {originalText : "{1}: Prevent all damage to you from one black source. Further damage from that source is treated normally."}},
			{ match : {name : "Circle of Protection: Red"}, replace : {originalText : "{1}: Prevent all damage to you from one red source. Further damage from that source is treated normally."}},
			{ match : {name : "Cursed Land"}, replace : {originalText : "During enchanted land's controller's upkeep, Cursed Land deals 1 damage to the player."}},
			{ match : {name : "Detonate"}, replace : {originalText : "Bury target artifact with casting cost equal to X. Detonate deals X damage to that artifact's controller."}},
			{ match : {name : "Disintegrate"}, replace : {originalText : "Disintegrate deals X damage to target creature or player. That creature cannot regenerate until end of turn. If the creature is dealt lethal damage this turn, remove it from the game."}},
			{ match : {name : "Elven Riders"}, replace : {originalText : "Elven Riders cannot be blocked except by creatures with flying or walls.", artist : "Melissa Benson"}},
			{ match : {name : "Energy Flux"}, replace : {originalText : "All artifacts in play gain \"During your upkeep, pay an additional {2} or bury this artifact.\""}},
			{ match : {name : "Feedback"}, replace : {originalText : "During enchanted enchantment's controller's upkeep, Feedback deals 1 damage to that player."}},
			{ match : {name : "Fireball"}, replace : {originalText : "Fireball deals X damage divided evenly, round down, among any number of target creatures and/or players. Pay an additional {1} for each target beyond the first."}},
			{ match : {name : "Healing Salve"}, replace : {originalText : "Target player gains 3 life, or prevent up to 3 damage to any creature or player."}},
			{ match : {name : "Ironclaw Orcs"}, replace : {originalText : "Ironclaw Orcs cannot be assigned to block any creature with power 2 or greater."}},
			{ match : {name : "Jayemdae Tome"}, replace : {originalText : "{4}, {T}: Draw a card."}},
			{ match : {name : "Mesa Pegasus"}, replace : {originalText : "Banding, flying"}},
			{ match : {name : "Murk Dwellers"}, replace : {originalText : "If Murk Dwellers attacks and is not blocked, it gets +2/+0 until end of combat."}},
			{ match : {name : "Power Sink"}, replace : {originalText : "Counter target spell unless that spell's caster pays an additional {X}. That player draws and pays all available mana from lands and mana pool until {X} is paid; he or she may also draw and pay mana from other sources if desired."}},
			{ match : {name : "Raise Dead"}, replace : {originalText : "Put target creature card from your graveyard into your hand."}},
			{ match : {name : "Reverse Damage"}, replace : {originalText : "All damage dealt to you frmo one source this turn is retroactively added to your life total instead of subtracted from it. Further damage from that source is treated normally."}},
			{ match : {name : "Twiddle"}, replace : {originalText : "Tap or untap target artifact, creature, or land."}},
			{ match : {name : "Untamed Wilds"}, replace : {originalText : "Search your library for a basic land card and put it into play. Shuffle your library afterwards."}},
			{ match : {name : "Wall of Bone"}, replace : {originalText : "{B}: Regenerate"}},
			{ match : {name : "Warp Artifact"}, replace : {originalText : "During enchanted artifact's controller's upkeep, Warp Artifact deals 1 damage to that player."}},
			{ match : {name : "Weakness"}, replace : {originalText : "Enchanted creature gets -2/-1."}},
			{ match : {name : "Whirling Dervish"}, replace : {originalText : "Protection from black\nAt the end of any turn in which Whirling Dervish damaged any opponent, put a +1/+1 counter on it."}},
			{ match : {name : "Winter Blast"}, replace : {originalText : "Tap X target creatures. Winter Blast deals 2 damage to each of those creatures with flying."}}
		],
		VIS :
		[
			{ match : {name : ["Goblin Recruiter", "Helm of Awakening", "Scalebane's Elite"]}, flavorAddExclamation : true },
			{ match : {name : "Daraja Griffin"}, replace : {flavor : "\"And the flamingos said, ‘Get out of our nest—we can't be seen with the likes of you!' So, the griffin ate them.\"\n—Azeworai, \"The Ugly Bird\""}},
			{ match : {name : "Freewind Falcon"}, replace : {flavor : "\"That does it! I'm going back to hunting chickens!\"\n—Rhirhok, goblin archer"}},
			{ match : {name : "Guiding Spirit"}, replace : {flavor : "\"Retainer of eternal Sun! Life flash again upon thy wings.\"\n—\"Song to the Sun,\" Femeref song"}},
			{ match : {name : "Longbow Archer"}, replace : {flavor : "\"If it bears wings, I will pin it to the skies over Tefemburu.\"\n—Ruya, Zhalfirin archer"}},
			{ match : {name : "Magma Mine"}, replace : {flavor : "BOOM!"}},
			{ match : {name : ["Aku Djinn", "Anvil of Bogardan", "Bogardan Phoenix", "Breathstealer's Crypt", "Chronatog", "City of Solitude", "Corrosion", "Diamond Kaleidoscope", "Elkin Lair", "Equipoise", "Eye of Singularity", "Femeref Enchantress",
							   "Firestorm Hellkite", "Flooded Shoreline", "Forbidden Ritual", "Griffin Canyon", "Guiding Spirit", "Kaervek's Spite", "Katabatic Winds", "Kookus", "Lichenthrope", "Lightning Cloud", "Ogre Enforcer", "Phyrexian Marauder",
							   "Pillar Tombs of Aku", "Pygmy Hippo", "Quirion Druid", "Rainbow Efreet", "Retribution of the Meek", "Righteous War", "Sands of Time", "Squandered Resources", "Suleiman's Legacy", "Teferi's Realm", "Three Wishes", "Tithe",
							   "Triangle of War", "Undiscovered Paradise", "Viashivan Dragon", "Zhalfirin Crusader"]}, replace : {reserved : true}}
		],
		"5ED" :
		[
			{ match : {name : "Pyrotechnics" }, replace : {flavor : "\"Hi! ni! ya! Behold the man of flint, that's me! / Four lightnings zigzag from me, strike and return.\"\n—Navajo war chant"}},
			{ renumberImages : "Forest", order : [4171, 4172, 4173, 4174] },
			{ renumberImages : "Island", order : [4199, 4200, 4201, 4202] },
			{ renumberImages : "Mountain", order : [4195, 4196, 4197, 4198] },
			{ renumberImages : "Plains", order : [4204, 4206, 4205, 4203] },
			{ renumberImages : "Swamp", order : [4169, 4168, 4167, 4170] },
			{ match : {name : ["Ambush Party", "Conquer", "Death Speakers", "Elvish Archers", "Goblin Digging Team", "Goblin Hero", "Goblin War Drums", "Knight of Stromgald", "Sabretooth Tiger"]}, flavorAddExclamation : true },
			{ match : {name : "Blinking Spirit"}, replace : {flavor : "\"Don't look at it! Maybe it'll go away!\"\n—Ib Halfheart, goblin tactician"}},
			{ match : {name : "Boomerang"}, replace : {flavor : "\"O! call back yesterday, bid time return.\" —William Shakespeare, King Richard the Second"} },
			{ match : {name : "Craw Giant"}, replace : {flavor : "Harthag gave a jolly laugh as he surveyed the army before him. \"Ho ho ho! Midgets! You think you can stand in my way?\""} },
			{ match : {name : "Gaseous Form"}, replace : {flavor : "\". . . [A]nd gives to airy nothing\nA local habitation and a name.\"\n—William Shakespeare, A Midsummer-Night's Dream"} },
			{ match : {name : "Brassclaw Orcs"}, replace : {flavor : "\"Modern Sarpadia's swarming with thrulls. It's a testament to the orcs that they've survived there so long.\"\n—Elbieta, Argivian scholar"}},
			{ match : {name : "Giant Strength"}, replace : {flavor : "\"O! it is excellent / To have a giant's strength, but it is tyrannous / To use it like a giant.\"\n—William Shakespeare,\nMeasure for Measure"} },
			{ match : {name : "Ironroot Treefolk"}, replace : {flavor : "\"‘I'll show you how to handle the treefolk!' the giant bragged, and he strode off into the forest. Two days later he returned, his face masked in sap and a nest behind his ear. None dared ask who won.\"\n—Azeworai, \"The Treeling\""}},
			{ match : {name : "Lhurgoyf"}, replace : {flavor : "\"Ach! Hans, run! It's the lhurgoyf!\"\n—Saffi Eriksdotter, last words"}},
			{ match : {name : "Pearled Unicorn"}, replace : {flavor : "\"‘Do you know, I always thought Unicorns were fabulous monsters, too? I never saw one alive before!' ‘Well, now that we have seen each other,' said the Unicorn, ‘if you'll believe in me, I'll believe in you.'\"\n—Lewis Carroll, Through the Looking-Glass"}},
			{ match : {name : "Segovian Leviathan"}, replace : {flavor : "\"Leviathan, too! Can you catch him with a fish-hook or run a line round his tongue?\" —The Bible, Job 41:1"} },
			{ match : {name : "Time Elemental"}, replace : {artist : "Amy Weber"}},
			{ match : {name : "Aladdin's Ring"}, replace : {flavor : "\". . . [T]he magician drew a ring off his finger . . . , saying: 'It is a talisman against all evil, so long as you obey me.'\"\n—The Arabian Nights,\nJunior Classics trans."}},
			{ match : {name : "Updraft"}, replace : {flavor : "\"Come one, come all! this rock shall fly From its firm base as soon as I.\"\n—Sir Walter Scott, \"The Lady of the Lake\""}},
			{ match : {name : "Wall of Spears"}, replace : {flavor : "Even the most conservative generals revised their tactics after the Battle of Sarinth, during which a handful of peasant-pikemen held off a trio of rampaging craw wurms."}},
			{ match : {name : "Wall of Stone"}, replace : {flavor : "The ground itself lends its strength to these walls of living stone, which possess the stability of ancient mountains. These mighty bulwarks thwart ground-based troops, providing welcome relief for weary warriors who defend the land."}},
			{ match : {name : "Winter Blast"}, replace : {flavor : "\"Blow, winds, and crack your cheeks! rage! blow!\" —William Shakespeare, King Lear"} }
		],
		pPOD :
		[
			{ match : {name : "Feral Shadow"}, replace : {flavor : "Not all shadows are cast by light—some are cast by darkness."}},
			{ match : "*", replace : {releaseDate : "1997-05-01"}}
		],
		POR :
		[
			{ renumberImages : "Anaconda", order : [4287, 4288] },
			{ renumberImages : "Blaze", order : [4328, 4329] },
			{ renumberImages : "Forest", order : [4413, 4414, 4415, 4416] },
			{ renumberImages : "Island", order : [4421, 4422, 4423, 4424] },
			{ renumberImages : "Monstrous Growth", order : [4304, 4305] },
			{ renumberImages : "Mountain", order : [4417, 4419, 4418, 4420] },
			{ renumberImages : "Plains", order : [4425, 4426, 4427, 4428] },
			{ renumberImages : "Swamp", order : [4409, 4410, 4411, 4412] },
			{ match : {name : ["Border Guard"]}, flavorAddExclamation : true },
			{ match : {name : ["Dread Charge"]}, flavorAddDash : true },
			{ match : {name : "Armageddon"}, replace : {flavor : "\"‘O miserable of happy! Is this the end\nOf this new glorious world . . . ?'\"\n—John Milton, Paradise Lost"}},
			{ match : {name : "Hill Giant"}, replace : {flavor : "Hill giants are mostly just big. Of course, that does count for a lot!"}},
			{ match : {name : "Wind Drake"}, replace : {flavor : "\"No bird soars too high, if he soars with his own wings.\" —William Blake, The Marriage of Heaven and Hell"}}
		],
		VAN :
		[
			{ match : {name : ["Ashling the Pilgrim", "Enigma Sphinx", "Figure of Destiny", "Jaya Ballard", "Maelstrom Archangel", "Maralen of the Mornsong", "Master of the Wild Hunt", "Murderous Redcap", "Necropotence", "Orcish Squatters",
							   "Rith, the Awakener", "Stonehewer Giant"]}, replace : {flavor : ""}},
			{ match : {name : "Akroma, Angel of Wrath"}, replace : {artist : "Ron Spears", flavor : "No rest. No mercy. No matter what."}},
			{ match : {name : "Arcanis, the Omnipotent"}, replace : {artist : "Justin Sweet", flavor : "Do not concern yourself with my origin, my race, or my ancestry. Seek my record in the pits, and then make your wager."}},
			{ match : {name : "Arcbound Overseer"}, replace : {artist : "Carl Critchlow", flavor : ""}},
			{ match : {name : "Ashling, the Extinguisher"}, replace : {flavor : "The Aurora had transformed her into a relentless force of destruction."}},
			{ match : {multiverseid : 214824}, replace : {artist : "Marcelo Vignali", flavor : "Long ago, birds of paradise littered the skies. Thanks to the city's sprawl, most now exist as pets of society's elite."}},
			{ match : {multiverseid : 182291}, replace : {flavor : "Long ago, birds of paradise littered the skies. Thanks to the city's sprawl, most now exist as pets of society's elite."}},
			{ match : {name : "Bosh, Iron Golem"}, replace : {artist : "Brom", flavor : "As Glissa searches for the truth about Memnarch, Bosh searches to unearth the secrets buried deep in his memory."}},
			{ match : {name : "Braids, Conjurer Adept"}, replace : {artist : "Zoltan Boros & Gabor Szikszai", flavor : "The rifted multiverse became a sea of conflciting realities, each peopled by possible versions of every living being."}},
			{ match : {name : "Chronatog"}, replace : {artist : "Christopher Rush", flavor : "For the chronatog, there is no meal like the present."}},
			{ match : {name : "Dakkon Blackblade"}, replace : {life : 3, artist : "Richard Kane-Ferguson", flavor : "\"My power is as vast as the plains, my strength is that of mountains. Each wave that crashes upon the shore thunders like blood in my veins.\" — Memoirs"}},
			{ match : {name : "Dauntless Escort"}, replace : {flavor : "Elspeth's squires do not seek advancement. For them, no jknightly glory could surpass the glory of serving their champion."}},
			{ match : {name : "Diamond Faerie"}, replace : {artist : "Heather Hudson", flavor : "\"That such delicate creatures could become so powerful in the embrace of winter is yet more proof that I am right.\" — Heidar, Rimewind Master"}},
			{ match : {name : "Eight-and-a-Half-Tails"}, replace : {artist : "Daren Bader", flavor : "Virtue is an inner light that can prevail in every soul."}},
			{ match : {name : "Eladamri, Lord of Leaves"}, replace : {flavor : "\"We have been patient. We have planned our attack. We are ready... now.\" — Eladamri, Lord of Leaves"}},
			{ match : {name : "Elvish Champion"}, replace : {artist : "Mark Zug", flavor : "\"For what are leaves but countless blades to fight a countless foe on high\" — Elvish hymn"}},
			{ match : {multiverseid : 182259}, replace : {artist : "Greg Staples", flavor : "He provides a safe path to nowhere."}},
			{ match : {multiverseid : 210148}, replace : {flavor : "He provides a safe path to nowhere."}},
			{ match : {name : "Etched Oracle"}, replace : {artist : "Matt Cavotta", flavor : ""}},
			{ match : {name : "Fallen Angel"}, replace : {artist : "Mathew D. Wilson", flavor : "Why do you weep for the dead? I rejoice, for they have died for me."}},
			{ match : {name : "Flametongue Kavu"}, replace : {artist : "Pete Venters", flavor : "\"For dim-witted, thick-skulled genetic mutants, they have pretty good aim.\" — Sisay"}},
			{ match : {name : "Frenetic Efreet"}, replace : {artist : "Tom Gianni", flavor : ""}},
			{ match : {multiverseid : 182251}, replace : {artist : "Tim Hilderbrandt", flavor : "They poured from the Skirk Ridge like lava, burning and devouring everything in their path."}},
			{ match : {multiverseid : 210149}, replace : {flavor : "They poured from the Skirk Ridge like lava, burning and devouring everything in their path."}},
			{ match : {multiverseid : 182304}, replace : {artist : "Mark Zug", flavor : "It's drawn to the scent of screaming."}},
			{ match : {multiverseid : 210150}, replace : {flavor : "It's drawn to the scent of screaming."}},
			{ match : {name : "Haakon, Stromgald Scourge"}, replace : {artist : "Mark Zug", flavor : ""}},
			{ match : {name : "Heartwood Storyteller"}, replace : {hand : 0, life : 7, artist : "Anthony S. Waters", flavor : "His roots reach deep, nurtured not by soil and rain, but by millennia of experience."}},
			{ match : {name : "Hell's Caretaker"}, replace : {artist : "Greg Staples", flavor : "You might leave here, Chenndra, should another take your place..."}},
			{ match : {name : "Hermit Druid"}, replace : {flavor : "Seeking the company of plants ensures that your wits will go to seed."}},
			{ match : {name : "Higure, the Still Wind"}, replace : {artist : "Christopher Moeller", flavor : ""}},
			{ match : {name : "Ink-Eyes, Servant of Oni"}, replace : {artist : "Wayne Reynolds", flavor : ""}},
			{ match : {name : "Jhoira of the Ghitu"}, replace : {life : 3, artist : "Kev Walker", flavor : ""}},
			{ match : {name : "Karona, False God"}, replace : {artist : "Matthew D. Wilson", flavor : ""}},
			{ match : {name : "Kresh the Bloodbraided"}, replace : {flavor : "Each of his twenty-two braids is bound with bone and leather from a foe."}},
			{ match : {name : "Loxodon Hierarch"}, replace : {artist : "Kev Walker", flavor : "I have lived long, and I remember how this city once was. If my death serves to bring back the Ravnica in my memory, then so be it."}},
			{ match : {name : "Lyzolda, the Blood Witch"}, replace : {artist : "Jim Nelson", flavor : "Sacrificial rites take place before an audience of cheerign cultists, each begging to be the next on stage."}},
			{ match : {name : "Malfegor"}, replace : {flavor : "The blood of the demons quickened as their master rose over the battlefield. The blood of the angels also quickened: here was the chance to finally end the war started millennia ago."}},
			{ match : {name : "Maro"}, replace : {hand : 1, artist : "Stuart Griffin", flavor : "No two see the same Maro."}},
			{ match : {name : "Mayael the Anima"}, replace : {flavor : "The sacred Anima's eyes are blind to all but the grandest truths."}},
			{ match : {name : "Mirri the Cursed"}, replace : {hand : 0, life : -5, artist : "Kev Walker", flavor : "A hero fails, a martyr falls. Time twists and destinies interchange."}},
			{ match : {name : "Mirror Entity"}, replace : {flavor : "Unaware of Lorwyn's diversity, it sees only itself, refelected a thousand times over."}},
			{ match : {name : "Momir Vig, Simic Visionary"}, replace : {artist : "Zoltan Boras & Gabor Szikszai", flavor : ""}},
			{ match : {name : "Morinfen"}, replace : {flavor : "\"I looked into its eyes, and its soul was so empty I saw no reflection, no light there.\" — Crovax"}},
			{ match : {name : "Nekrataal"}, replace : {hand : -1, artist : "Adrian Smith", flavor : "\"I have seen the horrors Kaervek has freed. My betrayal is certain — but of Kaervek or of Jamuraa, I cannot say.\" — Jolrael"}},
			{ match : {name : "Oni of Wild Places"}, replace : {artist : "Mark Tedin", flavor : "The oni leapt easily from peak to peak, toying with its victims, its voice a purry frmo the rumbling depths of nightmare."}},
			{ match : {name : "Peacekeeper"}, replace : {flavor : "\"I have always imagined my mother as such a woman, strong and wise.\" — Sisay, journal"}},
			{ match : {name : "Phage the Untouchable"}, replace : {artist : "Ron Spears", flavor : ""}},
			{ match : {multiverseid : 214825}, replace : {artist : "Brom", flavor : "In its heart lies the secret of immortality."}},
			{ match : {multiverseid : 182292}, replace : {flavor : "In its heart lies the secret of immortality."}},
			{ match : {multiverseid : 182276}, replace : {artist : "Douglas Shuler", flavor : "Ocassionally, members of the Institute of Arcane Study acquire a taste for worldy pleasures. Seldom do they have trouble finding employment."}},
			{ match : {multiverseid : 210151}, replace : {artist : "Tony Szczudlo", flavor : "He wastes his amazing talents on proving how amazing he really is."}},
			{ match : {name : "Raksha Golden Cub"}, replace : {artist : "Pete Venters", flavor : "Some believe that Raksha, yougnest of the kha, is the reincarnation of Dakan, the first and mightiest of leonin leaders."}},
			{ match : {name : "Reaper King"}, replace : {flavor : "It's harvest time."}},
			{ match : {name : "Rumbling Slum"}, replace : {artist : "Carl Critchlow", flavor : "The Orzhov contract the Izzet to animate slum districts and banish them to the wastes. The Gruul adopt them and send them back to the city for vengeance."}},
			{ match : {name : "Sakashima the Impostor"}, replace : {artist : "rk post", flavor : ""}},
			{ match : {multiverseid : 182282}, replace : {artist : "Greg Staples", flavor : "Her sword sings more beautifully than any choir."}},
			{ match : {multiverseid : 205492}, replace : {flavor : "Her sword sings more beautifully than any choir."}},
			{ match : {name : "Seshiro the Anointed"}, replace : {artist : "Daren Bader", flavor : "His family was the first to reach out to the human monks. He soon knew as many koans as he did blade strikes."}},
			{ match : {name : "Sisters of Stone Death"}, replace : {artist : "Donato Giancola", flavor : ""}},
			{ match : {name : "Sliver Queen"}, replace : {flavor : "Her children are ever part of her."}},
			{ match : {name : "Squee, Goblin Nabob"}, replace : {artist : "Greg Staples", flavor : "\"Some goblins are expendable. Some are impossible to get rid of. But he's both — at the same time!\" — Starke"}},
			{ match : {name : "Stalking Tiger"}, replace : {artist : "Terese Nielsen", flavor : "Int he Jamuraan jungles, there is often no serpating beauty from danger."}},
			{ match : {name : "Stuffy Doll"}, replace : {artist : "Dave Allsop", flavor : ""}},
			{ match : {name : "Tawnos"}, replace : {artist : "Donato Giancola"}},
			{ match : {name : "Teysa, Orzhov Scion"}, replace : {artist : "Todd Lockwood", flavor : ""}},
			{ match : {name : "Tradewind Rider"}, replace : {flavor : "It is said the wind will blow the world past if you wait long enough."}},
			{ match : {name : "Two-Headed Giant of Foriys"}, replace : {artist : "Anson Maddocks", flavor : "None know if this Giant is the result of abberant magics, Siamese twins, or a mentalist's schizophrenia."}},
			{ match : {name : "Vampire Nocturnus"}, replace : {flavor : "\"Your life with set with the sun.\""}},
			{ match : {name : "Viridian Zealot"}, replace : {artist : "Kev Walker", flavor : "\"I will fight only the way nature intended-and nature intended us to win.\""}}
		],
		WTH :
		[
			{ match : {name : ["Benalish Missionary", "Fervor", "Null Rod"]}, flavorAddExclamation : true },
			{ match : {name : "Boiling Blood"}, replace : {flavor : "Your father has no horns!\nYour mother wears a bell\nYou drink the milk of goats!\n—Talruum taunts"}},
			{ match : {name : "Firestorm"}, replace : {flavor : "\"Glok loved storms! He'd sit an' watch an' laugh through the whole thing. I miss him.\"\n—Squee, goblin cabin hand"}},
			{ match : {name : "Inner Sanctum"}, replace : {flavor : "\"Save me from Maraxus,\" Starke pleaded, \"or condemn me to his wrath. Either way, do not ignore me!\""}},
			{ match : {name : "Mwonvuli Ooze"}, replace : {flavor : "\"Ewww!\""}},
			{ match : {name : "Vodalian Illusionist"}, replace : {flavor : "\"Torahn gore these shifty fishtails! You can't even get close to one.\"\n—Tahngarth of the Weatherlight"}},
			{ match : {name : "Phantom Wings"}, replace : {flavor : "\"But you said ‘when goats fly!'\" Squee whined."}},
			{ match : {name : ["Abeyance", "Aboroth", "Ancestral Knowledge", "Avizoa", "Bone Dancer", "Bosium Strip", "Bubble Matrix", "Debt of Loyalty", "Dwarven Thaumaturgist", "Ertai's Familiar", "Firestorm", "Fungus Elemental", "Gallowbraid",
							   "Goblin Bomb", "Heart of Bogardan", "Heat Stroke", "Infernal Tribute", "Inner Sanctum", "Liege of the Hollows", "Lotus Vale", "Mana Web", "Maraxus of Keld", "Morinfen", "Mwonvuli Ooze", "Null Rod", "Paradigm Shift",
							   "Peacekeeper", "Pendrell Mists", "Psychic Vortex", "Scorched Ruins", "Thran Tome", "Tolarian Entrancer", "Tolarian Serpent", "Urborg Justice", "Urborg Stalker", "Wave of Terror", "Well of Knowledge",
							   "Winding Canyons", "Xanthic Statue"]}, replace : {reserved : true}}
		],
		pPRE :
		[
			{ match : {name : "Archdemon of Greed"}, replace : {layout : "double-faced", names : ["Ravenous Demon", "Archdemon of Greed"]}},
			{ match : {name : "Ravenous Demon"}, replace : {layout : "double-faced", names : ["Ravenous Demon", "Archdemon of Greed"]}},
			{ match : {name : "Demigod of Revenge"}, replace : {flavor : "\"His laugh, a bellowing, deathly din, slices through the heavens, making them bleed.\"\n—The Seer's Parables"}},
			{ match : {name : "Howlpack Alpha"}, remove : ["flavor"], replace : {layout : "double-faced", names : ["Mayor of Avabruck", "Howlpack Alpha"]}},
			{ match : {name : "Howlpack Alpha"}, replace : {layout : "double-faced", names : ["Mayor of Avabruck", "Howlpack Alpha"]}},
			{ match : {name : "Overbeing of Myth"}, replace : {flavor : "\"She walks among us unseen, learning from our imperfections.\"\n—The Seer's Parables"}},
			{ match : {name : "Wren's Run Packmaster"}, replace : {releaseDate : "2007-09-29"}},
		],
		TMP :
		[
			{ renumberImages : "Plains", order : [4953, 4954, 4955, 4956] },
			{ match : {name : ["Bayou Dragonfly", "Lowland Giant", "Mindwhip Sliver", "Repentance", "Shatter", "Staunch Defenders", "Sudden Impact", "Tahngarth's Rage", "Time Warp"]}, flavorAddExclamation : true },
			{ match : {name : "Deadshot"}, replace : {flavor : "\"Carrion! Keep your distance. My blade will come to you!\"\n—Crovax"}},
			{ match : {name : "Dregs of Sorrow"}, replace : {flavor : "Crovax gazed upon the dead, and for one dark moment he saw a banquet."}},
			{ match : {name : "Gerrard's Battle Cry"}, replace : {flavor : "Gerrard grinned and drew his sword. \"This won't be a fair fight,\" he called to his crew. \"They should have brought a second ship!\""}},
			{ match : {name : "Mogg Conscripts"}, replace : {flavor : "\"Torahn's horns! They've seen us. Now, statue, you must fight to save yourself!\"\n—Tahngarth, aboard the Predator"}},
			{ match : {name : "Mogg Fanatic"}, replace : {flavor : "\"I got it! I got it! I—\""}},
			{ match : {name : "Pincher Beetles"}, replace : {flavor : "\"No fair! Since when does a bug get ta munch on me?\"\n—Squee, goblin cabin hand"}},
			{ match : {name : "Rootwater Shaman"}, replace : {flavor : "\"Ugh! When did orcs and fish start having kids?\"\n—Gerrard of the Weatherlight"}},
			{ match : {name : "Staunch Defenders"}, replace : {flavor : "\"Hold your position! Leave doubt for the dying!\"\n—Tahngarth of the Weatherlight"}},
			{ match : {name : "Talon Sliver"}, replace : {flavor : "\"Keep them at sword's length!\" Gerrard's order fell flat as each sliver's talon suddenly grew longer. \"Hold on—break out the polearms!\""}},
			{ match : {name : ["Aluren", "Apocalypse", "Avenging Angel", "Commander Greven il-Vec", "Corpse Dance", "Cursed Scroll", "Earthcraft", "Eladamri, Lord of Leaves", "Escaped Shapeshifter", "Humility", "Intuition", "Meditate", "Orim, Samite Healer",
							   "Recycle", "Sarcomancy", "Selenia, Dark Angel"]}, replace : {reserved : true}}
		],
		STH :
		[
			{ match : {name : ["Awakening", "Heat of Battle", "Primal Rage", "Torment"]}, flavorAddExclamation : true },
			{ match : {name : "Invasion Plans"}, replace : {flavor : "Gerrard studied the globe as Mirri kept watch. Suddenly, his eyes widened. \"This is Dominaria!\""}},
			{ match : {name : "Stronghold Assassin"}, replace : {flavor : "The assassin sees only throats and hears only heartbeats."}},
			{ match : {name : ["Crovax the Cursed", "Dream Halls", "Mox Diamond", "Silver Wyvern", "Sliver Queen", "Volrath's Shapeshifter", "Volrath's Stronghold"]}, replace : {reserved : true}}
		],
		PO2 :
		[
			{ renumberImages : "Forest", order : [8409, 8410, 8408] },
			{ renumberImages : "Island", order : [8387, 8390, 8391] },
			{ renumberImages : "Mountain", order : [8395, 8406, 8407] },
			{ renumberImages : "Plains", order : [8380, 8374, 8354] },
			{ renumberImages : "Swamp", order : [8394, 8392, 8393] },
			{ match : {name : ["Goblin War Cry", "Norwood Riders", "Plated Wurm", "Town Sentry"]}, flavorAddExclamation : true },
			{ match : {name : "Alaborn Cavalier"}, replace : {flavor : "\"Course he ran! I wouldn't want to stare down that barrel, either!\"\n—Alaborn soldier"}},
			{ match : {name : "Blaze"}, replace : {flavor : "\"This isn't what I meant by ‘facing the heat of battle!'\"\n—Jefan, Talas ship captain"}},
			{ match : {name : "Steam Catapult"}, replace : {flavor : "\"You idiots! Turn it around! Turn it around!\""}},
			{ match : {name : "Stone Rain"}, replace : {flavor : "There goes the neighborhood!"}}
		],
		pJGP :
		[
			{ match : {name : "Burning Wish"}, remove : ["flavor"] },
			{ match : {name : "Pernicious Deed"}, replace : {flavor : "\"The tyrannous and bloody deed is done, The most arch deed of piteous massacre That ever yet this land was guilty of.\"\n—William Shakespeare, Richard III"}}
		],
		EXO :
		[
			{ match : {name : ["Erratic Portal", "Pandemonium"]}, flavorAddExclamation : true },
			{ match : {name : ["Erratic Portal"]}, flavorAddExclamation : true },	// a second time
			{ match : {name : ["City of Traitors", "Dominating Licid", "Ertai, Wizard Adept", "Exalted Dragon", "Hatred", "Mind Over Matter", "Oath of Ghouls", "Recurring Nightmare", "Survival of the Fittest"]}, replace : {reserved : true}}
		],
		UGL :
		[
			{ match : {name : "B.F.M. (Big Furry Monster)", number : "28b"}, replace : {imageName : "b.f.m. 1", number : "28"}},
			{ match : {name : "B.F.M. (Big Furry Monster)", number : "29b"}, replace : {imageName : "b.f.m. 2", number : "29"}},
			{ match : {name : "The Ultimate Nightmare of Wizards of the Coast® Customer Service"}, replace : {imageName : "the ultimate nightmare of wizards of the coastr customer service", manaCost : "{X}{Y}{Z}{R}{R}"}},
			{ match : {name : ["Forest", "Island", "Mountain", "Plains", "Swamp"]}, replace : {border : "black"}},
			{ match : {name : "Censorship"}, replace : {artist : "Kaja Foglio"}},
			{ match : {name : ["Clam-I-Am", "Fowl Play", "Jester's Sombrero", "Krazy Kow", "Prismatic Wardrobe", "Temp of the Damned"]}, flavorAddExclamation : true },
			{ match : {name : "Flock of Rabid Sheep"}, replace : {flavor : "And their bleating was like a wet salmon slapped upon the land—slap! slap! slap!"}},
			{ match : {name : "Get a Life"}, replace : {flavor : "Gimme five! (Or whatever you got.)"}},
			{ match : {name : "Giant Fan"}, replace : {flavor : "Only a villain would unleash a giant fan on anyone!"}},
			{ match : {name : "Goblin Bookie"}, replace : {flavor : "\"Glok loved bets! He'd sit in the bar all night an' laugh an' laugh. Hey—he still owes me.\"\n—Squee, goblin casino hand"}},
			{ match : {name : "Gus"}, replace : {flavor : "\"Now I lay me down to sleep — What are you starin' at?\""}},
			{ match : {name : "Handcuffs"}, replace : {flavor : "\"That was fun! Now me.\"\n—Gwendlyn Di Corci"}},
			{ match : {name : "Mesa Chicken"}, replace : {flavor : "\"Lo! lord of layers proudly comb-crested\nHero to hens father to feathers\nCrowing sun-caller weaver of wattle\nElder to eggs.\"\n—Rooster Saga"}}
		],
		pALP :
		[
			{ match : "*", replace : {releaseDate : "1998"}}
		],
		USG :
		[
			{ match : {name : ["Bull Hippo", "Curfew", "Goblin Cadets", "Goblin Spelunkers"]}, flavorAddExclamation : true },
			{ match : {name : "Argothian Swine"}, replace : {flavor : "In Argoth, the shortest path between two points is the one the swine make."}},
			{ match : {name : "Headlong Rush"}, replace : {flavor : "A landslide of goblins poured toward the defenders—tumbling, rolling, and bouncing their way down the steep hillside."}},
			{ match : {name : "Pegasus Charger"}, replace : {flavor : "\"The clouds came alive and dove to the earth! Hooves flashed among the dark army, who fled before the spectacle of fury.\"\n—Song of All, canto 211"}},
			{ match : {name : "Bulwark"}, replace : {flavor : "\"It will be the goblin's first bath, and its last.\" —Fire Eye, viashino bey"}},
			{ match : {name : "Priest of Titania"}, replace : {flavor : "Titania rewards all those who honor the forest by making them a living part of it."}},
			{ match : {name : "Phyrexian Colossus"}, replace : {number : "305"}},
			{ match : {name : "Sanguine Guard"}, replace : {flavor : "\"Father of Machines! Your filigree gaze carves us, and the scars dance upon our grateful flesh.\"\n—Phyrexian Scriptures"}},
			{ match : {name : ["Argothian Wurm", "Barrin, Master Wizard", "Citanul Centaurs", "Gaea's Cradle", "Gilded Drake", "Great Whale", "Herald of Serra", "Karn, Silver Golem", "Lifeline", "Lightning Dragon", "Morphling", "Opal Archangel",
							   "Serra's Sanctum", "Tolarian Academy", "Temporal Aperture", "Time Spiral", "Yawgmoth's Will", "Zephid"]}, replace : {reserved : true}},
			{ match : {name : "Serra Zealot"}, fixFlavorNewlines : true}
		],
		ATH :
		[
			{ match : {name : "Aesthir Glider"}, replace : {originalText : "Flying\nAesthir Glider cannot block."}},
			{ match : {name : "Armored Pegasus"}, replace : {originalType : "Creature — Pegasus"}},
			{ match : {name : "Benalish Knight"}, replace : {originalText : "First strike\nYou may play Benalish Knight any time you could play an instant."}},
			{ match : {name : "Brushland"}, replace : {artist : "Bryon Wackwitz"}},
			{ match : {name : "Combat Medic"}, replace : {artist : "Liz Danforth", originalText : "{1}{W}: Prevent 1 damage to a creature or player."}},
			{ match : {name : "Cuombajj Witches"}, replace : {originalText : "{T}: Cuombajj Witches deals 1 damage to target creature or player of your choice and 1 damage to target creature or player of an opponent's choice. (Choose your target first.)"}},
			{ match : {name : "Erhnam Djinn"}, replace : {originalText : "During your upkeep, target non-Wall creature an opponent controls gains forestwalk until your next turn. (If defending player controls a forest, that creature is unblockable.)"}},
			{ match : {name : "Feast of the Unicorn"}, replace : {originalText : "Target creature gets +4/+0."}},
			{ match : {name : "Fireball"}, replace : {originalText : "At the time you play Fireball, pay an additional {1} for each target beyond the first.\nFireball deals X damage divided evenly, rounded down, among any number of target creatures and/or players."}},
			{ match : {name : "Giant Growth"}, replace : {artist : "Sandra Everingham"}},
			{ match : {name : "Giant Spider"}, replace : {originalText : "Giant Spider can block creatures with flying."}},
			{ match : {name : "Goblin Balloon Brigade"}, replace : {originalText : "{R}: Goblin Balloon Brigade gains flying until end of turn."}},
			{ match : {name : "Goblin Digging Team"}, replace : {originalType : "Summon — Goblins"}},
			{ match : {name : "Goblin Grenade"}, replace : {originalText : "At the time you play Goblin Grenade, sacrifice a Goblin.\nGoblin Grenade deals 5 damage to target creature or player.", artist : "Ron Spencer"}},
			{ match : {name : "Goblin Hero"}, replace : {originalType : "Summon — Goblin"}},
			{ match : {name : "Goblin King"}, replace : {originalType : "Summon — Lord", originalText : "All goblins get +1/+1 and gain mountainwalk. (If defending player controls a mountain, those creatures are unblockable.)", artist : "Jesper Myrfors"}},
			{ match : {name : "Goblin Matron"}, replace : {originalText : "When Goblin Matron comes into play, you may search your library for a Goblin card. If you do, reveal that card, put it into your hand, and shuffle your library afterward."}},
			{ match : {name : "Goblin Mutant"}, replace : {originalText : "Trample\nGoblin Mutant cannot attack if defending player controls an untapped creature with power 3 or more.\nGoblin Mutant cannot block a creature with power 3 or more."}, remove : ["flavor"]},
			{ match : {name : "Goblin Recruiter"}, replace : {originalText : "When Goblin Recruiter comes into play, search your library for any number of Goblin cards and reveal them to all players. Shuffle your library, then put the revealed cards on top of it in any order.", originalType : "Summon — Goblin"}},
			{ match : {name : "Goblin Snowman"}, replace : {originalText : "When Goblin Snowman blocks, it does not deal or receive combat damage that turn.\n{T}: Goblin Snowman deals 1 damage to target creature it is blocking."}},
			{ match : {name : "Goblin Tinkerer"}, replace : {originalText : "{R}, {T}: Destroy target artifact. That artifact deals damage equal to its total casting cost to Goblin Tinkerer."}},
			{ match : {name : "Goblin Warrens"}, replace : {originalText : "{2}{R}, Sacrifice two Goblins: Put three Goblin tokens into play. Treat these tokens as 1/1 red creatures."}},
			{ match : {name : "Hymn to Tourach"}, replace : {originalText : "Target player discards two cards at random from his or her hand. (If that player has only one card, he or she discards it.)"}, remove : ["flavor"]},
			{ match : {name : "Hypnotic Specter"}, replace : {originalText : "Flying\nWhenever Hypnotic Specter successfully deals damage to an opponent, that player discards a card at random from his or her hand."}, remove : ["flavor"]},
			{ match : {name : "Icatian Javelineers"}, replace : {originalText : "When Icatian Javelineers comes into play, put a javelin counter on it.\n{T}, Remove a javelin counter from Icatian Javelineers: Icatian Javelineers deals 1 damage to target creature or player."}},
			{ match : {name : "Infantry Veteran"}, replace : {originalType : "Summon — Soldier"}},
			{ match : {name : "Jalum Tome"}, replace : {originalText : "{2}, {T}: Draw a card, then choose and discard a card."}},
			{ match : {name : "Knight of Stromgald"}, replace : {originalText : "Protection from white\n{B}: Knight of Stromgald gains first strike until end of turn.\n{B}{B}: Knight of Stromgald gets +1/+0 until end of turn."}, remove : ["flavor"]},
			{ match : {name : "Llanowar Elves"}, replace : {originalText : "{T}: Add {G} to your mana pool. Play this ability as a mana source."}},
			{ match : {name : "Mogg Flunkies"}, replace : {originalText : "Mogg Flunkies cannot attack or block unless another creature you control attacks or blocks the same turn."}},
			{ match : {name : "Order of the White Shield"}, replace : {originalText : "Protection from black\n{W}: Order of the White Shield gains first strike until end of turn.\n{W}{W}: Order of the White Shield gets +1/+0 until end of turn."}},
			{ match : {name : "Pacifism"}, replace : {originalText : "Enchanted creature cannot attack or block."}},
			{ match : {name : "Pyrokinesis"}, replace : {originalText : "You may remove a red card in your hand from the game instead of paying Pyrokinesis's casting cost.\nPyrokinesis deals 4 damage divided any way you choose among any number of target creatures."}, remove : ["flavor"]},
			{ match : {name : "Pyrotechnics" }, replace : {flavor : "\"Hi! ni! ya! Behold the man of flint, that's me! / Four lightnings zigzag from me, strike and return.\"\n—Navajo war chant"}},
			{ match : {name : "Raging Goblin"}, replace : {originalText : "Raging Goblin is unaffected by summoning sickness.", flavor : "Charging alone takes uncommong daring or uncommon stupidity. Or both.", artist : "Brian Snōddy"}},
			{ match : {name : "Samite Healer"}, replace : {originalType : "Summon — Cleric", originalText : "{T}: Prevent 1 damage to a creature or player."}},
			{ match : {name : "Scavenger Folk"}, replace : {originalText : "{G}, {T}, Sacrifice Scavenger Folk: Destroy target artifact."}},
			{ match : {name : "Serrated Arrows"}, replace : {originalText : "Serrated Arrows comes into play with three arrowhead counters on it.\nWhen there are no arrowhead counters on Serrated Arrows, destroy it.\n{T}, Remove an arrowhead counter from Serrated Arrows: Put a -1/-1 counter on target creature."}},
			{ match : {name : "Spectral Bears"}, replace : {originalText : "When Spectral Bears attacks, if defending player controls no black cards, Spectral Bears does not untap during your next untap phase."}},
			{ match : {name : "Strip Mine"}, replace : {originalText : "{T}: Add one colors mana to your mana pool.\n{T}, Sacrifice Strip Mine: Destroy target land."}},
			{ match : {name : "Swords to Plowshares"}, replace : {originalText : "Remove target creature from the game. That creature's controller gains life equal to its power."}},
			{ match : {name : "Terror"}, replace : {originalText : "Destroy target nonartifact, nonblack creature. That creature cannot be regenerated this turn."}},
			{ match : {name : "Unholy Strength"}, replace : {originalText : "Enchanted creature gets +2/+1."}},
			{ match : {name : "Uthden Troll"}, replace : {originalText : "{R}: Regenerate Uthden Troll."}},
			{ match : {name : "Volcanic Dragon"}, replace : {originalText : "Flying\nVolcanic Dragon is unaffected by summoning sickness."}},
			{ match : {name : "Woolly Spider"}, replace : {originalText : "Wooly Spider can block creatures with flying.\nWhen Woolly Spider blocks a creature with flying, Woolly Spider gets +0/+2 until end of turn."}}
		],
		ULG :
		[
			{ match : {name : ["Knighthood", "Lava Axe"]}, flavorAddExclamation : true },
			{ match : {name : "Goblin Welder"}, replace : {flavor : "\"I wrecked your metal guy, boss. But look! I made you an ashtray.\""}},
			{ match : {name : "Purify"}, replace : {flavor : "\"Our Mother! The sky was Her hair; the sun, Her face. She danced on the grass and in the hills.\"\n—Song of All, canto 23"}},
			{ match : {name : "Quicksilver Amulet"}, replace : {flavor : "\"Wonderful! You got a lion on your first try. Now put it back.\""}},
			{ match : {name : "Molten Hydra"}, replace : {flavor : "Keep off the glass. —Hydra warning sign"}},
			{ match : {name : ["Deranged Hermit", "Grim Monolith", "Memory Jar", "Multani, Maro-Sorcerer", "Palinchron", "Radiant, Archangel", "Ring of Gix", "Second Chance", "Weatherseed Treefolk"]}, replace : {reserved : true}}
		],
		"6ED" :
		[
			{ match : {name : "Pyrotechnics" }, replace : {flavor : "\"Hi!ni!ya! Behold the man of flint, that's me! / Four lightnings zigzag from me, strike and return.\"\n—Navajo war chant"}},
			{ match : {name : ["Conquer", "Fervor", "Goblin Digging Team", "Goblin Hero", "Goblin Recruiter", "Infernal Contract", "Sabretooth Tiger"]}, flavorAddExclamation : true },
			{ match : {name : ["Fallen Angel", "Goblin Warrens", "Inferno"]}, flavorAddDash : true },
			{ match : {name : "Anaba Shaman"}, replace : {flavor : "\"The shamans? Ha! They are craven cows not capable of true magic.\"\n—Irini Sengir"}},
			{ match : {name : "Daraja Griffin"}, replace : {flavor : "\"And the flamingos said, ‘Get out of our nest—we can't be seen with the likes of you!' So, the griffin ate them.\"\n—Azeworai, \"The Ugly Bird\""}},
			{ match : {name : "Aladdin's Ring"}, replace : {flavor : "\". . . The magician drew a ring off his finger . . . , saying: 'It is a talisman against all evil, so long as you obey me.'\"\n—The Arabian Nights,\nJunior Classics trans."}},
			{ match : {name : "Elvish Archers"}, replace : {flavor : "\"I tell you, there was so many arrows flying about you couldn't hardly see the sun. So I says to young Angus, ‘Well, at least now we're fighting in the shade!'\""}},
			{ match : {name : "Giant Strength"}, replace : {flavor : "\"O! it is excellent / To have a giant's strength, but it is tyrannous / To use it like a giant.\"\n—William Shakespeare,\nMeasure for Measure"}},
			{ match : {name : "Polymorph"}, replace : {flavor : "\"Ahh! Opposable digits!\""}},
			{ match : {name : "Heavy Ballista"}, replace : {flavor : "\"Archers, ballistae—you can't even get near the island of Avenant.\"\n—Gerrard of the Weatherlight"}},
		 	{ match : {name : "Early Harvest"}, replace : {flavor : "\"Tonight we'll eat a farewell feast. Cold corn porridge is not enough. / Let's peel papayas, pineapples, and mangoes, drink coconut milk, / and bake bananas.\"\n—\"Love Song of Night and Day\""}},
			{ match : {name : "Segovian Leviathan"}, replace : {flavor : "\"Leviathan, too! Can you catch him with a fish-hook or run a line round his tongue?\"\n—The Bible, Job 41:1"}},
			{ match : {name : "Staunch Defenders"}, replace : {flavor : "\"Hold your position! Leave doubt for the dying!\"\n—Tahngarth of the Weatherlight"}}
		],
		PTK :
		[
			{ match : {name : ["Ravages of War"]}, flavorAddDash : true },
			{ match : {name : "Brilliant Plan"}, replace : {flavor : "At Red Cliffs, Kongming and Zhou Yu each wrote his plan for defeating the Wei on the palm of his hand. They laughed as they both revealed the same word, \"Fire.\""}},
			{ match : {name : "Imperial Edict"}, replace : {flavor : "Frustrated with Cao Cao's control of the imperial court, Emporer Xian secretly issued an edict condemning him, using his own blood as ink."}},
			{ match : {name : "Lady Zhurong, Warrior Queen"}, replace : {flavor : "\"A man, and such a fool! I, a woman, will fight them for you.\"\n—Lady Zhurong to her husband Meng Huo, before leading an army against the Shu"}},
			{ match : {name : "Meng Huo's Horde"}, replace : {artist : "Li Tie"}},
			{ match : {name : "Trip Wire"}, replace : {number : "156"}},
			{ match : {name : "Trained Cheetah"}, replace : {number : "154"}},
			{ match : {name : "Shu Defender"}, replace : {flavor : "Confronting Cao Cao's army at Steepslope Bridge, Zhang Fei bellowed, \"I am Zhang Fei of Yan! Who dares fight me to the death?\" Cao Cao's army cowered and fled."}},
			{ match : {name : "Shu Foot Soldiers"}, replace : {flavor : "Liu Bei lost many men at the battle of Runan because of his lack of strategy. It wasn't until he met Kongming that he began to truly succeed as a leader."}},
			{ match : {name : "Xun Yu, Wei Advisor"}, replace : {flavor : "\"A splendid talent, admired of all men! His folly lay in serving Cao Cao's power.\""}},
			{ match : {name : "Zhao Zilong, Tiger General"}, replace : {flavor : "Zhao Zilong was a brave and noble warrior. Twice he rescued Liu Bei's son, Liu Shan."}}
		],
		UDS :
		[
			{ match : {name : ["Urza's Incubator"]}, flavorAddExclamation : true },
			{ match : {name : ["Academy Rector", "Carnival of Souls", "Covetous Dragon", "Donate", "Masticore", "Metalworker", "Opalescence", "Phyrexian Negator", "Powder Keg", "Rofellos, Llanowar Emissary", "Replenish", "Treachery",
							   "Yavimaya Hollow", "Yawgmoth's Bargain"]}, replace : {reserved : true}}
		],
		S99 :
		[
			{ match : {imageName : "forest1"}, replace : {number : "170", artist : "Quinton Hoover"} },
			{ match : {imageName : "forest2"}, replace : {number : "171", artist : "Quinton Hoover"} },
			{ match : {imageName : "forest3"}, replace : {number : "172", artist : "John Avon"} },
			{ match : {imageName : "forest4"}, replace : {number : "173", artist : "John Avon"} },
			{ match : {imageName : "mountain1"}, replace : {number : "166"} },
			{ match : {imageName : "mountain2"}, replace : {number : "167", artist : "John Avon"} },
			{ match : {imageName : "mountain3"}, replace : {number : "168"} },
			{ match : {imageName : "mountain4"}, replace : {number : "169", artist : "Brian Durfee"} },
			{ match : {imageName : "plains1"}, replace : {number : "154"} },
			{ match : {imageName : "plains2"}, replace : {number : "155", artist : "Tom Wänerstrand"} },
			{ match : {imageName : "plains3"}, replace : {number : "156"} },
			{ match : {imageName : "plains4"}, replace : {number : "157", artist : "Fred Fields"} },
			{ match : {imageName : "swamp1"}, replace : {number : "162", artist : "Romas"} },
			{ match : {imageName : "swamp2"}, replace : {number : "163", artist : "Dan Frazier"} },
			{ match : {imageName : "swamp3"}, replace : {number : "164", artist : "Douglas Shuler"} },
			{ match : {imageName : "swamp4"}, replace : {number : "165", artist : "Romas"} },
			{ match : {name : ["Border Guard", "Dakmor Ghoul", "Time Warp"]}, flavorAddExclamation : true },
			{ match : {name : ["Durkwood Boars", "Wind Drake"]}, flavorAddDash : true },
			{ match : {name : "Feral Shadow"}, replace : {artist : "Cliff Nielsen"}},
			{ match : {name : ["Mons's Goblin Raiders", "Goblin Hero"]}, replace : {rarity : "Common"}}
		],
		pWOR :
		[
			{ match : {name : "Balduvian Horde"}, remove : ["flavor"]}
		],
		MMQ :
		[
			{ match : {name : "Squee, Goblin Nabob"}, replace : {flavor : "\"General?!\" Tahngarth roared. \"General nuisance, maybe.\""}}
		],
		BRB :
		[
			{ renumberImages : "Forest", order : [21119, 22347, 22351, 22349, 22348, 22352, 22355, 22353, 22354] },
			{ renumberImages : "Island", order : [21144, 22364, 22366, 22367, 22365] },
			{ renumberImages : "Mountain", order : [22344, 22335, 22336, 22339, 22342, 22334, 22343, 21118, 22340] },
			{ renumberImages : "Plains", order : [22357, 22356, 21145, 22362, 22361, 22363, 22360, 22358, 22359] },
			{ renumberImages : "Swamp", order : [21171, 22370, 22369, 22368] },
			{ match : {multiverseid : 22339}, replace : {artist : "Rob Alexander"} },
			{ match : {name : "Blinking Spirit"}, replace : {flavor : "\"Don't look at it! Maybe it'll go away!\"\n—Ib Halfheart, goblin tactician"}},
			{ match : {name : "Curfew"}, replace : {flavor : "\". . . But I'm not tired!\""}},
			{ match : {name : "Pincher Beetles"}, replace : {flavor : "\"No fair! Since when does a bug get ta munch on me?\"\n—Squee, goblin cabin hand"}},
			{ match : {name : "Lhurgoyf"}, replace : {flavor : "\"Ach! Hans, run! It's the Lhurgoyf!\"\n—Saffi Eriksdotter, last words"}},
		],
		pSUS :
		[
			{ match : {name : "City of Brass"}, replace : {flavor : "\"Enter this palace-gate and ask the news Of greatness fallen into dust and clay.\"\n—The Arabian Nights, trans. Burton"}},
			{ match : {name : "Elvish Champion"}, replace : {flavor : "\"We've endured your slights to Gaea with the grace of tolerance. Now behold the grace of our ferocity.\""}},
			{ match : {name : "Whirling Dervish"}, replace : {flavor : "Amid this whirling hurricane of blades, there is no calm eye in which the hapless can find shelter."}}
		],
		pFNM :
		[
			{ match : {name : "Crystalline Sliver"}, replace : {releaseDate:"2008-06", source : "Summer Series Grand Prix events participation bonus. Creating a Magic Online account or filling out a survey on site at PAX East."}},
			{ match : {name : "Engineered Plague"}, replace : {flavor : "\"The admixture of bitterwort in the viral brew has produced most favorable results.\"\n—Phyrexian progress notes"}},
			{ match : {name : ["Fact or Fiction", "Force Spike"]}, remove : ["flavor"]},
			{ match : {name : "Ophidian"}, replace : {flavor : "\"I will ... tell thee more than thou hast wit to ask.\"\n—Christopher Marlowe, Doctor Faustus"}},
			{ match : {name : "Wing Shards"}, replace : {releaseDate:"2007-09-01", source : "Friday Night Magic prize"}}
		],
		NMS :
		[
			{ match : {name : "Wild Mammoth"}, replace : {flavor : "\"Sit. Heel! Down! HELP!\""}},
			{ match : {name : "Rhox"}, replace : {originalText : "You may have Rhox deal combat damage to defending player as though it weren't blocked.\n{2}{G}: Regenerate Rhox."}}
		],
		S00 :
		[
			{ importCard : {name : "Rhox", set : "10E"}},
			{ match : {name : "Rhox"}, replace : 
				{
					number : "112a",
					text : "You may have Rhox assign its combat damage as though it weren't blocked.\n{2}{G}: Regenerate Rhox. (The next time this creature would be destroyed this turn, it isn't. Instead tap it, remove all damage from it, and remove it from combat.)",
					originalText : "You may have Rhox deal combat damage to defending player as though it weren't blocked.\n{2}{G}: Regenerate Rhox."
				},
				remove : ["multiverseid", "flavor", "number"]
			},	
		],
		PCY :
		[
			{ match : {name : ["Quicksilver Wall"]}, flavorAddExclamation : true },
			{ match : {name : "Reveille Squad"}, replace : {flavor : "\"To arms! To arms! The Lion roars!\""}},
			{ match : {name : "Withdraw"}, replace : {flavor : "\"We outnumber them! Charge! Charge! Hey, where'd you guys go? Retreat! Retreat!\""}}
		],
		BTD :
		[
			{ renumberImages : "Forest", order : [27242, 27243, 27244] },
			{ renumberImages : "Island", order : [27236, 27237, 27238] },
			{ renumberImages : "Mountain", order : [27239, 27240, 27241] },
			{ renumberImages : "Swamp", order : [27233, 27234, 27235] },
			{ match : {name : ["Lava Axe", "Lowland Giant"]}, flavorAddExclamation : true },
			{ match : {name : ["Fallen Angel"]}, flavorAddDash : true }
		],
		INV :
		[
			{ match : {name : "Assault"}, replace : {originalText : "Assault deals 2 damage to target creature or player."}},
			{ match : {name : "Spite"}, replace : {originalText : "Counter target noncreature spell."}},
			{ match : {name : "Pain"}, replace : {originalText : "Target player discards a card from his or her hand."}},
			{ match : {name : "Stand"}, replace : {originalText : "Prevent the next 2 damage that would be dealt to target creature this turn."}},
			{ match : {name : "Wax"}, replace : {originalText : "Target creature gets +2/+2 until end of turn."}}
		],
		PLS :
		[
			{ renumberImages : "Ertai, the Corrupted", order : [25614, 29292] },
			{ renumberImages : "Skyship Weatherlight", order : [26480, 29293] },
			{ renumberImages : "Tahngarth, Talruum Hero", order : [26408, 29291] },
			{ match : {name : "Gaea's Herald"}, replace : {flavor : "\"I bring word from Gaea. Fight on! She will never allow her children to die alone.\""}}
		],
		pMPR :
		[
			{ match : {name : ["Brave the Elements", "Doom Blade", "Treasure Hunt"]}, remove : ["flavor"]}			
		],
		APC :
		[
			{ match : {name : "Fire"}, replace : {originalText : "Fire deals 2 damage divided as you choose among any number of target creatures and/or players."}},
			{ match : {name : "Illusion"}, replace : {originalText : "Target spell or permanent becomes the color of your choice until end of turn."}},
			{ match : {name : "Life"}, replace : {originalText : "Until end of turn, all lands you control are 1/1 creatures that are still lands."}},
			{ match : {name : "Day"}, replace : {originalText : "Creatures target player controls get +1/+1 until end of turn."}},
			{ match : {name : "Order"}, replace : {originalText : "Remove target attacking creature from the game."}},
		],
		ODY :
		[
			{ match : {name : "Impulsive Maneuvers"}, replace : {artist : "Dave Dorman"}},
			{ match : {name : "Cursed Monstrosity"}, replace: {flavor : {"un away" : "un away!"}}},
			{ match : {name : "Psionic Gift"}, replace : {flavor : {"spellcrafting" : "spellcrafting!"}}},
			{ match : {name : "Decompose"}, replace : {flavor : {"Sheesh" : "Sheesh!"}}},
			{ match : {name : "Gorilla Titan"}, flavorAddExclamation : true},
			{ match : {name : "Dusk Imp"}, replace : {flavor : "It despises humans and squirrels and beasts and dwarves and cephalids . . . well, it despises just about everything."}}
		],
		DKM :
		[
			{ match : {name : "Abyssal Specter"}, replace : {number : "1", originalText : "Flying\nWhenever Abyssal Specter deals damage to a player, that player discards a card from his or her hand."}},
			{ match : {name : "Balduvian Bears"}, replace : {number : "22", originalType : "Creature — Bear"}},
			{ match : {name : "Balduvian Horde"}, replace : {number : "10", originalText : "When Balduvian Horde comes into play, sacrifice it unless you discard a card at random from your hand."}},
			{ match : {name : "Barbed Sextant"}, replace : {number : "34", originalText : "{1}, {T}, Sacrifice Barbed Sextant: Add one mana of any color to your mana pool. Draw a card at the beginning of next turn's upkeep."}},
			{ match : {name : "Bounty of the Hunt"}, replace : {number : "23", originalText : "You may remove a green card in your hand from the game rather than pay Bounty of the Hunt's mana cost.\n\Choose one — Target creature gets +3/+3 until end of turn; or target creature gets +2/+2 and another target creature gets +1/+1 until end of turn; or three target creatures each get +1/+1 until end of turn."}},
			{ match : {name : "Contagion"}, replace : {number : "2", originalText : "You may pay 1 life and remove a black card in your hand from the game rather than pay Contagion's mana cost.\nPut two -2/-1 counters, distributed as you choose, on one or two target creatures."}},
			{ match : {name : "Dark Banishing"}, replace : {number : "3", originalText : "Destroy target nonblack creature. It can't be regenerated."}},
			{ match : {name : "Dark Ritual"}, replace : {number : "4"}},
			{ match : {name : "Death Spark"}, replace : {number : "11", originalText : "Death Spark deals 1 damage to target creature or player.\nAt the beginning of your upkeep, if Death Spark is in your graveyard with a creature card directly above it, you may pay {1}. If you do, return Death Spark to your hand."}},
			{ match : {name : "Elkin Bottle"}, replace : {number : "35", originalText : "{3}, {T}: Remove the top card of your library from the game face up. Until the beginning of your next upkeep, you may play that card as though it were in your hand. At the beginning of your next upkeep, if you haven't played the card, put it into your graveyard."}},
			{ match : {name : "Elvish Bard"}, replace : {number : "24", originalText : "All creatures able to block Elvish Bard do so."}},
			{ match : {name : "Folk of the Pines"}, replace : {number : "25", originalText : "{1}{G}: Folk of the Pines gets +1/+0 until end of turn."}},
			{ match : {name : "Forest"}, replace : {number : "48", originalText : "{G}"}},
			{ match : {name : "Foul Familiar"}, replace : {number : "5", originalText : "Foul Familiar can't black.\n{B}, Pay 1 life: Return Foul Familiar to its owner's hand."}},
			{ match : {name : "Fyndhorn Elves"}, replace : {number : "26", originalText : "{T}: Add {G} to your mana pool."}},
			{ match : {name : "Giant Growth"}, replace : {number : "27"}},
			{ match : {name : "Giant Trap Door Spider"}, replace : {number : "33", originalText : "{1}{R}{G}, {T}: Remove from the game Giant Trap Door Spider and target creature without flying that's attacking you."}},
			{ match : {name : "Goblin Mutant"}, replace : {number : "12", originalText : "Trample\nGoblin Mutant can't attack if defending player controls an untapped creature with power 3 or greater.\nGoblin Mutant can't block creatures with power 3 or greater."}},
			{ match : {name : "Guerrilla Tactics"}, replace : {number : "13a", artist : "Amy Weber", originalText : "Guerrilla Tactics deals 2 damage to target creature or player.\nWhen a spell or ability an opponent controls causes you to discard Guerrilla Tactics from your hand, Guerrilla Tactics deals 4 damage to target creature or player."}},
			{ match : {name : "Hurricane"}, replace : {number : "28"}},
			{ match : {name : "Icy Manipulator"}, replace : {number : "36"}},
			{ match : {name : "Incinerate"}, replace : {number : "14", originalText : "Incinerate deals 3 damage to target creature or player. A creature dealt damage this way can't be regenerated this turn."}},
			{ match : {name : "Jokulhaups"}, replace : {number : "15", originalText : "Destroy all artifacts, creatures, and lands. They can't be regenerated."}},
			{ match : {name : "Karplusan Forest"}, replace : {number : "39", originalText : "{T}: Add one colorless mana to your mana pool.\n{T}: Add {R} or {G} to your mana pool. Karplusan Forest deals 1 damage to you."}},
			{ match : {name : "Lava Burst"}, replace : {number : "16", originalText : "Lava Burst deals X damage to target creature or player. If Lava Burst would deal damage to a creature, that damage can't be prevented or dealt instead to another creature or player."}},
			{ match : {name : "Lim-Dûl's High Guard"}, replace : {number : "6"}},
			{ match : {name : "Lhurgoyf"}, replace : {border : "black", number : "29", originalText : "Lhurgoyf's power is equal to the number of creature cards in all graveyards and its toughness is equal to that number plus 1."}},
			{ match : {name : "Mountain"}, replace : {number : "45", originalText : "{R}"}, incrementNumber : true},
			{ match : {name : "Necropotence"}, replace : {border : "black", number : "7", originalText : "Skip your draw step.\nIf you would discard a card from your hand, remove that card from the game instead.\nPay 1 life: Remove the top card of your library from the game face down. At the end of your turn, put that card into your hand."}},
			{ match : {name : "Orcish Cannoneers"}, replace : {number : "17"}},
			{ match : {name : "Phantasmal Fiend"}, replace : {number : "8a", originalText : "{B}: Phantasmal Fiend gets +1/-1 until end of turn.\n{1}{U}: Switch Phantasmal Fiend's power and toughness until end of turn. Effects that would alter Phantasmal Fiend's power this turn alter its toughness instead, and vice versa."}},
			{ match : {name : "Phyrexian War Beast"}, replace : {number : "37a", originalText : "When Phyrexian War Beast leaves play, sacrifice a land and Phyrexian War Beast deals 1 damage to you."}},
			{ match : {name : "Pillage"}, replace : {number : "18", originalText : "Destroy target artifact or land. It can't be regenerated."}},
			{ match : {name : "Pyroclasm"}, replace : {number : "19"}},
			{ match : {name : "Shatter"}, replace : {number : "20"}},
			{ match : {name : "Soul Burn"}, replace : {number : "9", originalText : "Spend only black and/or red mana on X.\nSoul Burn deals X damage to target creature or player. You gain life equal to the damage dealt, but not more than the amount of {B} spent on X, the player's life total before Soul Burn dealt damage, or the creature's toughness."}},
			{ match : {name : "Storm Shaman"}, replace : {number : "21a", flavor : "\"Embrace the storm. Its voice shall echo within you, and its fire shall become your touch!\"\n—Lovisa Coldeyes, Balduvian chieftain", originalText : "{R}: Storm Shaman gets +1/+0 until end of turn."}},
			{ match : {name : "Sulfurous Springs"}, replace : {number : "40", originalText : "{T}: Add one colorless mana to your mana pool.\n{T}: Add {B} or {R} to your mana pool. Sulfurous Springs deals 1 damage to you."}},
			{ match : {name : "Swamp"}, replace : {number : "42", originalText : "{B}"}, incrementNumber : true},
			{ match : {name : "Underground River"}, replace : {number : "41", originalText : "{T}: Add one colorless mana to your mana pool.\n{T}: Add {U} or {B} to your mana pool. Underground River deals 1 damage to you."}},
			{ match : {name : "Walking Wall"}, replace : {number : "38", originalText : "(Walls can't attack.)\n{3}: Walking Wall gets +3/-1 until end of turn and may attack this turn as though it weren't a Wall. Play this ability only once each turn.", artist : "Anthony S. Waters"}},
			{ match : {name : "Woolly Spider"}, replace : {number : "30", originalText : "Woolly Spider may block as though it had flying.\nWhenever Woolly Spider blocks a creature with flying, Woolly Spider gets +0/+2 until end of turn."}},
			{ match : {name : "Yavimaya Ancients"}, replace : {number : "31a", originalText : "{G}: Yavimaya Ancients gets +1/-2 until end of turn.", flavor : "\"We orphans of Fyndhorn have found no welcome in this alient place.\"\n—Taaveti of Kelsinko, elvish hunter"}},
			{ match : {name : "Yavimaya Ants"}, replace : {number : "32", originalText : "Trample; haste (This creature may attack and {T} the turn it comes under your control.)\nCumulative upkeep {G}{G} (At the beginning of your upkeep, put an age counter on this creature, then sacrifice it unless you pay {G}{G} for each age counter on it.)"}}
		],
		TOR :
		[
			{ match : {name: "Cabal Coffers"}, replace : {artist : "Don Hazeltine"} }
		],
		ONS :
		[
			{ match : {name : "Kaboom!"}, replace : {text : "Choose any number of target players. For each of those players, reveal cards from the top of your library until you reveal a nonland card. Kaboom! deals damage equal to that card's converted mana cost to that player, then you put the revealed cards on the bottom of your library in any order.",
											  originalText: "Choose any number of target players. For each of those players, reveal cards from the top of your library until you reveal a nonland card. Kaboom! deals damage equal to that card's converted mana cost to that player, then you put the revealed cards on the bottom of your library in any order."}}
		],
		pREL :
		[
			{ match : {	name :"Force of Nature"}, remove : ["flavor"] },
			{ match : { name : "Ichiga, Who Topples Oaks"}, replace : { layout : "flip", names : ["Budoka Pupil", "Ichiga, Who Topples Oaks"], source : "Betrayers of Kamigawa Release Event participation bonus.", releaseDate : "2005-02-04"}},
			{ match : { name : "Budoka Pupil"}, replace : { names : ["Budoka Pupil", "Ichiga, Who Topples Oaks"]}},
			{ match : { name : "Ass Whuppin'"}, replace : { border : "silver"}}
		],
		"8ED" :
		[
			{ match : {name : "Lhurgoyf"}, replace : {flavor : "\"Ach! Hans, run! It's the Lhurgoyf!\"\n—Saffi Eriksdotter, last words"}},
			{ match : {multiverseid:[47784, 47788, 47785, 47786, 47789, 47787, 49056]}, removeCard : true}
		],
		"8BS" :
		[
			{ match : "*", remove : ["source", "releaseDate"], prefixNumber : "S"},
			{ match : {name : ["Eager Cadet", "Giant Octopus", "Sea Eagle"]}, replace : {rarity : "Common"}},
			{ match : {name : ["Enormous Baloth", "Silverback Ape", "Vengeance"]}, replace : {rarity : "Uncommon"}},
			{ match : {name : ["Vizzerdrix"]}, replace : {rarity : "Rare"}}
		],
		CHK :
		[
			{ renumberImages : "Brothers Yamazaki", order : [78968, 85106] },
			{ match : {multiverseid: 78968}, replace : {number : "160a"} },
			{ match : {multiverseid: 85106}, replace : {number : "160b"} },
			{ match : {name : ["Feral Deceiver", "Hikari, Twilight Guardian", "Soratami Seer"]}, replace : {artist : "Glen Angus"}}
		],
		UNH :
		[
			{ match : {name : "Super Secret Tech"}, replace : {rarity : "Rare"}},
			{ match : {name : "Cheap Ass"}, replace : {text : "Spells you play cost {½} less to play."}},
			{ match : {name : "\"Ach! Hans, Run!\""}, replace : {
				text : "At the beginning of your upkeep, you may say \"Ach! Hans, run! It's the . . .\" and name a creature card. If you do, search your library for the named card, put it into play, then shuffle your library. That creature has haste. Remove it from the game at end of turn.",
				originalText : "At the beginning of your upkeep, you may say \"Ach! Hans, run! It's the . . .\" and name a creature card. If you do, search your library for the named card, put it into play, then shuffle your library. That creature has haste. Remove it from the game at end of turn."
			}},
			{ match : {name : "Flaccify"}, replace : {text : "Counter target spell unless its controller pays {3}{½}."}},
			{ match : {name : "Kill Destroy"}, replace : {name : "Kill! Destroy!", imageName : "kill! destroy!"}},
			{ match : {name : "Little Girl"}, replace : {manaCost : "{hw}"}},
			{ match : {name : "Look at Me, I'm R&D"}, replace : {artist : "spork;"} },
			{ match : {name : "Our Market Research Shows That Players Like Really Long Card Names So We Made this Card to Have the Absolute Longest Card Name Ever Elemental"}, replace : {imageName : "our market research shows that players like really long card names so we made"}},
			{ match : {name : ["Forest", "Island", "Mountain", "Plains", "Swamp"]}, replace : {border : "black"}},
			{ match : {name : "Who/What/When/Where/Why"}, replace : { layout : "split", names : ["Who", "What", "When", "Where", "Why"] }},
			{ copyCard : "Who/What/When/Where/Why", replace :
				{
					name         : "Who",
					number       : "120a",
					text         : "Target player gains X life.",
					originalText : "Target player gains X life.",
					manaCost     : "{X}{W}",
					cmc          : 1,
					colors       : ["White"],
					foreignNames : [{language : "French", name : "Qui"}]
				}
			},
			{ copyCard : "Who/What/When/Where/Why", replace :
				{
					name         : "What",
					number       : "120b",
					text         : "Destroy target artifact.",
					originalText : "Destroy target artifact.",
					manaCost     : "{2}{R}",
					cmc          : 3,
					colors       : ["Red"],
					foreignNames : [{language : "French", name : "Quoi"}]
				}
			},
			{ copyCard : "Who/What/When/Where/Why", replace :
				{
					name         : "When",
					number       : "120c",
					text         : "Counter target creature spell.",
					originalText : "Counter target creature spell.",
					manaCost     : "{2}{U}",
					cmc          : 3,
					colors       : ["Blue"],
					foreignNames : [{language : "French", name : "Quand"}]
				}
			},
			{ copyCard : "Who/What/When/Where/Why", replace :
				{
					name         : "Where",
					number       : "120d",
					text         : "Destroy target land.",
					originalText : "Destroy target land.",
					manaCost     : "{3}{B}",
					cmc          : 4,
					colors       : ["Black"],
					foreignNames : [{language : "French", name : "Où"}]
				}
			},
			{ match : {name : "Who/What/When/Where/Why"}, replace : { name : "Why", number : "120e", text : "Destroy target enchantment.", originalText : "Destroy target enchantment.", manaCost : "{1}{G}", cmc : 2, colors : ["Green"], foreignNames : [{language : "French", name : "Pourquoi"}] }},
		],
		BOK :
		[
			{ match : {name: "Budoka Pupil"}, replace :
				{
					number : "122a", layout : "flip", names : ["Budoka Pupil", "Ichiga, Who Topples Oaks"]
				}
			},
			{ match : {name: "Callow Jushi"}, replace :
				{
					number : "31a",
					layout : "flip",
					names : ["Callow Jushi", "Jaraku the Interloper"],
					text : "Whenever you cast a Spirit or Arcane spell, you may put a ki counter on Callow Jushi.\nAt the beginning of the end step, if there are two or more ki counters on Callow Jushi, you may flip it."
				}
			},
			{ copyCard : "Callow Jushi", replace :
				{
					name       : "Jaraku the Interloper",
					number     : "31b",
					text       : "Remove a ki counter from Jaraku the Interloper: Counter target spell unless its controller pays {2}.",
					type       : "Legendary Creature — Spirit",
					supertypes : ["Legendary"],
					types      : ["Creature"],
					subtypes   : ["Spirit"],
					power      : "3",
					toughness  : "4",
					imageName  : "jaraku the interloper"
				}
			},
			{ match : {name: "Cunning Bandit"}, replace :
				{
					number : "99a",
					layout : "flip",
					names : ["Cunning Bandit", "Azamuki, Treachery Incarnate"]
				}
			},
			{ match : {name: "Hired Muscle"}, replace :
				{
					number : "69a",
					layout : "flip",
					names : ["Hired Muscle", "Scarmaker"],
					text : "Whenever you cast a Spirit or Arcane spell, you may put a ki counter on Hired Muscle.\nAt the beginning of the end step, if there are two or more ki counters on Hired Muscle, you may flip it."
				}
			},
			{ copyCard : "Hired Muscle", replace :
				{
					name       : "Scarmaker",
					number     : "69b",
					text       : "Remove a ki counter from Scarmaker: Target creature gains fear until end of turn. (It can't be blocked except by artifact creatures and/or black creatures.)",
					type       : "Legendary Creature — Spirit",
					supertypes : ["Legendary"],
					types      : ["Creature"],
					subtypes   : ["Spirit"],
					power      : "4",
					toughness  : "4",
					imageName  : "scarmaker"
				}
			},
			{ match : {name : "Minamo's Meddling"}, replace : {artist : "Alex Horley-Orlandelli"}},
			{ match : {name : "Nezumi Shadow-Watcher"}, replace : {flavor : "\"The Okiba Gang! Night-cursed thieves and assassins! I've had enough of their meddling! Triple the guard!\"\n—Marrow-Gnawer"}}
		],
		SOK :
		[
			{ match : {name: ["Erayo's Essence", "Homura's Essence", "Kuon's Essence", "Rune-Tail's Essence", "Sasaya's Essence"]}, remove : ["power", "toughness"] },
			{ match : {name : "Adamaro, First to Desire"}, replace : {flavor : "\"Beware Adamaro! In him all pain and anger is perfected.\"\n—Isao, Enlightened Bushi"}},
			{ match : {name : "Akki Drillmaster"}, replace : {flavor : "\"What part of ‘hayaku ikee!' did you not understand?\""}},
			{ match : {name : "Descendant of Soramaro"}, replace : {flavor : "\"Soramaro speaks through me. Listen! And I will tell the wisdom of the ancestors.\""}},
			{ match : {name : "Inner Fire"}, replace : {flavor : "\"Heart of Sokenzan, I call to you! Lend me your fire.\""}}
		],
		"9ED" :
		[
			{ match : {name : ["Holy Day", "Inspirit", "Lava Axe", "Might of Oaks"]}, flavorAddExclamation : true },
			{ match : {name : "Blinking Spirit"}, replace : {flavor : "\"Don't look at it! Maybe it'll go away!\"\n—Ib Halfheart, goblin tactician"}},
			{ match : {name : "Sea's Claim"}, replace : {flavor : "\"Who's the crazy one now!?\"\n—Torgle, mountaintop boatmaker"}},
			{ match : {name : "Swarm of Rats"}, replace : {flavor : "\"Rats, rats, rats! Hundreds, thousands, millions of them, and every one a life.\"\n—Bram Stoker, Dracula"}},
			{ match : {multiverseid:[83064, 83319, 84073, 83104, 94912, 94911, 94910, 83075, 94914]}, removeCard : true}
		],
		"9BS" :
		[
			{ match : "*", remove : ["source", "releaseDate"], prefixNumber : "S"}
		],
		RAV :
		[
			{ match : {name : ["Overwhelm"]}, flavorAddExclamation : true },
			{ match : {name : "Thundersong Trumpeter"}, replace : {flavor : "\"Hear that? Those notes mean we've arrived at Sunhome! Let our allies' hearts soar and our enemies' hearts shatter at the sound!\"\n—Klattic, Boros legionnaire"}}
		],
		pWPN :
		[
			{ match : {name : "Deathless Angel"}, replace : {releaseDate : "2010"}},
			{ match : {name : "Emeria Angel"}, replace : {releaseDate : "2009"}},
			{ match : {name : "Hada Freeblade"}, replace : {releaseDate : "2010"}},
			{ match : {name : "Kalastria Highborn"}, replace : {releaseDate : "2010"}},
			{ match : {name : "Mycoid Shepherd"}, replace : {releaseDate : "2009"}},
			{ match : {name : "Naya Sojourners"}, replace : {releaseDate : "2010"}},
			{ match : {name : "Nissa's Chosen"}, replace : {releaseDate : "2009"}},
			{ match : {name : "Staggershock"}, replace : {releaseDate : "2010"}}
		],
		GPT :
	[
			{ match : {name : ["Gelectrode", "Schismotivate", "Skarrg, the Rage Pits", "Skarrgan Skybreaker", "Train of Thought", "Wreak Havoc"]}, flavorAddExclamation : true },
			{ match : {name : "Borborygmos"}, replace : {flavor : "\"It's easy to see why those Gruul dirtbags follow him—the only orders he gives are ‘Crush them!' and ‘We eat!'\"\n—Teysa"}},
			{ match : {name : "Gruul War Plow"}, replace : {flavor : "\"Steering apparatus?! What for? Rip it out, sharpen it, and lash it to the front!\"\n—Ktank, Gruul plowmaster"}},
			{ match : {name : "Killer Instinct"}, replace : {flavor : "\"Take the bridge, men! Victory! Victory! is ou— Retreat! RETREAT\""}},
			{ match : {name : "Tin Street Hooligan"}, replace : {flavor : "\"Rauck-Chauv's like a holiday! Only it isn't on the calendars, and instead of dancing you knock people flat, and instead of giving gifts you break stuff.\""}},
			{ match : {name : "Torch Drake"}, replace : {flavor : "\"Drakes? Bah! Things that breathe don't interest me. It breathes fire, you say? Well, that's a different story!\"\n—Zataz, Izzet clockwork artificer"}},
			{ match : {name : "Niv-Mizzet, the Firemind"}, replace : {flavor : "\"(Z–>)90° – (E–N²W)90°t = 1\""}}
		],
		DIS :
		[
			{ match : {name : ["Condemn", "Flame-Kin War Scout", "Kindle the Carnage", "Protean Hulk", "Psychic Possession", "Unliving Psychopath"]}, flavorAddExclamation : true },
			{ match : {name : "Azorius Æthermage"}, replace : {artist : "Heather Hudson"}},
			{ match : {name : "Bronze Bombshell"}, replace : {flavor : "\"Ooh, shiny! Let's pull off the chain and take her with us.\"\n—Ukl, Gruul raider, last words"}},
			{ match : {name : ["Drekavac", "Magewright's Stone"]}, replace : {artist : "Carl Critchlow"}},
			{ match : {name : "Ignorant Bliss"}, replace : {artist : "Jeff Miracola"}}
		],
		CSP :
		[
			{ match : {name : ["Heidar, Rimewind Master", "Lovisa Coldeyes"]}, flavorAddExclamation : true },
			{ match : {name : "Flashfreeze"}, replace : {flavor : "\"Nature? Fire? Bah! Both are chaotic and difficult to control. Ice is structured, latticed, light as a feather, massive as a glacier. In ice, there is power!\"\n—Heidar, Rimewind master"}},
			{ match : {name : ["Snow-Covered Forest", "Snow-Covered Island", "Snow-Covered Mountain", "Snow-Covered Plain", "Snow-Covered Swamp"]}, replace : {rarity : "Common"}}
		],
		CST :
		[
			"sortCards",
			{ match : {name : ["Forest", "Island", "Mountain", "Plains", "Swamp"]}, incrementNumber : true},
			{ match : {name : "Legions of Lim-Dûl"}, replace : {number : "142", source : "Snowscape Theme Deck"}},
			{ match : "*", remove : ["releaseDate"]}
		],
		TSP :
		[
			{ match : {name : ["Ib Halfheart, Goblin Tactician", "Think Twice", "Word of Seizing"]}, flavorAddExclamation : true },
			{ match : {name : ["Evil Eye of Urborg"]}, flavorAddDash : true },
			{ match : {name : "Coal Stoker"}, replace : {flavor : "\"The day is mine! I sent three such creatures against my foe, then watched as my magefire popped her soldiers like overripe spleenfruits.\"\n—Dobruk the Unstable, pyromancer"}},
			{ match : {name : "Kher Keep"}, replace : {flavor : "\"They're still here?! The cockroach may have finally met its match.\"\n—Teferi"}},
			{ match : {name : "Magus of the Mirror"}, replace : {flavor : "\"Behold! The image of the enemy and all that she has. Trust your envy, and take it.\""}},
			{ match : {name : "Orcish Cannonade"}, replace : {flavor : "\"Crispy! Scarback! Load another volcano-ball.\"\n—Stumphobbler Thuj, Orcish captain"}}
		],
		TSB :
		[
			{ match : "*", replace : {timeshifted : true}},
			{ match : {name : ["Pandemonium"]}, flavorAddExclamation : true },
			{ match : {name : "Craw Giant"}, replace : {flavor : "Harthag gave a jolly laugh as he surveyed the army before him. \"Ho ho ho! Midgets! You think you can stand in my way?\""}}
		],
		pHHO :
		[
			{ match : {name : "Naughty/Nice"}, replace :
				{
					layout      : "split",
					name        : "Naughty",
					manaCost    : "{1}{B}{B}",
					releaseDate : "2012",
					cmc         : 3,
					imageName   : "naughtynice",
					colors      : ["Black"],
					names       : ["Naughty", "Nice"],
					text        : "Search another target player's library for a card and put that card into your hand. Then shuffle that player's library.",
					number      : "7a",
					source      : "Holiday gift to Wizards internal teams and business partners.",
					printings    : ["Happy Holidays"]
				}
			},
			{ copyCard : "Naughty", replace :
				{
					name         : "Nice",
					number       : "7b",
					text         : "Search your library for a card and put it into another target player's hand. Then shuffle your library.",
					manaCost     : "{1}{W}{W}",
					colors       : ["White"],
					printings    : ["Happy Holidays"]
				}
			},
			{ match : {name : "Gifts Given"}, replace : {text : "Search target opponent's library for four cards with different names and reveal them. That player chooses two of those cards. Put the chosen cards into the player's graveyard and the rest into your hand. Then that player shuffles his or her library."}},
			{ match : {name : "Evil Presents"}, replace : {flavor : "'Tis better to give than to receive."}},
			{ match : {name : "Gifts Given"}, replace : {flavor : "\"Thanks! You shouldn't have.\""}},
			{ match : {name : "Season's Beatings"}, replace : {flavor : "Arriving home, he suddenly longed for the bloodsoaked battlefields behind him."}}
		],
		PLC :
		[
			{ match : {multiverseid : [130715, 122321, 122373, 122360, 122423, 128940, 122428, 122374, 122402, 122367, 122280, 122429, 122362, 122371, 122405, 122451, 131006, 122481, 122324, 130714, 125877, 126214, 134738, 124033, 125874, 126212,
									   124066, 124470, 124757, 122338, 122436, 130718, 126818, 122282, 122325, 130816, 122442, 125873, 124445, 122285, 124474, 125879, 131011, 122355, 122366]}, replace : {timeshifted : true}},
			{ match : {name : ["Prodigal Pyromancer"]}, flavorAddExclamation : true },
			{ match : {name : "Merfolk Thaumaturgist"}, replace : {flavor : "\"Blasted fishtails! It's not enough that they meddle with my head, but they twist my body as well.\"\n—Tahngarth of the Weatherlight"}}
		],
		pPRO :
		[
			{ match : {name : "Mirari's Wake"}, replace : {flavor : "Even after a false god tore magic from Dominaria, power still radiated from the Mirari sword that slew her."}}
		],
		FUT :
		[
			{ match : {multiverseid : [136055, 136204, 136155, 136049, 130676, 126143, 130686, 130672, 132229, 130334, 136054, 130684, 126211, 130635, 136043, 132226, 136196, 126132, 136215, 132220, 132227, 126149, 126187, 136044, 130311, 132211, 130581,
									   136040, 130595, 130695, 126162, 130574, 136201, 130634, 136208, 136198, 126151, 130691, 126186, 126165, 126158, 136202, 130346, 130614, 130588, 136140, 136138, 136045, 130564, 136210, 136213, 126160, 136153, 136145,
									   126210, 136212, 136158, 130347, 136137, 136214, 136160, 130708, 136032, 130659, 130344, 130323, 136151, 130675, 136205, 136142, 136139, 130630, 130338, 136041, 130325, 130644, 136141, 126178,
									   132222, 130702, 132215]}, replace : {timeshifted : true}},
			{ match : {name : ["Grinning Ignus"]}, flavorAddExclamation : true },
			{ match : {name : "Bloodshot Trainee"}, replace : {flavor : "\"Hrrngh! Someday I'm going to hurl this . . . er . . . roll this . . . hrrngh . . . nudge this boulder right down a cliff.\""}},
			{ match : {name : "Rites of Flourishing"}, replace : {flavor : "\"Dance, and bring forth the coil! It is an umbilical to Gaea herself, fattening us with the earth's rich bounty.\""}},
			{ match : {name : "Steamflogger Boss"}, replace : {flavor : "\"Whip the Xs ! Pinch the Os!\nWhat we're building, no one knows!\""}}
		],
		"10E" :
		[
			{ match : {name : ["Condemn", "Duct Crawler", "Horseshoe Crab", "Lava Axe", "Might of Oaks", "Squee, Goblin Nabob"]}, flavorAddExclamation : true },
			{ match : {name : "Flashfreeze"}, replace : {flavor : "\"Nature? Fire? Bah! Both are chaotic and difficult to control. Ice is structured, latticed, light as a feather, massive as a glacier. In ice, there is power!\"\n—Heidar, Rimewind master"}},
			{ match : {name : "Mogg Fanatic"}, replace : {flavor : "\"I got it! I got it! I—\""}},
			{ match : {name : "Overgrowth"}, replace : {flavor : "\"Let the forest spread! From salt, stone, and fen, let the new trees rise.\"\n—Molimo, maro-sorcerer"}}
		],
		pMGD :
		[
			{ match : {name : ["Black Sun's Zenith", "Cryptborn Horror", "Dictate of Kruphix", "Dryad Militant", "Dungrove Elder", "Kiora's Follower", "Liliana's Specter", "Myr Superion", "Pain Seer", "Priest of Urabrask", "Squelching Leeches",
							   "Stormblood Berserker", "Strangleroot Geist", "Tempered Steel", "Zombie Apocalypse"]}, remove : ["flavor"] }
		],
		MED :
		[
			{ match : {name : "Order of Leitbur"}, replace : {artist : "Randy Asplund-Faith"}}
		],
		LRW :
		[
			{ match : {name : ["Blades of Velis Vel"]}, flavorAddExclamation : true },
			{ match : {name : "Boggart Birth Rite"}, replace : {flavor : "Auntie excitedly held up the squalling newborn. \"This one looks like Byoog! Maybe he'll tell us what he saw and felt in the beyond.\""}},
			{ match : {name : "Elvish Branchbender"}, replace : {flavor : "\"How do the vinebred feel? Fah! We do not ask the puppet how it feels when the puppeteer bids it dance.\""}},
			{ match : {name : "Hamletback Goliath"}, replace : {artist : "Parente & Brian Snõddy"}}
		],
		EVG :
		[
			{ match : {name : "Elemental"}, replace : {number : "T1", layout : "token"}},
			{ match : {name : "Elf Warrior"}, replace : {number : "T2", layout : "token"}},
			{ match : {name : "Goblin"}, replace : {number : "T3", layout : "token"}}
		],
		pLPA :
		[
			{ match : {name : "Ajani Vengeant"}, replace : {source : "Shards of Alara Launch Party participation bonus", releaseDate : "2008-10-03"}},
			{ match : {name : "Ludevic's Abomination"}, replace : {layout : "double-faced", names :["Ludevic's Test Subject", "Ludevic's Abomination"]}},
			{ match : {name : "Ludevic's Test Subject"}, replace : {names :["Ludevic's Test Subject", "Ludevic's Abomination"]}},
			{ match : {name : "Mondronen Shaman"}, replace : {names :["Mondronen Shaman", "Tovolar's Magehunter"]}},
			{ match : {name : "Tovolar's Magehunter"}, replace : {layout : "double-faced", names :["Mondronen Shaman", "Tovolar's Magehunter"]}},
			{ match : {name : "Dragone Throne of Tarkir"}, replace : {name : "Dragon Throne of Tarkir", imageName : "dragon throne of tarkir"}}
		],
		MOR :
		[
			{ match : {name : "Sage's Dousing"}, replace : {flavor : "\"Curse these merrows and their meddling! Since coming near the river, I can't so much as sneeze without being soaked.\"\n—Ashling the Pilgrim"}},
			{ match : {name : "Sensation Gorger"}, replace : {flavor : "More, more, more!"}}
		],
		SHM :
		[
			{ match : {name : ["Ember Gale"]}, flavorAddExclamation : true }
		],
		DD2 :
		[
			{ match : {name : "Elemental Shaman"}, replace : {number : "T1", layout : "token"}},
			{ match : {multiverseid : 190586}, replace : {originalText : "R"}}
		],
		DDC :
		[
			{ match : {name : "Demon"}, replace : {number : "T2", layout : "token"}},
			{ match : {name : "Spirit"}, replace : {number : "T1", layout : "token"}},
			{ match : {name : "Thrull"}, replace : {number : "T3", layout : "token"}}
		],
		ZEN :
		[
			{ match : {imageName : "forest1"}, replace : {imageName : "forest1",  number : "246"} },
			{ match : {imageName : "forest2"}, replace : {imageName : "forest1a", number : "246a"} },
			{ match : {imageName : "forest3"}, replace : {imageName : "forest2",  number : "247"} },
			{ match : {imageName : "forest4"}, replace : {imageName : "forest2a", number : "247a"} },
			{ match : {imageName : "forest5"}, replace : {imageName : "forest3",  number : "248"} },
			{ match : {imageName : "forest6"}, replace : {imageName : "forest3a", number : "248a"} },
			{ match : {imageName : "forest7"}, replace : {imageName : "forest4",  number : "249"} },
			{ match : {imageName : "forest8"}, replace : {imageName : "forest4a", number : "249a"} },
			{ match : {imageName : "island1"}, replace : {imageName : "island1",  number : "234"} },
			{ match : {imageName : "island2"}, replace : {imageName : "island1a", number : "234a"} },
			{ match : {imageName : "island3"}, replace : {imageName : "island2",  number : "235"} },
			{ match : {imageName : "island4"}, replace : {imageName : "island2a", number : "235a"} },
			{ match : {imageName : "island5"}, replace : {imageName : "island3",  number : "236"} },
			{ match : {imageName : "island6"}, replace : {imageName : "island3a", number : "236a"} },
			{ match : {imageName : "island7"}, replace : {imageName : "island4",  number : "237"} },
			{ match : {imageName : "island8"}, replace : {imageName : "island4a", number : "237a"} },
			{ match : {imageName : "mountain1"}, replace : {imageName : "mountain1",  number : "242"} },
			{ match : {imageName : "mountain2"}, replace : {imageName : "mountain1a", number : "242a"} },
			{ match : {imageName : "mountain3"}, replace : {imageName : "mountain2",  number : "243"} },
			{ match : {imageName : "mountain4"}, replace : {imageName : "mountain2a", number : "243a"} },
			{ match : {imageName : "mountain5"}, replace : {imageName : "mountain3",  number : "244"} },
			{ match : {imageName : "mountain6"}, replace : {imageName : "mountain3a", number : "244a"} },
			{ match : {imageName : "mountain7"}, replace : {imageName : "mountain4",  number : "245"} },
			{ match : {imageName : "mountain8"}, replace : {imageName : "mountain4a", number : "245a"} },
			{ match : {imageName : "plains1"}, replace : {imageName : "plains1",  number : "230"} },
			{ match : {imageName : "plains2"}, replace : {imageName : "plains1a", number : "230a"} },
			{ match : {imageName : "plains3"}, replace : {imageName : "plains2",  number : "231"} },
			{ match : {imageName : "plains4"}, replace : {imageName : "plains2a", number : "231a"} },
			{ match : {imageName : "plains5"}, replace : {imageName : "plains3",  number : "232"} },
			{ match : {imageName : "plains6"}, replace : {imageName : "plains3a", number : "232a"} },
			{ match : {imageName : "plains7"}, replace : {imageName : "plains4",  number : "233"} },
			{ match : {imageName : "plains8"}, replace : {imageName : "plains4a", number : "233a"} },
			{ match : {imageName : "swamp1"}, replace : {imageName : "swamp1",  number : "238"} },
			{ match : {imageName : "swamp2"}, replace : {imageName : "swamp1a", number : "238a"} },
			{ match : {imageName : "swamp3"}, replace : {imageName : "swamp2",  number : "239"} },
			{ match : {imageName : "swamp4"}, replace : {imageName : "swamp2a", number : "239a"} },
			{ match : {imageName : "swamp5"}, replace : {imageName : "swamp3",  number : "240"} },
			{ match : {imageName : "swamp6"}, replace : {imageName : "swamp3a", number : "240a"} },
			{ match : {imageName : "swamp7"}, replace : {imageName : "swamp4",  number : "241"} },
			{ match : {imageName : "swamp8"}, replace : {imageName : "swamp4a", number : "241a"} }
		],		
		DDD :
		[
			{ match : {name : "Beast", number : "1"}, replace : {number : "T1", layout : "token"}},
			{ match : {name : "Beast", number : "2"}, replace : {number : "T2", layout : "token"}},
			{ match : {name : "Elephant"}, replace : {number : "T3", layout : "token"}}
		],
		DDE :
		[
			{ match : {name : "Hornet"}, replace : {number : "T1", layout : "token"}},
			{ match : {name : "Minion"}, replace : {number : "T2", layout : "token"}},
			{ match : {name : "Saproling"}, replace : {number : "T3", layout : "token"}}
		],
		DPA :
		[
			"numberCards",
			"sortCards",
			{ match : {name : ["Duskdale Wurm", "Molimo, Maro-Sorcerer", "Mortivore", "Roughshod Mentor", "Talara's Battalion", "Troll Ascetic"]}, remove : ["flavor"] },
			{ match : {name : "Forest"}, replace : {number : "110"}, incrementNumber : true},
			{ match : {name : "Island"}, replace : {number : "98"}, incrementNumber : true},
			{ match : {name : "Mind Control"}, replace : {artist : "Ryan Pancoast"}},
			{ match : {name : "Mountain"}, replace : {number : "106"}, incrementNumber : true},
			{ match : {name : "River Boa"}, replace : {artist : "Paul Bonner"}, remove : ["flavor"]},
			{ match : {name : "Shock"}, replace : {artist : "Jon Foster"}},
			{ match : {name : "Swamp"}, replace : {number : "102"}, incrementNumber : true},
			{ match : {name : "The Rack"}, replace : {artist : "Nic Klein"}, remove : ["flavor"]}
		],
		GTC :
		[
			{ match : {name : "Sylvan Primordial"}, setLegality : {"Commander" : "Banned"}}
		],
		M14 :
		[
			{ match : "*", fixFlavorNewlines : true },
			{ match : { name : "Canyon Minotaur"}, replace : {flavor : "\"We'll scale these cliffs, traverse Brittle Bridge, and then fight our way down the volcanic slopes on the other side.\"\n\"Isn't the shortest route through the canyon?\"\n\"Yes.\"\n\"So shouldn't we—\"\n\"No.\""}}
		],
		DDL :
		[
			{ match : { name : "Anax and Cymede" }, replace : {text : "First strike, vigilance\nHeroic — Whenever you cast a spell that targets Anax and Cymede, creatures you control get +1/+1 and gain trample until end of turn."}},
			{ match : { name : "Cavalry Pegasus" }, replace : {text : "Flying\nWhenever Cavalry Pegasus attacks, each attacking Human gains flying until end of turn."}},
			{ match : { name : "Ordeal of Purphoros" }, replace : {text : "Enchant creature\nWhenever enchanted creature attacks, put a +1/+1 counter on it. Then if it has three or more +1/+1 counters on it, sacrifice Ordeal of Purphoros.\nWhen you sacrifice Ordeal of Purphoros, it deals 3 damage to target creature or player."}},
			{ match : { name : "Polukranos, World Eater" }, replace : {text : "{X}{X}{G}: Monstrosity X. (If this creature isn't monstrous, put X +1/+1 counters on it and it becomes monstrous.)\nWhen Polukranos, World Eater becomes monstrous, it deals X damage divided as you choose among any number of target creatures your opponents control. Each of those creatures deals damage equal to its power to Polukranos."}},
			{ match : "*", fixFlavorNewlines : true },
		],
		THS :
		[
			{ match : { name : "Colossus of Akros" }, replace : {text : "Defender, indestructible\n{10}: Monstrosity 10. (If this creature isn't monstrous, put ten +1/+1 counters on it and it becomes monstrous.)\nAs long as Colossus of Akros is monstrous, it has trample and can attack as though it didn't have defender."}},
			{ match : { name : "Time to Feed" }, replace : {text : "Choose target creature an opponent controls. When that creature dies this turn, you gain 3 life. Target creature you control fights that creature. (Each deals damage equal to its power to the other.)"}}
		],
		C13 :
		[
			{ match : "*", fixFlavorNewlines : true }
		],
		"*" :
		[
			{ match : {name : "Draco"}, replace : {text : "Domain — Draco costs {2} less to cast for each basic land type among lands you control.\nFlying\nDomain — At the beginning of your upkeep, sacrifice Draco unless you pay {10}. This cost is reduced by {2} for each basic land type among lands you control."}},
			{ match : {name : "Spawnsire of Ulamog"}, replace : {text : "Annihilator 1 (Whenever this creature attacks, defending player sacrifices a permanent.)\n{4}: Put two 0/1 colorless Eldrazi Spawn creature tokens onto the battlefield. They have \"Sacrifice this creature: Add {1} to your mana pool.\"\n{20}: Cast any number of Eldrazi cards you own from outside the game without paying their mana costs."}},
			{ match : {name : "Jade Statue"}, remove : ["power", "toughness"] },
			{ match : {name : "Ghostfire"}, remove : ["colors"] },
			{ match : {name : "Rhox"}, addPrinting : "Starter 2000"}
		]
	};

	exports.SET_SPOILER_IMAGE_DIFF_SRC_NUMBER =
	{
		KTK :
		{
			"Abzan Falconer" : 3,
			"Bloodstained Mire" : 1,
			"Embodiment of Spring" : 2,
			"Flooded Strand" : 1,
			"Polluted Delta" : 1,
			"Windswept Heath" : 1,
			"Wooded Foothills" : 1,
			"Thousand Winds" : 3
		}
	};

	exports.SET_CORRECTIONS["LEB"].pushAll(exports.SET_CORRECTIONS["LEA"]);	// All of LEA rules apply to LEB
	exports.SET_CORRECTIONS["2ED"].pushAll(exports.SET_CORRECTIONS["LEA"]);	// All of LEA rules apply to 2ED
	exports.SETS.forEach(function(SET) { if(SET.isMCISet) { if(!exports.SET_CORRECTIONS.hasOwnProperty(SET.code)) { exports.SET_CORRECTIONS[SET.code] = []; } exports.SET_CORRECTIONS[SET.code].push({match : "*", fixFlavorNewlines:true}); }});

	exports.ARTIST_CORRECTIONS =
	{
		"Brian Snõddy" : ["Brian Snōddy", "Brian Snoddy", "Brian Snøddy"],
		"Dennis Detwiller" : ["Dennis Detwiler", "Denise Detwiler"],
		"Diana Vick" : ["Diane Vick"],
		"Douglas Shuler" : ["Douglas Schuler"],
		"Edward P. Beard, Jr." : ["Edward P. Beard, Jr", "Edward Beard, Jr."],
		"Jon J. Muth" : ["Jon J Muth"],
		"Ken Meyer, Jr." : ["Ken Meyer Jr."],
		"Kerstin Kaman" : ["Kersten Kaman"],
		"L. A. Williams" : ["L.A. Williams"],
		"Melissa A. Benson" : ["Melissa Benson"],
		"Ron Spencer" : ["ROn Spencer"],
		"Richard Kane Ferguson" : ["Richard Kane-Ferguson"],
		"Sam Wood" : ["Sam Woods"],
		"Steve White" : ["Steven White"],
		"Tim Hildebrandt" : ["Tim Hilderbrandt"],
		"Zoltan Boros & Gabor Szikszai" : ["Zoltan Boras & Gabor Szikszai"]
	};

	exports.SYMBOL_RARITIES = {c:["common"], u : ["uncommon"], r : ["rare"], m : ["mythic", "mythic rare", "mythicrare"], s : ["special"]};
	exports.SYMBOL_SIZES = [8, 16, 24, 32, 48, 64, 96, 128, 256, 512, 768, 1024];
	exports.SETS_WITH_BONUS_RARITIES = ["VMA"];

	exports.SYMBOL_MANA =
	{
		w : ["white"],
		u : ["blue"],
		b : ["black"],
		r : ["red"],
		g : ["green"],
		s : ["snow"],
		"0" : ["zero"],
		"1" : ["one"],
		"2" : ["two"],
		"3" : ["three"],
		"4" : ["four"],
		"5" : ["five"],
		"6" : ["six"],
		"7" : ["seven"],
		"8" : ["eight"],
		"9" : ["nine"],
		"10" : ["ten"],
		"11" : ["eleven"],
		"12" : ["twelve"],
		"13" : ["thirteen"],
		"14" : ["fourteen"],
		"15" : ["fifteen"],
		"16" : ["sixteen"],
		"17" : ["seventeen"],
		"18" : ["eighteen"],
		"19" : ["nineteen"],
		"20" : ["twenty"],
		"100" : ["onehundred", "hundred"],
		"1000000" : ["onemillion", "million"],
		x : [],
		y : [],
		z : [],
		wu : ["whiteblue", "bluewhite", "uw"],
		wb : ["whiteblack", "blackwhite", "bw"],
		ub : ["blueblack", "blackblue", "bu"],
		ur : ["bluered", "redblue", "ru"],
		br : ["blackred", "redblack", "rb"],
		bg : ["blackgreen", "greenblack", "gb"],
		rg : ["redgreen", "greenred", "gr"],
		rw : ["redwhite", "whitered", "wr"],
		gw : ["greenwhite", "whitegreen", "wg"],
		gu : ["greenblue", "bluegreen", "ug"],
		"2w" : ["twowhite", "2white", "whitetwo", "w2", "white2"],
		"2u" : ["twoblue", "2blue", "bluetwo", "u2", "blue2"],
		"2b" : ["twoblack", "2black", "blacktwo", "b2", "black2"],
		"2r" : ["twored", "2red", "redtwo", "r2", "red2"],
		"2g" : ["twogreen", "2green", "greentwo", "g2", "green2"],
		p : ["phyrexian"],
		pw : ["phyrexianwhite", "pwhite", "whitephyrexian", "whitep", "wp", "wphyrexian"],
		pu : ["phyrexianblue", "pblue", "bluephyrexian", "bluep", "up", "uphyrexian"],
		pb : ["phyrexianblack", "pblack", "blackphyrexian", "blackp", "bp", "bphyrexian"],
		pr : ["phyrexianred", "pred", "redphyrexian", "redp", "rp", "rphyrexian"],
		pg : ["phyrexiangreen", "pgreen", "greenphyrexian", "greenp", "gp", "gphyrexian"],
		"∞" : ["infinity"],
		h : ["half", "halfcolorless", "colorlesshalf"],
		hw : ["halfwhite", "halfw", "whitehalf", "whalf", "wh", "whiteh"],
		hu : ["halfblue", "halfu", "bluehalf", "uhalf", "uh", "blueh"],
		hb : ["halfblack", "halfb", "blackhalf", "bhalf", "bh", "blackh"],
		hr : ["halfred", "halfr", "redhalf", "rhalf", "rh", "redh"],
		hg : ["halfgreen", "halfg", "greenhalf", "ghalf", "gh", "greenh"]
	};

	exports.SYMBOL_OTHER =
	{
		t : ["tap"],
		q : ["untap"],
		artifact : [],
		creature : [],
		enchantment : [],
		instant : [],
		land : [],
		multiple : [],
		planeswalker : [],
		sorcery : [],
		power : [],
		toughness : [],
		chaosdice : ["chaos", "c"],
		planeswalk : [],
		forwardslash : []
	};

	exports.FIELD_TYPES =
	{
		layout       : "string",
		name         : "string",
		names        : ["string"],
		manaCost     : "string",
		cmc          : "number",
		colors       : ["string"],
		type         : "string",
		supertypes   : ["string"],
		types        : ["string"],
		subtypes     : ["string"],
		rarity       : "string",
		text         : "string",
		flavor       : "string",
		artist       : "string",
		number       : "string",
		power        : "string",
		toughness    : "string",
		loyalty      : "number",
		multiverseid : "number",
		variations   : ["number"],
		imageName    : "string",
		watermark    : "string",
		border       : "string",
		hand         : "number",
		life         : "number",
		rulings      : ["object"],
		foreignNames : ["object"],
		printings    : ["string"],
		originalText : "string",
		originalType : "string",
		timeshifted  : "boolean",
		reserved     : "boolean",
		source       : "string",
		releaseDate  : "string",
		legalities   : {}
	};

	exports.ORACLE_FIELDS = ["layout", "name", "names", "manaCost", "cmc", "colors", "type", "supertypes", "types", "subtypes", "text", "power", "toughness", "loyalty", "hand", "life", "rulings", "foreignNames", "printings", "legalities"];
	exports.EXTRA_FIELDS = ["rulings", "foreignNames", "printings", "originalText", "originalType", "legalities", "source"];
	exports.SET_SPECIFIC_FIELDS = ["rarity", "artist", "flavor", "number", "multiverseid", "variations", "watermark", "border", "timeshifted", "reserved", "releaseDate", "originalText", "originalType"];

	exports.VINTAGE_BANNED = ["Advantageous Proclamation", "Amulet of Quoz", "Backup Plan", "Brago's Favor", "Bronze Tablet", "Chaos Orb", "Contract from Below", "Darkpact", "Demonic Attorney", "Double Stroke", "Falling Star", "Immediate Action", "Iterative Analysis", "Jeweled Bird", "Muzzio's Preparations", "Power Play", "Rebirth", "Secret Summoning", "Secrets of Paradise", "Sentinel Dispatch", "Shahrazad", "Tempest Efreet", "Timmerian Fiends", "Unexpected Potential", "Worldknit"];
	exports.VINTAGE_RESTRICTED = ["Ancestral Recall", "Balance", "Black Lotus", "Brainstorm", "Channel", "Demonic Consultation", "Demonic Tutor", "Fastbond", "Flash", "Gifts Ungiven", "Imperial Seal", "Library of Alexandria", "Lion’s Eye Diamond", "Lotus Petal", "Mana Crypt", "Mana Vault", "Memory Jar", "Merchant Scroll", "Mind’s Desire", "Mox Emerald", "Mox Jet", "Mox Pearl", "Mox Ruby", "Mox Sapphire", "Mystical Tutor", "Necropotence", "Ponder", "Sol Ring", "Strip Mine", "Thirst for Knowledge", "Time Vault", "Time Walk", "Timetwister", "Tinker", "Tolarian Academy", "Trinisphere", "Vampiric Tutor", "Wheel of Fortune", "Windfall", "Yawgmoth’s Bargain", "Yawgmoth’s Will"];
})(typeof exports==="undefined" ? window.C={} : exports);
