const express = require("express");
const app = express();

app.use(express.json());

// routes
app.use("/api/questions", require("./routes/question.routes"));

module.exports = app;