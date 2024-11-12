import { Provider } from "@/interfaces";
import axios from "axios";


export const getProviders = () => {
    return axios.get('http://localhost:8080/api/providers')
}


export const postProvider = (data: Provider) => {
    return axios.post(`http://localhost:8080/api/providers`, data)
}

export const putProvider = (data: Provider) => {
    const { uid } = data;

    return axios.put(`http://localhost:8080/api/providers/${uid}`, data)
}


export const deleteProvider = (id: string) => {
    return axios.delete(`http://localhost:8080/api/providers/${id}`)
}

