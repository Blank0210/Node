const express = require('express');
const users = require('./MOCK_DATA.json');

const PORT = 8000;
const app = express();

// ROUTES
app.get('/users', (req, res) => {
    const html = `<ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join('')}
        </ul>`
    res.send(html);
});

// REST API route
app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.route('/api/users/:id').get((req, res) => {
     const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
}).patch((req, res) => {
    // Edit users
    return res.json({status: "Pending"});
}).delete((req, res) => {
    // Delete users
    return res.json({status: "Pending"});
});


app.post('/api/users', (req, res) => {
    // TODO: Implement user creation logic
    return res.json({status: "pending"});
});




app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
