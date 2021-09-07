import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import MoviesList from "./components/moviesList/MoviesList";
import Header from "./components/header/Header";
import MovieInfo from "./components/movieInfo/MovieInfo";
import GenresList from "./components/genresList/GenresList";
import MoviesOfGenre from "./components/moviesOfGenre/MoviesOfGenre";
import DarkMode from "./components/darkMode/DarkMode";


function App() {
    const {darkMode} = useSelector(store => store.allMoviesReducer)

    return (
        <Router>
            <div className={darkMode ? 'darkmode' : 'lightmode'}>
                <Header/>
                <DarkMode/>
                <Route exact path={'/'} component={MoviesList}/>
                <Route path={'/movies/:id'} render={(props) => {
                    return <MovieInfo {...props}/>
                }}/>
                <Route exact path={'/genres'} component={GenresList}/>
                <Route path={'/genres/:id'} render={(props) => {
                    return <MoviesOfGenre {...props}/>
                }}/>
            </div>
        </Router>
    );
}

export default App;
