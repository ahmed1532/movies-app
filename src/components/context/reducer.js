import* as actions from './ActionTypes'
export const reducer=(state,action)=>{
    switch (action.type){
        case actions.ADD_MOVIE_TO_WATCHLIST:
            return{
                ...state,
                watchlist:[action.payload,...state.watchlist],
            };
        case actions.REMOVE_MOVIE_FROM_WATCHLIST:
            return{
                ...state,
                watchlist:state.watchlist.filter(
                    (movie)=>movie.imdbID!==action.payload
                ),
            };
        case actions.MOVE_TO_WATCHLIST:
        return{
            ...state,
            watched:state.watched.filter(
            (movie)=>movie.imdbID!==action.payload.imdbID),
            watchlist:[action.payload,...state.watchlist],
        };
        case actions.ADD_MOVIE_TO_WATCHED:
            return{
                ...state,
                watched:[action.payload, ...state.watched],
                watchlist:state.watchlist.filter(
                    (movie)=>movie.imdbID!==action.payload.imdbID),
            };
        case actions.REMOVE_MOVIE_FROM_WATCHED:
            return{
                ...state,
                watched:state.watched.filter(
                    (movie)=>movie.imdbID!==action.payload
                ),
            };
        default:
            return state;
    }    
    }