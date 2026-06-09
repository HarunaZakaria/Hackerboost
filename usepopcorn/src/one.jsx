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
import Loader from "./components/Loader";

const key = "a468643e";

function One() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);

  //handle delete watched
  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  //fech data from API
  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${key}&s=interstellar`,
      );
      const data = await res.json();
      setMovies(data.Search);
      setIsLoading(false);
    }
    fetchMovies();
  }, []);
  return (
    <>
      <Navbar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>{isLoading ? <Loader /> : <MovieList movies={movies} />}</Box>
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
