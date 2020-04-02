const NEW_POST = "NEW-POST";
const NEW_POST_TEXT_CHANGER = "NEW-POST-TEXT-CHANGER";

let initialState = {
  posts: [
    {
      postText:
        "This is post from other user element to resemble a link, use a button and change it with appropriate styles. Learn more:"
    },
    {
      postText:
        "This is post from other user The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value."
    },
    {
      postText:
        "This is post from other user The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the"
    }
  ],
  newPostText: ""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW-POST":
      if (state.newPostText.trim() === "") return;
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
