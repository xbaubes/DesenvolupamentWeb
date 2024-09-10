const fs = require('fs');

function readFileSync(pos) {
    console.log('INICI readFileSync ' + pos);
    const data = fs.readFileSync('readFileSync.js', 'utf8');
    console.log('FI readFileSync ' + pos + ':\n', data);
}

readFileSync(1);
readFileSync(2);
