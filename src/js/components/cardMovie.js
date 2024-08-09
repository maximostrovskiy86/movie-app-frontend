import {mediaRef} from "../const/refs";
import {IMAGE_BASE_URL} from "../const/base";


export const createMovieMarkup = (movies) => {
    const moviesCollection = movies.results.map((movie) => {
        // console.log('movie', movie)
        return `<li class="movie-item js-movie-item" id=${movie.id}>
            <a class="movie-link" href="#">
                <img class="movie-image" src='${IMAGE_BASE_URL}${movie.poster_path}' alt="${movie.original_title}" />
                <span class="movie-title">${movie.title}</span>
            </a>
        </li>`
    }).join('');
    // console.log('moviesCollection', moviesCollection)
    return mediaRef.innerHTML = moviesCollection;
}