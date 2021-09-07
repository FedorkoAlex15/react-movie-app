import {useEffect} from "react";
import {getMoviesByGenre, PosterPreview} from "../../services/api/API";
import {useDispatch, useSelector} from "react-redux";
import MoviesOfGenreCard from "../moviesOfGenreCard/MoviesOfGenreCard";
import Pagination from "../pagination/Pagination";
import {GET_MOVIES_OF_GENRE} from "../../redux/actions/actionTypes";

export default function MoviesOfGenre(props) {

    const {match: {params: {id}}} = props

    const {moviesOfGenre, page} = useSelector(store => store.allMoviesReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        getMoviesByGenre(id, page).then(value => {
            dispatch({type: GET_MOVIES_OF_GENRE, payload: [...value.data.results]})
        })
    }, [id, page])

    return (
        <>
            <Pagination/>
            <div className={'movies-box'}>
                {
                    moviesOfGenre.map(value => {
                        return <MoviesOfGenreCard key={value.id} items={value}/>
                    })
                }
            </div>

        </>

    )


}


