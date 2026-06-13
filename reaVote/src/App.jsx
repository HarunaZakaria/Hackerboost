import { useState } from "react";
import Header from "./components/Header";
import LeaderBoard from "./components/LeaderBoard";
import PollCard from "./components/PollCard";
import initialData from "./data";

function App() {
  const [polls, setPolls] = useState(initialData);
  return (
    <>
      <Header />
      <PollCard polls={polls} setPolls={setPolls} />
      <LeaderBoard />
    </>
  );
}

export default App;
