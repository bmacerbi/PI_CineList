import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";
import {FaRegWindowClose} from 'react-icons/fa'
import "../style/Catalog.css"


export const MovieControl = ({movie, type}) => {
    const { removeMovieFromWatchlist } = useContext(GlobalContext);
    return(
        <div className = "inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button 
                        className="remove-button"
                        onClick={() => removeMovieFromWatchlist(movie.id)}
                    >
                        <FaRegWindowClose/>
                    </button>
                </>
            )}

        </div>
    );
}