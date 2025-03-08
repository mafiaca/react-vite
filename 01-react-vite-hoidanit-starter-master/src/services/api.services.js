import axios from "./axios.customize"

const getUsersAPI = () => {
    const URL_BACKEND = '/api/v1/user'
    return axios.get(URL_BACKEND)
}

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = '/api/v1/user'
    let data = {
        fullName,
        email,
        password,
        phone
    }
    return axios.post(URL_BACKEND, data)

}
const updateUserAPI = () => {

}

export { createUserAPI, updateUserAPI, getUsersAPI }