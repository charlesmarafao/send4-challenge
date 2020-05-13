import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API || 'http://localhost:3333',

  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer token-fake',
  },
});

export default api;
