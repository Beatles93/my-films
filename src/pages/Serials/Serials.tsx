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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWE4NzE1ZjNkMjAyODIxMDNhNDQ5NmVlMGY5YWM0ZCIsInN1YiI6IjY2M2Y3YWY0YWNmNDk4YWYzMGMxOWM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mf2xIlXEIZpUKLT_VRMBqk-kJQxFztvQqq5kQVdjGIg",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
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
