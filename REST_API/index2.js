const http = require("http");
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send("Welcome to the home page!");
})

app.get('/about', (req, res) => {
    return res.send("Welcome to the about page!" + "Hello " + req.query.myname + "!" + "You are" + req.query.age + " years old!");
})

const myServer = http.createServer(app);
myServer.listen(8000, () => console.log("Server started!"));