import {mediaRef, closeModal, backdrop} from "../const/refs";
import {handlerMovieInformation} from "./movieInfoModalWindow";

// const refs = {
//     closeModal: document.querySelector('[data-action="close-modal"]'),
//     backdrop: document.querySelector('[data-backdrop]'),
// }


const onOpenModal = () => {
    window.addEventListener('keydown', onEscKeyPress);
    document.body.classList.add('show-modal');

    handlerMovieInformation();
}

const onCloseModal = () => {
    document.removeEventListener('keydown', onEscKeyPress);
    document.body.classList.remove('show-modal');
}

const onBackdrop = (event) => {
    if (event.currentTarget === event.target) {
        onCloseModal();
    }
}

const onEscKeyPress = (event) => {
    if (event.code === 'Escape') {
        onCloseModal();
    }
}

mediaRef.addEventListener('click', onOpenModal);
closeModal.addEventListener('click', onCloseModal);
backdrop.addEventListener('click', onBackdrop);
// refs.closeModal.addEventListener('click', onCloseModal);
// refs.backdrop.addEventListener('click', onBackdrop);

