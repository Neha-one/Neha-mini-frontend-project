const express = require("express");
const mongoose = require("mongoose");

const Classroom = require("./models/classroom");
const Timetable = require("./models/timetable");

const app = express();
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/smartCampus")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

/* ===============================
   HELPER FUNCTIONS
=================================*/

function convertToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
}

function minutesToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return String(hours).padStart(2, "0") + ":" +
        String(mins).padStart(2, "0");
}

const minTime = convertToMinutes("09:00");
const maxTime = convertToMinutes("17:00");

const lunchStart = convertToMinutes("13:00");
const lunchEnd = convertToMinutes("14:00");

const allowedDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const allowedSections = ["A", "B", "C"];

/* ===============================
   ADD ROOMS
=================================*/
app.post("/addRooms", async (req, res) => {
    try {
        const rooms = await Classroom.insertMany(req.body);
        res.status(201).json(rooms);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

/* ===============================
   GET ALL ROOMS
=================================*/
app.get("/classrooms", async (req, res) => {
    const rooms = await Classroom.find();
    res.json(rooms);
});

/* ===============================
   ADD TIMETABLE
=================================*/
app.post("/addTimetable", async (req, res) => {

    const { roomNumber, day, startTime, duration, subject, teacher, section } = req.body;

    if (!roomNumber || !day || !startTime || !duration || !subject || !teacher || !section) {
        return res.status(400).json({ message: "All fields are required ❌" });
    }

    if (!allowedDays.includes(day)) {
        return res.status(400).json({ message: "Classes allowed only Monday to Friday ❌" });
    }

    if (!allowedSections.includes(section)) {
        return res.status(400).json({ message: "Section must be A, B, or C ❌" });
    }

    if (![1, 2].includes(Number(duration))) {
        return res.status(400).json({ message: "Duration must be 1 or 2 hours ❌" });
    }

    const newStart = convertToMinutes(startTime);
    const newEnd = newStart + (duration * 60);

    if (newStart < minTime || newEnd > maxTime) {
        return res.status(400).json({
            message: "Time must be between 09:00 and 17:00 ❌"
        });
    }

    if (newStart < lunchEnd && newEnd > lunchStart) {
        return res.status(400).json({
            message: "Cannot schedule class during Lunch Break (13:00 - 14:00) 🍽"
        });
    }

    const roomExists = await Classroom.findOne({ roomNumber });
    if (!roomExists) {
        return res.status(404).json({
            message: "Room number does not exist ❌"
        });
    }

    const existingSchedules = await Timetable.find({ roomNumber, day });

    for (let schedule of existingSchedules) {
        const existingStart = convertToMinutes(schedule.startTime);
        const existingEnd = existingStart + (schedule.duration * 60);

        if (newStart < existingEnd && newEnd > existingStart) {
            return res.status(400).json({
                message: "Room already booked in this time slot ❌"
            });
        }
    }

    const newEntry = await Timetable.create({
        roomNumber,
        day,
        startTime,
        duration,
        subject,
        teacher,
        section
    });

    res.status(201).json({
        message: "Timetable added successfully ✅",
        data: newEntry
    });
});

/* ===============================
   CHECK SINGLE ROOM
=================================*/
app.get("/check", async (req, res) => {

    const { room, day, time } = req.query;

    if (!room || !day || !time) {
        return res.status(400).json({
            message: "Please fill all fields properly ❌"
        });
    }

    if (!allowedDays.includes(day)) {
        return res.status(400).json({
            message: "Only Monday to Friday allowed ❌"
        });
    }

    const roomExists = await Classroom.findOne({ roomNumber: room });
    if (!roomExists) {
        return res.status(404).json({
            status: "Invalid Room ❌",
            message: "Room number does not exist."
        });
    }

    const userTime = convertToMinutes(time);

    if (userTime < minTime || userTime >= maxTime) {
        return res.status(400).json({
            message: "Time must be between 09:00 and 17:00 ❌"
        });
    }

    if (userTime >= lunchStart && userTime < lunchEnd) {
        return res.json({
            status: "Lunch Break 🍽",
            message: "No classes between 13:00 and 14:00"
        });
    }

    const schedules = await Timetable.find({ roomNumber: room, day });

    for (let schedule of schedules) {
        const start = convertToMinutes(schedule.startTime);
        const end = start + (schedule.duration * 60);

        if (userTime >= start && userTime < end) {
            return res.json({
                status: "Occupied ❌",
                subject: schedule.subject,
                teacher: schedule.teacher,
                section: schedule.section,
                time: `${schedule.startTime} - ${minutesToTime(end)}`
            });
        }
    }

    res.json({ status: "Available ✅" });
});

/* ===============================
   CHECK ALL ROOMS
=================================*/
app.get("/checkAll", async (req, res) => {

    const { day, time } = req.query;

    if (!day || !time) {
        return res.status(400).json({
            message: "Please fill all fields properly ❌"
        });
    }

    if (!allowedDays.includes(day)) {
        return res.status(400).json({
            message: "Only Monday to Friday allowed ❌"
        });
    }

    const userTime = convertToMinutes(time);

    if (userTime < minTime || userTime >= maxTime) {
        return res.status(400).json({
            message: "Time must be between 09:00 and 17:00 ❌"
        });
    }

    if (userTime >= lunchStart && userTime < lunchEnd) {
        return res.json({
            status: "Lunch Break 🍽",
            message: "College lunch break from 13:00 to 14:00. No rooms available."
        });
    }

    const rooms = await Classroom.find();
    const schedules = await Timetable.find({ day });

    let result = [];

    for (let room of rooms) {

        let occupied = false;

        for (let schedule of schedules) {

            if (room.roomNumber === schedule.roomNumber) {

                const start = convertToMinutes(schedule.startTime);
                const end = start + (schedule.duration * 60);

                if (userTime >= start && userTime < end) {
                    occupied = true;
                    break;
                }
            }
        }

        result.push({
            room: room.roomNumber,
            status: occupied ? "Occupied ❌" : "Available ✅"
        });
    }

    res.json(result);
});