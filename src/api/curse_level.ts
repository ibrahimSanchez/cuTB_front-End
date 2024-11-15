import axios from "axios";


export const getCurse_levels = () => {
    return axios.get('http://localhost:8080/api/curse_levels')
}

export const getCurse_levelById = (id: string) => {
    return axios.get(`http://localhost:8080/api/curse_levels${id}`)
}

