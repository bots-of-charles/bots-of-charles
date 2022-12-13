const thing_coll=document.getElementsByClassName("thing");

function search_matches(wlist_reference,wlist_reference)
{
	let matches=0;
	let idx=0;
	let idx_max=wlist_reference.length;
	while (idx<idx_max)
	{
		let it_matches=false;
		let word_curr=wlist_reference[idx];

		if (wlist_reference.indexOf(word_curr)>-1)
		{
			it_matches=true;
		};

		if ((!it_matches && word_curr.length>3) && (wlist_reference.indexOf(word_curr.slice(0,-1))>-1))
		{
			it_matches=true;
		};

		if (it_matches)
		{
			matches++;
		};

		idx++;
	};
	return matches;
};

function search_now()
{
	let search_elem=document.getElementById("search_input");
	let search_raw=search_elem.value;
	search_raw=search_raw.trim();
	search_raw=search_raw.toLowerCase();
	search_txtsplit=search_raw.split(" ");

	if (search_txtsplit.length>0 && search_raw.length>1)
	{
		console.log("Searching: "+search_raw);
		let results_raw=[];
		let idx=0;
		let idx_max=thing_coll.length;
		while (idx<idx_max)
		{
			//innerText → gives ya duh text

			let thing=thing_coll[idx];
			let thing_text=thing_now.getElementsByClassName("the_text")[0];

			let thing_text_stext=thing_text.innerText.toLowerCase().trim().replaceAll("\n",".").split(" ");

			let thing_kwlist=kwdata[thing_text.id].split(" ");
			let thing_kwlist_max=thing_kwlist.length;
			let thing_kwlist_matches=search_matching_keywords(search_txtsplit,thing_kwlist);

			console.log(thing_now_text.id+"kw :"+thing_kwlist_matches+"/"+thing_kwlist_max+" ("+100*(thing_kwlist_matches/thing_kwlist_max)+" %)");
			console.log(thing_now_text.id+"tm :");

			idx++;
		};
		search_elem.value="";
	};
};

function search_mode_switch()
{
	let elem_page_all=document.getElementById("page_all");
	let elem_page_search=document.getElementById("page_search");

	if (elem_page_all["style"].display==="none")
	{
		elem_page_all["style"].display="block";
		elem_page_search["style"].display="none";
	}
	else
	{
		elem_page_search["style"].display="block";
		elem_page_all["style"].display="none";
	}
};
