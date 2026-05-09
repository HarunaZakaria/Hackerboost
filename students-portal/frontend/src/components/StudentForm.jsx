import { create } from "axios";
import { createStudents } from "../services/studentService";
import { useState } from "react";

export default function StudentForm({ refreshStudents }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
  });

  //handle input changes
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  //handle form submit
  async function handleSUbmit(e) {
    e.preventDefault();

    await createStudents(formData);
    setFormData({
      name: "",
      email: "",
      course: "",
      age: "",
    });

    refreshStudents();
  }
  return (
    <div>
      <form onSubmit={handleSUbmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          onChange={handleChange}
          value={formData.course}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          value={formData.age}

        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}
