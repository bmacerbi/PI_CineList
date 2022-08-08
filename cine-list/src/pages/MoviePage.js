import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {FaStar, FaRegClock, FaRegCalendarAlt, FaFilm} from 'react-icons/fa'
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

    const formatCurrency = (number) =>{
        return number.toLocaleString("en-US",{
            style: "currency",
            currency: "USD",
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
                    <div className="movie-poster">
                        <img src={movie.poster_path ? (IMG_API + movie.poster_path) : 'https://static.thenounproject.com/png/1554490-200.png'} alt={movie.title} />
                    </div>
                    <div className="movie-title">
                        <h3>{movie.title}</h3>
                    </div>
                    <div className="movie-note">
                        <h3>IMDb nota:</h3>
                        <p>{movie.vote_average.toFixed(1)}  <FaStar/></p>
                    </div>
                    <div className="info-release">
                        <h3>Lançado em:</h3>
                        <p>{movie.release_date} <FaRegCalendarAlt/></p>
                    </div>
                    <div className="info-duracao">
                        <h3>Duração:</h3>
                        <p>{movie.runtime} minutes <FaRegClock/></p>
                    </div>
                    <div className="info-budge">
                        <h3>Orçamento:</h3>
                        <p>{formatCurrency(movie.budget)}</p>
                    </div>
                <div className="info-sinopse">
                    <h3>Description:</h3>
                    <p> <FaFilm/> {movie.overview}</p>
                </div>
            </>
            )}
        </div>
    );
};

export default PageFilme;