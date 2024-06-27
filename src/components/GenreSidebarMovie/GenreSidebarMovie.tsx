import React, { useState, useEffect } from "react";
import {
  GenreSidebarContainer,
  CloseButton,
  GenreList,
  GenreItem,
} from "./styled-components";
import { Logo } from "../GenreSidebarTvShow/styled-components";

interface Genre {
  id: number;
  name: string;
}

interface GenreSidebarProps {
  onSelectGenre: (genreId: number) => void;
  onClose: () => void;
}

const GenreSidebar: React.FC<GenreSidebarProps> = ({
  onSelectGenre,
  onClose,
}) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWE4NzE1ZjNkMjAyODIxMDNhNDQ5NmVlMGY5YWM0ZCIsInN1YiI6IjY2M2Y3YWY0YWNmNDk4YWYzMGMxOWM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mf2xIlXEIZpUKLT_VRMBqk-kJQxFztvQqq5kQVdjGIg", // Ваш API-ключ
      },
    })
      .then((res) => res.json())
      .then((data) => setGenres(data.genres))
      .catch((err) => console.error("Error fetching genres:", err));
  }, []);

  return (
    <GenreSidebarContainer>
      <Logo>My Films</Logo>
      <CloseButton onClick={onClose}>X</CloseButton>
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

export default GenreSidebar;
