function copyIt(field){
	var selectedText = document.selection;
	if (selectedText.type == "Text"){
		var newRange = selectedText.createRange();
		field.focus();
		field.value = newRange.text;
	}
	else{
		alert("Select text in the page and then press this button");
	}
}