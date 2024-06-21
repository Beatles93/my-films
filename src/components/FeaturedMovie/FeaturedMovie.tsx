import { FeaturedMovieContainer } from "./styled-components";

interface Movie {
  title: string;
  backdrop_path: string;
  overview: string;
}

const FeaturedMovie = ({ movie }: { movie: Movie }) => {
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
