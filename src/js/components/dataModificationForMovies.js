export const dataModification = (trendingMovies, allGenres) => {
    const {results} = trendingMovies;
    const {genres} = allGenres;

    const prepareDataGenres = results.map(item => ({
        ...item,
        release_date: getFullYear(item.release_date),
        genre_ids: prepareDataGenresFn([...item.genre_ids], genres),
    }))

    // console.log('prepareDataGenres', prepareDataGenres);
    return prepareDataGenres;
}

const getFullYear = (time) => {
    const year = new Date(time);
    return year.getFullYear();
}


const prepareDataGenresFn = (arrForOneFilm, allGenres) => {
    return allGenres.filter(genre => arrForOneFilm.includes(genre.id)).map(genre => genre.name).slice(0, 3).join(', ');
}