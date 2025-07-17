import SearchBar from "../SearchBar/SearchBar";
import styles from "./App.module.css";
import { useState } from "react";
import { fetchQuery } from "../../services/movieService";
import type { Movie } from "../../types/movie";
import MovieGrid from "../MovieGrid/MovieGrid";

export default function App() {
  const [movie, setMovie] = useState<Movie[]>([]);

  const handleSearch = async (searchMovie: string) => {
    const data = await fetchQuery(searchMovie);
    setMovie(data);
  };

  const handleClick = () => {
    console.log(movie);
  };
  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearch} />
      <MovieGrid movies={movie} onSelect={handleClick} />
    </div>
  );
}
