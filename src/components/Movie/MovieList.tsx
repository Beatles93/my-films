import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFavoriteStore } from "../../store/store";
import loaderSvg from "../../assets/loader.svg";
import toggleIcon from "../../assets/button-icon.png";
import GenreSidebar from "../GenreSidebarMovie/GenreSidebarMovie";
import {
  PaginationButton,
  ActivePageButton,
  PaginationSpan,
  Container,
  ToggleIcon,
  LoaderContainer,
  Loader,
  MovieContainer,
  MovieItem,
  MoviePoster,
  HeartIcon,
  PaginationContainer,
} from "./styled-components";

interface MovieListProps {
  query: string;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const MovieList: React.FC<MovieListProps> = ({ query }) => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [showGenres, setShowGenres] = useState(false);
  const navigate = useNavigate();
  const addToFavorites = useFavoriteStore((state) => state.addToFavorites);
  const removeFromFavorites = useFavoriteStore(
    (state) => state.removeFromFavorites
  );
  const favorites = useFavoriteStore((state) => state.favorites);
  const [favoriteIds, setFavoriteIds] = useState(new Set<number>());

  useEffect(() => {
    const ids = new Set<number>(favorites.map((movie) => movie.id));
    setFavoriteIds(ids);
  }, [favorites]);

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

  const getMovie = (query: string, page = 1) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWE4NzE1ZjNkMjAyODIxMDNhNDQ5NmVlMGY5YWM0ZCIsInN1YiI6IjY2M2Y3YWY0YWNmNDk4YWYzMGMxOWM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mf2xIlXEIZpUKLT_VRMBqk-kJQxFztvQqq5kQVdjGIg",
      },
    };

    let url;
    if (query) {
      url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
    } else if (selectedGenre) {
      url = `https://api.themoviedb.org/3/discover/movie?with_genres=${selectedGenre}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
    } else {
      url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
    }

    setLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovieList(json.results);
        setTotalPages(json.total_pages);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  };

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      getMovie(query, page);
    }
  };

  const handleSelectGenre = (genreId: number) => {
    setSelectedGenre(genreId);
    setCurrentPage(1);
    getMovie(query, 1);
  };

  useEffect(() => {
    setCurrentPage(1);
    getMovie(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, selectedGenre]);

  const renderPageButtons = () => {
    const pageButtons = [];

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

  return (
    <Container>
      <ToggleIcon
        src={toggleIcon}
        alt="Toggle Genres"
        onClick={() => setShowGenres(!showGenres)}
      />
      {showGenres && (
        <GenreSidebar
          onSelectGenre={handleSelectGenre}
          onClose={() => setShowGenres(false)}
        />
      )}
      {loading && currentPage === 1 ? (
        <LoaderContainer>
          <Loader src={loaderSvg} alt="Loading..." />
        </LoaderContainer>
      ) : (
        <MovieContainer>
          {movieList.map((movie) => (
            <MovieItem key={movie.id} onClick={() => handleClick(movie.id)}>
              <HeartIcon
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToFavorites(movie);
                }}
                isFavorite={favoriteIds.has(movie.id)}
              >
                ❤️
              </HeartIcon>
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </MovieItem>
          ))}
        </MovieContainer>
      )}
      {!loading && totalPages > 1 && (
        <PaginationContainer>{renderPageButtons()}</PaginationContainer>
      )}
    </Container>
  );
};

export default MovieList;
