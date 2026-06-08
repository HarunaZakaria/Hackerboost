import { useEffect, useState } from "react";
import Box from "./components/main/Box";
import MovieList from "./components/main/listbox/MovieList";
import Main from "./components/main/Main";
import WatchedMovieList from "./components/main/watchbox/WatchedMovieList";
import WatchedSummary from "./components/main/watchbox/WatchedSummary";
import Logo from "./components/navbar/Logo";
import Navbar from "./components/navbar/Navbar";
import NumResults from "./components/navbar/NumResults";
import Search from "./components/navbar/Seach";
import { tempMovieData, tempWatchedData } from "./data";
import StartRating from "./components/rating/StarRating";

const key = "a468643e";

function One() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  //handle delete watched
  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  //fech data from API
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${key}&s=interstellar`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  }, []);
  return (
    <>
      <Navbar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList
            watched={watched}
            handleDeleteWatched={handleDeleteWatched}
          />
        </Box>
      </Main>
    </>
  );
}

export default One;
