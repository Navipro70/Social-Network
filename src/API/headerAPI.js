import {axiosInstance} from "./axiosInstance";

export const headerApi = {
    getCurrentUserProfile() {
        return axiosInstance.get(`/auth/me`)
            .then(response => response.data.data)
    }
};