import { getCookie } from "@/helper";
import { Membership_provider_request } from "@/interfaces";
import axios from "axios";



const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;

export const getMembership_provider_request = () => {
    return axios.get(`${BASE_URL}api/membership_provider_requests`)
}


export const postMembership_provider_request = (data: Membership_provider_request) => {
    return axios.post(`${BASE_URL}api/membership_provider_requests`, data)
}



export const putMembership_provider_request = (data: Membership_provider_request) => {

    const { uid } = data;
    
    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.put(`${BASE_URL}api/membership_provider_requests/${uid}`, data, config)
}



export const deleteMembership_provider_request = (uid: string) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.delete(`${BASE_URL}api/membership_provider_requests/${uid}`, config)
}
