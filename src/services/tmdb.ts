import axios from 'axios';

const apiKey = '544fe2b3ff57e4fc989043dce53824d5';

export const defaultSuffix = `?api_key=${apiKey}&language=pt-BR`;
export const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
