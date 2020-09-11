import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-27f18.cloudfunctions.net/api'
    //'http://localhost:5001/clone-27f18/us-central1/api' 
    // The API (cloud function from functions/index.js) URL
});

export default instance;