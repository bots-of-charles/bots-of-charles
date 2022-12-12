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
		console.log(id);
		let elem=document.getElementById(id);
		let text_old=elem.innerHTML;
		let text_new=tldata[id];
		elem.innerHTML=text_new;
		tldata[id]=text_old;
	}
}
