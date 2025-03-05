import { mediaRef } from '../const/refs';
import { IMAGE_BASE_URL } from '../const/base';

export const createMovieMarkup = movies => {
  console.log('MOVIE', movies);
  const moviesCollection = movies
    .map(movie => {
      return `<li class="movie-item js-movie-item" id=${movie.id}>
            <a class="movie-link" href="#">
                <img class="movie-image" src='${IMAGE_BASE_URL}${movie.poster_path}' alt="${movie.original_title}" />
                <span class="movie-title">${movie.title}</span>
                <div><span class="genres">${movie.genre_ids}</span><span class="release-data">${movie.release_date}</span></div>
            </a>
        </li>`;
    })
    .join('');

  return (mediaRef.innerHTML += moviesCollection);
};
