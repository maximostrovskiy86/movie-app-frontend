import {mediaRef, modalRef, movieRef} from "../const/refs";
import {IMAGE_BASE_URL} from "../const/base";
import {fetchMovieInformation} from "../API/movie-api";


const appendMovieModalMarkup = (filmInfo) => {
    console.log('filmInfo', filmInfo)
    const {poster_path} = filmInfo;
    console.log('complete')

    const movieInfo = `<div class="modal-content">
    <figure class="movie-image">
        <img src=${IMAGE_BASE_URL}${poster_path} width="396" height="478" alt="альтернативный текст"/>
        <figcaption>Текст пояснения который будет под изображением</figcaption>
    </figure>
    <div class="wrapper-info">
        <table>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </table>
        <div>
            <span>About</span>
            <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet eum impedit
                ipsam iusto officia quasi quod similique sint ut.</p>
        </div>
        <div>
            <button>Add to watched</button>
            <button>Add queue</button>
        </div>
    </div>
</div>`

    console.log('modalRef', modalRef)

    modalRef.innerHTML = movieInfo;
}


export const handlerMovieInformation = async (event) => {
    const target = event.target;
    console.log('complete');

    let li = target.closest('li');
    if (!li) return;

    const movie = await fetchMovieInformation(li.id);
    appendMovieModalMarkup(movie)
}


mediaRef.addEventListener('click', handlerMovieInformation);



