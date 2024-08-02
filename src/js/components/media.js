import {mediaLInk} from "../const/refs";
import {BASE_URL} from "../const/base";
import {fetchGetMoviesTrending} from "../API/movie-api";

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const onLoadPage =  async () => {
    const dataMovies =  await fetchGetMoviesTrending();
    console.log('dataMovies', dataMovies.results[0])
    return createMovieMarkup(dataMovies);
}

const createMovieMarkup = (movies) => {
    const moviesCollection = movies.results.map((movie) => {
        return `<li class="movie-item">
            <a class="movie-link" href="${movie.original}">
                <span class="movie-title">${movie.title}</span>
                <img class="movie-image" src='${IMAGE_URL}${movie.poster_path}' alt="${movie.original_title}" />
            </a>
        </li>`
    }).join('');

    return mediaLInk.insertAdjacentHTML('beforeend', moviesCollection)
}

onLoadPage();

export default onLoadPage;


