"use strict";

let valor1 = 5, valor2 = 4;

function multiplicacio1 (v1, v2) {
    return v1 * v2;
}
let resultat1 = multiplicacio1(valor1,valor2);

/* declaracio alternativa amb anonymous function */

let multiplicacio2 = (function (v1,v2) {
    return v1 * v2;
});
let resultat2 = multiplicacio2(valor1,valor2);

/* declaracio alternativa amb arrow function */

let multiplicacio3 = (v1,v2) => { return v1 * v2 };
let resultat3 = multiplicacio3(valor1,valor2);

/* resultats equivalents */

console.log("Resultat de la multiplicacio:" , resultat1 , resultat2, resultat3);
