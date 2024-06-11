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

interface Series {
  poster_path: string;
  original_name: string;
  first_air_date: string;
  overview: string;
  vote_average: number;
  vote_count: number;
}

const SerialsDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [serialDetails, setSerialDetails] = useState<Series | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      console.error("No ID provided");
      setLoading(false);
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=a1a8715f3d20282103a4496ee0f9ac4d`
    )
      .then((res) => res.json())
      .then((data: Series) => {
        setSerialDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching serial details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <LoaderContainer>
        <Loader src={loaderSvg} alt="Loading..." />
      </LoaderContainer>
    );
  }

  if (!serialDetails) {
    return <div>Error loading serial details</div>;
  }

  return (
    <Container>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${serialDetails.poster_path}`}
        alt={serialDetails.original_name}
      />
      <Title>{serialDetails.original_name}</Title>
      <Text>First Air Date: {serialDetails.first_air_date}</Text>
      <Text>{serialDetails.overview}</Text>
      <Votes>
        <VoteCount>
          <StarRating rating={serialDetails.vote_average / 2} />
          {serialDetails.vote_average} / 10
        </VoteCount>
        <VoteCount>
          <i className="fas fa-star"></i> {serialDetails.vote_count} 
        </VoteCount>
      </Votes>
      <BackButton onClick={() => navigate(-1)}>Back to Serials</BackButton>
    </Container>
  );
};

export default SerialsDetails;
