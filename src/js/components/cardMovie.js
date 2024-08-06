import {mediaLInk} from "../const/refs";

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const createMovieMarkup = (movies) => {
    const moviesCollection = movies.results.map((movie) => {
        return `<li class="movie-item">
            <a class="movie-link" href="#">
                <img class="movie-image" src='${IMAGE_URL}${movie.poster_path}' alt="${movie.original_title}" />
                <span class="movie-title">${movie.title}</span>
            </a>
        </li>`
    }).join('');

    return mediaLInk.innerHTML = moviesCollection;
}