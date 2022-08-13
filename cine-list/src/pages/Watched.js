import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link } from "react-router-dom";
import Movie from '../components/Movie';
import { MovieControl } from '../context/MovieControl';
import "../style/Watched.css"

export const Watched = () =>{
    const {watched} = useContext (GlobalContext);
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