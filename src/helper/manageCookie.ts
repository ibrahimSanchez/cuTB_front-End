import Cookies from 'js-cookie';
// import { isExpired } from "react-jwt";

export const getCookie = (name: string) => {
  return Cookies.get(name);
};

export const setCookie = (name: string, value: string) => {
  return Cookies.set(name, value, { expires: 1 });
};

export const removeCookie = (name: string) => {
  return Cookies.remove(name);
};


// export const isAuth = () => {
//   const token = getCookie('AUTH_TOKEN_KEY');
//   return !isExpired(token || '');
// } 