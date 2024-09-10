const fs = require('fs').promises;

async function readFileAsync(pos) {
    console.log('INICI readFileAsync ' + pos);
    const data = await fs.readFile('readFileAsync.js', 'utf8');
    console.log('FI readFileAsync ' + pos + ':\n', data);
}

readFileAsync(1);
readFileAsync(2);
