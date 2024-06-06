import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import styles from "./MovieDetails.module.scss";
import loaderSvg from "../../assets/loader.svg";

interface MovieDetails {
  id: string;
}

interface Movie {
  poster_path: string;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
  vote_count: number;
}

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a1a8715f3d20282103a4496ee0f9ac4d`
    )
      .then((res) => res.json())
      .then((data: Movie) => {
        setMovieDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <img src={loaderSvg} alt="Loading..." className={styles.loader} />
      </div>
    );
  }

  if (!movieDetails) {
    return <div>Error loading movie details</div>;
  }

  return (
    <div className={styles.movieDetails}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
        className={styles.moviePoster}
      />
      <h2 className={styles.movieTitle}>{movieDetails.title}</h2>
      <p className={styles.movieReleaseDate}>
        Release Date: {movieDetails.release_date}
      </p>
      <p className={styles.movieOverview}>{movieDetails.overview}</p>
      <div className={styles.movieVotes}>
        <StarRating rating={movieDetails.vote_average / 2} />{" "}
        <span className={styles.voteCount}>
          <i className={styles.fas}></i> {movieDetails.vote_count}
        </span>
      </div>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Back to Films
      </button>
    </div>
  );
};

export default MovieDetails;
