const Class = require("../models/Class");
const Question = require("../models/Question");

exports.submitQuestion = async(req, res) => {
    try {
        const { classCode } = req.params;
        const { text } = req.body;

        // 1. Validate input
        if (!text || text.trim() === "") {
            return res.status(400).json({
                message: "Question text is required",
            });
        }

        // 2. Find class by classCode
        const foundClass = await Class.findOne({ classCode });

        if (!foundClass) {
            return res.status(404).json({
                message: "Class not found",
            });
        }

        // 3. Create question
        const question = await Question.create({
            text,
            class: foundClass._id,
        });

        // 4. Send response
        res.status(201).json({
            message: "Question submitted successfully",
            questionId: question._id,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error",
        });
    }
};