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
   
    const config = {
        headers: {
            'x-languages': languageIds
        }
    };

    return axios.post(`http://localhost:8080/api/curses`, data, config);
    // console.log(data)
}

export const putCurse = (data: Curse, languageIds: string[]) => {

    const config = {
        headers: {
            'x-languages': languageIds
        }
    };

    const { uid } = data;

    return axios.put(`http://localhost:8080/api/curses/${uid}`, data, config);
    // console.log(data, uid)
}


export const deleteCurse = (id: string) => {
    return axios.delete(`http://localhost:8080/api/curses/${id}`);
    // console.log(id)
}
