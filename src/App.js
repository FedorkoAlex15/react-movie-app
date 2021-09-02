
import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
    withRouter
} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import {
    DISCOVER_API,
    discoverMovies,
    getAllMovies,
    getChosenMovie,
    getGenres,
    getMovies,
    getMoviesByGenre
} from "./services/api/API";
import {useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import MoviesList from "./components/moviesList/MoviesList";
import Header from "./components/header/Header";
import MovieInfo from "./components/movieInfo/MovieInfo";
import Genres from "./components/genresList/GenresList";
import GenresList from "./components/genresList/GenresList";
import MoviesOfGenre from "./components/moviesOfGenre/MoviesOfGenre";
import Pagination from "./components/pagination/Pagination";

// todo - окремий css о кожного компонета
// todo - змінити chosenMovies на selecteMovies
// todo - clean import
// todo - навести лад з пагінацією




function App() {

  const {movies, page} = useSelector(store => store.allMoviesReducer)
  const dispatch = useDispatch()

// useEffect(() => {
//     getGenres().then(value => console.log(value))
// }, [])


    console.log(movies);


    // useEffect(() => {
    //    getMoviesByGenre(99, 9).then(value => console.log(value))
    // }, [])
    //





    // console.log(movies)

  // console.log(movies)


  // const [movies, setMovies] = useState([])
//   const [currentPage, setCurrentPage] = useState(1)
//
//
//   const getMovies = async() => {
//     const allMovies = await fetch(
//         `https://api.themoviedb.org/3/discover/movie?api_key=9bf31fec07dfb53a6611035e41ed5ddf&page=1`
//     )
//     const  data = await allMovies.json();
//
//     console.log(data)
//     dispatch({type: 'GET_MOVIES', payload: data.results})
//
//   }

  // useEffect(() => {
  //   getAllMovies(page).then(value => {
  //     dispatch({type: "GET_MOVIES", payload: [...value.results]})
  //   })
  // }, [page])
  //


  // useEffect(() => {
  //   getMovies(page).then(value => {
  //     dispatch({type: "GET_MOVIES", payload: [...value.data.results]})
  //   })
  // }, [page])
  //
  //
  // useEffect(() =>{
  //   getChosenMovie(379686).then(value => console.log(value.data))
  // }, [])
  //

// console.log(movies)



  return (

    <Router>
        <div>
            <Header/>

        <Route exact path={'/'} component={MoviesList} />
        <Route path={'/movies/:id'} render={(props) => {
            return <MovieInfo {...props}/>
        }}/>
        <Route exact path={'/genres'} component={GenresList}/>
        <Route path={'/genres/:id'}  render={(props) => {
           return  <MoviesOfGenre {...props}/>
        }} />

        <Pagination/>
        {/*<button onClick={() => {*/}
        {/*    dispatch({type: "NEXT_PAGE"})*/}
        {/*}}>Next Page</button>*/}

        {/*<button onClick={() => {*/}
        {/*    dispatch({type: "PREVIOUS_PAGE"})*/}
        {/*}}>Previous Page</button>*/}

    </div>

    </Router>



  );
}

export default App;
