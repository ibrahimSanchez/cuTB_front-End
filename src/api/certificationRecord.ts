import { getCookie } from "@/helper"
import { CertificationRecord } from "@/interfaces"
import axios from "axios"


const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;


export const getCertificationRecord = () => {
    return axios.get(`${BASE_URL}api/certification_records`)
}


export const postCertificationRecord = (data: CertificationRecord) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.post(`${BASE_URL}api/certification_records`, data, config)
}



export const putCertificationRecord = (data: CertificationRecord) => {

    const { uid } = data;

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.put(`${BASE_URL}api/certification_records/${uid}`, data, config)
}


export const deleteCertificationRecord = (id: string) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.delete(`${BASE_URL}api/certification_records/${id}`, config)
}

