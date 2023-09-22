import React from "react";
import { useMoviesContext } from "./context/GlobalContext";
import MovieCard from "./MovieCard";
import "./Watchlist.css";

const Watched = () => {
  const MovieContext = useMoviesContext();
  return (
    <div className="watched">
      <div className="container">
        <div className="main-heading">
          <h1>My Watched List</h1>
          <span className="count">
            {MovieContext.watched.length}
            {MovieContext.watched.length === 1 ? " Movie" : " Movies"}
          </span>
        </div>
        {MovieContext.watched.length > 0 ? (
          <div className="movie-grid">
            {MovieContext.watched.map((movie) => (
              <MovieCard movie={movie} type="watched" key={movie.imdbID} />
            ))}
          </div>
        ) : (
          <h2 className="no-movie">No movies in your list, add some </h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
