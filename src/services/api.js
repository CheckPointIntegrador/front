import axios from 'axios';

const api = axios.create({
baseURL: 'https://api.google.com'
});

export default api;