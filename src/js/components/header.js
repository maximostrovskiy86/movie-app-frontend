import {
    formRef,
    activeNavLink,
    errorTextForSearchForm,
    homeNavLinkRef,
    movieNavLinkRef,
    headerRef,
    wrapBtnLibRef,
    searchMovie,
    watchedBtn,
    queueBtn
} from '../const/refs';
import {fetchMoviesSearch, fetchGetGenres} from '../API/movie-api';
import {createMovieMarkup} from './cardMovie';
import {dataModification} from "./dataModificationForMovies";


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

    const allGenres = await fetchGetGenres();
    const dataMovieSearch = await fetchMoviesSearch(keyWord);

    if (!dataMovieSearch.results.length || !form.elements.searchInput.value) {
        errorTextForSearchForm.classList.remove('is-hidden');

        setTimeout(() => {
            errorTextForSearchForm.classList.add('is-hidden');
        }, 5000);

        return;
    }

    const dataModificationMovies = await dataModification(dataMovieSearch, allGenres);
    createMovieMarkup(dataModificationMovies)
}

const onChangePageToHome = () => {
    headerRef.classList.remove('bg-header-library');
    headerRef.classList.add('bg-header-home');
    wrapBtnLibRef.classList.add('is-display-none');
    searchMovie.classList.remove('is-display-none');
}

const onChangePageToMovies = () => {
    headerRef.classList.remove('bg-header-home');
    headerRef.classList.add('bg-header-library');
    wrapBtnLibRef.classList.remove('is-display-none');
    searchMovie.classList.add('is-display-none');
}

const onOpenWatchedPage = () => {
    watchedBtn.style.backgroundColor = `#FF6B01`;
    watchedBtn.style.border = 'none';
    queueBtn.style.border = '1px solid #ffffff';
    queueBtn.style.backgroundColor = 'transparent';
}

const onOpenQueuePage = () => {
    queueBtn.style.backgroundColor = `#FF6B01`;
    queueBtn.style.border = 'none';
    watchedBtn.style.border = '1px solid #ffffff';
    watchedBtn.style.backgroundColor =  'transparent';
}


formRef.addEventListener('submit', onSearchMovies);
activeNavLink.addEventListener('click', addStyleActiveNavLink);
homeNavLinkRef.addEventListener('click', onChangePageToHome);
movieNavLinkRef.addEventListener('click', onChangePageToMovies);
queueBtn.addEventListener('click', onOpenQueuePage);
watchedBtn.addEventListener('click', onOpenWatchedPage);

