import axios from 'axios';

export const userApi = axios.create({
  baseURL: 'http://localhost:3333/'
});

export const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});
