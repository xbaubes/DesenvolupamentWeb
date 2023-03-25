const urlBase = "https://pokeapi.co/api/v2/pokemon/";
const firstPokemon = 1;
const numPokemon = 9;

const asyncUnordered = document.querySelector("#asyncUnordered");
const asyncOrderedP = document.querySelector("#asyncOrderedP");
const asyncOrderedA = document.querySelector("#asyncOrderedA");

function showPokemon(pokemon,div)
{
    console.log(pokemon.name);
    console.log(pokemon);

    let img = document.createElement('img');
    img.src = pokemon.sprites.front_default;
    img.alt = pokemon.name;
    
    let text = document.createElement('p');
    let pokeName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    text.textContent = pokeName;
    
    let newdiv = document.createElement('div');
    newdiv.classList.add('image-container');
    newdiv.appendChild(img);
    newdiv.appendChild(text);
    div.appendChild(newdiv);
}

/* without control */

for (let i = firstPokemon; i <= numPokemon; i++) {
    getPokemon(`${urlBase}${i}`);
}

function getPokemon(pokeEndpoint)
{
    fetch(pokeEndpoint) //fem la crida a l endpoint de l api
        .then(response => response.json())
        .then((pokemon) => showPokemon(pokemon,asyncUnordered)) //en el moment que obte un pokemon crida showPokemon
        .catch((error) => {
            console.error("Error fetching pokemon:", error);
    });
}

/* control with promises */

let promises = [];

for (let i = firstPokemon; i <= numPokemon; i++) {
    let pokeEndpoint = `${urlBase}${i}`;
    //un promesa representa la possible finalitzacio (o fracas) d una operacio asincronica, permet definir funcions que s executaran al completar se l operacio
    promises.push(fetch(pokeEndpoint).then(response => response.json()));
}

Promise.all(promises) //valida que totes les promeses de l array es validin correctament
    .then(results => {
        //ordenar els resultats segons id del pokemon
        results.sort((a, b) => a.id - b.id);

        for(let poke of results) {
            showPokemon(poke,asyncOrderedP);
        }
    })
    .catch((error) => {
        console.error("Error fetching pokemon:", error);
    });

/* control with await/async */

async function fetchPokemon() { //declarem la funcio asincrona per poder usar await, awiat fa que les funcions esperin fins que s obte el resultat
    let pokemons = [];
    for (let i = firstPokemon; i <= numPokemon; i++) {
        const pokeEndpoint = `${urlBase}${i}`;
        const response = await fetch(pokeEndpoint);
        const pokemon = await response.json();
        pokemons.push(pokemon);
    }
    
    pokemons.sort((a, b) => a.id - b.id);
  
    for (const poke of pokemons) {
      showPokemon(poke, asyncOrderedA);
    }
}
  
fetchPokemon()
    .catch(error => {
        console.error("Error fetching pokemon:", error);
    });
