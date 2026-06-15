"use client";
import React, { useState } from "react";
import { IOption } from "../types";
import Option from "./Option";
import Card from "./Card";
import Notification from "./Notification";
import VoteBar from "./VoteBar";

type Props = {
  pollId: number;
  question: string;
  options: IOption[];
  onVote: (pollId: number, optionId: number) => void;
};
// pollId, question, options, onVote
function PollCard({ pollId, question, options, onVote, hasVoted }: any) {
  const maxVote = Math.max(options.map((o) => o.votes));

  return (
    // <div className="poll-card">
    //   <h2>{question}</h2>
    //   <ul>
    //     {options.map((option: IOption) => (
    //       <Option
    //         key={option.id}
    //         option={option}
    //         pollId={pollId}
    //         onVote={onVote}
    //       />
    //     ))}
    //   </ul>
    // </div>
    <Card>
      {hasVoted && (
        <Notification type="success">
          Thanks for voting! you can vote again
        </Notification>
      )}
      {options.map((option) => (
        <VoteBar
          key={option.id}
          label={option.label}
          votes={option.votes}
          maxVote={maxVote}
          onVote={() => onVote(pollId, option.id)}
        />
      ))}
    </Card>
  );
}

export default PollCard;
