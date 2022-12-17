const pages=document.getElementsByClassName("page");
var page_curr=0;
var ipage=true;

// Pages system
function page_update()
{
	let pages_qtty=pages.length;
	let page_last=pages_qtty-1;
	const page_curr_saved=page_curr;

	if (page_curr>page_last)
	{
		page_curr=page_last;
	};

	if (page_curr<0)
	{
		page_curr=0;
	};

	let idx=0;
	let set_display;
	while (idx<pages_qtty) 
	{
		if (idx===page_curr)
		{
			set_display="display:block";
		}
		else
		{
			set_display="display:none";
		};
		pages[idx]["style"]=set_display;
		idx++;
	};

	let elem_pics=document.getElementById("nicepics")
	let elem_title=document.getElementById("th")
	if (elem_pics && elem_title)
	{
		let nd=""
		let bg=""
		if (page_curr>0)
		{
			nd="none";
			bg="transparent";
		}
		else
		{
			nd="block";
			bg="rgba(0, 0, 0, 0.75)"
		};
		elem_pics.style.display=nd;
		elem_title.style["background-color"]=bg;
	};

	if (window.scrollY>0)
	{
		window.scrollTo(0,0);
	};
};

function page_set(n)
{
	page_curr=n;
	page_update();
};

function page_prev()
{
	page_curr--;
	page_update();
};

function page_next()
{
	page_curr++;
	page_update();
};
