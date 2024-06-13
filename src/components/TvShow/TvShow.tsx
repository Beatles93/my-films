import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loaderSvg from "../../assets/loader.svg";
import SearchTv from "../SearchTv/SearchTv"; // Импортируем компонент поиска TV
import {
  ContainerTvShow,
  TvShowContainer,
  TvShowItem,
  TvShowPoster,
} from "./styled-components";

const TvShow = () => {
  const [loading, setLoading] = useState(true);
  const [tvShow, setTvShow] = useState(null);
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); // Используем хук навигации

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    let url = `https://api.themoviedb.org/3/discover/tv?api_key=940420b28116a0814ea5530e8f40f139&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`;

    if (query) {
      url = `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`;
    }

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setTvShow(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [query]);

  const handlePosterClick = (id: number) => {
    navigate(`/series/${id}`);
  };

  return (
    <TvShowContainer>
      <SearchTv onSearch={setQuery} /> {/* Используем компонент поиска TV */}
      {loading ? (
        <div className="loaderContainer">
          <img src={loaderSvg} alt="Loading..." className="loader" />
        </div>
      ) : (
        <ContainerTvShow>
          {tvShow &&
            tvShow.map((tvShow) => (
              <TvShowItem
                key={tvShow.id}
                className="seriesItem"
                onClick={() => handlePosterClick(tvShow.id)}
              >
                <TvShowPoster
                  src={`https://image.tmdb.org/t/p/w200${tvShow.poster_path}`}
                  alt={tvShow.name}
                />
              </TvShowItem>
            ))}
        </ContainerTvShow>
      )}
    </TvShowContainer>
  );
};

export default TvShow;
