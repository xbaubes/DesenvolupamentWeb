/**
 * Basic automated XML reading
 * @author Xavier Baubes Parramon <xbaubes@xtec.cat>
 */

var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function()
{
	if (this.readyState == 4 && this.status == 200) {
		ops(this);
	}
}
xhr.open("GET", "cotxes.xml", true)
xhr.send()

function ops(xhr)
{
	var div = document.getElementById("demo")
	var xmlResponse = xhr.responseXML.documentElement
	//console.log(xmlResponse)

	var firstTag = xmlResponse.querySelectorAll("*")[0].tagName
	var firstElemTag = xmlResponse.querySelectorAll(firstTag)
	//console.log(firstElemTag)

	for (var i = 0; i < firstElemTag.length; i++)
	{
		//console.log(firstElemTag[i])
		div.innerHTML += firstElemTag[i].attributes[0].nodeValue //registrem atribut
		div.innerHTML += "<br><br>"
		var fills = firstElemTag[i].children
		//console.log(fills)
		for (var i2 = 0; i2 < fills.length; i2++)
		{
			div.innerHTML += fills[i2].nodeName + ": " + fills[i2].textContent + "<br>"
		}
		div.innerHTML += "<hr>"
	}
}
