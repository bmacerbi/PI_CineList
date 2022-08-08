import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Movie from "../components/Movie"
import "../style/MoviePage.css"

const api_key = "aaef4efb960f10b9af88cd0e410a1f54";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const PageFilme = () =>{
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
  
    const getMovie = (API) => {
      fetch(API)
        .then((res) => res.json())
        .then((data) => {
          setMovie(data);
        });
    }

    useEffect(() => {
        const movieURL = `https://api.themoviedb.org/3/movie/${id}?&api_key=${api_key}`;
        getMovie(movieURL);
    }, []);

    return(
        <div className="movie-page">
      {movie && (
        <>
            <div className="movie-poster-info">
                <img src={movie.poster_path ? (IMG_API + movie.poster_path) : 'https://static.thenounproject.com/png/1554490-200.png'} alt={movie.title} />
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <span className="nota">{movie.vote_average.toFixed(1)}</span>
                </div>
            </div>
            <div className="info-diretor">
                <h3>Directed by:</h3>
                <p>{movie.crew}</p>
            </div>
            <div className="info-duracao">
                <h3>Duration:</h3>
                <p>{movie.runtime} minutes</p>
            </div>
            <div className="info-sinopse">
                <h3>Description:</h3>
                <p>{movie.overview}</p>
            </div>
        </>
      )}
    </div>
    );
};

export default PageFilme;