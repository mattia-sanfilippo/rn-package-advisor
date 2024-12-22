import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://registry.npmjs.org/',
});

export const ENDPOINTS = {
  SEARCH: '-/v1/search',
};
