import axios from "axios";

// Base da URL:https://fakestoreapi.com/
//URL DA API: /products

const api = axios.create({
    baseURL: 'https://fakestoreapi.com/'
});

export default api;