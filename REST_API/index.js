const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');

const users = require('./MOCK_DATA.json');
const { type } = require('os');

const PORT = 8000;
const app = express();

// Connection to MongoDB
mongoose.connect("")


// Schema
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true 
    },
    last_name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    job_title: {
        type: String,
    },
    gender: {
        type: String,
    }
},{ timestamps: true });

const User = mongoose.model('user', userSchema);

// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false }));


app.use((req, res, next) => {
    console.log("Hello from middleware1");
    next(); 
});

app.use((req, res, next) => {
    console.log("Hello from middleware2");
    next(); 
});

// ROUTES
app.get('/users', (req, res) => {
    const html = 
    `<ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>`
    res.send(html);
});

// REST API route
app.get('/api/users', (req, res) => {
    res.setHeader("X-MyName", "John Doe");
    return res.json(users);
});

// Made this because the routes are the same for the get, patch and delete - (/api/users/:id)
app.route('/api/users/:id')
.get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if ( !user) return res.status(404).json({error: "User not found"});
    return res.json(user);
})
.patch((req, res) => {
    // Edit users
    return res.json({status: "Pending"});
})
.delete((req, res) => {
    // Delete users
    return res.json({status: "Pending"});
});


app.post('/api/users', (req, res) => {
    // TODO: Implement user creation logic
    return res.json({status: "pending"});
});




app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
