import { useState, useEffect } from "react";
import loaderSvg from "../../assets/loader.svg";
import { HomeContainer } from "./styled-components";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/bodyHome.jpg";
    img.onload = () => setLoading(false);
  }, []);

  return (
    <HomeContainer>
      {loading ? (
        <div className="loaderContainer">
          <img src={loaderSvg} alt="Loading..." className="loader" />
        </div>
      ) : (
        <header className="appHeader">
          <div className="imgBody">
            <img
              className="imgHeader"
              src="/images/bodyHome.jpg"
              alt="body"
            />
          </div>
        </header>
      )}
    </HomeContainer>
  );
};

export default Home;
