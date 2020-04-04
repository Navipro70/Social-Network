const NEW_POST = "NEW-POST";
const NEW_POST_TEXT_CHANGER = "NEW-POST-TEXT-CHANGER";

let initialState = {
  posts: [
    {
      postText:
        "СДЕЛАТЬ КОСПЕКТ И ПРОИСПЕКТИРОВАТЬ УРОКИ 45-46, ПОВТОРИТЬ МАТЕРИАЛ"
    },
    {
      postText:
        "СДЕЛАТЬ КОСПЕКТ И ПРОИСПЕКТИРОВАТЬ УРОКИ 45-46, ПОВТОРИТЬ МАТЕРИАЛ"
    },
    {
      postText:
        "СДЕЛАТЬ КОСПЕКТ И ПРОИСПЕКТИРОВАТЬ УРОКИ 45-46, ПОВТОРИТЬ МАТЕРИАЛ"
    }
  ],
  newPostText: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW-POST":
      if (state.newPostText.trim() === "") return state;
      state.posts.unshift({
        postText: state.newPostText
      });
      state.newPostText = "";
      return state;
    case "NEW-POST-TEXT-CHANGER":
      state.newPostText = action.newText;
      return state;
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
