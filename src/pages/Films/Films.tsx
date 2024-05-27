import MovieList from "../../components/Movie/MovieList";

const Films = ({ query }) => {
  return (
    <div className="films">
      <MovieList query={query} />
    </div>
  );
};

export default Films;
