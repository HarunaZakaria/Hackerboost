import { useState } from "react";
import questions from "./data";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResults] = useState(false);

  const question = questions[currentQuestion];

  //handleAnswerClick
  function handleAnswerClick(option) {
    if (option === question.answer) {
      setScore((score) => score + 1);
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < currentQuestion.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  }

  //handleRestartQuiz
  function handleRestartQuiz(){
    setCurrentQuestion(0)
    setScore(0)
    setShowResults(false)
  }

  return (
    <>
      <h1>{question.question}</h1>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => handleAnswerClick(option)}>
          {option}
        </button>
      ))}
      <h2>{showResult ? score : ""}</h2>
      <p>{question.length}</p>
      <button onClick={handleRestartQuiz}>Restart quiz</button>
    </>
  );
}

export default App;
