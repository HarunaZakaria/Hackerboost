import Box from "./components/main/Box";
import MovieList from "./components/main/listbox/MovieList";
import Main from "./components/main/Main";
import WatchedMovieList from "./components/main/watchbox/WatchedMovieList";
import WatchedSummary from "./components/main/watchbox/WatchedSummary";
import Logo from "./components/navbar/Logo";
import Navbar from "./components/navbar/Navbar";
import NumResults from "./components/navbar/NumResults";
import Search from "./components/navbar/Seach";

function App() {
  const movies = ["harua", "Zakaria", "Dauda", "Napari"];
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
          <>
            <WatchedSummary />
            <WatchedMovieList />
          </>
        </Box>
      </Main>
    </>
  );
}

export default App;
