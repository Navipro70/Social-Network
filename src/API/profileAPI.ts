import { photosType, ProfileInformationType, profileType } from '../Types/types'

import { axiosInstance, ResultCodesEnum } from './axiosInstance'
import { CommonResponse } from './usersAPI'

type PhotosResponseType = {
  data: { photos: photosType }
  messages: string[]
  resultCode: ResultCodesEnum
}

type PutProfileResponseData = {
  data: any //any because now server doesn't give response with new Profile information
  messages: string[]
  resultCode: ResultCodesEnum
}

export const profileApi = {
  async getUser(userId: number) {
    return axiosInstance.get<profileType>(`profile/${userId}`).then((response) => response.data)
  },
  async getStatus(userId: number) {
    return axiosInstance
      .get(`profile/status/${userId}`) //Any because no info from back
      .then((response) => {
        if (!response.data) return ''
        return response.data
      })
  },
  async setStatus(statusText: string) {
    return axiosInstance.put<CommonResponse>(`profile/status`, {
      status: statusText,
    })
  },
  async setInformation(data: ProfileInformationType) {
    return axiosInstance
      .put<PutProfileResponseData>(`profile`, data)
      .then((response) => response.data)
  },
  async setPhoto(photos: photosType) {
    return axiosInstance
      .put<PhotosResponseType>(`profile/photo`, photos, {
        headers: { 'content-type': 'multipart/form-data' },
      })
      .then((response) => response.data)
  },
}
