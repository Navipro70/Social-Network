import {axiosInstance} from "./axiosInstance";

export const profileApi = {
    getUser(userId) {
        return axiosInstance.get(`profile/${userId}`)
            .then(response => response.data)
    },
};