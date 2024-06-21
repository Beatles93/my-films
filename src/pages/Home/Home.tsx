import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import loaderSvg from "../../assets/loader.svg";
import {
  HomeContainer,
  MoviePoster,
  LoaderContainer,
} from "./styled-components";
import FeaturedMovie from "../../components/FeaturedMovie/FeaturedMovie";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
}

const TopRatedMovies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const API_KEY = "940420b28116a0814ea5530e8f40f139";
  const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data.results);
        setSelectedMovie(
          data.results[Math.floor(Math.random() * data.results.length)]
        ); 
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const interval = setInterval(() => {
        setSelectedMovie(movies[Math.floor(Math.random() * movies.length)]);
      }, 15000); 

      return () => clearInterval(interval);
    }
  }, [movies]);

  const handlePosterClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  return (
    <HomeContainer>
      {loading ? (
        <LoaderContainer>
          <img src={loaderSvg} alt="Loading..." className="loader" />
        </LoaderContainer>
      ) : (
        <>
          {selectedMovie && <FeaturedMovie movie={selectedMovie} />}
          <Swiper
            slidesPerView={10}
            slidesPerColumn={2}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div
                  className="movieCard"
                  onClick={() => handlePosterClick(movie)}
                >
                  <span className="rating">{movie.vote_average}</span>
                  <MoviePoster
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="moviePoster"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </HomeContainer>
  );
};

export default TopRatedMovies;
