import axios from 'axios';

export const npmRegistryApiClient = axios.create({
  baseURL: 'https://registry.npmjs.org/',
});

export const npmApiClient = axios.create({
  baseURL: 'https://api.npmjs.org/',
});

export const NPM_REGISTRY_ENDPOINTS = {
  SEARCH: '-/v1/search',
  PACKAGE: (name: string) => encodeURIComponent(name),
};

export const NPM_ENDPOINTS = {
  DOWNLOADS_LAST_WEEK: (name: string) => `downloads/point/last-week/${encodeURIComponent(name)}`,
  DOWNLOADS_LAST_MONTH: (name: string) => `downloads/point/last-month/${encodeURIComponent(name)}`,
};
