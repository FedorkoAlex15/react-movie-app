import {IMAGE_API} from "../../services/api/API";
import './movie.css'

export default function MovieList({movie}){


    return(
        <div className={'movie-list'}>
            <h1>{movie.title}</h1>
            <img src={`${IMAGE_API}${movie.poster_path}`} alt='poster'  />
        </div>
    )
}






// import {IMAGE_API} from "../App";
// import '../App.css'
// const PopularMovie = ({value}) => {
//
//
//     return(
//
//         <div>
//                 <h1>{value.title}</h1>
//                 <img src={`${IMAGE_API}${value.poster_path}`} alt='poster'  />
//         </div>
//
//     )
// }
//
// export default PopularMovie
//







// import {IMAGE_API} from "../services/api/API";
// import '../App.css'
// const Movie = ({title, overview, poster_path, vote_average}) => {
//
//
//     return(
//
//         <div className={'movie'}>
//                 <h2>{title}</h2>
//                 <img src={IMAGE_API + poster_path} alt={title}/>
//                 <p>{overview}</p>
//
//         </div>
//
//     )
// }
//
// export default Movie