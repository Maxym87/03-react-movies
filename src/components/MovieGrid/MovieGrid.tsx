// Логика отображения списка фильмов по запросу
// В Пропс этого компонента передаем стейт и типизумем по интерфесу Муви
import type { Movie } from "../../types/movie";

interface MovieGridProps {
  onSelect: () => void;
  movies: Movie[];
}

export default function MovieGrid({ onSelect, movies }: MovieGridProps) {
  return (
    <ul>
      {movies.map((movie) => (
        <li>
          <div className={css.card} onClick={onSelect}>
            <img
              className={css.image}
              src="https://image.tmdb.org/t/p/w500/poster-path"
              alt="movie title"
              loading="lazy"
            />
            <h2 className={css.title}>Movie title</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
