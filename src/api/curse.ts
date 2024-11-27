import { getCookie } from "@/helper";
import { Curse } from "@/interfaces";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;

export const getCurses = () => {
    return axios.get(`${BASE_URL}api/curses`);
};

export const getCurseById = (id: string) => {
    return axios.get(`${BASE_URL}api/curses/${id}`);
};

export const getCursesByProviderId = (id: string) => {
    const config = {
        headers: {
            'x-providerId': id
        }
    };
    return axios.get(`${BASE_URL}api/curses`, config);
};

export const postCurse = (data: Curse, languageIds: string[]) => {
    const token = getCookie('x-token');

    const config = {
        headers: {
            'x-languages': languageIds,
            'x-token': token
        }
    };

    return axios.post(`${BASE_URL}api/curses`, data, config);
};

export const putCurse = (data: Curse, languageIds: string[]) => {
    const token = getCookie('x-token');

    const config = {
        headers: {
            'x-languages': languageIds,
            'x-token': token
        }
    };

    const { uid } = data;

    return axios.put(`${BASE_URL}api/curses/${uid}`, data, config);
};

export const deleteCurse = (id: string) => {
    const token = getCookie('x-token');

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.delete(`${BASE_URL}api/curses/${id}`, config);
};
