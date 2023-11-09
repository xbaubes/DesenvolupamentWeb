// TypeScript és un llenguatge de tipus estàtic, de manera que és necessari declarar el tipus de dades d'una variable
let nom: string = "Maria"; // "nom" és de tipus string

/* ----------- */

// TypeScript requereix declarar el tipus de dades dels paràmetres i del valor de retorn d'una funció
function sumar(a: number, b: number): number {
    return a + b;
}

function sumarIMostrar(a: number, b: number) {
    console.log(a + b);
}

let resultat: number = sumar(2, 3); // "resultat" és 5
sumarIMostrar(2, 3); // mostra 5 per consola

// Per elements HTML
let ele = document.querySelector("*");

function elementHTML(d:Element|null){ // pot ser un element HTML o null
  console.log(d);
}

elementHTML(ele);

/* ----------- */

// Declaració d'un array de nombres enters
let nombres: number[] = [1, 2, 3, 4, 5];

/* ----------- */

// També podem utilitzar classes per crear objectes més complexos i interfaces per descriure els elements a implementar per part de la classe
interface Persona {
    nom: string;
    edat: number;
}

class Treballador {
    nom: string;
    edat: number;
    salari: number;

    constructor(nom: string, edat: number, salari: number) {
        this.nom = nom;
        this.edat = edat;
        this.salari = salari;
    }

    saludar() {
        console.log(`Hola ${this.nom}`);
    }

    salariAnual(): number {
        return this.salari * 14;
    }
}

let treballador1 = new Treballador("Maria", 30, 2000);
console.log(treballador1.nom); // mostra Maria per consola
console.log(treballador1.salariAnual()); // mostra 28000 per consola
treballador1.saludar(); // "Hola Maria"
