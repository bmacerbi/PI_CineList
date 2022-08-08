import React, { useEffect,useState } from "react";
import Movie from "../components/Movie"

const PageFilme = () =>{
    const [movies, setMovies] = useState([]);

    return(
        <>
            <h2>asdjiapçsjd</h2>
            <div className="movie-container">
                {movies.length > 0 && 
                movies.map((movie) => <Movie key={movie.id} {...movie} />)}
            </div>
        </>
    );
};

export default PageFilme;