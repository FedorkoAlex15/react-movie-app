import MoviesOfGenre from "../../components/moviesOfGenre/MoviesOfGenre";

const initialState = {
    movies: [],
    allGenres: [],
    movieInfo: {},
    moviesOfGenre: [],
    page: 1,
    darkMode: false

}

export const allMoviesReducer = (state = initialState, action) => {

    switch (action.type){

        case 'GET_MOVIES': {
            return {...state, movies: action.payload}
        }

        case 'MOVIE_INFO': {
            return {...state, movieInfo: action.payload }
        }

        case 'GET_GENRES' : {
               return {...state, allGenres: action.payload}
        }

        case "GET_MOVIES_OF_GENRE": {
            return {...state, moviesOfGenre: action.payload}
        }


        case "NEXT_PAGE": {
            return {...state, page: ++state.page}
        }

        case  "PREVIOUS_PAGE": {
            return {...state, page: --state.page}
        }

        case "DARK_MODE": {
            return {...state, darkMode: action.payload}
        }
        default:
            return state
    }


}