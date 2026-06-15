"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import PollCard from "./components/PollCard";
import LeaderBoard from "./components/LeaderBoard";
import { useState } from "react";

const initialPolls = [
  {
    id: 1,
    question: "Best Frontend Framework?",
    options: [
      { id: 1, label: "React", votes: 12 },
      { id: 2, label: "Vue", votes: 80 },
      { id: 3, label: "Angula", votes: 36 },
    ],
  },
  {
    id: 2,
    question: "Best Backend Languages?",
    options: [
      { id: 4, label: "Python", votes: 2 },
      { id: 5, label: "Go", votes: 20 },
      { id: 6, label: "Java", votes: 13 },
    ],
  },
];

export default function Home() {
  const [polls, setPolls] = useState(initialPolls);

  function handleVote(pollId: number, optionId: number) {
    setPolls((prePolls) =>
      prePolls.map((poll) =>
        poll.id === pollId
          ? {
              ...poll,
              options: poll.options.map((opt) =>
                opt.id === optionId
                  ? {
                      ...opt,
                      votes: opt.votes + 1,
                    }
                  : opt,
              ),
            }
          : poll,
      ),
    );
  }

  function getPollOptions(poll: (typeof initialPolls)[number]) {
    const maxVote = Math.max(...poll.options.map((opt) => opt.votes), 0);
    return poll.options.map((opt) => ({
      ...opt,
      maxVote,
      onVote: () => handleVote(poll.id, opt.id),
    }));
  }

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <div className="polls-section">
          {polls.map((poll) => (
            <PollCard
              key={poll.id}
              pollId={poll.id}
              question={poll.question}
              options={poll.options}
              onVote={handleVote}
            />
          ))}
        </div>
        <LeaderBoard polls={polls} />
      </div>
    </div>
  );
}
