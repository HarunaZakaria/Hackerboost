import { useEffect, useState } from "react";

const key = "a468643e";
export default function MovieDetails({ selectedId, onCloseMovie }) {
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovieDeails() {
      setIsLoading(true);

      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${key}&i=${selectedId}`,
      );
      const data = await res.json();
      setMovies(data);
      setIsLoading(false);
    }
    getMovieDeails();
  }, [selectedId]);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movies;
  return (
    <did className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        &larr
      </button>
      <p>Seleceted Movie ID:{selectedId} </p>
    </did>
  );
}
