import axios from "axios";


export const getProviders = () => {
    return axios.get('http://localhost:8080/api/providers')
}

