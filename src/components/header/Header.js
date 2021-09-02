import {Link} from "react-router-dom";
import Genres from "../genresList/GenresList";

export default function Header(){


    return(
        <div className={'header'}>
            <Link to={'/genres'} compoent={Genres}>Genres</Link>
            <Link to={'/'}>All Movies</Link>
        </div>
    )
}