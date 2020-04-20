import {axiosInstance, ResultCodesEnum} from "./axiosInstance";
import {photosType, ProfileInformationType, profileType} from "../Types/types";
import {CommonResponse} from "./usersAPI";

type PhotosResponseType = {
    data: {photos: photosType}
    messages: Array<string>
    resultCode: ResultCodesEnum
}

type PutProfileResponseData = {
    data: any //any because now server doesn't give response with new Profile information
    messages: Array<string>
    resultCode: ResultCodesEnum
}

export const profileApi = {
    getUser(userId: number) {
        return axiosInstance.get<profileType>(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return axiosInstance.get<any>(`profile/status/${userId}`) //Any because no info from back
            .then(response => {
                if (!response.data) return "";
                return response.data
            })
    },
    setStatus(statusText: string) {
        return axiosInstance.put<CommonResponse>(`profile/status`, {
            status: statusText,
        })
    },
    setInformation(data: ProfileInformationType) {
        return axiosInstance.put<PutProfileResponseData>(`profile`, data)
            .then(response => response.data)
    },
    setPhoto(photos: photosType) {
        return axiosInstance.put<PhotosResponseType>(`profile/photo`, photos, {
            headers: { 'content-type': 'multipart/form-data'}
        }).then(response => response.data)
    }
};