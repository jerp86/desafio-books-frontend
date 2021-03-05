import axios from 'axios';

const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Expose-Headers': 'authorization,refresh-token',
  },
});

export default api;
