import { useState } from "react";
import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WatchedMovieList";

export default function WatchBox() {
  const [watched, setWatched] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
}
