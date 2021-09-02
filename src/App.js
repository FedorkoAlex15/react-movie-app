
import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
    withRouter
} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import {DISCOVER_API, discoverMovies, getAllMovies, getChosenMovie, getMovies} from "./services/api/API";
import {useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import MoviesList from "./components/moviesList/MoviesList";
import Header from "./components/header/Header";
import MovieInfo from "./components/movieInfo/MovieInfo";

// todo - окремий css о кожного компонета



function App() {

  const {movies, page} = useSelector(store => store.allMoviesReducer)
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
    <div>
        <Header/>
    <Router>

        <Route exact path={'/'} component={MoviesList} />
        <Route path={'/movies/:id'} render={(props) => {
            return <MovieInfo {...props}/>
        }}/>


    </Router>



    {/*<MoviesList movies={movies}/>*/}

        {/*{*/}
      {/*  movies.results && movies.results.map(value => {*/}
      {/*    return <MovieList key={value.id}  movie={value}/>*/}
      {/*  })*/}
      {/*})*/}

      {/*{*/}
      {/*  movies.map(value => {*/}
      {/*    return */}
      {/*  })*/}
      {/*}*/}




  <button onClick={() => {
    dispatch({type: "NEXT_PAGE"})
  }}>Next Page</button>

      <button onClick={() => {
        dispatch({type: "PREVIOUS_PAGE"})
      }}>Previous Page</button>

    </div>
  );
}

export default App;
