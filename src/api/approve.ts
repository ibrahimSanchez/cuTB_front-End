import { getCookie } from "@/helper";
import axios from "axios";


export const approveCurse = (id: string) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.put(`http://localhost:8080/api/approveCurse/${id}`, { approved: true }, config);
}


export const approveExam = (id: string) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.put(`http://localhost:8080/api/approveExam/${id}`, { approved: true }, config);
}