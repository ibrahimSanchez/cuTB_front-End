import { User } from "@/interfaces";
import axios from "axios";

type UserLogin = {
    userName: string,
    password: string,
};


export const login = (user: UserLogin) => {
    // console.log(user)
    return axios.post('http://localhost:8080/api/auth/login', user)
}


export const newAccount = (user: User) => {
    // console.log(usuario)
    return axios.post('http://localhost:8080/api/users', user)
}