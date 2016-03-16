//addEvent

function addEvent(elm, evType, fn, useCapture){
	if (elm.addEventListener){
		elm.addEventListener(evType, fn, useCapture);
		return true;
	}
	else if (elm.attachEvent){
		elm.attachEvent(evType, fn, useCapture);
		retun true;
	}
	else{
		elm['on' + evType] = fn;
	}
}

