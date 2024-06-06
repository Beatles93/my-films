import React from "react";
import MovieList from "../../components/Movie/MovieList";
import styles from "./Films.module.scss";

interface FilmsProps {
  query: string;
}

const Films: React.FC<FilmsProps> = ({ query }) => {
  return (
    <div className={styles.films}>
      <MovieList query={query} />
    </div>
  );
};

export default Films;

