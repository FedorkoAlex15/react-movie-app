import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getGenres} from "../../services/api/API";
import '../genresList/GenreList.css'
import GenreListCard from "../genreListCard/GenreListCard";

export default function GenresList() {
    const {allGenres} = useSelector(store => store.allMoviesReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        getGenres().then(value => dispatch({type: 'GET_GENRES', payload: [...value.data.genres]}))
    }, [])


    return (
        <div className={'container_genresList'}>
            {
                allGenres.map(value => {
                    return <GenreListCard key={value.id} items={value}/>
                })
            }
        </div>
    )
}
