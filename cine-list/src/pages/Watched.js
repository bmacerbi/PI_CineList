import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link } from "react-router-dom";
import Movie from '../components/Movie';
import { MovieControl } from '../components/MovieControl';
import "../style/Catalog.css"

export const Watched = () =>{
    const {watched} = useContext (GlobalContext);
    return(
    <>
        <header>   
        <div className="header-info">
            <button><h1><Link to="/">CineList</Link></h1></button>
            <button><Link to="/Watchlist">Watchlist</Link></button>
            <button><Link to="/Watched">Watched Movies</Link></button>
        </div>
        </header>
        <h1>My Watched Movies</h1>
        <div className="movie-container">
            {watched.length === 0 && <h3>No watched movies yet...</h3>}
            {watched.length > 0 && watched.map((movie) => 
            <>
                <Movie key={movie.id} {...movie} />
                <MovieControl type={"watched"} movie={movie}/>
            </>
            )}
        </div>
    </>
    );
};


export default Watched;