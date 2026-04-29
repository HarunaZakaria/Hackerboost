import questions from "./Question";

import "./App.css";
import { useState } from "react";

function App() {
  const [selectedId, setSelectedId] = useState(null);

  //handle click
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <>
      <h1>Fash Card</h1>
      <div>
        {questions.map((question) => (
          <div
            key={question.id}
            className={question.id === selectedId ? "selected" : ""}
          >
            <p className="question" onClick={() => handleClick(question.id)}>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
