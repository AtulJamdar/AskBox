const express = require("express");
const router = express.Router();

const {
    submitQuestion,
} = require("../controllers/question.controller");

// Student submits question
router.post("/:classCode", submitQuestion);

module.exports = router;