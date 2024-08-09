import {formRef} from "../const/refs";
import {fetchMoviesSearch} from "../API/movie-api";
import {createMovieMarkup} from "./cardMovie";


async function onSearchMovies(event) {
    event.preventDefault();

    const form = event.target;
    const keyWord = form.elements.searchInput.value;

    console.log('target', keyWord);
    const movieSearch = await fetchMoviesSearch(keyWord);
    console.log('movieSearch', movieSearch)
    createMovieMarkup(movieSearch);

}

formRef.addEventListener('submit', onSearchMovies);


