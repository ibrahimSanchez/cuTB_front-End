import axios from "axios";

type UserLogin = {
    userName: string,
    password: string,
};

const BASE_URL = process.env.NEXT_PUBLIC_URL_API_BACKEND;


export const login = (user: UserLogin) => {
    // console.log(user)
    return axios.post(`${BASE_URL}api/auth/login`, user)
}

