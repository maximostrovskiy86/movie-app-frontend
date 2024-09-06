import { fetchMovieInformationForModal } from '../API/movie-api';
import localStorageFn from './localStorage';


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
