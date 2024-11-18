import axios from "axios";
import { getCookie } from "@/helper";
import { User } from "@/interfaces";






export const getUsers = () => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.get(`http://localhost:8080/api/users`, config)
}




export const postUser = (data: User) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.post(`http://localhost:8080/api/users`, data, config)
}


export const putUser = (data: User) => {

    const { uid } = data;

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.put(`http://localhost:8080/api/users/${uid}`, data, config)
}


export const deleteUser = (uid: string) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.delete(`http://localhost:8080/api/users/${uid}`, config)
}

