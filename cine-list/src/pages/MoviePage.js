import { useEffect, useState, useContext } from "react";
import { useParams,Link } from "react-router-dom";
import {FaStar, FaRegClock, FaRegCalendarAlt, FaRegMoneyBillAlt} from 'react-icons/fa'
import "../style/MoviePage.css"
import Actor from "../components/Actor"
import Director from "../components/Director"
import { GlobalContext } from "../context/GlobalState";

const api_key = "aaef4efb960f10b9af88cd0e410a1f54";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

 /**
 * Exibe a página de exibição de um filme com suas respectivas funcionalidades
 * @return Página de exibição de um filme
 */
const MoviePage = () =>{
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [actors, setActors] = useState([]);
    const [directors, setDirectors] = useState([]);
    const { addMovieToWatchList, watchlist, watched, addMovieToWatched } = useContext(GlobalContext);

    let storedWatchMovie = watchlist.find((obj) => obj.id == id);
    let storedWatchedMovie= watched.find((obj) => obj.id == id);

    const disableWatched = storedWatchedMovie ? true : false;
    const disableWatcheList = storedWatchMovie ? true : false;

    /**
     * Realiza uma GET request para obter o filme exibido na página
     * @param {string} API URL da request a ser feita, de acordo com a documentação da API TMDb
    */
    const getMovie = (API) => {
      fetch(API)
        .then((res) => res.json())
        .then((data) => {
          setMovie(data);
        });
    } 

    /**
     * Realiza uma GET request para obter os atores de um respectivo filme
     * @param {string} API URL da request a ser feita, de acordo com a documentação da API TMDb
    */
    const getActors = (API) => {
        fetch(API)
          .then((res) => res.json())
          .then((data) => {
            setActors(data.cast.filter(({known_for_department}) => known_for_department === "Acting").slice(0,10));
        });
    } 

    /**
     * Realiza uma GET request para obter os diretores de um respectivo filme
     * @param {string} API URL da request a ser feita, de acordo com a documentação da API TMDb
    */
    const getDirectors = (API) => {
        fetch(API)
          .then((res) => res.json())
          .then((data) => {
            setDirectors(data.crew.filter(({job}) => job === 'Director'));
        });
    } 

    /**
     * Formata um valor para uma string com padrão definido
     * @param {number} number Valor a ser formatado
     * @return {string} Valor formatado
    */
    const formatCurrency = (number) =>{
        return number.toLocaleString("en-US",{
            style: "currency",
            currency: "USD",
        });
    }

    useEffect(() => {
        const movieURL = `https://api.themoviedb.org/3/movie/${id}?&api_key=${api_key}`;
        const ACTORS_API = `http://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`;
        getMovie(movieURL);
        getActors(ACTORS_API);
        getDirectors(ACTORS_API);
    }, []);

    return(
        <>
            <header>     
                <div className="header-info">
                <Link to="/Catalog"><button className="header-hover"><h1>CineList</h1></button></Link>
                <Link to="/Watchlist"><button className="header-hover">Watchlist</button></Link>
                <Link to="/Watched"><button className="header-hover">Watched Movies</button></Link>
                <Link to="/"><button className="logout">Logout</button></Link>
                </div>
            </header>
            <div className="movie-page">
                {movie && (
                <div>
                    <h1 className="movie-title">{movie.title}</h1>
                    <div className="parent-container">
                        <div className="left-container">
                            <div className="movie-poster">
                                <img src={movie.poster_path ? (IMG_API + movie.poster_path) : 'https://static.thenounproject.com/png/1554490-200.png'} alt={movie.title} />
                                <div className="list-buttons">
                                    <button
                                        className="bt-watchedlist" 
                                        disabled={disableWatched}
                                        onClick={()=> addMovieToWatched(movie)}
                                    >
                                        Add to Watched Movies
                                    </button>
                                    <button 
                                        className="bt-watchlist"
                                        disabled={disableWatcheList}
                                        onClick={()=> addMovieToWatchList(movie)}
                                    >
                                        Add to Watchlist
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="right-container">
                            <div className="movie-directors">
                                <h3>Directed by:</h3>
                                {directors.length > 0 && directors.map((director) => <Director key={director.id} {...director}/>)}
                             
                                
                            </div>
                            <div className="movie-note">
                                <h3>IMDb Score:</h3>
                                <p>{movie.vote_average.toFixed(1)}  <FaStar/></p>
                            </div>

                            <div className="info-release">
                                <h3>Release date:</h3>
                                <p>{movie.release_date} <FaRegCalendarAlt/></p>
                            </div>
                            <div className="info-duracao">
                                <h3>Duration:</h3>
                                <p>{movie.runtime} minutes <FaRegClock/></p>
                            </div>
                            <div className="info-budge">
                                <h3>Budget:</h3>
                                <p>{formatCurrency(movie.budget)} <FaRegMoneyBillAlt/></p>
                            </div>
                            <div className="info-sinopse">
                                <h3>Description:</h3>
                                <p> {movie.overview}</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="bottom-container">   
                        <h2>Main Cast</h2>
                        <div className="actor-list">
                            {actors.length === 0 && <h1>No Actors</h1>}
                            {actors.length > 0 && actors.map((actor) => <Actor key={actor.id} {...actor} />)}
                        </div>
                    </div>
                </div>
                )}
            </div>  
        </>
    );
};

export default MoviePage;