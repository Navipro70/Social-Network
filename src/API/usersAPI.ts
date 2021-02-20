import { Nullable, userType } from '../Types/types'

import { axiosInstance, ResultCodesEnum } from './axiosInstance'

type ResponseUsersType = {
  items: userType[]
  totalCount: ResultCodesEnum
  error: Nullable<string>
}

export type CommonResponse = {
  resultCode: ResultCodesEnum
  messages: string[]
  data: any //additional data
}

export const userApi = {
  async getUsers(currentPage: number, pageSize: number) {
    return axiosInstance
      .get<ResponseUsersType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data)
  },
  async postFollowing(userId: number) {
    return axiosInstance.post<CommonResponse>(`follow/${userId}`).then((response) => response.data)
  },
  async deleteFollowing(userId: number) {
    return axiosInstance
      .delete<CommonResponse>(`follow/${userId}`)
      .then((response) => response.data)
  },
}
