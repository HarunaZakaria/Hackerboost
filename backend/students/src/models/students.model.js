const mongoose = require("mongoose");

//create a student schema
const studentsSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "first name must be provided"],
  },
  lastName: {
    type: String,
    required: [true, "last name must be provided"],
  },
  class: {
    type: String,
    required: [true, "class must be provided"],
  },
  bestSubject: {
    type: String,
    required: [true, "best subject must be provided"],
  },
  age: {
    type: Number,
    min: 0,
    default: 0,
    required: [true, "age must be provided"],
  },
  hobby: {
    type: String,
    required: [true, "hobby must be provided"],
  },
});

//create a model
const studentsModel = mongoose.model("Student", studentsSchema);

module.exports = studentsModel;
