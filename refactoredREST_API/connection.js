// Import mongoose for MongoDB object modeling
const mongoose = require('mongoose');

// Set strictQuery to true for strict query filtering (recommended)
mongoose.set('strictQuery', true);

// Asynchronous function to connect to the MongoDB database
// url: MongoDB connection string
async function connectToDatabase(url) {
    return mongoose.connect(url);
}

// Export the connectToDatabase function for use in other files
module.exports = {
    connectToDatabase,
};