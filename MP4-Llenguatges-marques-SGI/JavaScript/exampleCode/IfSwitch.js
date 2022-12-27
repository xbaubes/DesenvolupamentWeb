"use strict";

let numero = 0;

/* IF */

if (numero == 4)
{
    console.log("numero es 4");
}
else if (numero == 5 || numero == 6)
{
    console.log("numero es 5 o 6");
}
else if (numero < 0)
{
    console.log("numero es mes petit que 0");
}
else{
    console.log("numero no es ni 4 ni 5 ni 6 ni negatiu, es: " + numero);
}

/* SWITCH */

switch (numero) {
    case 4:
        console.log("numero es 4");
        break;
    case 5 || 6:
        console.log("numero es 5 o 6");
        break;
    default:
        console.log("numero no es ni 4 ni 5 ni 6, es: " + numero);
}
