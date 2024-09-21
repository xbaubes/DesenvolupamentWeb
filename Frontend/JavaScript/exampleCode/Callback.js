"use strict";

// Definició de la Funció Callback: Primer, defineixes una funció que serà passada com a callback.
function saludar(nom) {
    console.log(`Hola, ${nom}!`);
}

// Funció que accepta una funció com a paràmetre i la crida en un moment determinat.
function processarUsuari(name, funcioCallback) {
    // Fer alguna operació
    console.log("Processant l'usuari...");
    // Cridar la funció callback
    funcioCallback(name);
}

// Cridar la Funció amb el Callback: Finalment, passes la funció callback com a argument quan crides la funció que l'accepta.
processarUsuari("Joan", saludar);

// ************************************

// Funció que aplica una operació sobre un número i mostra el resultat
function aplicarOperacio(num, operacioCallback, resultatCallback) {
    const resultat = operacioCallback(num);
    resultatCallback(resultat);
}

// Definim algunes operacions
function quadrat(x) {
    return x * x;
}

function doble(x) {
    return x * 2;
}

// Definim el callback per mostrar el resultat
function mostrarResultat(resultat) {
    console.log("El resultat és: " + resultat);
}

// Utilitzem la funció amb diferents operacions
aplicarOperacio(5, quadrat, mostrarResultat); // El resultat és: 25
aplicarOperacio(5, doble, mostrarResultat);   // El resultat és: 10

// ***** Callback en asincronisme *****

// Exemple amb una operació asíncrona (simulada amb setTimeout):

function obtenirDades(callback) {
    console.log('Esperant dades...'); // Log abans de començar l'operació asíncrona

    //sintaxi: setTimeout(callback, delay, [args...]);
    setTimeout(() => {
      const dades = 'Dades obtingudes';
      callback(dades); // Crida el callback amb les dades obtingudes
    }, 3000);
  
    console.log('Operació asíncrona iniciada.'); // Log immediatament després de la crida
}
  
  // Crida la funció obtenirDades amb un callback que mostrarà les dades obtingudes
obtenirDades((dades) => {
    console.log('Callback cridat. Operació asíncrona finalitzada. Dades:', dades); // Log quan el callback és cridat
});
