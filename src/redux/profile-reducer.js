const NEW_POST = "NEW-POST";
const NEW_POST_TEXT_CHANGER = "NEW-POST-TEXT-CHANGER";

let initialState = {
  posts: [
    {
      postText: "СДЕЛАТЬ КОСПЕКТ И ПРОИСПЕКТИРОВАТЬ УРОКИ 45-46, ПОВТОРИТЬ МАТЕРИАЛ",
      id: 1
    },
    {
      postText: "СДЕЛАТЬ КОСПЕКТ И ПРОИСПЕКТИРОВАТЬ УРОКИ 45-46, ПОВТОРИТЬ МАТЕРИАЛ",
      id: 2
    },
    {
      postText: "СДЕЛАТЬ КОСПЕКТ И ПРОИСПЕКТИРОВАТЬ УРОКИ 45-46, ПОВТОРИТЬ МАТЕРИАЛ",
      id: 3
    }
  ],
  newPostText: ""
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
    default:
      return state;
  }
};

export const newPostActionCreator = () => ({ type: NEW_POST });
export const newPostTextChangerActionCreator = text => ({
  type: NEW_POST_TEXT_CHANGER,
  newText: text
});

export default profileReducer;
