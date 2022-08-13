import React, { useEffect,useState } from "react";
import Movie from '../components/Movie';
import {Link} from "react-router-dom";
import {FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa'
import "../style/Catalog.css"

const api_key = "aaef4efb960f10b9af88cd0e410a1f54";

let page = 1;
let typeFilter = 0;
let disableReturn = true;
let savedSearchTerm = "";

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query=`;

 /**
 * Exibe a página do Catálogo com suas respectivas funcionalidades
 * @return Página Catálogo
 */
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

   /**
 * Realiza uma GET request para obter os filmes que serão exibidos no catálogo
 * @param {string} API URL da request a ser feita, de acordo com a documentação da API TMDb
 */
  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }


  /**
 * Reordena o catálogo de filmes pelo filtro de Popularidade quando seu respectivo botão é clicado
 *
 */
  const handleOnClickPop = () => {
    page = 1;
    disableReturn = true;
    setSearchTerm("")
    getMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=${page}`);
    typeFilter = 0; //tipo "Popularidade"
  }

   /**
 * Reordena o catálogo de filmes pelo filtro de Melhores Avaliações quando seu respectivo botão é clicado
 *
 */
  const handleOnClickTopR = () => {
    page = 1;
    disableReturn = true;
    setSearchTerm("")
    getMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&vote_count.gte=5000&api_key=${api_key}&page=${page}`);
    typeFilter = 1; //tipo "Melhores Avaliados"
  }
  
   /**
 * Exibe os filmes no catálogo referentes ao termo buscado na barra de busca quando este é enviado
 *
 */
  const handleOnSubmit = (e) => {
    page = 1;
    disableReturn = true;
    e.preventDefault();
    if(searchTerm && searchTerm.trim().length !== 0){
      savedSearchTerm = searchTerm;
      getMovies(SEARCH_API + savedSearchTerm + `&page=${page}`);
    }
    typeFilter = 2; //tipo "Busca"    
  };

  /**
 * Avança a página atual do catálogo de filmes quando o respectivo botão é clicado
 *
 */
  const avancePage = () => {
    page++;
    disableReturn = false;
    if(typeFilter === 0){ //Filtro de Popularidade
      getMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=${page}`);
    }
    if(typeFilter === 1){ //Filtro de Melhores Avaliados
      getMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&vote_count.gte=5000&api_key=${api_key}&page=${page}`);
    }
    if(typeFilter === 2){ //Busca
      getMovies(SEARCH_API + savedSearchTerm + `&page=${page}`);
    }
  }
  
   /**
 * Retorna à página anterior do catálogo de filmes quando o respectivo botão é clicado
 *
 */
  const previousPage = (e) => {
    page--;
    if(page === 1){
      disableReturn = true;
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
        <button onClick={previousPage} disabled={disableReturn}><FaAngleDoubleLeft/></button>
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