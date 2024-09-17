import { loadMoreMoviesButton } from '../const/refs';
import { fetchGetGenres, fetchGetMoviesTrending } from '../API/movie-api';
import { createMovieMarkup } from './cardMovie';
import { dataModification } from './dataModificationForMovies';
import { smoothScroll } from './smoothScroll';

const onLoadPage = async () => {
  const allGenres = await fetchGetGenres();
  const dataTrendingMovies = await fetchGetMoviesTrending();
  const dataModificationMovies = await dataModification(dataTrendingMovies, allGenres);

  return createMovieMarkup(dataModificationMovies);
};

export const onLoadMoreMovies = async () => {
  await onLoadPage();
  await smoothScroll();
};

loadMoreMoviesButton.addEventListener('click', onLoadMoreMovies);

onLoadPage();

export default onLoadPage;
