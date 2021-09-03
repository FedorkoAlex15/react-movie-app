import {useEffect} from "react";
import {getMoviesByGenre, PosterPreview} from "../../services/api/API";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import MoviesOfGenreCard from "../moviesOfGenreCard/MoviesOfGenreCard";
import Pagination from "../pagination/Pagination";

export default function MoviesOfGenre(props){

    const { moviesOfGenre,page} = useSelector(store => store.allMoviesReducer)
    const dispatch = useDispatch()

const {match: {params: {id}}} = props






    useEffect(() => {
       getMoviesByGenre(id, page).then(value => {
            dispatch({type: "GET_MOVIES_OF_GENRE", payload: [...value.data.results]})
           console.log(value.data.results)
       })
    }, [id, page])




console.log(page)


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


