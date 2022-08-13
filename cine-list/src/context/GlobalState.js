import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'

const inicialState = {
    watchlist : localStorage.getItem('watchlist') 
    ? JSON.parse(localStorage.getItem('watchlist')) 
    : [],
    watched : localStorage.getItem('watched') 
    ? JSON.parse(localStorage.getItem('watched')) 
    : [],
};

export const GlobalContext = createContext(inicialState);

/**
 * Provedor do controle de interação entre usuario e listas de filmes;
 * @return Estados das listas de interesse, da filmes assistidos e funcionalidade de incrementação e remoção das respectivas listas
 */
export const GlobalProvider = props =>{
    const [state, dispatch] = useReducer(AppReducer, inicialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
        localStorage.setItem('watched', JSON.stringify(state.watched))
    }, [state]);

    /**
     * Adiciona filme em listas de interesse;
     * @param {Movie} movie Componente filme a ser adicionado
     */
    const addMovieToWatchList = movie =>{
        dispatch({type: "ADD_MOVIE_WATCH_LIST", payload: movie});
    };

    /**
     * Remove filme da listas de interesse;
     * @param {int} id Identificador para buscar filme a ser excluido na lista de interesse
     */
    const removeMovieFromWatchlist = (id) =>{
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id});
    };

    /**
     * Adiciona filme em listas de filmes assistidos;
     * @param {Movie} movie Componente filme a ser adicionado
     */
    const addMovieToWatched = movie =>{
        dispatch({type: "ADD_MOVIE_WATCHED", payload: movie});
    };

    /**
     * Remove filme da listas de filmes assistidos;
     * @param {int} id Identificador para buscar filme a ser excluido na lista de filmes assistidos
     */
    const removeMovieFromWatchedlist = (id) =>{
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHEDLIST", payload: id});
    };

    return (
        <GlobalContext.Provider 
            value={{ 
                watchlist: state.watchlist, 
                watched: state.watched,
                addMovieToWatchList,
                removeMovieFromWatchlist,
                addMovieToWatched,
                removeMovieFromWatchedlist,
                }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}