import Axios from 'axios';

const axios = Axios.create({ baseURL: "http://localhost:5000/"});

export const api = "http://localhost:5000/api";

export default axios;