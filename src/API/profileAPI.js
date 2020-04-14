import {axiosInstance} from "./axiosInstance";

export const profileApi = {
    getUser(userId) {
        return axiosInstance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return axiosInstance.get(`profile/status/${userId}`)
            .then(response => {
                if (!response.data) return "";
                return response.data
            })
    },
    setStatus(statusText) {
        return axiosInstance.put(`profile/status`, {
            status: statusText,
        })
    },
    setInformation(data) {
        return axiosInstance.put(`profile`, data)
            .then(response => response.data)
    },
    setPhoto(photos) {
        return axiosInstance.put(`profile/photo`, photos, {
            headers: { 'content-type': 'multipart/form-data'}
        }).then(response => response.data)
    }
};