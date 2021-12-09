import axios from 'axios';

const api = axios.create({
  baseURL: 'http://casaplantas-env.eba-mysshnpd.us-east-1.elasticbeanstalk.com/'
});

export default api;