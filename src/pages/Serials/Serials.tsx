import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loaderSvg from "../../assets/loader.svg";
import {
  ContainerSerials,
  SerialsContainer,
  SerialsItem,
  SerialsPoster,
} from "./styled-components";

const Serials = () => {
  const [loading, setLoading] = useState(true);
  const [series, setSeries] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=940420b28116a0814ea5530e8f40f139&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setSeries(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handlePosterClick = (id: number) => {
    navigate(`/series/${id}`);
  };

  return (
    <SerialsContainer>
      {loading ? (
        <div className="loaderContainer">
          <img src={loaderSvg} alt="Loading..." className="loader" />
        </div>
      ) : (
        <ContainerSerials>
          {series &&
            series.map((serie) => (
              <SerialsItem
                key={serie.id}
                className="seriesItem"
                onClick={() => handlePosterClick(serie.id)}
              >
                <SerialsPoster
                  src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
                  alt={serie.name}
                />
              </SerialsItem>
            ))}
        </ContainerSerials>
      )}
    </SerialsContainer>
  );
};

export default Serials;
