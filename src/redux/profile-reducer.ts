import {profileApi} from "../API/profileAPI"
import {FormAction, stopSubmit} from "redux-form"
import {Nullable, photosType, postType, ProfileInformationType, profileType} from "../Types/types"
import {ResultCodesEnum} from "../API/axiosInstance"
import {ThunkAction} from "redux-thunk"
import {AppStateType, InferActionsType} from "./redux-store"

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
    profile: null as Nullable<profileType>,
    isProfileFetching: false,
    statusText: "",
};

export type initialStateType = typeof initialState

type ActionType = InferActionsType<typeof actions>

const profileReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'profile/ADD_POST':
            return {
                ...state,
                posts: [...state.posts, {postText: action.newPostText, id: state.posts.length + 1}],
            };
        case 'profile/SET_PROFILE_PAGE':
            return {...state, profile: action.profile};
        case 'profile/GET_PROFILE_STATUS':
            return {...state, statusText: action.statusText};
        case 'profile/SET_PROFILE_STATUS':
            return {...state, statusText: action.statusText};
        case 'profile/FETCHING_PROFILE':
            return {...state, isProfileFetching: action.isProfileFetching};
        case 'profile/UPLOAD_PROFILE_PHOTO':
            return {...state, profile: {...state.profile, photos: action.photoFiles} as profileType};
        default:
            return state;
    }
};

export const actions = {
    addPost: (newPostText: string) => ({type: 'profile/ADD_POST', newPostText} as const),
    setProfileStatus: (statusText: string) => ({type: 'profile/SET_PROFILE_STATUS', statusText} as const),
    getProfileStatus: (statusText: string) => ({type: 'profile/GET_PROFILE_STATUS', statusText} as const),
    toggleProfileFetching: (isProfileFetching: boolean) => ({
        type: 'profile/FETCHING_PROFILE',
        isProfileFetching
    } as const),
    setProfilePage: (profile: profileType) => ({type: 'profile/SET_PROFILE_PAGE', profile} as const),
    uploadProfilePhoto: (photoFiles: photosType) => ({type: 'profile/UPLOAD_PROFILE_PHOTO', photoFiles} as const)
};

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const thunkSetCurrentProfile = (userId: number): ThunkActionType => async (dispatch) => {
    dispatch(actions.toggleProfileFetching(true));
    const data = await profileApi.getUser(userId);
    await dispatch(actions.setProfilePage(data));
    dispatch(actions.toggleProfileFetching(false))
};

export const thunkSetStatus = (statusText: string): ThunkActionType => async (dispatch) => {
    await profileApi.setStatus(statusText);
    dispatch(actions.setProfileStatus(statusText));
};

export const thunkGetStatus = (userId: number): ThunkActionType => async (dispatch) => {
    let statusText = await profileApi.getStatus(userId);
    dispatch(actions.getProfileStatus(statusText))
};

export type ThunkPutUserInfoType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType | FormAction>

export const thunkPutUserInformation = (data: ProfileInformationType, userId: number): ThunkPutUserInfoType => async (dispatch) => {
    let responseStatusInfo = await profileApi.setInformation(data);
    if (responseStatusInfo.resultCode === ResultCodesEnum.Success) await dispatch(thunkSetCurrentProfile(userId));
    else dispatch(stopSubmit("settings", {_error: "Произошла ошибка при отправке данных"}));
};

export const thunkSavePhoto = (photoFile: photosType): ThunkActionType => async (dispatch) => {
    const data = await profileApi.setPhoto(photoFile);
    if (data.resultCode === ResultCodesEnum.Success) dispatch(actions.uploadProfilePhoto(data.data.photos));
};

export default profileReducer;