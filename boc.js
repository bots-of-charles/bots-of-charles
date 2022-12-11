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

function translate()
{
	if (sessionStorage.hasOwnProperty("lang"))
	{
		let langswitch={"es":"en","en":"es"};
		let currlang=sessionStorage["lang"];
		sessionStorage["lang"]=langswitch[currlang];
	}
	else
	{
		sessionStorage.setItem("lang","es");
	}

	for (let id in tldata)
	{
		//console.log(id);
		let elem=document.getElementById(id);
		let text_old=elem.innerHTML;
		let text_new=tldata[id];
		elem.innerHTML=text_new;
		tldata[id]=text_old;
	}
}

function init()
{
	page_update(true);
	if (sessionStorage.hasOwnProperty("lang"))
	{
		if (sessionStorage["lang"]==="es")
		{
			translate();
			sessionStorage["lang"]="es"
		};
	};
	document.getElementById("nvaf")["style"]="display:block;";
};

window.onload=init;
