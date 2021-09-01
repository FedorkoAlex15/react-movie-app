import {useDispatch, useSelector} from "react-redux";
import MoviesListCard from "../moviesListCard/MoviesListCard";

export default function MoviesList(){

    const {movies, page} = useSelector(store => store.allMoviesReducer)
    const dispatch = useDispatch()



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