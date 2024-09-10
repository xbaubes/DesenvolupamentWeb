// Importa les funcions des de mates.js
const { suma, resta, multiplicacio, divisio } = require('./mates.js');

// Funció per imprimir els resultats de les operacions
function imprimirResultats(a, b) {
    console.log('Suma: ' + a + ' + ' + b + ' = ' + suma(a, b));
    console.log('Resta: ' + a + ' - ' + b + ' = ' + resta(a, b));
    console.log('Multiplicació: ' + a + ' * ' + b + ' = ' + multiplicacio(a, b));
    console.log('Divisió: ' + a + ' / ' + b + ' = ' + divisio(a, b));
}

// Valors per a les operacions
const a = 10;
const b = 5;

// Imprimir els resultats
imprimirResultats(a, b);
