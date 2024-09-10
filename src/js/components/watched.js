import localStorageFn from './localStorage';
import { fetchGetGenres } from '../API/movie-api';
import { dataModification } from './dataModificationForMovies';

export const isHasFilmLocalWatched = film => {
  const localWatched = localStorageFn.load('dataWatched');

  if (localWatched) {
    return localWatched.some(movie => movie.id === film.id);
  } else {
    return false;
  }
};

export const saveWatchedMovies = (film, watchedBtnRefs) => {
  const localWatched = localStorageFn.load('dataWatched');

  if (!localWatched) {
    const arrayWatched = [film];
    localStorageFn.save('dataWatched', arrayWatched);
    changeTextWatchedButton(true, watchedBtnRefs);
    return;
  }

  const isFindMovie = isHasFilmLocalWatched(film);
  changeTextWatchedButton(!isFindMovie, watchedBtnRefs);

  if (isFindMovie) {
    const removeFilmFromLocalWatched = localWatched.filter(item => item.id !== film.id);
    localStorageFn.save('dataWatched', removeFilmFromLocalWatched);
    // location.reload();
  } else {
    localWatched.push(film);
    localStorageFn.save('dataWatched', localWatched);
  }
};

export const changeTextWatchedButton = (isFindMovie, watchedBtnRefs) => {
  watchedBtnRefs.textContent = isFindMovie ? 'Remove from watched' : 'Add to Watch';
};

export const onMarkupWatchedPage = async () => {
  const ObjMovies = {};

  const allGenres = await fetchGetGenres();
  ObjMovies.results = localStorageFn.load('dataWatched');
  // ObjMovies.results = localWatchedArr;

  return await dataModification(ObjMovies, allGenres);
};
