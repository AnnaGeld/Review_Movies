import { movies } from "../../../data/movies";
import MovieCard from "./MovieCard.jsx";
const MoviesList = () => {
  return (
    <div className=" bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </div>
  );
};

export default MoviesList;
