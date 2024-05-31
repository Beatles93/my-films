import MovieList from "../../components/Movie/MovieList";
import styles from './Films.module.css'

const Films = ({ query }) => {
  return (
    <div className={styles.films}>
      <MovieList query={query} />
    </div>
  );
};

export default Films;
