const fs = require('fs');
const path = './productes.json';

// Exercici 1: Llegir el fitxer JSON i retornar un array d'objectes
function llegirProductes() {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error en llegir el fitxer JSON:", error);
        return [];
    }
}

// Exercici 2: Mostrar un producte
function mostrarProducte (producte) {
    console.log(`Nom: ${producte.nom}`);
    console.log(`Marca: ${producte.marca}`);
    console.log(`Categoria: ${producte.categoria}`);
    console.log(`Preu: ${producte.preu} €`);
    console.log(`Disponible: ${producte.disponible ? 'Sí' : 'No'}`);
    console.log('Característiques:');
    for (const clau in producte.caracteristiques) {
        console.log(`> ${clau}: ${producte.caracteristiques[clau]}`);
    }
    console.log('---');
}

// Exercici 3: Mostrar la llista de productes
function mostrarProductes (productes) {
    productes.forEach(mostrarProducte);
}

// Exercici 4: Mostrar producte segons ID
function mostrarProducteID (productes, id) {
    const producte = productes.find(p => p.id === id);
    if (producte)
        mostrarProducte(producte);
}

// Exercici 5: Exemple d'ús de les funcions
const productes = llegirProductes();

console.log("\n*** Producte posicio 1:");
mostrarProducte(productes[1]);

console.log("\n*** Llista completa de productes:");
mostrarProductes(productes);

console.log("\n*** Producte amb ID 3:");
mostrarProducteID(productes, 3);
