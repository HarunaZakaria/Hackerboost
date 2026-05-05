import { useState } from "react";
import questions from "./data";

export default function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  return (
    <div className="quiz-container">
      <h1>Welcome to Daily Quiz</h1>

      <div className="quiz-questions">
        <ol>
          {questions.map((question) => (
            <li>{question.question}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
