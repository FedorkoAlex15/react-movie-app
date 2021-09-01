// import axios from 'axios'
 export const DISCOVER_API = 'https://api.themoviedb.org/3/discover/movie?api_key=9bf31fec07dfb53a6611035e41ed5ddf&page=1'


const getAllMovies = () => {
 return fetch ('https://api.themoviedb.org/3/discover/movie?api_key=9bf31fec07dfb53a6611035e41ed5ddf&page=1')
     .then(value => value.json())

}

//
export {getAllMovies}




export const IMAGE_API = "https://image.tmdb.org/t/p/w1280"