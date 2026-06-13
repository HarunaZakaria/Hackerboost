import React from "react";

function PollCard({ polls, setPolls }) {
  //handle vote click
  function handleVote(pollId, optionId) {
    setPolls((prevPolls) =>
      prevPolls.map((poll) =>
        poll.id === pollId
          ? {
              ...poll,
              options: poll.options.map((option) =>
                option.id === optionId
                  ? { ...option, votes: option.votes + 1 }
                  : option,
              ),
            }
          : poll,
      ),
    );
  }
  return (
    <div className="poll-card">
      <h1>Questions</h1>
      {polls.map((poll) => (
        <ul key={poll.id}>
          <h3>{poll.question}</h3>
          {poll.options.map((option) => (
            <li key={option.id}>
              {option.label}
              <button onClick={() => handleVote(poll.id, option.id)}>
                Vote
              </button>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default PollCard;
