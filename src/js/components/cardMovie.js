import {mediaRef} from "../const/refs";
import {IMAGE_BASE_URL} from "../const/base";
import {fetchGetGenres} from "../API/movie-api";

let arrGenreForFilm;

const resultMovieGenre = async (arrGenresOneMovie) => {
    const {genres} = await fetchGetGenres();

    const newArr = genres.filter(genreObj => arrGenresOneMovie.includes(genreObj.id)).map(genreObj => genreObj.name);

    console.log('newArr', newArr);
    // console.log('arrGenresOneMovie', arrGenresOneMovie);
    // console.log('genres', genres);
    arrGenreForFilm = newArr;
}


const prepareData = async (arrGenresOneMovie) => {
    // console.log('allGenresArr', allGenresArr)
    // const resultArr = allGenresArr.filter()
    console.log('arrGenresOneMovie', arrGenresOneMovie)
}

export const createMovieMarkup = (movies) => {
    console.log('movies', movies.results[0])
    const moviesCollection = movies.results.map((movie) => {
        // console.log('movie', movies.results[0].genre_ids.map(el => el));
        resultMovieGenre(movie.genre_ids)
        return `<li class="movie-item js-movie-item" id=${movie.id}>
            <a class="movie-link" href="#">
                <img class="movie-image" src='${IMAGE_BASE_URL}${movie.poster_path}' alt="${movie.original_title}" />
                <span class="movie-title">${movie.title}</span>
                <div><span class="genres">${arrGenreForFilm}</span><span class="release-data">${movie.release_date}</span></div>
            </a>
        </li>`
    }).join('');

    return mediaRef.innerHTML = moviesCollection;
}