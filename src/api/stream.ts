import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;

export const getStream = () => {
    return axios.get(`${BASE_URL}api/streams`)
}

