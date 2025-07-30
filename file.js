const fs = require('fs');

// This code writes "Hello, World!" to a file named test.txt 
// Synchronously
fs.writeFileSync('./test.txt', 'Hello, World!');

// Asynchronously
fs.writeFile('./test.txt', 'Hello, World! Async', (err) => {});

const contact = fs.readFile('./contacts.txt', 'utf8', (err) => {});
console.log(contact);