import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

function App () {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=31ef069b`

    const response = await fetch(url);
    const responsJson = await response.json();

    if(responsJson.Search){
      setMovies(responsJson.Search)
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return(
    <div className="container-rolling cine-list">
      <div className="row d-flex align-item-center mt-4 mb-4">
        <MovieListHeading heading = 'Movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row"> 
        <MovieList movies={movies}/>
      </div>
    </div>
  );
};

export default App;