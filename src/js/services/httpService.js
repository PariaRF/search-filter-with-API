// import axios from "axios";

const app = axios.create({
    baseURL: 'http://localhost:3000/transactions',
})

const http = {
    get: app.get,
}

export default http;