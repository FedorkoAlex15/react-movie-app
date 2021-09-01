const initialState = {
    movies: [],
    page: 1
}

export const allMoviesReducer = (state = initialState, action) => {

    switch (action.type){
        case 'GET_MOVIES': {
            return {...state, movies: action.payload}
        }


        case "NEXT_PAGE": {
            return {...state, page: state.page+=1}
        }

        case  "PREVIOUS_PAGE": {
            return {...state, page: state.page-=1}
        }
        default:
            return state
    }






}