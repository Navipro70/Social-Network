const NEW_POST = "NEW-POST";
const NEW_POST_TEXT_CHANGER = "NEW-POST-TEXT-CHANGER";
const NEW_MESSAGE = "NEW-MESSAGE";
const NEW_MESSAGE_CHANGER = "NEW-MESSAGE-CHANGER";

let store = {
  _state: {
    profilePage: {
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
    },
    dialogPage: {
      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Fine. What about you?" },
        { id: 4, message: "Me too, thanks" },
        { id: 5, message: "Goodbye" }
      ],
      users: [
        { id: 1, name: "Dmitry" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Kostya" },
        { id: 4, name: "Diana" },
        { id: 5, name: "Andrew" },
        { id: 6, name: "Vadya" }
      ],
      newMessage: ""
    }
  },
  render() {},
  subscribe(observer) {
    this.render = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    if (action.type === "NEW-POST") {
      if (this._state.profilePage.newPostText.trim() === "") return;
      this._state.profilePage.posts.unshift({
        postText: this._state.profilePage.newPostText
      });
      this._state.profilePage.newPostText = "";
      this.render(this._state);
    }
    else if (action.type === "NEW-POST-TEXT-CHANGER") {
      this._state.profilePage.newPostText = action.newText;
      this.render(this._state);
    }
    else if (action.type === "NEW-MESSAGE") {
      this._state.dialogPage.messages.push({
        id: 6,
        message: this._state.dialogPage.newMessage
      });
      this._state.dialogPage.newMessage = "";
      this.render(this._state);
    }
    else if (action.type === "NEW-MESSAGE-CHANGER") {
      this._state.dialogPage.newMessage = action.text;
      this.render(this._state);
    }
  }
};

export const newPostActionCreator = () => ({type: NEW_POST});
export const newPostTextChangerActionCreator = text => ({type: NEW_POST_TEXT_CHANGER, newText: text});

export const newMessageActionCreator = () => ({type: NEW_MESSAGE});
export const newMessageChangerActionCreator = text => ({type: NEW_MESSAGE_CHANGER, text: text});

store.render(store.getState());
window.store = store;
export default store;
