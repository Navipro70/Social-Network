import {profileApi} from "../API/profileAPI";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST";
const SET_PROFILE_PAGE = "SET-PROFILE-PAGE";
const SET_PROFILE_STATUS = "SET-PROFILE-STATUS";
const GET_PROFILE_STATUS = "GET-PROFILE-STATUS";
const FETCHING_PROFILE = "FETCHING-PROFILE";
const UPLOAD_PROFILE_PHOTO = "UPLOAD-PROFILE-PHOTO";

let initialState = {
  posts: [
    {postText:  "ПОМЕНЯТЬ ПРЕЛОАДЕР, ЧТОБЫ ЛОВИТЬ ОШИБКУ С БЭКА ПРИ ИЗМЕНЕНИИ СТАТУСА НЕ НУЖНО ДЕЛАТЬ НОВЫЙ ЗАПРОС НА СЕРВЕР, А НУЖНО ПОМЕНЯТЬ ДАННЫЕ В ПРОФИЛЕ, ИСПРАВИТЬ!", id: 1},
    {postText: "ПОМЕНЯТЬ ПРЕЛОАДЕР, ЧТОБЫ ЛОВИТЬ ОШИБКУ С БЭКА ПРИ ИЗМЕНЕНИИ СТАТУСА НЕ НУЖНО ДЕЛАТЬ НОВЫЙ ЗАПРОС НА СЕРВЕР, А НУЖНО ПОМЕНЯТЬ ДАННЫЕ В ПРОФИЛЕ, ИСПРАВИТЬ!", id: 2},
    {postText: "ПОМЕНЯТЬ ПРЕЛОАДЕР,  ЧТОБЫ ЛОВИТЬ ОШИБКУ С БЭКА ПРИ ИЗМЕНЕНИИ СТАТУСА НЕ НУЖНО ДЕЛАТЬ НОВЫЙ ЗАПРОС НА СЕРВЕР, А НУЖНО ПОМЕНЯТЬ ДАННЫЕ В ПРОФИЛЕ, ИСПРАВИТЬ!", id: 3}
  ],
  profile: null,
  isProfileFetching: false,
  statusText: "",
};

const profileReducer = (state = initialState, action) => {
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
      return {...state, profile: {...state.profile, photos: action.photoFiles}};
    default:
      return state;
  }
};

export const addPost = newPostText => ({
  type: ADD_POST,
  newPostText
});

const setProfileStatus = statusText => ({
  type: SET_PROFILE_STATUS,
  statusText
});

const getProfileStatus = statusText => ({
  type: GET_PROFILE_STATUS,
  statusText
});

const toggleProfileFetching = isProfileFetching => ({
  type: FETCHING_PROFILE,
  isProfileFetching
});

const setProfilePage = (profile) => ({ type: SET_PROFILE_PAGE, profile});

const uploadProfilePhoto = photoFiles => ({type: UPLOAD_PROFILE_PHOTO, photoFiles});


export const thunkSetCurrentProfile = userId => {
  return async dispatch => {
    dispatch(toggleProfileFetching(true));
    const data = await profileApi.getUser(userId);
    await dispatch(setProfilePage(data));
    dispatch(toggleProfileFetching(false))
  }
};

export const thunkSetStatus = statusText => {
  return async dispatch => {
    await profileApi.setStatus(statusText);
    dispatch(setProfileStatus(statusText));
  }
};

export const thunkGetStatus = (userId) => {
  return async  dispatch => {
    let statusText = await profileApi.getStatus(userId);
    dispatch(getProfileStatus(statusText))
  }
};

export const thunkPutUserInformation = (data, userId) => async dispatch => {
  let responseStatusInfo = await profileApi.setInformation(data); // Это нужно исправить так, чтобы не запрашивать снова пользователя
  if (responseStatusInfo.resultCode === 0) dispatch(thunkSetCurrentProfile(userId)); // А отсылать данные и из респонса их сетать в профиль
  else dispatch(stopSubmit("settings", {_error: "Произошла ошибка при отправке данных"})); // НО пока что сервер не отправляет респонс с данныыми обратно:(
};

export const thunkSavePhoto  = (photoFile) => async dispatch => {
  const data = await profileApi.setPhoto(photoFile);
  debugger
  if (data.resultCode === 0) dispatch(uploadProfilePhoto(data.data.photos));
};

export default profileReducer;
