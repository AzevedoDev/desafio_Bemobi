import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tidal-hearing.glitch.me',
});

export default api;
