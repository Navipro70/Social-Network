import {axiosInstance} from "./axiosInstance";
import { CommonResponse } from "./usersAPI";

type LoginResponseType = {
    resultCode: number
    messages: Array<string>
    data: {
        userId: number
    }
}

export const loginApi = {
    loginUser(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return axiosInstance.post<LoginResponseType>(`/auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        })
    },
    logoutUser() {
        return axiosInstance.delete<CommonResponse>(`/auth/login`)
    },
    getCaptcha() {
        return axiosInstance.get<{url: string | null}>("security/get-captcha-url")
    }
};