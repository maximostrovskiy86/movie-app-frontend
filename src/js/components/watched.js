import localStorageFn from './localStorage';
import { fetchGetGenres, fetchMovieInformationForModal } from '../API/movie-api';
import { dataModification } from './dataModificationForMovies';

export const saveWatchedMovies = async (idFilm, watchedBtnRefs) => {
  const isExistFilm = await fetchMovieInformationForModal(idFilm);
  const localWatched = localStorageFn.load('dataWatched');

  if (!localWatched) {
    const arrayWatched = [isExistFilm];
    localStorageFn.save('dataWatched', arrayWatched);
    return;
  }

  const isFindMovie = localWatched.some(film => film.id === Number(idFilm));
  changeTextWatchedButton(!isFindMovie, watchedBtnRefs);


  if (isFindMovie) {
    const newLocalWatched = localWatched.filter(item => item.id !== isExistFilm.id);
    localStorageFn.save('dataWatched', newLocalWatched);
  } else {
    localWatched.push(isExistFilm);
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
