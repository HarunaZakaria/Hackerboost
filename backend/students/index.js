const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const studentsModel = require("./src/models/students.model");

dotenv.config();

const app = express();
const port = 8000;

//middle wears
app.use(express.json());

//connect to mongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Connection error:", err));

// const students = [
//   {
//     firstName: "adam ",
//     lastName: "Maata",
//     class: "Basic6",
//     bestSubject: "Computing",
//     age: 13,
//     hobby: "Writing",
//   },
//   {
//     firstName: "Abukari",
//     lastName: "Zaharaw",
//     class: "Basic5",
//     bestSubject: "English",
//     age: 12,
//     hobby: "Drawing",
//   },
//   {
//     firstName: "A.Rahim",
//     lastName: "Humu",
//     class: "Basic5",
//     bestSubject: "RME",
//     age: 12,
//     hobby: "Eating",
//   },
//   {
//     firstName: "Adam",
//     lastName: "Kawsada",
//     class: "Basic4",
//     bestSubject: "Mathematics",
//     age: 10,
//     hobby: "Writing",
//   },
//   {
//     firstName: "Alhasssan",
//     lastName: "Saida",
//     class: "Basic6",
//     bestSubject: "English",
//     age: 13,
//     hobby: "cooking",
//   },
//   {
//     firstName: "Ibrahim",
//     lastName: "Fauzan",
//     class: "Basic3",
//     bestSubject: "English",
//     age: 9,
//     hobby: "Playing",
//   },
//   {
//     firstName: "Arafat",
//     lastName: "Abdul-Majeed",
//     class: "Basic6",
//     bestSubject: "English",
//     age: 12,
//     hobby: "Singing",
//   },
//   {
//     firstName: "Abukari",
//     lastName: "Akram",
//     class: "Basic4",
//     bestSubject: "Mathematics",
//     age: 10,
//     hobby: "cooking",
//   },
//   {
//     firstName: "Abdul-Aziz",
//     lastName: "Issahaku",
//     class: "Basic6",
//     bestSubject: "Computing",
//     age: 12,
//     hobby: "Writing",
//   },
//   {
//     firstName: "Abukari",
//     lastName: "Wakilu",
//     class: "Basic5",
//     bestSubject: "Science",
//     age: 11,
//     hobby: "Drawing",
//   },
// ];

//root route
app.get("/", (req, res) => {
  res.send("Hello Students");
});

//create a new student
app.post("/api/students", async (req, res) => {
  const newStudent = await studentsModel.create(req.body);
  res.status(200).json({
    status: true,
    student: newStudent,
  });
});
//get students by class
app.get("/api/students/:name", async (req, res) => {
  const studentClass = req.params.class;
  const student = await studentsModel.findOne({
    name: new RegExp(`^${studentClass}$`, "i"),
  });
  if (!student) {
    return res.status(404).json({
      status: "Fail",
      message: "Student no found",
      student: {},
    });
  }
  res.status(200).json({
    status: "Success",
    student: student,
  });
});
//get a student by id
app.get("/api/students/:id", async (req, res) => {
  const studentId = await req.params.id;
  if (!studentId) {
    res.status(404).json({
      status: "fail",
      message: "Wrong Id",
      student: {},
    });
  }
  res.status(200).json({
    status: "success",
    student: studentId,
  });
});
//get all students
app.get("/api/students", async (req, res) => {
  const students = await studentsModel.find();
  if (!students) {
    res.status(404).json({
      status: "Fail",
      message: "Students no found",
      students: {},
    });
  }
  res.status(201).json({
    status: "Success",
    studens: students,
  });
});

//listen on
app.listen(port, () => {
  console.log(`app running on port:http://localhost:${port}`);
});
