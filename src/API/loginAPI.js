import {axiosInstance} from "./axiosInstance";

export const loginApi = {
    loginUser(email, password, rememberMe = false) {
        return axiosInstance.post(`/auth/login`, {
            email,
            password,
            rememberMe
        })
    },
    logoutUser() {
        return axiosInstance.delete(`/auth/login`)
    }
};