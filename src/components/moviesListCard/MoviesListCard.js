import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
    withRouter
} from "react-router-dom"
import '../../App.css'
import {PosterPreview} from "../../services/api/API";

export default function MoviesListCard({items}){



    return(
        <div className={'movie-box'}>
            <h3>{items.title}</h3>
            <img src={`${PosterPreview}${items.poster_path}`} alt="image"/>
            <Link to={{pathname: '/movies/' + items.id}}> Movie Details</Link>
        </div>
    )
}