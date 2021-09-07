import axios from "axios";

export const DISCOVER_API = 'https://api.themoviedb.org/3/discover/movie?api_key=9bf31fec07dfb53a6611035e41ed5ddf&page=1'
export const PosterPreview = "https://image.tmdb.org/t/p/w1280"
export const API_KEY = '9bf31fec07dfb53a6611035e41ed5ddf'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmYzMWZlYzA3ZGZiNTNhNjYxMTAzNWU0MWVkNWRkZiIsInN1YiI6IjYwZWFiMTMwMGU2NGFmMDA0NTFmMDRlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W9pq33rO1BMhEG1DiLW9ydqrvbbllTCc90UJ9xRVIB8'
    }
})

const getMovies = async (pageNumber) => await instance.get(`discover/movie?api_key=9bf31fec07dfb53a6611035e41ed5ddf&page=${pageNumber}`)
const getSelectedMovie = async (id) => await instance.get(`movie/${id}?api_key=${API_KEY}`)
const getGenres = async () => await instance.get(`genre/movie/list?api_key=${API_KEY}`)
const getMoviesByGenre = async (id, pageNumber) => await instance.get(`discover/movie?api_key=${API_KEY}&with_genres=${id}&page=${pageNumber}`)

export const IMAGE_API = "https://image.tmdb.org/t/p/w1280"


export {getMovies, getSelectedMovie, getGenres, getMoviesByGenre}