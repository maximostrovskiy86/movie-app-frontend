import {fetchGetMoviesTrending} from "../API/movie-api";
import {createMovieMarkup} from "./cardMovie";

const onLoadPage = async () => {
    const dataMovies = await fetchGetMoviesTrending();
    return createMovieMarkup(dataMovies);
}

onLoadPage();

export default onLoadPage;


