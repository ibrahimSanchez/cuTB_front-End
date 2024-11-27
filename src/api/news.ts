import axios from "axios";
import { getCookie } from "@/helper";
import { News } from "@/interfaces";

const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;

export const getNews = () => {
    return axios.get(`${BASE_URL}api/news`)
}


export const getNewsById = (id: string) => {
    return axios.get(`${BASE_URL}api/news/${id}`);
}



export const postNews = (data: News) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.post(`${BASE_URL}api/news`, data, config)
}

export const putNews = (data: News) => {
    const { uid } = data;

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.put(`${BASE_URL}api/news/${uid}`, data, config)
}


export const deleteNews = (id: string) => {
    
    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.delete(`${BASE_URL}api/news/${id}`, config)
}

