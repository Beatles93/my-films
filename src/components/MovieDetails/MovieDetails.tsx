import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StarRating from "../StarRating/StarRating"; // Import the StarRating component
import "./ styles.css";

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
    <div className="movie-details">
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
        className="movie-poster"
      />
      <h2 className="movie-title">{movieDetails.title}</h2>
      <p className="movie-release-date">
        Release Date: {movieDetails.release_date}
      </p>
      <p className="movie-overview">{movieDetails.overview}</p>
      <div className="movie-votes">
        <StarRating rating={movieDetails.vote_average / 2} />{" "}
        {/* Pass half the vote_average */}
        <span className="vote-count">
          <i className="fas fa-eye"></i> {movieDetails.vote_count}
        </span>
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        Back to Films
      </button>
    </div>
  );
}

export default MovieDetails;
