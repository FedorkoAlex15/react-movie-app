const initialState = {
    movies: []
}

export const allMoviesReducer = (state = initialState, action) => {

    switch (action.type){
        case 'GET_MOVIES': {
            return {state, movies: action.payload}
        }

        default:
            return state
    }






}