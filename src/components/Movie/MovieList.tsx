import { useEffect, useState } from "react";
import styles from "./MovieList.module.scss";
import { useNavigate } from "react-router-dom";
import loaderSvg from "../../assets/loader.svg";

function MovieList({ query }) {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  const getMovie = (query, page = 1) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWE4NzE1ZjNkMjAyODIxMDNhNDQ5NmVlMGY5YWM0ZCIsInN1YiI6IjY2M2Y3YWY0YWNmNDk4YWYzMGMxOWM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mf2xIlXEIZpUKLT_VRMBqk-kJQxFztvQqq5kQVdjGIg",
      },
    };
    const url = query
      ? `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`
      : `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

    setLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovieList(json.results);
        setTotalPages(json.total_pages);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      getMovie(query, page);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    getMovie(query);
  }, [query]);

  const renderPageButtons = () => {
    let pageButtons = [];

    if (currentPage > 1) {
      pageButtons.push(
        <button key="prev" onClick={() => handlePageChange(currentPage - 1)}>
          Earlier
        </button>
      );
    }

    for (let page = 1; page <= totalPages; page++) {
      if (
        page === 1 ||
        page === totalPages ||
        (page >= currentPage - 2 && page <= currentPage + 2)
      ) {
        pageButtons.push(
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? styles.activePage : ""}
          >
            {page}
          </button>
        );
      } else if (page === currentPage - 3 || page === currentPage + 3) {
        pageButtons.push(<span key={page}>...</span>);
      }
    }

    if (currentPage < totalPages) {
      pageButtons.push(
        <button key="next" onClick={() => handlePageChange(currentPage + 1)}>
          Later
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <div>
      {loading && currentPage === 1 ? (
        <div className={styles.loaderContainer}>
          <img src={loaderSvg} alt="Loading..." className={styles.loader} />
        </div>
      ) : (
        <div className={styles.movieContainer}>
          {movieList.map((movie) => (
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
      {!loading && totalPages > 1 && (
        <div className={styles.paginationContainer}>{renderPageButtons()}</div>
      )}
    </div>
  );
}

export default MovieList;
