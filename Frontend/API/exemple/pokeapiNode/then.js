fetch('https://pokeapi.co/api/v2/type') //Obre aquesta URL al navegador per veure n les dades
    .then(response => {
        // Comprovar si la resposta és correcta (codi 200)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Convertir la resposta a JS Object
    })
    .then(data => {
        // Aquí és on es processen les dades
        for(it in data.results) { // Mostrem tipus de pokemon i URL on se ns retornaran llistats
            console.log(data.results[it].url);
            console.log(data.results[it].name);
        }
        data.results.forEach(tipus => {
            fetch(tipus.url)
                .then(response => response.json())
                .then(tipusData => {
                    console.log("***** " + tipus.name + "*****"); // Mostrem el tipus
                    let resultat = "";
                    for(it in tipusData.pokemon) {
                        resultat += tipusData.pokemon[it].pokemon.name + ", "; // Per cada tipus mostrarem el nom de tots els pokemon que el tenen
                    }
                    console.log(resultat);
                });
        });
    })
    .catch(error => {
        // Control d'errors per si hi ha problemes amb la petició
        console.error('Error fetching types:', error);
    });
