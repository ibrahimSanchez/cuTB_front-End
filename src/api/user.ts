import axios from "axios";
import { getCookie } from "@/helper";
import { User } from "@/interfaces";


const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;

export const getUsers = () => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.get(`${BASE_URL}api/users`, config)
}




export const postUser = (data: User) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.post(`${BASE_URL}api/users`, data, config)
}


export const putUser = (data: User) => {

    const { uid } = data;

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.put(`${BASE_URL}api/users/${uid}`, data, config)
}


export const deleteUser = (uid: string) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.delete(`${BASE_URL}api/users/${uid}`, config)
}

