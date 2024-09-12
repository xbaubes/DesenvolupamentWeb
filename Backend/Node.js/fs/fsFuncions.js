const fs = require('fs');

// Ruta del fitxer
const filePath = './example.txt';

function manageFileOperations() {
    // Crear un fitxer amb fs.appendFile
    fs.appendFile(filePath, 'Hello content!\n', (err) => {
        if (err) {
            return console.error('Error appending file:', err);
        }
        console.log('File created and initial content added!\n');

        // Llegir el fitxer amb fs.readFile
        fs.readFile(filePath, 'utf8', (err, data) => { // Patró error-first: el primer paràmetre del callback és per controlar l'error, el segon és el retorn de la funció
            if (err) {
                return console.error('Error reading file:', err);
            }
            console.log('File content after initial write:\n', data);

            // Actualitzar el fitxer amb fs.appendFile
            fs.appendFile(filePath, 'This is additional content.\n', (err) => {
                if (err) {
                    return console.error('Error appending file:', err);
                }
                console.log('Content added to the file!\n');

                // Llegir el fitxer amb fs.readFile per veure les actualitzacions
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        return console.error('Error reading file:', err);
                    }
                    console.log('File content after update:\n', data);

                    // Canviar el nom del fitxer amb fs.rename
                    const newFilePath = './renamed_example.txt';
                    fs.rename(filePath, newFilePath, (err) => {
                        if (err) {
                            return console.error('Error renaming file:', err);
                        }
                        console.log('File renamed to "renamed_example.txt"!\n');

                        // Eliminar el fitxer amb fs.unlink
                        fs.unlink(newFilePath, (err) => {
                            if (err) {
                                return console.error('Error deleting file:', err);
                            }
                            console.log('File deleted!\n');
                        });
                    });
                });
            });
        });
    });
}

// Executa la funció
manageFileOperations();
