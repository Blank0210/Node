// Import the built-in 'fs' module for file system operations
const fs = require('fs');

// Write "Hello, World!" to 'test.txt' synchronously
// fs.writeFileSync('./test.txt', 'Hello, World!');

// Write "Hello, World! Async" to 'test.txt' asynchronously
// fs.writeFile('./test.txt', 'Hello, World! Async', (err) => {});

// Read 'contacts.txt' asynchronously and print its contents
// fs.readFile('./contacts.txt', "utf-8", (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//     } else {
//         console.log("File read successfully");
//         console.log(data);
//     }
// });

// Copy 'test.txt' to 'test_copy.txt' synchronously
// fs.cpSync("./test.txt", "./test_copy.txt");

// Delete 'test_copy.txt' synchronously
// fs.unlinkSync("./test_copy.txt");

// Append text to 'test.txt' synchronously
// fs.appendFileSync("./test.txt", "\nThis is appended text.");

// Get and print stats (info) about 'test.txt' synchronously
console.log(fs.statSync("./test.txt"));

// Create a new directory 'new_folder/new' synchronously
fs.mkdirSync("./new_folder/new");
