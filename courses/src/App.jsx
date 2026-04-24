import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

const courses = [
  {
    name: "Frontend Development",
    description: "responsible for creating the client side",
    price: 50,
  },
  {
    name: "Backend Development",
    description: "responsible for creating the server side logic",
    price: 100,
  },
  {
    name: "Full StackDeevelopment",
    description: "responsible for combining both frontend and backend",
    price: 200,
  },
];
function App() {
  const [steps, setSteps] = useState(0);

  function handleFrontendChange() {
    setSteps(1);
  }
  function handleBackendChange() {
    setSteps(2);
  }

  function handleFullStackChange() {
    setSteps(3);
  }

  return (
    <div>
      <div className="container">
        <div className="container-btns">
          <div
            className={steps === 1 ? "active" : "neutral"}
            onClick={handleFrontendChange}
          >
            Frontend
          </div>
          <div
            className={steps === 2 ? "active" : "neutral"}
            onClick={handleBackendChange}
          >
            Backend
          </div>
          <div
            className={steps === 3 ? "active" : "neutral"}
            onClick={handleFullStackChange}
          >
            FullStack
          </div>
        </div>
        <div className="container-content">
          {courses.map((course, index) => (
            <div key={index}>
              <h1>{course.name}</h1>
              <p>{course.description}</p>
              <p>{course.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
