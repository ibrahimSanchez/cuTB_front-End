import { getCookie } from "@/helper";
import axios from "axios";


const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;

export const approveCurse = (id: string) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.put(`${BASE_URL}api/approveCurse/${id}`, { approved: true }, config);
}


export const approveExam = (id: string) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.put(`${BASE_URL}api/approveExam/${id}`, { approved: true }, config);
}