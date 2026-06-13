import React from "react";

function PollCard({ polls, setPolls }) {
  return (
    <div className="poll-card">
      {polls.map((poll) => (
        <ul key={poll.id}>
          <h2>{poll.question}</h2>
          {poll.options.map((option) => (
            <li key={option.id}> {option.label}</li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default PollCard;
