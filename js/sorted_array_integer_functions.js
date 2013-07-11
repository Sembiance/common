// Subtract sorted integer array b from a
function subtract(a, b)
{
	var ai=0, bi=0;
	var alen=a.length, blen=b.length;
	var results=[];

	while(ai<alen && bi<blen)
	{
		if(a[ai]<b[bi])
		{
			results.push(a[ai]);
			ai++;
		}
		else if(a[ai]>b[bi])
		{
			bi++;
		}
		else
		{
			ai++;
			bi++;
		}
	}

	return results;
}

// Intersection of sorted integer arrays a and b
function intersect(a, b)
{
	var ai=0, bi=0;
	var alen=a.length, blen=b.length;
	var results=[];

	while(ai<alen && bi<blen)
	{
		if(a[ai]<b[bi])
		{
			ai++;
		}
		else if(a[ai]>b[bi])
		{
			bi++;
		}
		else
		{
			results.push(a[ai]);
			ai++;
			bi++;
		}
	}

	return results;
}

// Union of sorted integer arrays a and b
function union(a, b)
{
	var ai=0, bi=0;
	var alen=a.length, blen=b.length;
	var results=[];

	while(ai<alen && bi<blen)
	{
		if(a[ai]<b[bi])
		{
			results.push(a[ai++]);
		}
		else if(b[bi]<a[ai])
		{
			results.push(b[bi++]);
		}
		else
		{
			ai++;
			results.push(b[bi++]);
		}
	}

	while(ai<alen)
		results.push(a[ai++]);
	while(bi<blen)
		results.push(b[bi++]);

	return results;
}