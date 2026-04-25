import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

const messages = [
  "Learn Frontend Development",
  "Learn Backend Development",
  "Learn Fulstack Development",
];
function App() {
  const [steps, setSteps] = useState(0);
  const [toggle, setToggle] = useState(false);

  function handleFrontendChange() {
    setSteps(1);
  }
  function handleBackendChange() {
    setSteps(2);
  }

  function handleFullStackChange() {
    setSteps(3);
  }

  function lightDarkMode() {
    setToggle((toggle) => !toggle);
  }

  return (
    <div className={toggle ? "dark" : "light"}>
      <div className="container">
        <div className="dark-light-mode">
          <div onClick={lightDarkMode}>{toggle ? "Light" : "Dark"}</div>
        </div>
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
          {messages[steps - 1]}
          </div>
      </div>
    </div>
  );
}

export default App;
