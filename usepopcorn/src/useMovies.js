import { useState, useEffect } from "react";

const key = "a468643e";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

  return { movies, isLoading, error };
}
