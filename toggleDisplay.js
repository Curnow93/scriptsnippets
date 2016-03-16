function toggle(obj){
	var elm = document.getElementById(obj);
	
	if (elm.style.display != "none"){
		elm.style.display = "none";
	}
	else{
		elm.style.display = "";
	}

}