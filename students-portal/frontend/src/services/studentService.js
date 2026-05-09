import axios from "axios";
const API_URL = "http://localhost:5000/api/students";

//get students from API
export const getStudents = async () => {
  return await axios(API_URL);
};

//Create students
export const createStudents = async (studentData) => {
  return await axios.post(API_URL, studentData);
};

//delete student
export const deleteStudent = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
