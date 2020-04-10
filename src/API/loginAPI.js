import {axiosInstance} from "./axiosInstance";

export const headerApi = {
    getCurrentUserProfile(data) {
        return axiosInstance.post(`/auth/login`, {
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe
        })
            .then(response => {
                if (response.resultCode === 0) return response.userId;
            })
    }
};