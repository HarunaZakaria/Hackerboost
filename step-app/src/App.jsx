import { useState } from "react";
import "./App.css";
function App() {
  const messages = ["Learn React ", "Apply for jobs", "Invest your new income"];

  const [activeStep, setActiveStep] = useState(1);

  function changeNext() {
    if (activeStep < 3) setActiveStep(activeStep + 1);
  }
  function changePrev() {
       if (activeStep > 1) setActiveStep(activeStep - 1);

  }

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={activeStep === 1 ? "active" : ""}>1</div>
          <div className={activeStep === 2 ? "active" : ""}>2</div>
          <div className={activeStep === 3 ? "active" : ""}>3</div>
        </div>
        <div className="message">
          <span> Step {activeStep} :</span>
          <span>{messages[activeStep - 1]}</span>
          <button>Learn How</button>
        </div>
        <div className="buttons">
          <button
            className={activeStep <= 1 ? "active" : ""}
            onClick={changePrev}
          >
            Prev
          </button>
          <button
            className={activeStep <= 3 ? "active" : ""}
            onClick={changeNext}
          >
            Next{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
