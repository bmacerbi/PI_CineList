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

export const GlobalProvider = props =>{
    const [state, dispatch] = useReducer(AppReducer, inicialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
        localStorage.setItem('watched', JSON.stringify(state.watched))
    }, [state]);

    const addMovieToWatchList = movie =>{
        dispatch({type: "ADD_MOVIE_WATCH_LIST", payload: movie});
    }

    const removeMovieFromWatchlist = (id) =>{
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id})
    };

    return (
        <GlobalContext.Provider 
            value={{ 
                watchlist: state.watchlist, 
                watched: state.watched,
                addMovieToWatchList,
                removeMovieFromWatchlist,
                }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}