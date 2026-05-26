import WatchedMovie from "./WatchMovie";

export default function WatchedMovieList({ watched, handleDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>⭐️</span>
              <span>{movie.imdbRating}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{movie.userRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{movie.runtime} min</span>
            </p>
            <button
              className="delete-watched"
              onClick={() => handleDeleteWatched(movie.imdbID)}
            >
              x
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
