const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./db");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json()); // Parse JSON bodies
connectDB();

// Define User Schema and Model
const userSchema = new mongoose.Schema({}, { strict: false }); // Flexible schema for existing collection
const User = mongoose.model("User", userSchema, "users"); // Bind to 'users' collection
// Routes
app.get("/", (req, res) => {
    res.status(200).send({
        message: "Hello World!"
    })
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.find(); // Fetch all documents from 'users' collection
        res.status(200).json(users);
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})