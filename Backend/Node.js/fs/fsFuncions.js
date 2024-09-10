const fs = require('fs/promises');

// Ruta del fitxer
const filePath = './example.txt';

async function manageFileOperations() {
    try {
        // Crear un fitxer amb fs.appendFile
        await fs.appendFile(filePath, 'Hello content!\n');
        console.log('File created and initial content added!\n');

        // Llegir el fitxer amb fs.readFile
        let data = await fs.readFile(filePath, 'utf8');
        console.log('File content after initial write:\n', data);

        // Actualitzar el fitxer amb fs.appendFile
        await fs.appendFile(filePath, 'This is additional content.\n');
        console.log('Content added to the file!\n');

        // Llegir el fitxer amb fs.readFile per veure les actualitzacions
        data = await fs.readFile(filePath, 'utf8');
        console.log('File content after update:\n', data);

        // Canviar el nom del fitxer amb fs.rename
        const newFilePath = './renamed_example.txt';
        await fs.rename(filePath, newFilePath);
        console.log('File renamed to "renamed_example.txt"!\n');

        // Eliminar el fitxer amb fs.unlink
        await fs.unlink(newFilePath);
        console.log('File deleted!\n');
    } catch (err) {
        console.error('Error:', err);
    }
}

// Executa la funció
manageFileOperations();
