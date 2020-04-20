import {profileApi} from "../API/profileAPI";
import {stopSubmit} from "redux-form";
import {photosType, postType, ProfileInformationType, profileType} from "../Types/types";
import { ResultCodesEnum } from "../API/axiosInstance";

const ADD_POST = "ADD-POST";
const SET_PROFILE_PAGE = "SET-PROFILE-PAGE";
const SET_PROFILE_STATUS = "SET-PROFILE-STATUS";
const GET_PROFILE_STATUS = "GET-PROFILE-STATUS";
const FETCHING_PROFILE = "FETCHING-PROFILE";
const UPLOAD_PROFILE_PHOTO = "UPLOAD-PROFILE-PHOTO";


let initialState = {
    posts: [
        {
            postText: "ПОМЕНЯТЬ ПРЕЛОАДЕР, ЧТОБЫ ЛОВИТЬ ОШИБКУ С БЭКА ПРИ ИЗМЕНЕНИИ СТАТУСА НЕ НУЖНО ДЕЛАТЬ НОВЫЙ ЗАПРОС НА СЕРВЕР, А НУЖНО ПОМЕНЯТЬ ДАННЫЕ В ПРОФИЛЕ, ИСПРАВИТЬ! ПОСМОТРЕТЬ ЧТО МОЖНО СДЕЛАТЬ С ПОЛЯМИ FIELDS, ВЫНЕСТИ ИХ В ОТДЕЛЬНУЮ ФУНКЦИЮ И ПОМЕНЯТЬ ИХ ВЕЗДЕ ВЕСЬ АСИНХРОННЫЙ КОД В ASYNC САНКАХ НУЖНО ОБОРАЧИВАТЬ TRY CATCH И ЛОВИТЬ ОШИБКИ",
            id: 1
        },
        {
            postText: "ПОМЕНЯТЬ ПРЕЛОАДЕР, ЧТОБЫ ЛОВИТЬ ОШИБКУ С БЭКА ПРИ ИЗМЕНЕНИИ СТАТУСА НЕ НУЖНО ДЕЛАТЬ НОВЫЙ ЗАПРОС НА СЕРВЕР, А НУЖНО ПОМЕНЯТЬ ДАННЫЕ В ПРОФИЛЕ, ИСПРАВИТЬ! ПОСМОТРЕТЬ ЧТО МОЖНО СДЕЛАТЬ С ПОЛЯМИ FIELDS, ВЫНЕСТИ ИХ В ОТДЕЛЬНУЮ ФУНКЦИЮ И ПОМЕНЯТЬ ИХ ВЕЗДЕ ВЕСЬ АСИНХРОННЫЙ КОД В ASYNC САНКАХ НУЖНО ОБОРАЧИВАТЬ TRY CATCH И ЛОВИТЬ ОШИБКИ",
            id: 2
        },
        {
            postText: "ПОМЕНЯТЬ ПРЕЛОАДЕР,  ЧТОБЫ ЛОВИТЬ ОШИБКУ С БЭКА ПРИ ИЗМЕНЕНИИ СТАТУСА НЕ НУЖНО ДЕЛАТЬ НОВЫЙ ЗАПРОС НА СЕРВЕР, А НУЖНО ПОМЕНЯТЬ ДАННЫЕ В ПРОФИЛЕ, ИСПРАВИТЬ! ПОСМОТРЕТЬ ЧТО МОЖНО СДЕЛАТЬ С ПОЛЯМИ FIELDS, ВЫНЕСТИ ИХ В ОТДЕЛЬНУЮ ФУНКЦИЮ И ПОМЕНЯТЬ ИХ ВЕЗДЕ ВЕСЬ АСИНХРОННЫЙ КОД В ASYNC САНКАХ НУЖНО ОБОРАЧИВАТЬ TRY CATCH И ЛОВИТЬ ОШИБКИ",
            id: 3
        }
    ] as Array<postType>,
    profile: null as null | profileType,
    isProfileFetching: false,
    statusText: "",
};

type initialStateType = typeof initialState

const profileReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {postText: action.newPostText, id: state.posts.length + 1}],
            };
        case SET_PROFILE_PAGE:
            return {...state, profile: action.profile};
        case GET_PROFILE_STATUS:
            return {...state, statusText: action.statusText};
        case SET_PROFILE_STATUS:
            return {...state, statusText: action.statusText};
        case FETCHING_PROFILE:
            return {...state, isProfileFetching: action.isProfileFetching};
        case UPLOAD_PROFILE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photoFiles} as profileType};
        default:
            return state;
    }
};

type addPostType = {
    type: typeof ADD_POST
    newPostText: string
}

export const addPost = (newPostText: string): addPostType => ({
    type: ADD_POST,
    newPostText
});

type setProfileStatusType = {
    type: typeof SET_PROFILE_STATUS
    statusText: string
}

const setProfileStatus = (statusText: string): setProfileStatusType => ({
    type: SET_PROFILE_STATUS,
    statusText
});

type getProfileStatusType = {
    type: typeof GET_PROFILE_STATUS
    statusText: string
}

const getProfileStatus = (statusText: string): getProfileStatusType => ({
    type: GET_PROFILE_STATUS,
    statusText
});

type toggleProfileFetchingType = {
    type: typeof FETCHING_PROFILE
    isProfileFetching: boolean
}

const toggleProfileFetching = (isProfileFetching: boolean): toggleProfileFetchingType => ({
    type: FETCHING_PROFILE,
    isProfileFetching
});

type setProfilePageType = {
    type: typeof SET_PROFILE_PAGE
    profile: profileType
}

const setProfilePage = (profile: profileType): setProfilePageType => ({
    type: SET_PROFILE_PAGE,
    profile
});

type uploadProfilePhotoType = {
    type: typeof UPLOAD_PROFILE_PHOTO
    photoFiles: photosType
}

const uploadProfilePhoto = (photoFiles: photosType): uploadProfilePhotoType => ({
    type: UPLOAD_PROFILE_PHOTO,
    photoFiles
});


export const thunkSetCurrentProfile = (userId: number) => {
    return async (dispatch: any) => {
        dispatch(toggleProfileFetching(true));
        const data = await profileApi.getUser(userId);
        await dispatch(setProfilePage(data));
        dispatch(toggleProfileFetching(false))
    }
};

export const thunkSetStatus = (statusText: string) => {
    return async (dispatch: any) => {
        await profileApi.setStatus(statusText);
        dispatch(setProfileStatus(statusText));
    }
};

export const thunkGetStatus = (userId: number) => {
    return async (dispatch: any) => {
        let statusText = await profileApi.getStatus(userId);
        dispatch(getProfileStatus(statusText))
    }
};

export const thunkPutUserInformation = (data: ProfileInformationType, userId: number) => async (dispatch: any) => {
    let responseStatusInfo = await profileApi.setInformation(data);
    if (responseStatusInfo.resultCode === ResultCodesEnum.Success) dispatch(thunkSetCurrentProfile(userId));
    else dispatch(stopSubmit("settings", {_error: "Произошла ошибка при отправке данных"}));
};

export const thunkSavePhoto = (photoFile: photosType) => async (dispatch: any) => {
    const data = await profileApi.setPhoto(photoFile);
    if (data.resultCode === ResultCodesEnum.Success) dispatch(uploadProfilePhoto(data.data.photos));
};

export default profileReducer;
