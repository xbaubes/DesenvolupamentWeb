// 1.

const habitatge = {
    tipus: "Pis",
    ubicacio: {
        adreca: "Carrer Toledo, 78",
        ciutat: "Olot"
    },
    caracteristiques: {
        superficie_m2: 85,
        any_construccio: 1998,
        habitacions: 3,
        banys: 2,
        garatge: true
    }
};


//1a) fes una funcio que imprimeixi una descripcio de les caracteristiques de l'habitatge
function imprimirDescripcio(habitatge) {
    let disposaGaratge;
    if(habitatge.caracteristiques.garatge) disposaGaratge = "Disposa de garatge"
    else disposaGaratge = "No disposa de garatge";
    console.log(`${habitatge.tipus} situat a ${habitatge.ubicacio.adreca}, ${habitatge.ubicacio.ciutat}. Té ${habitatge.caracteristiques.habitacions} habitacions i ${habitatge.caracteristiques.banys} banys. ${disposaGaratge}.`);
}
//Si garatge és false, inclourem: "No disposa de garatge".

// Exemple d'ús
imprimirDescripcio(habitatge);


//1b) Crea un objecte preu i afegeix-lo a habitatge. Ha d'incloure el preu de venda, el preu de lloguer i les despeses de la comunitat.

let preu = {
    preu_venda: 110000,
    preu_lloguer: 600,
    despeses_comunitat: 60
};

habitatge.preu = preu;
console.table(habitatge);


//2.

const persona = {
    nom: "Ramon",
    sexe: "home",
    edat: 35
};
console.log(persona);


//2a) Crea una funció genèrica que retorni un string amb la informació continguda en qualsevol objecte que només contingui valors simples com strings o enters

function jsObject(obj)
{
    let x = "";
    for (let propietat in obj) {
        x += `${propietat} -> ${obj[propietat]}\n`;
    }
    return x;
}

console.log(jsObject(persona));


//2b) Hem creat un array d'objectes persona, crea una funció que retorni un array només amb els objectes persona majors de 18 anys.

const persones = [
    { nom: "Joan", sexe: "home", edat: 17 },
    { nom: "Marta", sexe: "dona", edat: 28 },
    { nom: "Pere", sexe: "home", edat: 19 },
    { nom: "Anna", sexe: "dona", edat: 16 },
];
  
function imprimirMajors(array) {
    let arrayResult = [];
    array.forEach(persona => {
      if (persona.edat > 18) {
        arrayResult.push(persona);
      }
    });
    return arrayResult;
}
  
console.table(imprimirMajors(persones));


//2c) Compti el nombre de persones per sexe en l'array de persones
function comptarPersonesPerSexe(persones) {
    let comptador = {};

    for (const persona of persones) {
        const sexe = persona.sexe;
        
        // Inicialitza el comptador per a cada sexe si no existeix
        if (!comptador[sexe]) {
            comptador[sexe] = 0;
        }
        
        // Incrementa el comptador per al sexe actual
        comptador[sexe]++;
    }

    return comptador;
}

function comptarPersonesPerSexeNoGeneric(persones) {
    let home = "home";
    let dona = "dona";
    let comptador = {};
    comptador.home = 0;
    comptador.dona = 0;    

    persones.forEach(persona => {
        if (persona.sexe === home)
            comptador.home++;
        else if (persona.sexe === dona)
            comptador.dona++;
    });

    return comptador;
}
    
console.log(comptarPersonesPerSexe(persones));
console.log(comptarPersonesPerSexeNoGeneric(persones));


//3.
const categories = ["cotxes", "roba"];

// Matriu de marques
const marques = [
    ["Toyota", "Ford", "BMW"],   // Marques de cotxes
    ["Zara", "Nike", "Adidas"]    // Marques de roba
];


//3a) Generar un js object a partir de 1 array i 1 matriu.

let objecte = {};

// Afegim categories i les marques respectives a l'objecte
categories.forEach((categoria, index) => {
    objecte[categoria] = marques[index];
});

console.table(objecte);

//NoGeneric

let objecte2 = {};

objecte2[categories[0]] = marques[0];
objecte2[categories[1]] = marques[1];

console.table(objecte2);
