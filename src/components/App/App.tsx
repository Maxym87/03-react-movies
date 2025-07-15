import SearchBar from "../SearchBar/SearchBar";
import styles from "./App.module.css";

export default function App() {
  const onSearch = (value: string) => {
    console.log(value);
  };
  return (
    <div className={styles.app}>
      {" "}
      <SearchBar onSubmit={onSearch} />
    </div>
  );
}
