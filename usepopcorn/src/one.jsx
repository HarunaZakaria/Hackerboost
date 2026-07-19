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
import ErrorMessage from "./components/ErrorMesage";
import MovieDetails from "./components/MovieDetails";
import { useMovies } from "./useMovies";


function One() {
  const [query, setQuery] = useState("");
  const { movies, isLoading, error } = useMovies(query);
  const [selectedId, setSelectedId] = useState(null);

  //Load from localStorage on the initial render
  const [watched, setWatched] = useState(() => {
    const storedWatched = localStorage.getItem("watched");
    return storedWatched ? JSON.parse(storedWatched) : [];
  });

//save to localStorage whenever watched changes
 useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  //handle selected movie id
  function handleSelectMovieId(id) {
    setSelectedId(id);
  }

  //handle delete watched
  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  //handleCloseMovie
  function handleCloseMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  

  //handle add to watch
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovieId} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                handleDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export default One;
