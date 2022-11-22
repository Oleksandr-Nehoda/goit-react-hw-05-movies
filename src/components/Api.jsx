import axios from "axios";

const KEY = 'da3465678846ef922b3e1f6c664b3f62';
const URL = 'https://api.themoviedb.org/3/';

// Запит за популярними фільмами

export const apiTrending = () => {
return axios.get(`${URL}trending/all/day?api_key=${KEY}`);
}

// Запит на пошук фільму за назвою
export const ApiQuery = query => {
    return axios.get(
      `${URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
  };


