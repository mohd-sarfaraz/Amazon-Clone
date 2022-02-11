import axios from "axios";


const instance = axios.create({
    baseURL: '....'  // The API (cloud function using NodeJs)
});

export default instance;