import React from "react";
import { IOption, IPolData } from "../types";

function LeaderBoard({ pollData }: IPolData) {
  const { options } = pollData;

  //sort votes in decending order
  const sorted = [...options].sort((a, b) => b.votes - a.votes);

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <ul>
        {sorted.map((option: IOption) => (
          <li key={option.id}>
            {option.label} - {option.votes} votes
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeaderBoard;
