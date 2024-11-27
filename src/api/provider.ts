import { getCookie } from "@/helper";
import { Provider } from "@/interfaces";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;

export const getProviders = () => {
    return axios.get(`${BASE_URL}api/providers`)
}


export const postProvider = (data: Provider) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.post(`${BASE_URL}api/providers`, data, config)
}

export const putProvider = (data: Provider) => {
    const { uid } = data;

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.put(`${BASE_URL}api/providers/${uid}`, data, config)
}


export const deleteProvider = (id: string) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };
    
    return axios.delete(`${BASE_URL}api/providers/${id}`, config)
}

