import mongoose from "mongoose";

//create  students schema

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
