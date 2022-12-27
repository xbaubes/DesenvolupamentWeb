"use strict";

const cars = new Array("Saab", "Volvo", "BMW"); //new Array()

const fullCars = ["Saab", "Volvo", "BMW"]; //[]

const emptyCars = [];
emptyCars[0]= "Saab";
emptyCars[1]= "Volvo";
emptyCars[emptyCars.length]= "BMW"; // afegit a la primera posicio buida

console.log(fullCars, emptyCars);
console.log(fullCars[1]);
console.log(emptyCars[emptyCars.length -1]); //obtenim l ultim element

/*******/

let sum = 0;
const numbers = [5, 5, 5];

numbers.forEach(mySumFunction);
function mySumFunction(item) { //la funcio esta en el mateix ambit que l array
    sum += item;
}
console.log(sum);

/*******/

const myNumbers = [45, 4, 9, 16, 25];

const numbers2 = myNumbers.map(myMultiFunction);
function myMultiFunction(value, index, array) { // els parametres es passen automaticament i son opcionals
    console.log(index);
    console.log(array);
    return value * 2; // multiplica per dos cada element de l array
}
console.log(numbers2);

/*******/

const myGirls = ["Cecilie", "Lone"];
const over4 = myGirls.filter(myGirl => myGirl.length > 4); // amb arrow function
console.log(over4);
