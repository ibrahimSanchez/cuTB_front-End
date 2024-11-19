import { getCookie } from "@/helper"
import { CertificationRecord } from "@/interfaces"
import axios from "axios"




export const getCertificationRecord = () => {
    return axios.get('http://localhost:8080/api/certification_records')
}


export const postCertificationRecord = (data: CertificationRecord) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.post('http://localhost:8080/api/certification_records', data, config)
}



export const putCertificationRecord = (data: CertificationRecord) => {

    const { uid } = data;

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.put(`http://localhost:8080/api/certification_records/${uid}`, data, config)
}


export const deleteCertificationRecord = (id: string) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };

    return axios.delete(`http://localhost:8080/api/certification_records/${id}`, config)
}

