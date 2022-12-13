const thing_coll=document.getElementsByClassName("thing");

function search_matches(wlist_test,wlist_reference)
{
	let matches=0;
	let idx=0;
	let idx_max=wlist_test.length;
	while (idx<idx_max)
	{
		let it_matches=false;
		let word_curr=wlist_test[idx];

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

	document.getElementById("search_results").innerHTML="";

	if (search_txtsplit.length>0 && search_raw.length>1)
	{
		console.log("Searching: "+search_raw);
		let results_raw=[];
		let idx=0;
		let idx_max=thing_coll.length;
		while (idx<idx_max)
		{
			let thing=thing_coll[idx];
			let thing_text=thing.getElementsByClassName("the_text")[0];

			let data_kwords=kwdata[thing_text.id].split(" ");
			data_kwords.push("/"+data_kwords[0]);
			let thing_matches_kwords=search_matches(search_txtsplit,data_kwords);

			let data_ftext=thing_text.innerText.toLowerCase().trim().replaceAll("\n",".").split(" ");
			let thing_matches_ftext=search_matches(search_txtsplit,data_ftext);

			// console.log(thing_text.id+"\n\t"+thing_matches_ftext+"/"+data_ftext.length+"\n\t"+thing_matches_kwords+"/"+data_kwords.length)

			if (thing_matches_kwords>0 || thing_matches_ftext>0) 
			{
				results_raw.push({id:thing_text.id,score:thing_matches_kwords+thing_matches_ftext});
			};

			idx++;
		};

		// TODO: sort by score

		idx=0;
		while (idx<results_raw.length)
		{
			let elem_id=results_raw[idx].id;
			let elem_text=document.getElementById(elem_id).parentElement.innerHTML;
			let results_section=document.getElementById("search_results");
			results_section.innerHTML=results_section.innerHTML+"\n\t\t\t\t\t<div class=\"thing\">\n"+elem_text+"\n\t\t\t\t\t</div>";
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
		document.getElementById("search_results").innerHTML="";
		elem_page_all["style"].display="block";
		elem_page_search["style"].display="none";
	}
	else
	{
		elem_page_search["style"].display="block";
		elem_page_all["style"].display="none";
	}
};
