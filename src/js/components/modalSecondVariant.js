const refs = {
    openModal: document.querySelector('[data-open-modal]'),
    closeModal: document.querySelector('[data-close-modal]'),
    backdrop: document.querySelector('[data-backdrop]'),
}

const toggleModal = () => {
    refs.backdrop.classList.toggle('is-hidden');
}

refs.openModal.addEventListener('click', toggleModal);
refs.closeModal.addEventListener('click', toggleModal);