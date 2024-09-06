import { modalRef } from '../const/refs';
import { IMAGE_BASE_URL } from '../const/base';

export const appendMovieModalMarkup = (filmInfo) => {
  const { poster_path, overview, original_title, vote_average, popularity, genres } = filmInfo;

  const listGenres = genres.map(genre => {
    return `<span>${genre.name}</span>`;
  });

  return modalRef.innerHTML = `<div class="modal-content">
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
            <button class="button button-modal-watch" data-modal-watch></button>
            <button class="button button-modal-queue" data-modal-queue>Add queue</button>
        </div>
    </div>
</div>`;
};


