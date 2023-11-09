var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
	{
		console.log(typeof this.responseText);
		console.log(this.responseText);
		
		/** TO DO **/
    }
};

xhttp.open("GET", "cotxes.json", true);
xhttp.send();
