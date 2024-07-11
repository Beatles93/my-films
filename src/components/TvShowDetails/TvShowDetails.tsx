import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import loaderSvg from "../../assets/loader.svg";
import StarRating from "../StarRating/StarRating";
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

interface TVShow {
  poster_path: string;
  original_name: string;
  first_air_date: string;
  overview: string;
  vote_average: number;
  vote_count: number;
}

const TvShowDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tvShowDetails, setTvShowDetails] = useState<TVShow | null>(null);
  const [loading, setLoading] = useState(true);
  const [userRating, setUserRating] = useState<number>(() => {
    const savedRating = localStorage.getItem(`tv-rating-${id}`);
    return savedRating ? parseInt(savedRating, 10) : 0;
  });

  useEffect(() => {
    if (!id) {
      console.error("No ID provided");
      setLoading(false);
      return;
    }

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=940420b28116a0814ea5530e8f40f139&language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((data: TVShow) => {
        setTvShowDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching TV show details:", error);
        setLoading(false);
      });
  }, [id]);

  const handleRatingChange = (rating: number) => {
    setUserRating(rating);
    localStorage.setItem(`tv-rating-${id}`, rating.toString());
  };

  if (loading) {
    return (
      <LoaderContainer>
        <Loader src={loaderSvg} alt="Loading..." />
      </LoaderContainer>
    );
  }

  if (!tvShowDetails) {
    return <div>Error loading TV show details</div>;
  }

  return (
    <Container>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${tvShowDetails.poster_path}`}
        alt={tvShowDetails.original_name}
      />
      <Title>{tvShowDetails.original_name}</Title>
      <Text>First Air Date: {tvShowDetails.first_air_date}</Text>
      <Text>{tvShowDetails.overview}</Text>
      <Votes>
        <StarRating rating={userRating} onRate={handleRatingChange} />
        <VoteCount>
          <i className="fas fa-star"></i> {tvShowDetails.vote_count}
        </VoteCount>
      </Votes>
      <BackButton onClick={() => navigate(-1)}>Back to TV Show</BackButton>
    </Container>
  );
};

export default TvShowDetails;
