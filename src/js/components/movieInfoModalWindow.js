import {mediaRef, modalRef, movieRef, saveWatchedModalBtn} from '../const/refs';
import {IMAGE_BASE_URL} from '../const/base';
import {fetchMovieInformation} from '../API/movie-api';
import localStorageFn from "./localStorage";

let movie = null;

const appendMovieModalMarkup = (filmInfo) => {
    const {poster_path, overview, original_title, vote_average, popularity, genres} = filmInfo;
    // console.log('filmInfo', filmInfo)

    const listGenres = genres.map(genre => {
        console.log('genre', genre);
        return `<span>${genre.name}</span>`;
    });

    const movieInfo = `<div class="modal-content">
    <figure class="movie-image">
        <img src=${IMAGE_BASE_URL}${poster_path} class="modal-picture"  alt=${original_title}/>
        <figcaption class="original-title"><h3 class="modal-title-small-device">${original_title}</h3></figcaption>
    </figure>
    <div class="movie-info">
    <h3 class="modal-title-large-device">${original_title}</h3>
        <table>
            <tr>
                <td>Vote / Votes</td>
                <td>${vote_average}</td>
            </tr>
            <tr>
                <td>Popularity</td>
                <td>${popularity}</td>
            </tr>
            <tr>
                <td>Original Title</td>
                <td>${original_title}</td>
            </tr>
            <tr>
                <td>Genre</td>
                <td>${listGenres}</td>
            </tr>
        </table>
        <div class="description">
            <span class="description-title">About</span>
            <p class="descriptive-paragraph">${overview}</p>
        </div>
        <div class="box-button">
            <button class="button button-modal-watch" data-modal-watch>Add to watched</button>
            <button class="button button-modal-queue" data-modal-queue>Add queue</button>
        </div>
    </div>
</div>`;
    modalRef.innerHTML = movieInfo;
};

export const saveWatchedMovies = (movie) => {
    console.log('movie', movie)
    const localWatched = localStorageFn.load('dataWatched');

    localStorageFn.save('watchedMovies', movie);
}

export const handlerMovieInformation = async (event) => {
    const target = event.target;
    console.log('complete', target);

    let li = target.closest('li');
    if (!li) return;

    const dataMovie = await fetchMovieInformation(li.id);

    // const watchedBtnRefs = document.querySelector('.button-modal-watch');
    // const queueBtnRefs = document.querySelector('[data-modal-queue]');

    // watchedBtnRefs.addEventListener('click', saveWatchedMovies);

    appendMovieModalMarkup(dataMovie);
}


mediaRef.addEventListener('click', handlerMovieInformation);



