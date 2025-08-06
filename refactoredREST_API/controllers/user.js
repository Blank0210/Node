// Import the User model
const User = require("../models/user.js");

// Controller to get all users from the database
async function handleGetAllUsers(req, res, next) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

// Controller to get a single user by ID
async function handleGetUserById(req, res, next) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
}

// Controller to update a user's last name by ID (example update)
async function handleUpdateUserById(req, res, next) {
    await User.findByIdAndUpdate(req.params.id, { last_name: "Updated" });
    return res.json({ status: "Success" });
}

// Controller to delete a user by ID
async function handleDeleteUserById(req, res, next) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Success" });
}

// Controller to create a new user
async function handleCreateNewUser(req, res, next) {
    const body = req.body;
    // Validate required fields
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.job_title
    ) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    // Create the user in the database
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title
    });
    return res.status(201).json({ msg: "User created successfully", id: result._id });
}

// Export all controller functions
module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
};
