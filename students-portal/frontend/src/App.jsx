import { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { getStudents, deleteStudent } from "./services/studentService";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudentHandler = async (id) => {
    await deleteStudent(id);
    fetch(students);
  };
  return (
    <>
      <h1>Students Registration Portal</h1>
      <StudentForm refreshStudents={fetchStudents} />
      <StudentList
        students={students}
        deleteStudentHandler={deleteStudentHandler}
      />
    </>
  );
}

export default App;
