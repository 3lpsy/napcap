import Axios from "axios";

const API_PROTOCOL = process.env.API_PROTOCOL
const API_PREFIX = process.env.API_PREFIX
const API_ROOT = process.env.API_ROOT

Axios.defaults.baseURL = API_PROTOCOL + API_ROOT + API_PREFIX;

const defaultConfig = {
    baseURL: API_PROTOCOL + API_ROOT + API_PREFIX,
    timeout: 1000,
    headers: {
        'Authorization': 'Bearer ' + window.localStorage.getItem('token') || ''
    }
}

const interceptors = {
    response: {
        success: (response) => {
            console.log(response);
            return response;
        },
        error: (error) => {
            console.log("API ERROR");
            return Promise.reject(error);
        }
    }
}

export default class Factory {

    constructor(config = {}) {
        this.config = Object.assign(defaultConfig, config);
        this.axios = Axios.create(this.config);
        this.axios.interceptors.response.use(interceptors.response.success, interceptors.response.error);
    }

    getInstance() {
        return this.axios;
    }

}
