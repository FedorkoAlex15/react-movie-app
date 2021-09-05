import {useDispatch, useSelector} from "react-redux";
import MoviesListCard from "../moviesListCard/MoviesListCard";
import {useEffect} from "react";
import {getChosenMovie, getMovies} from "../../services/api/API";
import Pagination from "../pagination/Pagination";
import '../../App.css'
import {GET_MOVIES, TOTAL_PAGES} from "../../redux/actions/actionTypes";
export default function MoviesList(){

    const {movies, page, totalPages} = useSelector(store => store.allMoviesReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        getMovies(page).then(value => {

           dispatch({type: TOTAL_PAGES, payload: value.data.total_pages})
            dispatch({type: GET_MOVIES, payload: [...value.data.results]})
        })
    }, [page])


console.log(totalPages)


    return(
        <>
            <Pagination/>
            <div className={'movies-box'}>
                {
                    movies.map(value => {
                        return <MoviesListCard key={value.id} items={value}/>
                    })
                }
            </div>
        </>

    )
}