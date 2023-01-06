const thing_coll=document.getElementsByClassName("thing");

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

		if ((!it_matches && wlist_reference.length>3) && (wlist_reference.indexOf(word_curr.slice(0,-1))>-1))
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

function sort_results(raw_results_list)
{
	raw_results_list.sort(
		function compare(a,b)
		{
			if (a.score > b.score)
			{
				return -1;
			}
			else if (a.score < b.score)
			{
				return 1;
			}
			else
			{
				return 0;
			};
		}
	);
	return raw_results_list;
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
			let cmd_name=document.getElementsByTagName("strong")[0].innerText;

			let matches=search_match_keywords(search_txtsplit,cmd_name+" "+thing_text.innerText);

			let keywords=thing.getElementsByClassName("kp")
			if (keywords.length>0)
			{
				let matches_kw=search_match_keywords(search_txtsplit,keywords[0].innerText);
				matches=matches+matches_kw;
			};

			let negatives=thing.getElementsByClassName("kn")
			if (keywords.length>0)
			{
				let matches_neg=search_match_keywords(search_txtsplit,negatives[0].innerText);
				if (matches_neg>0)
				{
					matches=0;
				};
			};

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
			console.log(elem);
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
