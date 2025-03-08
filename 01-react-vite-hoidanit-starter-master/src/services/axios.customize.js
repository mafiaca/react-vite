import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080'
})

instance.interceptors.response.use(function (response) {
    if (response.data && response.data.data) return response.data;
    return response
}, function (error) {
    if (error.response && error.response.data) return error.response.data

})

export default instance