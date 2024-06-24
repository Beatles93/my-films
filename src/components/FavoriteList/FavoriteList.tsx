import React from "react";
import { useNavigate } from "react-router-dom";
import { useFavoriteStore } from "../../store/store"; 
import {
  FavoritesContainer,
  FavoriteItem,
  FavoritePoster,
} from "./styled-components";

const FavoriteList: React.FC = () => {
  const favorites = useFavoriteStore((state) => state.favorites); 
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  return (
    <FavoritesContainer>
      {favorites.map((movie) => (
        <FavoriteItem key={movie.id} onClick={() => handleClick(movie.id)}>
          <FavoritePoster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </FavoriteItem>
      ))}
    </FavoritesContainer>
  );
};

export default FavoriteList;
