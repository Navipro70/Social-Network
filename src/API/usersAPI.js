import {axiosInstance} from "./axiosInstance";

export const userApi = {
    getUsers(currentPage, pageSize){
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postFollowing (userId) {
        return axiosInstance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    deleteFollowing (userId) {
        return axiosInstance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
};