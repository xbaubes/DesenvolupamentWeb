let person = {
    name: "Joan",
    age: 32,
    profession: "Enginyer",
    greet: function() {
      console.log("Hola, sóc en " + this.name + " i tinc " + this.age + " anys.");
    },
    work: function() {
      console.log("Actualment exerceixo com " + this.profession + ".");
    },
    future: function(years, profession) { //"this" referencia l'objecte en el que estem, d'aquesta manera podem accedir als seus atributs sense confondre'ls amb les variables rebudes.
      let age = this.age + years;
      console.log("Hola, sóc en " + this.name + " i d'aquí " + years + " anys en tindré " + age + " i seré " + profession + ".");
    }
};

// Accedint a les propietats de l'objecte
console.log(person.name); // "Joan"
console.log(person.age); // 32

// Cridant les funcions de l'objecte
person.greet(); // "Hola, sóc en Joan i tinc 32 anys."
person.work(); // "Actualment exerceixo com Enginyer."
person.future(8,"astronauta");
