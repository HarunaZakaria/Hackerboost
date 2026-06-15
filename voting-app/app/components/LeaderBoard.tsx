import React from "react";
import { IPolData, IPolls } from "../types";
import Card from "./Card";
import Notification from "./Notification";

function LeaderBoard({ polls }: IPolls) {
  const allOptions = (polls as unknown as IPolData[])
    .flatMap((poll: any) => poll?.options ?? [])
    .sort((a: any, b: any) => b.votes - a.votes);

  const totalVotes = allOptions.reduce((sum, option) => sum + option.votes, 0);
  const topOption = allOptions[0];

  return (
    <Card className="leaderboard">
      <>
        <h1>Leaderboard</h1>
        {topOption && (
          <Notification type="hghlight">
            Loading: {topOption.label} with {topOption.votes} votes
          </Notification>
        )}
        <ol>
          {allOptions.map((option, index) => (
            <li
              key={option.id}
              className={`leaderboard-item ${index === 0 ? "leader" : ""}`}
            >
              <span className="rank">#{index + 1}</span>
              <span className="votes">{option.label}</span>
              {/* <span className="source">{option.poll.question}</span> */}
            </li>
          ))}
        </ol>
      </>
    </Card>
  );
}

export default LeaderBoard;
