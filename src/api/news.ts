import axios from "axios";
import { getCookie } from "@/helper";
import { News } from "@/interfaces";


export const getNews = () => {
    return axios.get('http://localhost:8080/api/news')
}


export const getNewsById = (id: string) => {
    return axios.get(`http://localhost:8080/api/news/${id}`);
}



export const postNews = (data: News) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.post(`http://localhost:8080/api/news`, data, config)
}

export const putNews = (data: News) => {
    const { uid } = data;

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.put(`http://localhost:8080/api/news/${uid}`, data, config)
}


export const deleteNews = (id: string) => {
    
    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.delete(`http://localhost:8080/api/news/${id}`, config)
}

