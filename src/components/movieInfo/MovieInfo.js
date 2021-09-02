import {Link} from "react-router-dom"
import {useEffect} from "react";
import { getSelectedMovie} from "../../services/api/API";
import {useDispatch, useSelector} from "react-redux";


export default function MovieInfo(props){

const {match: {params: {id}}} = props

    const {movieInfo} = useSelector(store => store.allMoviesReducer)
    const dispatch = useDispatch()


console.log(id)
    useEffect(() =>{
        getSelectedMovie(id).then(value => {
            dispatch({type: "MOVIE_INFO", payload: {...value.data}})

        })
    }, [id] )


    console.log(movieInfo);

    return(
        <div>
            <Link to={'/'}>All Movies</Link>
            {movieInfo.title} - {movieInfo.overview}




        </div>
    )
}


