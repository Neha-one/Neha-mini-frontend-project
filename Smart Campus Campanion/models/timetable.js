const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema({
    roomNumber: String,
    day: String,
    startTime: String,
    duration: Number,   // 1 or 2 hours
    subject: String,
    teacher: String,
    section: String
});

module.exports = mongoose.model("Timetable", timetableSchema);