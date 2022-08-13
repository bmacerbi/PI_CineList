import React from 'react';
import { Link } from "react-router-dom";
import "../style/Movie.css"

const IMG_API = "https://image.tmdb.org/t/p/w1280";

/**
 * Definindo o componente Filme capturado da API
 * @param {string} name
 * @param {string} poster_path Caminho de acesso ao poster do filme
 * @param {string} title Título do filme pertencente ao componente
 * @param {float} vote_average Nota media do filme baseada na avaliação do IMDb
 * @param {int} id Identificador do componente filme na API
 * @return Componente iterativo de filme exibindo seu poste, título e nota média
 */
const Movie = ({poster_path,title,vote_average,id}) => {
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