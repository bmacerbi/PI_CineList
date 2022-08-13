import React, {useContext} from 'react'
import {GlobalContext} from "./GlobalState";
import "../style/MovieControl.css"


/**
 * Definindo controles de acesso iterativos
 * @param {Movie} movie Componente de um filme
 * @param {string} type Tipo de interação realizada pelo usuario
 * @return Componente iterativo para exclusão de um filme da lista de assistidos ou da lista de interesses
 */
export const MovieControl = ({movie, type}) => {
    const { removeMovieFromWatchlist, removeMovieFromWatchedlist} = useContext(GlobalContext);
    
    return(
        <div className = "card-controls">
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