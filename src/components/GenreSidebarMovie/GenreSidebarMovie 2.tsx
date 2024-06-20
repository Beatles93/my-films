import { useEffect, useState } from "react";
import closeIcon from "../../assets/cross-icon.png";
import {
  GenreSidebarContainer,
  Logo,
  Header,
  Title,
  CloseButton,
  GenreList,
  GenreItem,
} from "./styled-components";

interface GenreSidebarProps {
  onSelectGenre: (genreId: number) => void;
  onClose: () => void;
}

interface Genre {
  id: number;
  name: string;
}

const GenreSidebarMovie: React.FC<GenreSidebarProps> = ({
  onSelectGenre,
  onClose,
}) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWE4NzE1ZjNkMjAyODIxMDNhNDQ5NmVlMGY5YWM0ZCIsInN1YiI6IjY2M2Y3YWY0YWNmNDk4YWYzMGMxOWM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mf2xIlXEIZpUKLT_VRMBqk-kJQxFztvQqq5kQVdjGIg",
      },
    };

    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((response) => response.json())
      .then((response) => setGenres(response.genres))
      .catch((err) => console.error(err));
  }, []);

  return (
    <GenreSidebarContainer>
      <Logo>My Films</Logo>
      <Header>
        <Title>Genres</Title>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} alt="Close" />
        </CloseButton>
      </Header>
      <GenreList>
        {genres.map((genre) => (
          <GenreItem key={genre.id} onClick={() => onSelectGenre(genre.id)}>
            {genre.name}
          </GenreItem>
        ))}
      </GenreList>
    </GenreSidebarContainer>
  );
};

export default GenreSidebarMovie;
