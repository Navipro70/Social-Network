export type Nullable<T> = null | T

export type postType = {
  postText: string
  id: number
}

export type contactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export type photosType = {
  small: Nullable<string>
  large: Nullable<string>
}

export type profileType = {
  aboutMe: Nullable<string>
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: contactsType
  photos: photosType
}

export type userType = {
  id: number
  name: string
  status: Nullable<string>
  photos: photosType
  followed: boolean
}

export type ProfileInformationType = {
  aboutMe: Nullable<string>
  contacts: contactsType
  lookingForAJob: Nullable<boolean>
  lookingForAJobDescription: Nullable<string>
  fullName: Nullable<string>
}
