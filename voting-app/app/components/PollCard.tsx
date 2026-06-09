"use client";
import React, { useState } from "react";
import { IOption, IPolData } from "../types";

function PollCard({ pollData }: IPolData) {
  const { question, options } = pollData;
  const [votes, setVotes] = useState(options.map((o) => o.votes));

  //handle vote increment
  function handleVote(index: number) {
    const curVotes = [...votes];
    const voteNum = curVotes[index] + 1;
    console.log(voteNum);
  }
  return (
    <div className="poll-card">
      <h2>{question}</h2>
      <ul>
        {options.map((option: IOption, index: number) => (
          <li key={option.id}>
            {option.label}
            <button onClick={() => handleVote(index)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PollCard;
