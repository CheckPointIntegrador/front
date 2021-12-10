import axios from 'axios';

//endpoints

//todos os produtos => /products

//encontrar produtos por id => /products/ {id}

//encontrar produtos por categoria => /products/category/ {category}

//encontrar todas as categorias => /categories


const api = axios.create({
  baseURL: 'https://casadasplantinhas.herokuapp.com/'
});

export default api;