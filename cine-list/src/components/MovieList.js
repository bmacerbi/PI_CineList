import React from 'react';
import App from '../App';

const MovieList = (props) => {
    return(
        <>
            {props.movies.map((movie, index)=> <div>
                <img src = {movie.Poster} alt='movie'></img>
            </div>)}
        </>
    );
}

export default MovieList;