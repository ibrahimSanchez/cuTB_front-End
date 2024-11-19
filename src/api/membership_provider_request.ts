import { getCookie } from "@/helper";
import { Membership_provider_request } from "@/interfaces";
import axios from "axios";




export const getMembership_provider_request = () => {
    return axios.get('http://localhost:8080/api/membership_provider_requests')
}


export const postMembership_provider_request = (data: Membership_provider_request) => {
    return axios.post('http://localhost:8080/api/membership_provider_requests', data)
}



export const putMembership_provider_request = (data: Membership_provider_request) => {

    const { uid } = data;
    
    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.put(`http://localhost:8080/api/membership_provider_requests/${uid}`, data, config)
}



export const deleteMembership_provider_request = (uid: string) => {

    const token = getCookie('x-token')

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.delete(`http://localhost:8080/api/membership_provider_requests/${uid}`, config)
}
