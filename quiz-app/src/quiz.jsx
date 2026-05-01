import React, { useState } from "react";
import questions from "./data";

function QuizComponent() {
  //   const questions = [
  //     {
  //       question: "What is React?",
  //       alternatives: ["Library", "Framework", "Database", "OS"],
  //       answer: "Library",
  //     },
  //     {
  //       question: "What is JSX?",
  //       alternatives: ["JSON", "XML", "JavaScript Extension", "CSS"],
  //       answer: "JavaScript Extension",
  //     },
  //   ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("Quiz Finished!");
    }
  };

  const currentQuestion = questions[currentIndex];

  //handleOption
  function handleOption(option) {
    
    console.log(option);
  }

  return (
    <div className="quiz-container">
      <h2>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOption(option)}
            value={option}
            className="options"
          >
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleNext} className="next-btn">
        {currentIndex < questions.length - 1 ? "Next" : "Finish"}
      </button>
    </div>
  );
}

export default QuizComponent;
