import { getCookie } from "@/helper";
import { Exam } from "@/interfaces";
import axios from "axios";


const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;


export const getExams = () => {
    return axios.get(`${BASE_URL}api/exams`)
}



export const getExamById = (id: string) => {
    return axios.get(`${BASE_URL}api/exams/${id}`)
}



export const getExamsByProviderId = (id: string) => {

    const config = {
        headers: {
            'x-providerId': id
        }
    };
    return axios.get(`${BASE_URL}api/exams`, config)
}





export const postExam = (data: Exam, languageIds: string[]) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-languages': languageIds,
            'x-token': token
        }
    };

    return axios.post(`${BASE_URL}api/exams`, data, config);
    // console.log(data)
}

export const putExam = (data: Exam, languageIds: string[]) => {

    const { uid } = data;

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-languages': languageIds,
            'x-token': token
        }
    };

    return axios.put(`${BASE_URL}api/exams/${uid}`, data, config);
    // console.log(data, uid)
}


export const deleteExam = (id: string) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.delete(`${BASE_URL}api/exams/${id}`, config);
    // console.log(id)
}
