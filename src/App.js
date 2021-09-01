

import logo from './logo.svg';
import './App.css';
import {DISCOVER_API, getAllMovies} from "./services/api/API";
import {useEffect, useState} from "react";
import  Movie from './components/movieList/MovieList'
import MovieList from "./components/movieList/MovieList";
import {useDispatch, useSelector} from "react-redux";
import {allMoviesReducer} from "./redux/reducers/allMoviesReducer";
import MoviesList from "./components/moviesList/MoviesList";


function App() {

  const {movies} = useSelector(store => store.allMoviesReducer)
  const dispatch = useDispatch()

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

  useEffect(() => {
    getAllMovies().then(value => console.log(value))
  }, [])




  console.log(movies)


//
//
//


  return (
    <div>
    {/*<MoviesList movies={movies}/>*/}

        {/*{*/}
      {/*  movies.results && movies.results.map(value => {*/}
      {/*    return <MovieList key={value.id}  movie={value}/>*/}
      {/*  })*/}
      {/*})*/}







    </div>
  );
}

export default App;
