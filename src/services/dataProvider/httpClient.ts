import axios from 'axios';

const API_ENDPOINT = 'https://run.mocky.io';
const API_VERSION = 'v3';
const API_KEY = 'eef3c24d-5bfd-4881-9af7-0b404ce09507';
const API_TIMEOUT = 20000;

const httpClient = axios.create({
  baseURL: `${API_ENDPOINT}/${API_VERSION}/${API_KEY}`,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = <T>(
  url: string,
  params?: Record<string, any>,
  headers?: any,
) =>
  httpClient.get<T>(url, {
    params,
    headers,
  });