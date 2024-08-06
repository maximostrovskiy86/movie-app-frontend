import {BASE_URL, API_KEY} from "../const/base";

export const fetchGetMoviesTrending = async () => {
    const params = new URLSearchParams({
        'api_key': API_KEY,
    });

    const response = await fetch(`${BASE_URL}/trending/movie/day?${params}`);
    return await response.json();
}

export const fetchMoviesSearch = async (keyword) => {
   const response =   await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=true&language=en-US&page=1`, {
   // const response =   await fetch(`${BASE_URL}/trending/movie/day?${API_KEY}`, {
        headers: {
            Accept: "application/json",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWMwOTAyNWI0YTUwMDMwN2FlMjZjODkzZjM5YzMzNyIsIm5iZiI6MTcyMjg1NzQ4MS44NDMyNzMsInN1YiI6IjYzNjNmMTBlMDkxZTYyMDA3YTFhZWE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BxHYf2Poplzh_y0ABnudvQzWstb3okQnNb4vYG6XQfA',
        }
    })

    return  await response.json();
}