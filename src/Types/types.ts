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
    small: string | null
    large: string | null
}

export type profileType = {
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
    status: string | null
    photos: photosType
    followed: boolean
}

export type ProfileInformationType = {
    aboutMe: string | null
    contacts: contactsType
    lookingForAJob: boolean | null
    "lookingForAJobDescription": string | null
    "fullName": string | null
}
