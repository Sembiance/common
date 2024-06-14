/** returns a hex encoded string */
Uint8Array.prototype.asHex ||= function asHex(pretty)
{
	const BYTE_TO_HEX = ["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];	// eslint-disable-line @stylistic/comma-spacing
	const hexOctets = new Array(this.length);	// eslint-disable-line unicorn/no-new-array

	for (let i=0;i<this.length;++i)
		hexOctets[i] = BYTE_TO_HEX[this[i]];

	return hexOctets.join(pretty ? " " : "");
};

/** copies data from a region of the current array to the target */
Uint8Array.prototype.copy ||= function copy(target, targetStart=0, sourceStart=0, sourceEnd=null)
{
	if(sourceEnd===null)
		sourceEnd = this.length;
	
	const sourceData = Uint8Array.from(this.subarray(sourceStart, sourceEnd));
	for(let i=0;i<sourceData.length;i++)
		target.setUInt8(targetStart+i, sourceData[i]);
};

/** allows finding more advanced items such as strings or sub arrays */
Uint8Array.prototype.indexOfX ||= function indexOfX(x)
{
	const m = typeof x==="string" ? new TextEncoder().encode(x) : (x instanceof Uint8Array ? x : Uint8Array.from(typeof x[Symbol.iterator]==="function" ? x : [x]));
	
	let i=0, subi=0;
	for(const v of this)
	{
		if(v===m[subi])
		{
			subi++;
			i++;
			if(m.length===subi)
				return i-m.length;
			continue;
		}

		subi = 0;
		i++;
	}
	return -1;
};

/** returns len bytes at offset decoded as a string */
Uint8Array.prototype.getString ||= function getString(offset, len, encoding="utf-8")
{
	return new TextDecoder(encoding).decode(this.subarray(offset, offset+len));
};

/** returns len bytes at offset decoded as a string */
Uint8Array.prototype.getPascalString ||= function getPascalString(offset, encoding="utf-8")
{
	const len = this[offset];
	return new TextDecoder(encoding).decode(this.subarray(offset+1, offset+1+len));
};

/** creates convienance methods for set/get int/uint values */
/** getUInt32LE(offset=0)  or  setUInt32LE(offset=0, value) */
for(const t of ["get", "set"])
{
	for(const x of [8, 16, 32, 64])
	{
		for(const e of ["BE", "LE"])
		{
			for(const u of ["", "U"])
			{
				const name = `${t}${x===64 ? "Big" : ""}${u}Int${x}${x===8 ? "" : e}`;
				Uint8Array.prototype[name] ||= function getSetInt(offset=0, value)
				{
					const a=[offset];
					if(t==="set")
						a.push(value);
					if(x!==8)
						a.push(e==="LE");
					return new DataView(this.buffer)[`${t}${x===64 ? "Big" : ""}${u==="U" ? "Uint" : "Int"}${x}`](...a);
				};
			}
		}
	}
}
