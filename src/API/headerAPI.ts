import { axiosInstance, ResultCodesEnum } from './axiosInstance'

type ResponseDataType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: ResultCodesEnum
  messages: Array<string>
}

export const headerApi = {
  getCurrentUserProfile() {
    return axiosInstance.get<ResponseDataType>(`/auth/me`).then((response) => response.data.data)
  },
}
