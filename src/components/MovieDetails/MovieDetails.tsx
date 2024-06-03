import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import styles from './MovieDetails.module.scss';

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a1a8715f3d20282103a4496ee0f9ac4d`
    )
      .then((res) => res.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
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
        {/* Pass half the vote_average */}
        <span className={styles.voteCount}>
          <i className={styles.fas}></i> {movieDetails.vote_count}
        </span>
      </div>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Back to Films
      </button>
    </div>
  );
}

export default MovieDetails;
