import { useEffect, useState } from "react";
import Loader from "./Loader";
import StartRating from "./rating/StarRating";

const key = "a468643e";
export default function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}) {
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

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

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      Title: title,
      Year: year,
      Poster: poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ")[0]), // "148 min" → 148
      userRating,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  const isWatched = watched.map((m) => m.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (m) => m.imdbID === selectedId,
  )?.userRating;
  return (
    <div className="details">
      {/* <button className="btn-back" onClick={onCloseMovie}>
        &larr
      </button> */}
      {isLoading ? (
        <Loader />
      ) : (
        <header>
          <img src={poster} alt={`poster of ${title}`} />
          <div className="details-overview">
            <h2>{title}</h2>
            <p>
              {released} &bull; {runtime}
            </p>
            <p>{genre}</p>
            <p>{imdbRating} IMDB rating</p>
          </div>
        </header>
      )}
      <section>
        <p>
          <em>{plot}</em>
        </p>
        <p>Starring{actors}</p>
        <p>Directed by {director}</p>
        <div className="rating">
          <StartRating maxRating={10} size={24} onSetRating={setUserRating} />
        </div>
        {userRating > 0 && (
          <button className="btn-add" onClick={handleAdd}>
            Add to list
          </button>
        )}
      </section>
    </div>
  );
}
