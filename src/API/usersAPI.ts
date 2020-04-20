import {axiosInstance, ResultCodesEnum} from "./axiosInstance";
import {userType} from "../Types/types";

type ResponseUsersType = {
    items: Array<userType>
    totalCount: ResultCodesEnum
    error: string | null
}

export type CommonResponse = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: any //additional data
}

export const userApi = {
    getUsers(currentPage: number, pageSize: number){
        return axiosInstance.get<ResponseUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postFollowing(userId: number) {
        return axiosInstance.post<CommonResponse>(`follow/${userId}`)
            .then(response => response.data)
    },
    deleteFollowing (userId: number) {
        return axiosInstance.delete<CommonResponse>(`follow/${userId}`)
            .then(response => response.data)
    },
};