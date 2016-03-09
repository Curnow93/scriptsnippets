(function(){

	var now = new Date();
	
	var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	var date = ((now.getDate() < 10) ? "0" : "") + now.getDate();
	
	function fourDigits(number){
		return (number < 1000) ? (number + 1900) : number;
	}
	
	var today = day[now.getDay()] + " " +
				month[now.getMonth()] + " " +
				date + ", " +
				(fourDigits(now.getYear()));
	
	var hour = ((now.getHours() < 10) ? "0" :"") + now.getHours();
	var minute = ((now.getMinutes() < 10) ? "0" : "") + now.getMinutes();
	var second = ((now.getSeconds() < 10) ? "0" : "") + now.getSeconds();
	
	var time = hour + ":" + minute + ":" + second;
	
	document.write(today + "<br />");
	document.write(time);
	console.log("time = " + time);

})();