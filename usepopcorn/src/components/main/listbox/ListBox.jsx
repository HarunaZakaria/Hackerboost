import { useState } from "react";
import MovieList from "./MovieList";

export default function ListBox() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && <MovieList movies={movies} />}
    </div>
  );
}
