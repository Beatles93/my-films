import React from "react";
import MovieList from "../../components/Movie/MovieList";
import { FilmsContainer } from "./styled-components";

const Films: React.FC<{ query: string }> = ({ query }) => {
  return (
    <FilmsContainer>
      <MovieList query={query} />
    </FilmsContainer>
  );
};

export default Films;
