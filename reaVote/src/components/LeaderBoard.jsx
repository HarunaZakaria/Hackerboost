import React from "react";

function LeaderBoard({ polls }) {
  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>

      {polls.map((poll) => (
        <ul key={poll.id}>
          <h2>{poll.role}</h2>
          {poll.options.map((option) => (
            <li key={option.id}>
              {option.label} - {option.votes}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default LeaderBoard;
