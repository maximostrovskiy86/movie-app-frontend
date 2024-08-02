import {BASE_URL, API_KEY} from "../const/base";

export const fetchGetMoviesTrending = async () => {
    const params = new URLSearchParams({
        'api_key': API_KEY,
    });

    const response = await fetch(`${BASE_URL}/trending/movie/day?${params}`);
    return await response.json();
}