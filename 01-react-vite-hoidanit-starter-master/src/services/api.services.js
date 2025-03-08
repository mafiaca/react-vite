import axios from "axios"

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = 'http://localhost:8080/api/v1/user'
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

export { createUserAPI, updateUserAPI }