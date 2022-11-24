import axios from 'axios';

const KEY = 'da3465678846ef922b3e1f6c664b3f62';
const URL = 'https://api.themoviedb.org/3/';

// Запит за популярними фільмами

export const apiTrending = () => {
  return axios.get(`${URL}trending/all/day?api_key=${KEY}`);
};

// Запит на пошук фільму за назвою

export const ApiQuery = query => {
  return axios.get(
    `${URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
};

// Пошук по id інформації про фільм

export const ApiMovieInfo = movieId => {
  return axios.get(`${URL}movie/${movieId}?api_key=${KEY}&language=en-US`);
};

// Пошук по id інформації про акторський склад

export const ApiCast = movieId => {
  return axios.get(
    `${URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
};

// Пошук по id інформації ревь'ю

export const ApiReview = movieId => {
  return axios.get(
    `${URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
};
