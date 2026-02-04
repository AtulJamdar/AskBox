const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    className: {
        type: String,
        required: true,
    },

    classCode: {
        type: String,
        required: true,
        unique: true,
    },

    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Class", classSchema);