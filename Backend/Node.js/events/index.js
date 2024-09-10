const esdevenimentsUsuari = require('./esdeveniments');

function registrarUsuari(nom) {
    console.log(`Registrant usuari: ${nom}`); // Simular registre d'usuari

    // Emet l'event 'usuariRegistrat'
    esdevenimentsUsuari.emit('usuariRegistrat', { nom });
}

// Registrar un usuari
registrarUsuari('John Doe');
