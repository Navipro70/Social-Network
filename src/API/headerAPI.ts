import {axiosInstance} from "./axiosInstance";

type ResponseDataType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}

export const headerApi = {
    getCurrentUserProfile() {
        return axiosInstance.get<ResponseDataType>(`/auth/me`)
            .then((response) => response.data.data)
    }
};