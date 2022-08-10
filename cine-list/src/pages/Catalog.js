import React, { useEffect,useState } from "react";
import Movie from '../components/Movie';
import {Link} from "react-router-dom";
import {FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa'
import "../style/Catalog.css"

const api_key = "aaef4efb960f10b9af88cd0e410a1f54";


let page = 1;
let typeFilter = 0;
let desableReturn = true;
let savedSearchTerm = "";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=${page}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query=`;

function Catalog () {
  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if(typeFilter === 0){
      getMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=${page}`);
    }
    else if(typeFilter === 1){
      getMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&vote_count.gte=5000&api_key=${api_key}&page=${page}`)
    }
    else if(typeFilter === 2){
      getMovies(SEARCH_API + savedSearchTerm + `&page=${page}`);
    }
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }

  const handleOnClickPop = (e) => {
    page = 1;
    desableReturn = true;
    setSearchTerm("")
    getMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=${page}`);
    typeFilter = 0;
  }

  const handleOnClickTopR = (e) => {
    page = 1;
    desableReturn = true;
    setSearchTerm("")
    getMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&vote_count.gte=5000&api_key=${api_key}&page=${page}`);
    typeFilter = 1;
  }
  
  const handleOnSubmit = (e) => {
    page = 1;
    desableReturn = true;
    e.preventDefault();
    if(searchTerm && searchTerm.trim().length !== 0){
      savedSearchTerm = searchTerm;
      getMovies(SEARCH_API + savedSearchTerm + `&page=${page}`);
    }
    typeFilter = 2;    
  };

  const avancePage = (e) => {
    page++;
    desableReturn = false;
    if(typeFilter === 0){
      getMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=${page}`);
    }
    if(typeFilter === 1){
      getMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&vote_count.gte=5000&api_key=${api_key}&page=${page}`);
    }
    if(typeFilter === 2){
      getMovies(SEARCH_API + savedSearchTerm + `&page=${page}`);
    }
  }
  
  const previousPage = (e) => {
    page--;
    if(page === 1){
      desableReturn = true;
    }
    if(typeFilter === 0){
      getMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=${page}`);
    }
    if(typeFilter === 1){
      getMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&vote_count.gte=5000&api_key=${api_key}&page=${page}`);
    }
    if(typeFilter === 2){
      getMovies(SEARCH_API + savedSearchTerm + `&page=${page}`);
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <div className="header-info-catalog">
          <h1>CineList</h1>
          <Link to="/Watchlist"><button className="header-hover">Watchlist</button></Link>
          <Link to="/Watched"><button className="header-hover">Watched Movies</button></Link>
          <Link to="/"><button className="logout">Logout</button></Link>
        </div>
        <div className="search-bar">
          <form onSubmit={handleOnSubmit}>
            <input className="search" type="search" placeholder="Search..."
              value={searchTerm} onChange={handleOnChange} />
          </form>
        </div>
      </header>

      <div className="filters">
        <h3>Filter by: </h3>
        <button onClick={handleOnClickPop}>Popularity</button>
        <button onClick={handleOnClickTopR}>Top Rated</button>
      </div>

      <div className="walkers">
        <button onClick={previousPage} disabled={desableReturn}><FaAngleDoubleLeft/></button>
        <button onClick={avancePage}><FaAngleDoubleRight/></button>
      </div>

      <div className="movie-container">
        {movies.length === 0 && <h1>No movies found</h1>}
        {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default Catalog;


//https://api.themoviedb.org/3/movie/550?api_key=aaef4efb960f10b9af88cd0e410a1f54