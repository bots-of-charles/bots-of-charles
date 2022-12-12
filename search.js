const things_all=document.getElementsByClassName("thing");
const search_input=document.getElementById("search");

function search_now()
{
	let search_raw=search_input.value;
	search_raw.trim();
	if (search_raw.length>2)
	{
		console.log("Searching: "+search_raw);
	};
};

function search_reset()
{
	console.log("Resetting...")
};
