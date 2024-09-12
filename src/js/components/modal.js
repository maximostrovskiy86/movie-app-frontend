import { mediaRef, closeModal, backdrop } from '../const/refs';
import { appendMovieModalMarkup } from './movieModalTemplate';
import { fetchMovieInformationForModal } from '../API/movie-api';
import { saveWatchedMovies, changeTextWatchedButton, isHasFilmLocalWatched } from './watched';
import { saveQueueMovies, changeTextQueueButton, isHasFilmLocalQueue } from './queue';

async function onOpenModal(event) {
  event.preventDefault();

  const target = event.target;
  let li = target.closest('li');
  if (!li) return;

  const dataMovie = await fetchMovieInformationForModal(li.id);

  window.addEventListener('keydown', onEscKeyPress);
  appendMovieModalMarkup(dataMovie);
  document.body.classList.add('show-modal');

  const watchedBtnRefs = document.querySelector('[data-modal-watch]');
  const queueBtnRefs = document.querySelector('[data-modal-queue]');

  const isFindWatched = isHasFilmLocalWatched(dataMovie);
  changeTextWatchedButton(isFindWatched, watchedBtnRefs);

  const isFindQueue = isHasFilmLocalQueue(dataMovie);
  changeTextQueueButton(isFindQueue, queueBtnRefs);

  watchedBtnRefs.addEventListener('click', () => saveWatchedMovies(dataMovie, watchedBtnRefs));
  queueBtnRefs.addEventListener('click', () => saveQueueMovies(dataMovie, queueBtnRefs));
}

const onCloseModal = () => {
  document.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
};

const onBackdrop = event => {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
};

const onEscKeyPress = event => {
  if (event.code === 'Escape') {
    onCloseModal();
  }
};

mediaRef.addEventListener('click', onOpenModal);
closeModal.addEventListener('click', onCloseModal);
backdrop.addEventListener('click', onBackdrop);
