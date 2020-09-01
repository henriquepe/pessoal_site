import axios from 'axios';

const sendEmailApi = axios.create({
    baseURL: 'https://sendemailstome.herokuapp.com/',
    responseType: "json",
});

export default sendEmailApi;