import { useEffect, useState } from "react";
import styles from "./GenreSidebar.module.scss";

function GenreSidebar({ onSelectGenre }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWE4NzE1ZjNkMjAyODIxMDNhNDQ5NmVlMGY5YWM0ZCIsInN1YiI6IjY2M2Y3YWY0YWNmNDk4YWYzMGMxOWM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mf2xIlXEIZpUKLT_VRMBqk-kJQxFztvQqq5kQVdjGIg",
      },
    };

    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((response) => response.json())
      .then((response) => setGenres(response.genres))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.genreSidebar}>
      <h3>Genres</h3>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id} onClick={() => onSelectGenre(genre.id)}>
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GenreSidebar;
