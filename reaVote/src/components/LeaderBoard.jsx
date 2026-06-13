import React from "react";

function LeaderBoard({ polls }) {
  //   polls.map(({ id, role, question, options }) => {
  //     const sorted = [...options].sort((a, b) => b.votes - a.votes);
  //     console.log(sorted);
  //   });
  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      {polls.map((poll) => (
        <ul key={poll.id}>
          <h3>{poll.role}</h3>
          {[...poll.options]
            .sort((a, b) => b.votes - a.votes)
            .map((option) => (
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
