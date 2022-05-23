import axios from "axios";
//https://wswork.com.br/cars.json

const api = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/wswork.com.br/"
});

export default api;