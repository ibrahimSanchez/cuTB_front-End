import { getCookie } from "@/helper";
import { Provider } from "@/interfaces";
import axios from "axios";


export const getProviders = () => {
    return axios.get('http://localhost:8080/api/providers')
}


export const postProvider = (data: Provider) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.post(`http://localhost:8080/api/providers`, data, config)
}

export const putProvider = (data: Provider) => {
    const { uid } = data;

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.put(`http://localhost:8080/api/providers/${uid}`, data, config)
}


export const deleteProvider = (id: string) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };
    
    return axios.delete(`http://localhost:8080/api/providers/${id}`, config)
}

