import {profileApi} from "../API/profileAPI";

const ADD_POST = "ADD-POST";
const SET_PROFILE_PAGE = "SET-PROFILE-PAGE";
const SET_PROFILE_STATUS = "SET-PROFILE-STATUS";
const GET_PROFILE_STATUS = "GET-PROFILE-STATUS";

let initialState = {
  posts: [
    {postText: "СДЕЛАТЬ КОСПЕКТ И ПРОИСПЕКТИРОВАТЬ УРОКИ 45-46, ПОВТОРИТЬ МАТЕРИАЛ", id: 1},
    {postText: "СДЕЛАТЬ КОСПЕКТ И ПРОИСПЕКТИРОВАТЬ УРОКИ 45-46, ПОВТОРИТЬ МАТЕРИАЛ", id: 2},
    {postText: "СДЕЛАТЬ КОСПЕКТ И ПРОИСПЕКТИРОВАТЬ УРОКИ 45-46, ПОВТОРИТЬ МАТЕРИАЛ", id: 3}
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
  return dispatch => {
    profileApi.getUser(userId) //Запрос на сервер
        .then(data => dispatch(setProfilePage(data)))
  }
};

export const thunkSetStatus = statusText => {
  debugger
  return dispatch => {
    profileApi.setStatus(statusText)
        .then(() => {
          dispatch(setProfileStatus);
        })
  }
};

export const thunkGetStatus = (userId) => {
  return dispatch => {
    profileApi.getStatus(userId)
        .then(statusText => dispatch(getProfileStatus(statusText)))
  }
};

export default profileReducer;
