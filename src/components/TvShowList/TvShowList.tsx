import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFavoriteStore } from "../../store/store";
import loaderSvg from "../../assets/loader.svg";
import toggleIcon from "../../assets/button-icon.png";
import GenresSidebarTvShow from "../GenreSidebarTvShow/GenreSidebarTvShow";
import {
  ContainerTvShow,
  TvShowContainer,
  TvShowItem,
  TvShowPoster,
  HeartIcon,
  LoaderContainer,
  Loader,
  PaginationContainer,
  PaginationButton,
  PaginationSpan,
  ActivePageButton,
  ToggleIcon,
} from "./styled-components";

interface TvShowListProps {
  query: string;
}

const TvShowList: React.FC<TvShowListProps> = ({ query }) => {
  const [loading, setLoading] = useState(true);
  const [tvShows, setTvShows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null); // убедитесь, что переменная определена и инициализирована
  const [showGenres, setShowGenres] = useState(false);
  const navigate = useNavigate();
  const addToFavorites = useFavoriteStore((state) => state.addToFavorites);

  const fetchTvShows = (searchQuery = "", genre = null, page = 1) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWE4NzE1ZjNkMjAyODIxMDNhNDQ5NmVlMGY5YWM0ZCIsInN1YiI6IjY2M2Y3YWY0YWNmNDk4YWYzMGMxOWM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mf2xIlXEIZpUKLT_VRMBqk-kJQxFztvQqq5kQVdjGIg",
      },
    };

    let url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=${page}&sort_by=popularity.desc`;

    if (searchQuery) {
      url = `https://api.themoviedb.org/3/search/tv?query=${searchQuery}&include_adult=false&language=en-US&page=${page}`;
    } else if (genre) {
      url = `https://api.themoviedb.org/3/discover/tv?with_genres=${genre}&include_adult=false&language=en-US&page=${page}&sort_by=popularity.desc`;
    }

    setLoading(true);
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTvShows(data.results || []);
        setTotalPages(data.total_pages || 1);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchTvShows(query, selectedGenre);
  }, [query, selectedGenre]);

  const handlePosterClick = (id: number) => {
    navigate(`/series/${id}`);
  };

  const handleAddToFavorites = (tvShow) => {
    addToFavorites(tvShow);
  };

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      fetchTvShows(query, selectedGenre, page);
    }
  };

  const handleSelectGenre = (genreId: number) => {
    setSelectedGenre(genreId);
    setCurrentPage(1);
    fetchTvShows(query, genreId, 1);
  };

  const renderPageButtons = () => {
    let pageButtons = [];

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
    <TvShowContainer>
      <ToggleIcon
        src={toggleIcon}
        alt="Toggle Genres"
        onClick={() => setShowGenres(!showGenres)}
      />
      {showGenres && (
        <GenresSidebarTvShow
          onSelectGenre={handleSelectGenre}
          onClose={() => setShowGenres(false)}
        />
      )}
      {loading ? (
        <LoaderContainer>
          <Loader src={loaderSvg} alt="Loading..." />
        </LoaderContainer>
      ) : (
        <ContainerTvShow>
          {tvShows.length > 0 ? (
            tvShows.map((tvShow) => (
              <TvShowItem
                key={tvShow.id}
                onClick={() => handlePosterClick(tvShow.id)}
              >
                <HeartIcon
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToFavorites(tvShow);
                  }}
                >
                  ❤️
                </HeartIcon>
                <TvShowPoster
                  src={`https://image.tmdb.org/t/p/w200${tvShow.poster_path}`}
                  alt={tvShow.name}
                />
              </TvShowItem>
            ))
          ) : (
            <p>No TV shows found.</p>
          )}
        </ContainerTvShow>
      )}
      {!loading && totalPages > 1 && (
        <PaginationContainer>{renderPageButtons()}</PaginationContainer>
      )}
    </TvShowContainer>
  );
};

export default TvShowList;
