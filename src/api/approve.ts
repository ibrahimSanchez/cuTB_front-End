import axios from "axios";


export const approveCurse = (id: string) => {

    // const config = {
    //     headers: {
    //         'x-toke': token
    //     }
    // };

    return axios.put(`http://localhost:8080/api/approveCurse/${id}`, { approved: true });
}


export const approveExam = (id: string) => {

    // const config = {
    //     headers: {
    //         'x-toke': token
    //     }
    // };

    return axios.put(`http://localhost:8080/api/approveExam/${id}`, { approved: true });
}