import React from "react";
import { useMoviesContext } from "./context/GlobalContext";
import MovieCard from "./MovieCard";
import "./Watchlist.css";

const Watchlist = () => {
  const MovieContext = useMoviesContext();
  return (
    <div className="watchlist">
      <div className="container">
        <div className="main-heading">
          <h1>My Watchlist</h1>
          <span className="count">
            {MovieContext.watchlist.length}
            {MovieContext.watchlist.length === 1 ? " Movie" : " Movies"}
          </span>
        </div>
        {MovieContext.watchlist.length > 0 ? (
          <div className="movie-grid">
            {MovieContext.watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist" key={movie.imdbID} />
            ))}
          </div>
        ) : (
          <h2 className="no-movie">No movies in your list, add some </h2>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
