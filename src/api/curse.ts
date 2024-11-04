import axios from "axios";


export const getCurses = () => {
    return axios.get('http://localhost:8080/api/curses')
}



export const getCurseById = (id: string) => {
    return axios.get(`http://localhost:8080/api/curses/${id}`)
}


export const getCursesByProviderId = (id: string) => {

    const config = {
        headers: {
            'x-providerId': id
        }
    };
    return axios.get(`http://localhost:8080/api/curses`, config)
}