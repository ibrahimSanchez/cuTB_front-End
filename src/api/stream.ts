import axios from "axios";


export const getStream = () => {
    return axios.get('http://localhost:8080/api/streams')
}

