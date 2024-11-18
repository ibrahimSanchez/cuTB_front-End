import { getCookie } from "@/helper";
import { Exam } from "@/interfaces";
import axios from "axios";


export const getExams = () => {
    return axios.get('http://localhost:8080/api/exams')
}



export const getExamById = (id: string) => {
    return axios.get(`http://localhost:8080/api/exams/${id}`)
}



export const getExamsByProviderId = (id: string) => {

    const config = {
        headers: {
            'x-providerId': id
        }
    };
    return axios.get(`http://localhost:8080/api/exams`, config)
}





export const postExam = (data: Exam, languageIds: string[]) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-languages': languageIds,
            'x-token': token
        }
    };

    return axios.post(`http://localhost:8080/api/exams`, data, config);
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

    return axios.put(`http://localhost:8080/api/exams/${uid}`, data, config);
    // console.log(data, uid)
}


export const deleteExam = (id: string) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.delete(`http://localhost:8080/api/exams/${id}`, config);
    // console.log(id)
}
