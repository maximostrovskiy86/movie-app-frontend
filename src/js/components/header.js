import { formRef, activeNavLink } from '../const/refs';
import { fetchMoviesSearch } from '../API/movie-api';
import { createMovieMarkup } from './cardMovie';


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

  const movieSearch = await fetchMoviesSearch(keyWord);
  createMovieMarkup(movieSearch);
}

formRef.addEventListener('submit', onSearchMovies);
activeNavLink.addEventListener('click', addStyleActiveNavLink);


