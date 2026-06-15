import React from "react";
import { IOption } from "../types";

function VoteBar({ label, votes, maxVote, onVote }: IOption) {
  const percentage = maxVote > 0 ? (votes / maxVote) * 100 : 0;
  return (
    <div className="vote-bar.container">
      <div className="vote-bar-label">
        <span>{label}</span>
        <span>
          {votes} votes ({Math.round(percentage)}%)
        </span>
      </div>
      <div className="vote-bar-track">
        <div className="vote-bar-fill" style={{ width: `${percentage}` }}></div>
        <button className="vote-btn" onClick={onVote}>
          {" "}
          👍 Vote
        </button>
      </div>
    </div>
  );
}

export default VoteBar;
