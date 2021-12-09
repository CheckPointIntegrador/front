import axios from 'axios';

//endpoints

//todos os produtos => /products

//encontrar produtos por id => /products/ {id}

//encontrar produtos por categoria => /products/category/ {category}

//encontrar todas as categorias => /category/categories


const api = axios.create({
  baseURL: 'http://casaplantas-env.eba-mysshnpd.us-east-1.elasticbeanstalk.com'
});

export default api;