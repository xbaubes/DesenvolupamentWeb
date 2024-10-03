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

        let resultatFinal = {};

        // Per cada tipus de Pokémon, fer una altra petició per obtenir els Pokémon associats a aquest tipus
        for (const tipus of data.results) {
            const respostaTipus = await fetch(tipus.url);
            const tipusData = await respostaTipus.json();

            // Inicialitzar l'array on guardarem els Pokémon si no existeix encara
            if (!resultatFinal[tipus.name])
                resultatFinal[tipus.name] = [];

            for (const it in tipusData.pokemon) {
                resultatFinal[tipus.name].push(tipusData.pokemon[it].pokemon.name); // Afegir tots els Pokémon associats al tipus
            }
        }

        return resultatFinal;

    } catch (error) {
        // Control d'errors si alguna petició falla
        console.error('Error fetching types:', error);
        return false;
    }
}

// Cridar la funció per obtenir els tipus de Pokémon
obtenirTipusPokemon().then(response => {
    for(let it in response)
    {
        console.log("***** " + it + " *****"); // Mostrem el tipus

        let resultat = "";
        for(let itArray of response[it]) // Recorrem l'array de Pokémon associat al tipus
        {
            resultat += itArray + ", "; // Mostrar tots els Pokémon associats al tipus
        }
        console.log(resultat);
    }
});
