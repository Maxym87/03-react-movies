import SearchBar from "../SearchBar/SearchBar";
import styles from "./App.module.css";
import { useState } from "react";

export default function App() {
  const handleSearch = (searchMovie: string) => {
    const [movie, setMovie] = useState;
  };
  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearch} />
    </div>
  );
}
