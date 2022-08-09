import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";
import "../style/Catalog.css"


export const MovieControl = ({movie, type}) => {
    const { removeMovieFromWatchlist, removeMovieFromWatchedlist} = useContext(GlobalContext);
    
    return(
        <div className = "inner-card-controls">
            {type === "watchlist" && (
                <button className="remove-button" onClick={() => removeMovieFromWatchlist(movie.id)}>
                    <img src="https://www.pngall.com/wp-content/uploads/5/Delete-Red-X-Button-Transparent.png"/>
                </button>
             )}
             {type === "watched" && (
                <button className="remove-button" onClick={() => removeMovieFromWatchedlist(movie.id)}>
                    <img src="https://www.pngall.com/wp-content/uploads/5/Delete-Red-X-Button-Transparent.png"/>
                </button>
             )}

        </div>
    );
}