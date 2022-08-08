import React from 'react';
import Movie from './Movie';
//import "../style/Catalog.css"

export const MovieCard = ({movie, type}) => {

    return (
        <div className="movie-card">
            <div className="overlay"></div>
            
            {movie.length > 0 && movie.map((movie) => <Movie key={movie.id} {...movie} />)}
        </div>
    );
}