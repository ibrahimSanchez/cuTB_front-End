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