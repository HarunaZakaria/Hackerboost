"use client";
import React, { useState } from "react";
import { IOption, IPolData } from "../types";

function PollCard({ pollData }: IPolData) {
  const { question, options } = pollData;
  const [polls, setPolls] = useState(pollData);

  //handle vote increment
  function handleVote(index:number) {
   //setPolls((prevPolls) => prevPolls.map((poll) => poll.id === pollData.id ? {...poll, options: poll.options.map((option) => option.id === option.id? {...option, votes: option.vote + 1} : option),}: poll)
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
