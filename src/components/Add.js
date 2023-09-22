import { React, useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Add.css";
import { useMoviesContext } from "./context/GlobalContext";
import * as actions from "./context/ActionTypes";
const Add = () => {
  const MovieContext = useMoviesContext();

  const apiUrl = "https://www.omdbapi.com/?apikey=59aaa8dc&s=";
  let [text, setText] = useState("");
  let [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${apiUrl}${text}`)
      .then((response) => setMovies(response.data.Search))
      .catch((error) => console.log("error"));
  }, [text]);
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-container">
            <input
              type="text"
              placeholder="search for a movie"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <ul className="results">
            {movies &&
              movies.map((movie) => (
                <div key={movie.Title} className="movie">
                  <div className="img">
                    {movie.Poster ? <img src={movie.Poster} /> : null}
                  </div>
                  <div className="details">
                    <div>
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          MovieContext.MoviesDispatch({
                            type: actions.ADD_MOVIE_TO_WATCHLIST,
                            payload: movie,
                          })
                        }
                        className="btn"
                        disabled={
                          MovieContext.watchlist.find(
                            (m) => m.imdbID === movie.imdbID
                          ) ||
                          MovieContext.watched.find(
                            (m) => m.imdbID === movie.imdbID
                          )
                        }
                      >
                        Add to Watchlist
                      </button>
                      <button
                        onClick={() =>
                          MovieContext.MoviesDispatch({
                            type: actions.ADD_MOVIE_TO_WATCHED,
                            payload: movie,
                          })
                        }
                        className="btn"
                        disabled={MovieContext.watched.find(
                          (m) => m.imdbID === movie.imdbID
                        )}
                      >
                        Add to watched
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Add;
