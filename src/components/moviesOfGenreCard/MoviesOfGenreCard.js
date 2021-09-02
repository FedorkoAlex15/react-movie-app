import {PosterPreview} from "../../services/api/API";
import {Link} from "react-router-dom";

export default function MoviesOfGenreCard({items}) {


    return (
        <div className={'movie-box'}>
            <h3>{items.title}</h3>
            <img src={`${PosterPreview}${items.poster_path}`} alt="image"/>
            <Link to={{pathname: '/movies/' + items.id}}> Movie Details</Link>

        </div>
    )
}