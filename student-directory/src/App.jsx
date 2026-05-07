import { useState } from "react";
import Header from "./components/Header";
import ProfileList from "./components/ProfileList";
import Footer from "./components/Footer";

function App() {
  // students Data

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Amina",
      track: "Frontend Development",
      bio: "Learning React and building interfaces",
      skillLevel: "Beginner",
      isActive: true,
    },
    {
      id: 2,
      name: "Kofi",
      track: "Backend Development",
      bio: "Working with APIs and databases",
      skillLevel: "Intermediate",
      isActive: false,
    },
    {
      id: 3,
      name: "Zakaria",
      track: "Backend Development",
      bio: "Working with APIs and databases",
      skillLevel: "Intermediate",
      isActive: true,
    },
    {
      id: 4,
      name: "Haruna",
      track: "FullStack Development",
      bio: "Learning React and building interfaces and Working with APIs and databases",
      skillLevel: "Beginner",
      isActive: true,
    },
    {
      id: 5,
      name: "Dauda",
      track: "UI/UX Designer",
      bio: "Working user experience and interface design",
      skillLevel: "Intermediate",
      isActive: false,
    },
    {
      id: 6,
      name: "Muazu",
      track: "Project Manager",
      bio: "Working with designers and developers to bring projects to live",
      skillLevel: "Beginner",
      isActive: false,
    },
  ]);

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
