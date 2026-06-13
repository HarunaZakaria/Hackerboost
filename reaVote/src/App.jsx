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
      <div className="main">
        <PollCard polls={polls} setPolls={setPolls} />
        <LeaderBoard polls={polls} />
      </div>
    </>
  );
}

export default App;
