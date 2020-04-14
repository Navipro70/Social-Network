import {axiosInstance} from "./axiosInstance";

export const loginApi = {
    loginUser(email, password, rememberMe = false, captcha) {
        return axiosInstance.post(`/auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        })
    },
    logoutUser() {
        return axiosInstance.delete(`/auth/login`)
    },
    getCaptcha() {
        return axiosInstance.get("security/get-captcha-url")
    }
};