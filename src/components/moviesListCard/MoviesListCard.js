import 'moviesListCard.css';
export const IMAGE_API = "https://image.tmdb.org/t/p/w1280"
export default function MoviesListCard({movies}){



    return(
        <div className={'movie-box'}>
            <h1>{movies.title}</h1>
            <img src={`${IMAGE_API}${movies.poster_path}`} alt=""/>
            {/*<img src={`${IMAGE_API}${movie.poster_path}`} alt='poster'  />*/}



        </div>
    )
}