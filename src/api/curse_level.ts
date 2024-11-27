import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;

export const getCurse_levels = () => {
    return axios.get(`${BASE_URL}api/curse_levels`)
}

export const getCurse_levelById = (id: string) => {
    return axios.get(`${BASE_URL}api/curse_levels${id}`)
}

