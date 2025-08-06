// Import mongoose library for MongoDB object modeling
const mongoose = require('mongoose');

// Define the schema for the User collection
const userSchema = new mongoose.Schema({
    // User's first name (required)
    first_name: {
        type: String,
        required: true 
    },
    // User's last name (required)
    last_name: {
        type: String,
        required: true 
    },
    // User's email (required, must be unique)
    email: {
        type: String,
        required: true,
        unique: true,
    },
    // User's job title (optional)
    job_title: {
        type: String,
    },
    // User's gender (optional)
    gender: {
        type: String,
    }
}, { 
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true 
});

// Create the User model from the schema
const User = mongoose.model('user', userSchema);

// Export the User model for use in other files
module.exports = User;
