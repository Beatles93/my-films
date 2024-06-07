import { useState, useEffect } from "react";
import loaderSvg from "../../assets/loader.svg";
import { SerialsContainer } from "./styled-components";

const Serials = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/bodySeries.jpg";
    img.onload = () => setLoading(false);
  }, []);

  return (
    <SerialsContainer>
      {loading ? (
        <div className="loaderContainer">
          <img src={loaderSvg} alt="Loading..." className="loader" />
        </div>
      ) : (
        <div className="serials">
          <div className="imgBody">
            <img
              className="imgHeader"
              src="/images/bodySeries.jpg"
              alt="body"
            />
          </div>
        </div>
      )}
    </SerialsContainer>
  );
};

export default Serials;
