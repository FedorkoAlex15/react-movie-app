import {Link} from "react-router-dom";
import Genres from "../genresList/GenresList";
import '../header/Header.css'

export default function Header() {


    return (
        <div className={'header'}>
            <div className="container">
                <div className={'logo-box'}>
                    <i className="fas fa-video logo"></i>
                </div>

                <div className={'nav-box'}>
                    <Link to={'/genres'} compoent={Genres}>Genres</Link>
                    <Link to={'/'}>All Movies</Link>
                </div>

                <div className={'user-box'}>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>
                    <p>Tony Stark</p>
                </div>

            </div>
        </div>
    )
}