import axios from "axios";


export const getLanguages = () => {
    return axios.get('http://localhost:8080/api/languages')
}


