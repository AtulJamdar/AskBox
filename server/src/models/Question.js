const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },

    class: {
        type: mongoose.Schema.Types.ObjectId,
            ref: "Class",
            required: true,
    },

    status: {
        type: String,
        enum: ["pending", "approved"],
        default: "pending",
    },
}, { timestamps: true });

module.exports = mongoose.model("Question", questionSchema);