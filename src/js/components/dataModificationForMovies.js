export const dataModification = (movies, allGenres) => {
  const { results } = movies;
  const { genres } = allGenres;
  console.log('movies', movies);
  const prepareDataGenres = results.map(item => {

    const genreId = item.genre_ids || item.genres.map(genre => genre.id);

    return ({
      ...item,
      release_date: getFullYear(item.release_date),
      genre_ids: prepareDataGenresFn([...genreId], genres),
    });
  });
  
  return prepareDataGenres;
};

const getFullYear = (time) => {
  const year = new Date(time);
  return year.getFullYear();
};


const prepareDataGenresFn = (arrForOneFilm, allGenres) => {
  return allGenres.filter(genre => arrForOneFilm.includes(genre.id)).map(genre => genre.name).slice(0, 3).join(', ');
};