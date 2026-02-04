const mongoose = require("mongoose");
const app = require("./app");

// Load env variables
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        // Start server ONLY after DB connects
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
        process.exit(1);
    });