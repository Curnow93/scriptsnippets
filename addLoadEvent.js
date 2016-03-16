//addLoadEvent

function addLoadEvent(){
	var oldonLoad = window.onload;
	if (typeof window.onload != "function"){
		window.onload = func;
	}
	else{
		oldonload();
		func();
	}
}