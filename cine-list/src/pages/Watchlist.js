import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Link } from "react-router-dom";
import Movie from '../components/Movie';
import "../style/Watchlist.css"
import { MovieControl } from '../components/MovieControl';

export const Watchlist = () =>{
    const {watchlist} = useContext (GlobalContext);
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