import { useEffect, useState } from "react";
import styles from "./MovieList.module.scss";
import { useNavigate } from "react-router-dom";
import loaderSvg from "../../assets/loader.svg"; // Укажите правильный путь к SVG

function MovieList({ query }) {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  const getMovie = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWE4NzE1ZjNkMjAyODIxMDNhNDQ5NmVlMGY5YWM0ZCIsInN1YiI6IjY2M2Y3YWY0YWNmNDk4YWYzMGMxOWM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mf2xIlXEIZpUKLT_VRMBqk-kJQxFztvQqq5kQVdjGIg",
      },
    };
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((res) => res.json())
      .then((json) => {
        setMovieList(json.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  const filteredMovies = movieList.filter((movie) => {
    if (!movie.title) {
      console.warn("Movie without title found:", movie);
      return false;
    }
    return movie.title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      {loading ? (
        <div className={styles.loaderContainer}>
          <img src={loaderSvg} alt="Loading..." className={styles.loader} />
        </div>
      ) : (
        <div className={styles.movieContainer}>
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className={styles.movieItem}
              onClick={() => handleClick(movie.id)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={styles.moviePoster}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
