import { getCookie } from "@/helper";
import { Curse } from "@/interfaces";
import axios from "axios";


export const getCurses = () => {
    return axios.get('http://localhost:8080/api/curses')
}



export const getCurseById = (id: string) => {
    return axios.get(`http://localhost:8080/api/curses/${id}`)
}


export const getCursesByProviderId = (id: string) => {

    const config = {
        headers: {
            'x-providerId': id
        }
    };
    return axios.get(`http://localhost:8080/api/curses`, config)
}




export const postCurse = (data: Curse, languageIds: string[]) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-languages': languageIds,
            'x-token': token
        }
    };

    return axios.post(`http://localhost:8080/api/curses`, data, config);
}

export const putCurse = (data: Curse, languageIds: string[]) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-languages': languageIds,
            'x-token': token
        }
    };

    const { uid } = data;

    return axios.put(`http://localhost:8080/api/curses/${uid}`, data, config);
}


export const deleteCurse = (id: string) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.delete(`http://localhost:8080/api/curses/${id}`, config);
}
