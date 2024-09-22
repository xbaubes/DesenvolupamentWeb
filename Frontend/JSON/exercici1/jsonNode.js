const fs = require('fs');  // Importa el mòdul fs

// Llegeix el fitxer JSON de manera síncrona
const data = fs.readFileSync('cotxes.json', 'utf-8');

console.log(data);

/** TO DO **/
