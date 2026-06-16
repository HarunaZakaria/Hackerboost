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

const key = "a468643e";

function One() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

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

  //fech data from API
  useEffect(() => {
    //don't fetch for short query
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${key}&s=${query}`,
          { signal: controller.signal },
        );
        if (!res.ok) {
          throw new Error("Something went wrong with fetching movies");
        }
        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("No movie found");
        }
        setMovies(data.Search);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
    return () => {
      controller.abort();
    };
  }, [query]);

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
