import {profileApi} from "../API/profileAPI";

const ADD_POST = "ADD-POST";
const SET_PROFILE_PAGE = "SET-PROFILE-PAGE";
const SET_PROFILE_STATUS = "SET-PROFILE-STATUS";
const GET_PROFILE_STATUS = "GET-PROFILE-STATUS";

let initialState = {
  posts: [
    {postText: "ПОПРОБОВАТЬ ДЕСТРУКТУРИЗИРОВАТЬ ПРОПСЫ В БОЛЬШИХ ОБЪЕКТАХ УРОК 12 ENGLISH", id: 1},
    {postText: "ПОПРОБОВАТЬ ДЕСТРУКТУРИЗИРОВАТЬ ПРОПСЫ В БОЛЬШИХ ОБЪЕКТАХ УРОК 12 ENGLISH", id: 2},
    {postText: "ПОПРОБОВАТЬ ДЕСТРУКТУРИЗИРОВАТЬ ПРОПСЫ В БОЛЬШИХ ОБЪЕКТАХ УРОК 12 ENGLISH", id: 3}
  ],
  profile: null,
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
    default:
      return state;
  }
};

export const addPost = newPostText => ({
  type: ADD_POST,
  newPostText
});

const setProfileStatus = (statusText) => ({
  type: SET_PROFILE_STATUS,
  statusText
});

const getProfileStatus = (statusText) => ({
  type: GET_PROFILE_STATUS,
  statusText
});

const setProfilePage = (profile) => ({ type: SET_PROFILE_PAGE, profile});


export const thunkSetCurrentProfile = userId => {
  return async dispatch => {
    const data = await profileApi.getUser(userId);
    dispatch(setProfilePage(data))
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
    let responseStatusInfo = await profileApi.setInformation(data);
    debugger
    if (responseStatusInfo.resultCode === 0) dispatch(thunkSetCurrentProfile(userId));
};

export default profileReducer;
