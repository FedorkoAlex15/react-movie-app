import MoviesListCard from "../moviesListCard/MoviesListCard";

export default function MoviesList({movies}){
    console.log(movies)


    return(
        <div>

            {
               movies.map(value => {
                return <MoviesListCard key={value.id} movies={value}/>
               })
            }


        </div>
    )
}