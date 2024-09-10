import localStorageFn from './localStorage';

export const isHasFilmLocalQueue = film => {
  const localQueue = localStorageFn.load('dataQueue');

  if (localQueue) {
    return localQueue.some(movie => movie.id === film.id);
  } else {
    return false;
  }
};

export const saveQueueMovies = (film, queueBtnRefs) => {
  const localQueue = localStorageFn.load('dataQueue');

  if (!localQueue) {
    const arrayQueue = [film];
    localStorageFn.save('dataQueue', arrayQueue);
    changeTextQueueButton(true, queueBtnRefs);
    return;
  }

  const isFindQueue = isHasFilmLocalQueue(film);
  changeTextQueueButton(!isFindQueue, queueBtnRefs);

  if (isFindQueue) {
    const removedQueueMovie = localQueue.filter(movie => movie.id !== film.id);
    localStorageFn.save('dataQueue', removedQueueMovie);
  } else {
    localQueue.push(film);
    localStorageFn.save('dataQueue', localQueue);
  }
};

export const changeTextQueueButton = (isFind, queueBtnRefs) => {
  queueBtnRefs.textContent = isFind ? 'Remove from queue' : 'Add queue';
};
