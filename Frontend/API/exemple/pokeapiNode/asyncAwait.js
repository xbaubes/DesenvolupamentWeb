async function obtenirTipusPokemon() {
    try {
        // Fer la petició a l'API per obtenir els tipus de Pokémon
        const resposta = await fetch('https://pokeapi.co/api/v2/type');
        
        // Comprovar si la resposta és correcta (codi 200)
        if (!resposta.ok) {
            throw new Error('Network response was not ok ' + resposta.statusText);
        }
        
        // Convertir la resposta a JS Object
        const data = await resposta.json();

        // Processar les dades: mostrar els tipus de Pokémon i la seva URL
        for (const it in data.results) {
            console.log(data.results[it].url);
            console.log(data.results[it].name);
        }

        // Per cada tipus de Pokémon, fer una altra petició per obtenir els Pokémon associats a aquest tipus
        for (const tipus of data.results) {
            const respostaTipus = await fetch(tipus.url);
            const tipusData = await respostaTipus.json();

            console.log("***** " + tipus.name + " *****"); // Mostrem el tipus

            let resultat = "";
            for (const it in tipusData.pokemon) {
                resultat += tipusData.pokemon[it].pokemon.name + ", "; // Mostrar tots els Pokémon associats al tipus
            }
            console.log(resultat);
        }

    } catch (error) {
        // Control d'errors si alguna petició falla
        console.error('Error fetching types:', error);
    }
}

// Cridar la funció per obtenir els tipus de Pokémon
obtenirTipusPokemon();
