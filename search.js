const thing_coll=document.getElementsByClassName("thing");

function sort_results(results_list)
{
	let score_list=[];
	
}

function search_match_keywords(wlist_test,wlist_reference)
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
			let matches=0;
			let thing=thing_coll[idx];
			let thing_text=thing.getElementsByClassName("the_text")[0];

			let data_kwords=kwdata[thing_text.id].split(" ");
			data_kwords.push("/"+data_kwords[0]);
			matches=matches+search_match_keywords(search_txtsplit,data_kwords);

			/*
			let data_ftext=thing_text.innerText.toLowerCase().trim().replaceAll("\n",".").split(" ");
			let thing_matches_ftext=search_match_keywords(search_txtsplit,data_ftext);
			*/
			// console.log(thing_text.id+"\n\t"+thing_matches_ftext+"/"+data_ftext.length+"\n\t"+thing_matches_kwords+"/"+data_kwords.length)

			if (matches>0) 
			{
				results_raw.push({tid:thing_text.id,score:matches});
			};

			idx++;
		};

		let results_ok=sort_results(results_raw);
		let results_qtty=results_raw.length;

		idx=0;
		while (idx<results_qtty)
		{
			let elem=results_ok[idx];
			let elem_text=document.getElementById(elem.tid).parentElement.innerHTML;
			let results_section=document.getElementById("search_results");

			let score_display="";
			let i=0;
			while (i<elem.score)
			{
				score_display=score_display+" ⭐";
				i=i+1;
			}
			score_display=score_display.trim()
			results_section.innerHTML=results_section.innerHTML+"\n\t\t\t\t\t<div class=\"thing\">\n\t\t\t\t\t<p>"+score_display+"</p>\n"+elem_text+"\n\t\t\t\t\t</div>";
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

//😐
//👌
//⭐
//✅
