import {useDispatch, useSelector} from "react-redux";
import MoviesListCard from "../moviesListCard/MoviesListCard";
import {useEffect} from "react";
import {getChosenMovie, getMovies} from "../../services/api/API";

export default function MoviesList(){

    const {movies, page} = useSelector(store => store.allMoviesReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        getMovies(page).then(value => {
            dispatch({type: "GET_MOVIES", payload: [...value.data.results]})
        })
    }, [page])





    return(
        <div className={'movies-box'}>
            {
                movies.map(value => {
                    return <MoviesListCard key={value.id} items={value}/>
                })
            }
        </div>
    )
}