import {mediaRef, modalRef, movieRef} from "../const/refs";
import {IMAGE_BASE_URL} from "../const/base";
import {fetchMovieInformation} from "../API/movie-api";


const appendMovieModalMarkup = (filmInfo) => {
    const {poster_path, overview, original_title, vote_average, popularity, genres} = filmInfo;
    console.log('filmInfo', filmInfo)

    const listGenres = genres.map(genre => {
        console.log('genre', genre);
        return `<span>${genre.name}</span>`
    })

    const movieInfo = `<div class="modal-content">
    <figure class="movie-image">
        <img src=${IMAGE_BASE_URL}${poster_path} class="modal-picture"  alt=${original_title}/>
        <figcaption class="original-title"><h3>${original_title}</h3></figcaption>
    </figure>
    <div class="movie-info">
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
            <button class="button button-modal-watch">Add to watched</button>
            <button class="button button-modal-queue">Add queue</button>
        </div>
    </div>
</div>`
    modalRef.innerHTML = movieInfo;
}

export const handlerMovieInformation = async (event) => {
    const target = event.target;
    console.log('complete', target);

    let li = target.closest('li');
    if (!li) return;

    const movie = await fetchMovieInformation(li.id);
    appendMovieModalMarkup(movie)
}


mediaRef.addEventListener('click', handlerMovieInformation);


