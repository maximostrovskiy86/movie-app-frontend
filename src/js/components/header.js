import { formRef, activeNavLink } from '../const/refs';
import { fetchMoviesSearch, fetchGetGenres } from '../API/movie-api';
import { createMovieMarkup } from './cardMovie';
import {dataModification} from "./media";


let selectedLink;
const addStyleActiveNavLink = (e) => {
  e.preventDefault();

  const target = e.target;
  if (target.tagName !== 'A') return;

  highBorderLink(target);
};

const highBorderLink = (li) => {
  if (selectedLink) { // убрать существующую подсветку, если есть
    selectedLink.classList.remove('is-border');
  }
  selectedLink = li;
  selectedLink.classList.add('is-border'); // подсветить новый li
};

async function onSearchMovies(event) {
  event.preventDefault();

  const form = event.target;
  const keyWord = form.elements.searchInput.value;

  if (!keyWord) return;

  const allGenres = await fetchGetGenres();
  const dataMovieSearch = await fetchMoviesSearch(keyWord);

  const dataModificationMovies = await dataModification(dataMovieSearch, allGenres);

  createMovieMarkup(dataModificationMovies)
}

formRef.addEventListener('submit', onSearchMovies);
activeNavLink.addEventListener('click', addStyleActiveNavLink);


