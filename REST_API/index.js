const http = require("http");
const fs = require('fs');
const url = require('url');

// Create an HTTP server
const server = http.createServer( (req, res) => {
    if( req.url === '/favicon.ico') { 
        return res.end(); 
    }

    const log = `${Date.now()}: ${req.url} New Log Entry\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    fs.appendFile('log.txt', log, (err, data) => {
        switch (myUrl.pathname) {
            case '/':
                if(req.method === 'GET') {
                    // res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.end("POST request received!");
                    return;
                }
                res.end("Welcome to the home page!");
                break;
            case '/about':
                const username = myUrl.query.myname;
                res.end(`Hello ${username}, welcome to the about page!`);
                break;
            default:
                res.end("404 Not Found");
                break;
            } 
    })
});

server.listen(8000, () => console.log("Server started!"))