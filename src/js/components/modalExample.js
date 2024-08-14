const refs = {
    openModal: document.querySelector('[data-open-modal]'),
    closeModal: document.querySelector('[data-close-modal]'),
    backdrop: document.querySelector('[data-backdrop]'),
}

const onOpenModal = () => {
    window.addEventListener('keydown', onEscKeyPress);
    document.body.classList.add('show-modal');
}

const onCloseModal = () => {
    document.removeEventListener('keydown', onEscKeyPress);
    document.body.classList.remove('show-modal');
}

const onBackdrop = (event) => {
    console.log('currentTarget', event.currentTarget)
    console.log('currentTarget', currentTarget)
    if (event.currentTarget === event.target) {
        onCloseModal();
    }
}

const onEscKeyPress = (event) => {
    if (event.code === 'Escape') {
        onCloseModal();
    }
}

refs.openModal.addEventListener('click', onOpenModal);
refs.closeModal.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdrop);

