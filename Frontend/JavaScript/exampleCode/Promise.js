"use strict";

function simulateAsyncOperation() {
    let success = true;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve('Operació exitosa'); // Si la promesa s'ha resolt correctament usem resolve, sinó usem reject
        } else {
          reject('Operació fallida');
        }
      }, 3000);
    });
}
  
simulateAsyncOperation()
    .then(result => {
      console.log(result); // Operació exitosa
    })
    .catch(error => {
      console.log(error); // Operació fallida
    })
    .finally(() => {
      console.log('Operació acabada');
    });

console.log('Operació asíncrona iniciada.');
