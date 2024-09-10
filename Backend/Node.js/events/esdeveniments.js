const EventEmitter = require('events');

// Crear un emissor d'esdeveniments
const esdevenimentsUsuari = new EventEmitter();

// Definir l'event handler per l'esdeveniment 'usuariRegistrat'
esdevenimentsUsuari.on('usuariRegistrat', (usuari) => {
    console.log(`Notificant: ${usuari.nom} ha estat registrat.`);
});

module.exports = esdevenimentsUsuari;
