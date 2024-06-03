import MovieList from "../../components/Movie/MovieList";
import styles from './Films.module.scss'

const Films = ({ query }) => {
  return (
    <div className={styles.films}>
      <MovieList query={query} />
    </div>
  );
};

export default Films;
