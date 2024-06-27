import React, { useEffect, useState } from "react";
import { GenreSidebarContainer, Header, Logo, CloseButton, GenreList, GenreItem } from "./styled-components";

interface GenresSidebarTvShowProps {
  onSelectGenre: (genreId: number) => void;
  onClose: () => void;
}

const GenresSidebarTvShow: React.FC<GenresSidebarTvShowProps> = ({
  onSelectGenre,
  onClose,
}) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDA0MjBiMjgxMTZhMDgxNGVhNTUzMGU4ZjQwZjEzOSIsInN1YiI6IjY0NzM1MGFmYTE5OWE2MDBhNzU2ODU2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fxq55ORrjXazNcjjNk7EAeGNJptMMFX5xKq8stYrC4U",
      },
    };

    fetch("https://api.themoviedb.org/3/genre/tv/list?language=en", options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setGenres(data.genres || []);
      })
      .catch((error) => {
        console.error("Error fetching genres:", error);
      });
  }, []);

  return (
    <GenreSidebarContainer>
      <Logo>TV Show</Logo>
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

export default GenresSidebarTvShow;
