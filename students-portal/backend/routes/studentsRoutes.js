// impot packages
import express from "express";
const router = express.Router();

//import student schema
import Student from "../models/Student.js";

//create a student

router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get all student
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete student
router.delete("/:id", async (req, res) => {
  try {
    const students = await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
