// This is required in order to start a http server
const http = require("http");
// This is required to have read/write access to files
const fs = require('fs');

// Create an HTTP server
const server = http.createServer( (req, res) => {
    const log = `${Date.now()}: ${req.url} New Log Entry\n`;
    fs.appendFile('log.txt', log, (err, data) => {
        switch (req.url) {
            case '/':
                res.end("Welcome to the home page!");
                break;
            case '/about':
                res.end("Welcome to the about page!");
                break;
            default:
                res.end("404 Not Found");
                break;
            }
        // res.end("Log entry added successfully!");
    })
});

server.listen(8000, () => console.log("Server started!"))
