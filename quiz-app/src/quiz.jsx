import { useState, useEffect, useCallback, useRef } from "react";
import questions from "./data";

const QUESTION_TIME = 30; // seconds per question
const OPTION_LABELS = ["A", "B", "C", "D"];

// ─── Welcome Screen ──────────────────────────────────────────────
function WelcomeScreen({ onStart }) {
  const [name, setName] = useState("");

  return (
    <div className="screen">
      <div className="card">
        <div className="welcome-header">
          <div className="badge">
            <span>⚡</span>
            <span>HackerBoost Quiz</span>
          </div>
          <h1 className="welcome-title">
            Test Your<br />Knowledge Today
          </h1>
          <p className="welcome-subtitle">
            Challenge yourself with {questions.length} carefully curated questions across Science, Biology, Chemistry and Astronomy.
          </p>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-item">
          <div className="stat-value">{questions.length}</div>
          <div className="stat-label">Questions</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{QUESTION_TIME}s</div>
          <div className="stat-label">Per Question</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">60%</div>
          <div className="stat-label">Pass Mark</div>
        </div>
      </div>

      <div className="card">
        <div className="form-group">
          <label className="form-label" htmlFor="student-name">Enter your name to begin</label>
          <input
            id="student-name"
            className="form-input"
            type="text"
            placeholder="e.g. Kwame Mensah"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && name.trim() && onStart(name.trim())}
            autoFocus
          />
        </div>
        <div style={{ marginTop: "16px" }}>
          <button
            className="btn btn-primary"
            onClick={() => onStart(name.trim())}
            disabled={!name.trim()}
            id="start-quiz-btn"
          >
            <span>Start Quiz</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Timer Hook ───────────────────────────────────────────────────
function useTimer(seconds, onExpire, active) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (!active) return;
    if (timeLeft <= 0) { onExpire(); return; }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, active, onExpire]);

  return timeLeft;
}

