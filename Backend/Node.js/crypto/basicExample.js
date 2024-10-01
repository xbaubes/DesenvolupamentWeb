const crypto = require('crypto'); // Importa el mòdul 'crypto' de Node.js per utilitzar funcionalitats de xifratge.

// Funció per generar una clau aleatòria
function generateKey() {
    return crypto.randomBytes(32); // Genera una clau de 256 bits (32 bytes) utilitzant bytes aleatoris.
}

// Funció per xifrar un text
function encrypt(text, key) {
    const iv = crypto.randomBytes(16); // Genera un vector d'inicialització (IV) aleatori de 16 bytes.
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv); // Crea un objecte cipher amb l'algorisme AES-256 en mode CBC, usant la clau i l'IV.
    let encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex'); // Xifra el text pla (en format UTF-8) i retorna les dades xifrades en format hexadecimal i completa el procés de xifratge, finalment afegeix qualsevol dada restant xifrada.

    return {
        iv, // Retorna l'IV en format Buffer
        content: encrypted // Retorna les dades xifrades en format hexadecimal.
    };
}

// Funció per desxifrar un text
function decrypt(encryptedData, key) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, encryptedData.iv); // Crea un objecte decipher amb l'algorisme AES-256 en mode CBC, utilitzant la clau i l'IV.
    let decrypted = decipher.update(encryptedData.content, 'hex', 'utf8') + decipher.final('utf8'); // Desxifra les dades xifrades (en format hexadecimal) i retorna el text pla en format UTF-8. Completa el procés de desxifratge i afegeix qualsevol dada restant desxifrada.

    return decrypted; // Retorna el text desxifrat.
}

/*** Exemple d'ús ***/

// Generar clau
const key = generateKey(); // Generar una nova clau aleatòria per al xifratge.
const textToEncrypt = "Missatge secret"; // Definir el text que volem xifrar.

// Xifrar
const encryptedData = encrypt(textToEncrypt, key); // Xifra el text pla amb la clau generada.
console.log("Dades xifrades:", encryptedData.iv.toString('hex'), encryptedData.content); // Mostra les dades xifrades (IV i contingut) a la consola.

// Desxifrar
const decryptedData = decrypt(encryptedData, key); // Desxifra les dades xifrades amb la mateixa clau.
console.log("Dades desxifrades:", decryptedData); // Mostra el text original desxifrat a la consola.
