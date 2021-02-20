import { axiosInstance, ResultCodesEnum } from './axiosInstance'

type ResponseDataType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: ResultCodesEnum
  messages: string[]
}

export const headerApi = {
  async getCurrentUserProfile() {
    return axiosInstance.get<ResponseDataType>(`/auth/me`).then((response) => response.data.data)
  },
}
