import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getGenres} from "../../services/api/API";
import MoviesListCard from "../moviesListCard/MoviesListCard";
import GenreListCard from "../genreListCard/GenreListCard";

export default function GenresList(){

    const {allGenres} = useSelector(store => store.allMoviesReducer)
    const dispatch = useDispatch()



    useEffect(() => {
        getGenres().then(value => dispatch({type: 'GET_GENRES', payload: [...value.data.genres] }))
       // getGenres().then(value => console.log(value.data))
    }, [])

// const {0}  = genresList
//     console.log(genresList);
console.log(allGenres)


    return(
        <div>
            {
                allGenres.map(value => {
                    return <GenreListCard key={value.id}  items={value}/>
                })
            }
        </div>
    )
}
