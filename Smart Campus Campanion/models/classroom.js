const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema({
    roomNumber: {
        type: String,
        required: true,
        unique: true
    },
    floor: Number,
    type: String
});

module.exports = mongoose.model("classroom", classroomSchema);