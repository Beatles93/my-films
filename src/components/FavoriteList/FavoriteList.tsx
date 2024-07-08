import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFavoriteStore } from "../../store/store";
import {
  PaginationButton,
  ActivePageButton,
  PaginationSpan,
  PaginationContainer,
  FavoritesContainer,
  FavoriteItem,
  FavoritePoster,
  HeartIcon,
} from "./styled-components";

const ITEMS_PER_PAGE = 20;

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const FavoriteList: React.FC = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  const addToFavorites = useFavoriteStore((state) => state.addToFavorites);
  const removeFromFavorites = useFavoriteStore(
    (state) => state.removeFromFavorites
  );
  const [favoriteIds, setFavoriteIds] = useState(new Set<number>());
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const ids = new Set<number>(favorites.map((movie) => movie.id));
    setFavoriteIds(ids);
  }, [favorites]);

  const totalPages = Math.ceil(favorites.length / ITEMS_PER_PAGE);

  const handleClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  const handleAddToFavorites = (movie: Movie) => {
    if (!favoriteIds.has(movie.id)) {
      addToFavorites(movie);
    } else {
      removeFromFavorites(movie.id);
    }
  };

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageButtons = () => {
    const pageButtons: JSX.Element[] = [];

    if (currentPage > 1) {
      pageButtons.push(
        <PaginationButton
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Earlier
        </PaginationButton>
      );
    }

    for (let page = 1; page <= totalPages; page++) {
      if (
        page === 1 ||
        page === totalPages ||
        (page >= currentPage - 2 && page <= currentPage + 2)
      ) {
        pageButtons.push(
          <PaginationButton
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? ActivePageButton : ""}
          >
            {page}
          </PaginationButton>
        );
      } else if (page === currentPage - 3 || page === currentPage + 3) {
        pageButtons.push(<PaginationSpan key={page}>...</PaginationSpan>);
      }
    }

    if (currentPage < totalPages) {
      pageButtons.push(
        <PaginationButton
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Later
        </PaginationButton>
      );
    }

    return pageButtons;
  };

  const reversedFavorites = [...favorites].reverse();

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(
    startIndex + ITEMS_PER_PAGE,
    reversedFavorites.length
  );
  const currentFavorites = reversedFavorites.slice(startIndex, endIndex);

  return (
    <>
      <FavoritesContainer>
        {currentFavorites.map((movie: Movie, index: number) => (
          <FavoriteItem key={index}>
            <HeartIcon
              onClick={(e) => {
                e.stopPropagation();
                handleAddToFavorites(movie);
              }}
              isFavorite={favoriteIds.has(movie.id)}
            >
              ❤️
            </HeartIcon>
            <FavoritePoster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              onClick={() => handleClick(movie.id)}
            />
          </FavoriteItem>
        ))}
      </FavoritesContainer>
      {totalPages > 1 && (
        <PaginationContainer>{renderPageButtons()}</PaginationContainer>
      )}
    </>
  );
};

export default FavoriteList;
