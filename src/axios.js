import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://xxxxxxxxxxxx.cloudfunctions.net/api'
   
    // The API (cloud function from functions/index.js) URL
});

export default instance;
