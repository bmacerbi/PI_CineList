import React, { useEffect,useState } from "react";
import Movie from '../components/Movie';
import {Link, useParams} from "react-router-dom";
import "../style/Catalog.css"

const api_key = "aaef4efb960f10b9af88cd0e410a1f54";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query=`;

function Catalog () {
  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
      getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    if(searchTerm && searchTerm.trim().length !== 0){
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }    
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>       
        <form onSubmit={handleOnSubmit}>
          <input className="search" type="search" placeholder="Buscar..."
            value={searchTerm} onChange={handleOnChange} />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default Catalog;


//https://api.themoviedb.org/3/movie/550?api_key=aaef4efb960f10b9af88cd0e410a1f54