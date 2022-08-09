export default (state, action) => {
    switch(action.type){
        case "ADD_MOVIE_WATCH_LIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist],
            }
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return{
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload)
            }
        case "ADD_MOVIE_WATCHED":
            return {
                ...state,
                watched: [action.payload, ...state.watched],
            }
        case "REMOVE_MOVIE_FROM_WATCHEDLIST":
            return{
                ...state,
                watched: state.watched.filter(movie => movie.id !== action.payload)
            }
        default:
            return state;
    }
};