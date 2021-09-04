import {useDispatch, useSelector} from "react-redux";

export default function DarkMode(){

    const {darkMode} = useSelector(store => store.allMoviesReducer)
    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={() => dispatch({type: 'DARK_MODE', payload: true})}><i className="far fa-moon"></i></button>
            <button onClick={() => dispatch({type: 'DARK_MODE', payload: false})}><i className="far fa-sun"></i></button>
        </div>
    )
}