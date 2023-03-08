/**
 * @author Xavier Baubes Parramon <xbaubes@xtec.cat> feat. ChatGPT
**/

// Obtenim les miniatures
var miniatures = document.querySelectorAll("#galeria img");

// Obtenim l'element on es mostrarà la imatge gran
var imatgeGran = document.getElementById("imatge-gran");
    //forma alternativa:
    //var imatgeGran = document.querySelector("#imatge-gran");

// Afegim un esdeveniment de clic a cada miniature
for (let miniatura of miniatures)
{
    miniatura.addEventListener("click", function(e) {
        // Obtenim la ruta de la imatge gran a traves del dataset 'data-gran'
        console.log(e)
        let rutaGran = e.target.dataset.gran;
            //formes alternatives:
            //let rutaGran = this.dataset.gran;
            //let rutaGran = miniatura.dataset.gran;

        // Mostrar la imatge gran
        imatgeGran.innerHTML = "<img src='" + rutaGran + "' alt='Imatge gran'>";
            //forma alternativa (createElement):
            //imatgeGran.innerHTML = "";
            //let imatge = document.createElement("img"); // Creem element image
            //imatge.src = rutaGran;
            //imatge.alt = "Imatge gran";
            //imatgeGran.appendChild(imatge); // Afegim l element imatge a l element 'imatge-gran'
    });
}
	//forma alternativa:
	/*
	miniatures.forEach(function(miniatura) {
		// ...
	});
	*/
