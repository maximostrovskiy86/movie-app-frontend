import {fetchGetGenres, fetchGetMoviesTrending} from "../API/movie-api";
import {createMovieMarkup} from "./cardMovie";
import {dataModification} from "./dataModificationForMovies";

const onLoadPage = async () => {
    const allGenres = await fetchGetGenres();
    const dataTrendingMovies = await fetchGetMoviesTrending();
    const dataModificationMovies = await dataModification(dataTrendingMovies, allGenres);

    return createMovieMarkup(dataModificationMovies);
}

onLoadPage();

export default onLoadPage;


