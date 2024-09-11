"use strict";

// Funció que retorna una promesa que es resol després de 3 segons
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); // La funcio reject no es necessaria ja que la promesa sempre es resoldra positivament
}
  
// Funció asíncrona
async function hello() {
    console.log('Abans de la pausa...');
    
    // Aquí utilitzem await per esperar que la promesa de "delay" es resolgui
    await delay(3000);
    
    console.log('Després de la pausa de 3 segons');
}
  
hello(); // Cridem la funció asíncrona

console.log('Operació asíncrona iniciada.');
