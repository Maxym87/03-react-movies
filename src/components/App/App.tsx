import SearchBar from "../SearchBar/SearchBar";
import styles from "./App.module.css";
import { useState } from "react";
import { fetchQuery } from "../../services/movieService";
import type { Movie } from "../../types/movie";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [select, setSelect] = useState<Movie | null>(null);

  const handleSearch = async (searchMovie: string) => {
    const data = await fetchQuery(searchMovie);
    setMovies(data);
  };

  const handleSelect = (movie: Movie) => {
    setSelect(movie);
  };

  const closeModal = () => {
    setSelect(null);
  };
  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearch} />
      <MovieGrid movies={movies} onSelect={handleSelect} />
      {select && <MovieModal movie={select} onClose={closeModal} />}
    </div>
  );
}
