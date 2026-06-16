const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Find all occurrences of document.getElementById('...')
const idRegex = /document\.getElementById\(\s*['"]([^'"]+)['"]\s*\)/g;
let match;
const missingIds = [];

while ((match = idRegex.exec(html)) !== null) {
    const id = match[1];
    // Look for id="id" or id='id' in the HTML
    const idDef = new RegExp('id=\\s*[\'"]' + id + '[\'"]');
    if (!idDef.test(html)) {
        if (!missingIds.includes(id)) {
            missingIds.push(id);
        }
    }
}

console.log('--- SCAN RESULTS FOR index.html ---');
console.log('Missing IDs:', missingIds);
