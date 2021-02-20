import { axiosInstance, ResultCodesEnum } from './axiosInstance'
import { CommonResponse } from './usersAPI'

type LoginResponseType = {
  resultCode: ResultCodesEnum
  messages: string[]
  data: {
    userId: number
  }
}

export const loginApi = {
  async loginUser(
    email: string,
    password: string,
    rememberMe = false,
    captcha: string | null = null,
  ) {
    return axiosInstance.post<LoginResponseType>(`/auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    })
  },
  async logoutUser() {
    return axiosInstance.delete<CommonResponse>(`/auth/login`)
  },
  async getCaptcha() {
    return axiosInstance.get<{ url: string | null }>('security/get-captcha-url')
  },
}
