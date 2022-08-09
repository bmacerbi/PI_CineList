import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link } from "react-router-dom";
import Movie from '../components/Movie';
import "../style/Catalog.css"
import { MovieControl } from '../components/MovieControl';
import { MovieCard } from "../components/MovieCard"

export const Watchlist = () =>{
    const {watchlist} = useContext (GlobalContext);
    return(
    <>
        <header>   
        <div className="header-info">
            <button><h1><Link to="/">CineList</Link></h1></button>
            <button><Link to="/Watchlist">Watchlist</Link></button>
            <button><Link to="/Watched">Watched Movies</Link></button>
        </div>
        </header>
        <h1>My Watchlist</h1>
        <div className="movie-container">
            {watchlist.length === 0 && <h3>No movies on watchlist yet...</h3>}
            {watchlist.length > 0 && watchlist.map((movie) => 
            <>
                <Movie key={movie.id} {...movie} />
                <MovieControl type={"watchlist"} movie={movie}/>
            </>
            )}
        </div>
    </>
    );
};


export default Watchlist;