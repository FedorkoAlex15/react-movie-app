import {Link} from "react-router-dom"
import {useEffect} from "react";
import {getSelectedMovie, PosterPreview} from "../../services/api/API";
import {useDispatch, useSelector} from "react-redux";
import '../movieInfo/MovieInfo.css'

export default function MovieInfo(props) {

    const {match: {params: {id}}} = props

    const {movieInfo} = useSelector(store => store.allMoviesReducer)
    const dispatch = useDispatch()


    console.log(id)
    useEffect(() => {
        getSelectedMovie(id).then(value => {
            dispatch({type: "MOVIE_INFO", payload: {...value.data}})
        })
    }, [id])


    console.log(movieInfo);

    return (
        <div>


            <div className={'container-movieInfo'}>

                <div className="image-box">
                    <img src={`${PosterPreview}${movieInfo.poster_path}`} alt="image"/>
                </div>

                <div className={'movie-info-box'}>
                    <h2 className="movie-title">
                        {movieInfo.title} ({movieInfo.release_date})
                    </h2>
                    <h4>Description:</h4>
                    <div className="movie-description">
                        {movieInfo.overview}
                    </div>
                    <h4>Movie rating:</h4>
                    <div className="vote-average">
                        {movieInfo.vote_average}
                    </div>

                </div>
            </div>


        </div>
    )
}


