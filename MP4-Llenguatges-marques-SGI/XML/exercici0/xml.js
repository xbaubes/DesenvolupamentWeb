/**
 * Basic automated XML reading
 * @author Xavier Baubes Parramon <xbaubes@xtec.cat>
 */

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function()
{
	if (this.readyState == 4 && this.status == 200) {
		ops(this);
	}
}
xhr.open("GET", "cotxes.xml", true);
xhr.send();

function ops(xhr)
{
	var div = document.getElementById("demo") //element HTML on afegirem la informacio de l XML
	var xmlResponse = xhr.responseXML
	console.log("xmlResponse:")
	console.log(xmlResponse)
	if(xmlResponse != null) //si el fitxer no esta buit
	{
		xmlResponse = xmlResponse.documentElement
		var allTags = xmlResponse.querySelectorAll("*") //obtenim totes les etiquetes
		//console.log("allTags:")
		//console.log(allTags)
		if(allTags.length > 0) //si el fitxer inclou etiquetes
		{
			firstTag = allTags[0].tagName
			var allElemTag = xmlResponse.querySelectorAll(firstTag) //obtenim l etiqueta principal dels elements
			for (var i = 0; i < allElemTag.length; i++)
			{
				//console.log("allElemTag[" + i + "]:")
				//console.log(allElemTag[i])
				div.innerHTML += allElemTag[i].attributes[0].nodeValue //registrem atribut
				div.innerHTML += "<br><br>"
				var fills = allElemTag[i].children
				//console.log("fills:")
				//console.log(fills)
				for (let fillIt of fills)
				{
					div.innerHTML += fillIt.nodeName + ": " + fillIt.textContent + "<br>"
				}
				div.innerHTML += "<hr>"
			}
		}
	}
}
