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
    case "NEW-POST": {
      if (state.newPostText.trim() === "") return state;
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.unshift({
        postText: state.newPostText
      });
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case "NEW-POST-TEXT-CHANGER": {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
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
