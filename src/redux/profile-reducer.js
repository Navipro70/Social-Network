const NEW_POST = "NEW-POST";
const NEW_POST_TEXT_CHANGER = "NEW-POST-TEXT-CHANGER";
const SET_PROFILE_PAGE = "SET-PROFILE-PAGE";

let initialState = {
  posts: [
    {postText: "СДЕЛАТЬ КОСПЕКТ И ПРОИСПЕКТИРОВАТЬ УРОКИ 45-46, ПОВТОРИТЬ МАТЕРИАЛ", id: 1},
    {postText: "СДЕЛАТЬ КОСПЕКТ И ПРОИСПЕКТИРОВАТЬ УРОКИ 45-46, ПОВТОРИТЬ МАТЕРИАЛ", id: 2},
    {postText: "СДЕЛАТЬ КОСПЕКТ И ПРОИСПЕКТИРОВАТЬ УРОКИ 45-46, ПОВТОРИТЬ МАТЕРИАЛ", id: 3}
  ],
  newPostText: "",
  profile: null
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
    default:
      return state;
  }
};

export const newPostActionCreator = () => ({ type: NEW_POST });
export const newPostTextChangerActionCreator = text => ({
  type: NEW_POST_TEXT_CHANGER,
  newText: text
});

export const setProfilePage = (profile) => ({ type: SET_PROFILE_PAGE, profile});

export default profileReducer;
