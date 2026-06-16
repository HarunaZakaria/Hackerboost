import StartRating from "../../rating/StarRating";

export default function Movie({ movie, onSelectMovie }) {
  return (
    <div>
      <li key={movie.imdbID} onClick={()=> onSelectMovie(movie.imdbID)}>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>🗓</span>
            <span>{movie.Year}</span>
          </p>
        </div>
        {/* <StartRating
          maxRating={5}
          messages={["Terrible", "Bad", "Okay", "Good", "Amzing"]}
        /> */}
      </li>
    </div>
  );
}
