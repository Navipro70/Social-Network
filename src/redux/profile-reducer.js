import {profileApi} from "../API/profileAPI";

const NEW_POST = "NEW-POST";
const NEW_POST_TEXT_CHANGER = "NEW-POST-TEXT-CHANGER";
const SET_PROFILE_PAGE = "SET-PROFILE-PAGE";
const SET_PROFILE_STATUS = "SET-PROFILE-STATUS";
const GET_PROFILE_STATUS = "GET-PROFILE-STATUS";

let initialState = {
  posts: [
    {postText: "СДЕЛАТЬ КОСПЕКТ И ПРОИСПЕКТИРОВАТЬ УРОКИ 45-46, ПОВТОРИТЬ МАТЕРИАЛ", id: 1},
    {postText: "СДЕЛАТЬ КОСПЕКТ И ПРОИСПЕКТИРОВАТЬ УРОКИ 45-46, ПОВТОРИТЬ МАТЕРИАЛ", id: 2},
    {postText: "СДЕЛАТЬ КОСПЕКТ И ПРОИСПЕКТИРОВАТЬ УРОКИ 45-46, ПОВТОРИТЬ МАТЕРИАЛ", id: 3}
  ],
  newPostText: "",
  profile: null,
  statusText: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_POST:
      return {
        ...state,
        posts: [...state.posts, {postText: state.newPostText, id: state.posts.length + 1}],
        newPostText: ""
      };
    case NEW_POST_TEXT_CHANGER:
      return {
        ...state,
        newPostText: action.newText
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

export const newPostActionCreator = () => ({ type: NEW_POST });
export const newPostTextChangerActionCreator = text => ({
  type: NEW_POST_TEXT_CHANGER,
  newText: text
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
  return dispatch => {
    profileApi.setStatus(statusText)
        .then(data => dispatch(setProfileStatus))
  }
};

export const thunkGetStatus = (userId) => {
  return dispatch => {
    profileApi.getStatus(userId)
        .then(statusText => dispatch(getProfileStatus(statusText)))
  }
};

export default profileReducer;
