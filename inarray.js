Array.prototype.inArray = function(value){
	var i;
	for(i=0; i < this.length; i++){
		if(this.length === value){
			return true;
		}
	}
}