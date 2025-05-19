const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_DB_URI;
const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function connectDB() {
    try {
        await mongoose.connect(uri, clientOptions);
        console.log("Connected to MongoDB Atlas!");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1); // Exit on connection failure
    }
}

module.exports = connectDB;