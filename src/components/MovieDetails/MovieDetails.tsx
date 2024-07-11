import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import loaderSvg from "../../assets/loader.svg";
import {
  LoaderContainer,
  Loader,
  Container,
  Poster,
  Title,
  Text,
  Votes,
  VoteCount,
  BackButton,
} from "./styled-components";

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
  const [userRating, setUserRating] = useState<number>(() => {
    const savedRating = localStorage.getItem(`movie-rating-${id}`);
    return savedRating ? parseInt(savedRating, 10) : 0;
  });

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

  const handleRatingChange = (rating: number) => {
    setUserRating(rating);
    localStorage.setItem(`movie-rating-${id}`, rating.toString());
  };

  if (loading) {
    return (
      <LoaderContainer>
        <Loader src={loaderSvg} alt="Loading..." />
      </LoaderContainer>
    );
  }

  if (!movieDetails) {
    return <div>Error loading movie details</div>;
  }

  return (
    <Container>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <Title>{movieDetails.title}</Title>
      <Text>Release Date: {movieDetails.release_date}</Text>
      <Text>{movieDetails.overview}</Text>
      <Votes>
        <StarRating rating={userRating} onRate={handleRatingChange} />
        <VoteCount>
          <i className="fas fa-star"></i> {movieDetails.vote_count}
        </VoteCount>
      </Votes>
      <BackButton onClick={() => navigate(-1)}>Back to Films</BackButton>
    </Container>
  );
};

export default MovieDetails;
