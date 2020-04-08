import {axiosInstance} from "./axiosInstance";

export const userApi = {
    getUsers(currentPage, pageSize){
        return axiosInstance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true})
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