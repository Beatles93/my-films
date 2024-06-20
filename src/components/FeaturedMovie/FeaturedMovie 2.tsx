import { useEffect, useState } from "react";
import { FeaturedMovieContainer } from "./styled-components";

    
    
const API_KEY = "940420b28116a0814ea5530e8f40f139";
const FEATURED_API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

const FeaturedMovie = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(FEATURED_API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovie(data.results[0]);
      } catch (error) {
        console.error("Error fetching featured movie:", error);
      }
    };

    fetchMovie();
  }, []);

  if (!movie) {
    return null;
  }

  return (
    <FeaturedMovieContainer>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="backdrop"
      />
      <div className="info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </FeaturedMovieContainer>
  );
};

export default FeaturedMovie;

