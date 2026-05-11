import { useState } from "react";
import Header from "./components/Header";
import ProfileList from "./components/ProfileList";
import Footer from "./components/Footer";
import students from "./data";
import studentsData from "./data";
function App() {
  // students Data

  const [students, setStudents] = useState(studentsData);

  ///toggle effect
  function handleToggle(id) {
    setStudents((preStudents) =>
      preStudents.map((student) =>
        student.id === id
          ? { ...student, isActive: !student.isActive }
          : student,
      ),
    );
  }
  return (
    <>
      <Header />
      <ProfileList students={students} onToggle={handleToggle} />
      <Footer />
    </>
  );
}

export default App;
