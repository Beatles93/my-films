import React from "react";
import TvShowList from "../../components/TvShowList/TvShowList";
import { TvShowContainer } from "./styled-components";

const TvShow: React.FC<{ query: string }> = ({ query }) => {
  return (
    <TvShowContainer>
      <TvShowList query={query} />
    </TvShowContainer>
  );
};

export default TvShow;
