import { BASE_URL, API_KEY } from '../const/base';

export const fetchGetMoviesTrending = async () => {
  const params = new URLSearchParams({
    'api_key': API_KEY,
  });

  const response = await fetch(`${BASE_URL}/trending/movie/day?${params}`);
  return await response.json();
};

export const fetchMoviesSearch = async (keyword) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=true&language=en-US&page=1`, {
    // const response =   await fetch(`${BASE_URL}/trending/movie/day?${API_KEY}`, {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWMwOTAyNWI0YTUwMDMwN2FlMjZjODkzZjM5YzMzNyIsIm5iZiI6MTcyMjg1NzQ4MS44NDMyNzMsInN1YiI6IjYzNjNmMTBlMDkxZTYyMDA3YTFhZWE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BxHYf2Poplzh_y0ABnudvQzWstb3okQnNb4vYG6XQfA',
    },
  });

  return await response.json();
};

export const fetchMovieInformationForModal = async (movie_id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}`, {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWMwOTAyNWI0YTUwMDMwN2FlMjZjODkzZjM5YzMzNyIsIm5iZiI6MTcyMzE5NjAyMS40Mzg5ODgsInN1YiI6IjYzNjNmMTBlMDkxZTYyMDA3YTFhZWE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o6ZEIP1NzHbPrgJMGw8q_yz4T_kEDzJwqFcOFkHlv8A',
    },
  });
  return await response.json();
};

export const fetchGetGenres = async () => {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWMwOTAyNWI0YTUwMDMwN2FlMjZjODkzZjM5YzMzNyIsIm5iZiI6MTcyNDc0OTY0My4zOTMxMTUsInN1YiI6IjYzNjNmMTBlMDkxZTYyMDA3YTFhZWE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2-yu9HmQRRSfMFwSEwNwQVV2pMUn0SJ_urTGQe9jHN8',
    },
  };

  const response = await fetch(url, options);
  return await response.json();
};