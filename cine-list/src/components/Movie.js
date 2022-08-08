import React from 'react';
import { Link } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({poster_path,title,vote_average,id, showLink = false}) => {
    return (
    <div className="movie">
        <Link to={`/movie/${id}`}>
        <img src={poster_path ? (IMG_API + poster_path) : 'https://static.thenounproject.com/png/1554490-200.png'} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span className="nota">{vote_average.toFixed(1)}</span>
        </div>
        
    </Link></div>
    );
};

export default Movie;