// ─── Quiz Screen ──────────────────────────────────────────────────
function QuizScreen({ studentName, onFinish }) {
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState(null);   // chosen option string
  const [answered, setAnswered] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const [results, setResults] = useState([]);        // per-question result log
  const [score, setScore] = useState(0);
  const pendingResult = useRef(null);                // stores last result synchronously

  const currentQ = questions[qIndex];
  const isLast = qIndex === questions.length - 1;
  const progress = ((qIndex) / questions.length) * 100;

  // When timer expires → auto-skip
  const handleExpire = useCallback(() => {
    if (!answered) {
      setSkipped(true);
      setAnswered(true);
      setResults((prev) => [
        ...prev,
        { question: currentQ, selected: null, correct: false, skipped: true },
      ]);
    }
  }, [answered, currentQ]);

  const timeLeft = useTimer(QUESTION_TIME, handleExpire, !answered);

  const handleSelect = (option) => {
    if (answered) return;
    const isCorrect = option === currentQ.answer;
    const newResult = { question: currentQ, selected: option, correct: isCorrect, skipped: false };
    setSelected(option);
    setAnswered(true);
    if (isCorrect) setScore((s) => s + 1);
    setResults((prev) => [...prev, newResult]);
    // Store result for immediate use in handleNext (avoids stale closure)
    pendingResult.current = newResult;
  };

  const handleNext = () => {
    if (!answered) {
      handleExpire();
      return;
    }
    if (isLast) {
      // Compute final score directly from results to avoid stale state
      const finalResults = pendingResult.current
        ? [...results, pendingResult.current].filter(
            (r, i, arr) => arr.findIndex((x) => x.question.id === r.question.id) === i
          )
        : results;
      const finalScore = finalResults.filter((r) => r.correct).length;
      onFinish({ studentName, score: finalScore, results: finalResults, totalQuestions: questions.length });
    } else {
      pendingResult.current = null;
      setQIndex((i) => i + 1);
      setSelected(null);
      setAnswered(false);
      setSkipped(false);
    }
  };

  // Timer styling
  const timerClass =
    timeLeft <= 5 ? "timer-display danger" :
    timeLeft <= 10 ? "timer-display warning" :
    "timer-display";

  // Option state class
  const getOptionClass = (opt) => {
    if (!answered) return "option-btn";
    if (opt === currentQ.answer) return "option-btn reveal-correct";
    if (opt === selected && opt !== currentQ.answer) return "option-btn selected-wrong";
    return "option-btn";
  };

  return (
    <div className="screen" key={qIndex}>
      {/* Header row */}
      <div className="quiz-header">
        <div className="quiz-meta">
          <span className="category-tag">{currentQ.category}</span>
          <span className={`difficulty-tag difficulty-${currentQ.difficulty.toLowerCase()}`}>
            {currentQ.difficulty}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div className="score-mini">
            ✓ {score} / {qIndex + (answered ? 1 : 0)}
          </div>
          <div className="timer-wrap">
            <span className={timerClass}>{String(timeLeft).padStart(2, "0")}</span>
            <span className="timer-label">seconds</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="progress-wrap">
        <div className="progress-info">
          <span className="progress-text">Question {qIndex + 1} of {questions.length}</span>
          <span className="progress-pct">{Math.round(progress)}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Question card */}
      <div className="card">
        <p className="question-number">Question {qIndex + 1}</p>
        <h2 className="question-text">{currentQ.question}</h2>

        <div className="options-grid">
          {currentQ.options.map((opt, i) => (
            <button
              key={opt}
              id={`option-${i}`}
              className={getOptionClass(opt)}
              onClick={() => handleSelect(opt)}
              disabled={answered}
            >
              <span className="option-label">{OPTION_LABELS[i]}</span>
              <span className="option-text">{opt}</span>
              {answered && opt === currentQ.answer && (
                <span className="option-icon">✓</span>
              )}
              {answered && opt === selected && opt !== currentQ.answer && (
                <span className="option-icon">✗</span>
              )}
            </button>
          ))}
        </div>

        {/* Feedback */}
        {answered && (
          <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {skipped ? (
              <div className="feedback-banner wrong">
                <span>⏱</span>
                <span>Time's up! The correct answer was <strong>{currentQ.answer}</strong></span>
              </div>
            ) : selected === currentQ.answer ? (
              <div className="feedback-banner correct">
                <span>🎉</span>
                <span>Correct! Well done, {studentName}.</span>
              </div>
            ) : (
              <div className="feedback-banner wrong">
                <span>❌</span>
                <span>Incorrect. The correct answer is <strong>{currentQ.answer}</strong></span>
              </div>
            )}

            <div className="action-row">
              <button className="btn-next" onClick={handleNext} id="next-btn">
                {isLast ? "See Results" : "Next Question"}
                <span>→</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Results Screen ───────────────────────────────────────────────
function ResultsScreen({ data, onRetry }) {
  const { studentName, score, results, totalQuestions } = data;
  const percentage = Math.round((score / totalQuestions) * 100);
  const passed = percentage >= 60;
  const skippedCount = results.filter((r) => r.skipped).length;
  const wrongCount = results.filter((r) => !r.correct && !r.skipped).length;

  const emoji =
    percentage === 100 ? "🏆" :
    percentage >= 80 ? "🌟" :
    percentage >= 60 ? "👍" :
    percentage >= 40 ? "📚" : "💪";

  return (
    <div className="screen">
      {/* Hero */}
      <div className="card results-header">
        <span className="result-emoji">{emoji}</span>
        <h1 className="result-title">
          {passed ? "Great Job!" : "Keep Practising!"}
        </h1>
        <p className="result-greeting">
          Here are your results, <strong style={{ color: "var(--accent-light)" }}>{studentName}</strong>
        </p>
      </div>

      {/* Score Circle */}
      <div className="card" style={{ display: "flex", justifyContent: "center" }}>
        <div className="score-circle-wrap">
          <div className="score-circle">
            <span className="score-pct">{percentage}%</span>
            <span className="score-fraction">{score}/{totalQuestions}</span>
          </div>
          <span className={`score-verdict ${passed ? "verdict-pass" : "verdict-fail"}`}>
            {passed ? "✓ PASSED" : "✗ FAILED"}
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="result-stats">
        <div className="result-stat">
          <div className="result-stat-value color-success">{score}</div>
          <div className="result-stat-label">Correct</div>
        </div>
        <div className="result-stat">
          <div className="result-stat-value color-error">{wrongCount}</div>
          <div className="result-stat-label">Wrong</div>
        </div>
        <div className="result-stat">
          <div className="result-stat-value color-warning">{skippedCount}</div>
          <div className="result-stat-label">Skipped</div>
        </div>
      </div>

      {/* Review */}
      <div className="card review-section">
        <h2 className="review-title">
          <span>📋</span> Question Review
        </h2>
        <div className="review-list">
          {results.map((r, i) => (
            <div key={i} className="review-item">
              <div className="review-item-header">
                <span className="review-status-icon">
                  {r.skipped ? "⏱" : r.correct ? "✅" : "❌"}
                </span>
                <p className="review-q">{r.question.question}</p>
              </div>
              <div className="review-answers">
                {r.skipped ? (
                  <div className="review-answer-row">
                    <span className="answer-label">Status:</span>
                    <span className="answer-value skipped-ans">Time Expired</span>
                  </div>
                ) : (
                  <div className="review-answer-row">
                    <span className="answer-label">Your Answer:</span>
                    <span className={`answer-value ${r.correct ? "correct-ans" : "wrong-ans"}`}>
                      {r.selected}
                    </span>
                  </div>
                )}
                {!r.correct && (
                  <div className="review-answer-row">
                    <span className="answer-label">Correct Answer:</span>
                    <span className="answer-value correct-ans">{r.question.answer}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="result-actions">
        <button className="btn btn-ghost" onClick={() => onRetry("same")} id="retry-btn">
          🔁 Retry Same Quiz
        </button>
        <button className="btn btn-primary" onClick={() => onRetry("new")} id="new-student-btn">
          🆕 New Student
        </button>
      </div>
    </div>
  );
}

// ─── Main Quiz Controller ─────────────────────────────────────────
export default function Quiz() {
  const [screen, setScreen] = useState("welcome"); // "welcome" | "quiz" | "results"
  const [studentName, setStudentName] = useState("");
  const [resultData, setResultData] = useState(null);

  const handleStart = (name) => {
    setStudentName(name);
    setScreen("quiz");
  };

  const handleFinish = (data) => {
    setResultData(data);
    setScreen("results");
  };

  const handleRetry = (mode) => {
    if (mode === "same") {
      setScreen("quiz");
    } else {
      setStudentName("");
      setResultData(null);
      setScreen("welcome");
    }
  };

  if (screen === "welcome") return <WelcomeScreen onStart={handleStart} />;
  if (screen === "quiz")    return <QuizScreen studentName={studentName} onFinish={handleFinish} key={studentName + Date.now()} />;
  if (screen === "results") return <ResultsScreen data={resultData} onRetry={handleRetry} />;
}
