// Import express and user controller functions
const express = require('express');
const { 
    handleGetAllUsers, 
    handleGetUserById, 
    handleUpdateUserById, 
    handleDeleteUserById,
    handleCreateNewUser 
} = require('../controllers/user.js');

// Create a new router instance
const router = express.Router();

// Route for /api/users
// GET: Get all users
// POST: Create a new user
router.route("/")
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);

// Route for /api/users/:id
// GET: Get a user by ID
// PATCH: Update a user by ID
// DELETE: Delete a user by ID
router.route('/:id')
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

// Export the router to be used in the main app
module.exports = router;
