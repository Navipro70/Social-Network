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
  newPost(text) {
    if (text.trim() === "") return;
    this._state.profilePage.posts.unshift({
      postText: this._state.profilePage.newPostText
    });
    this._state.profilePage.newPostText = "";
    this.render(this._state);
  },
  newPostTextChanger(newText) {
    this._state.profilePage.newPostText = newText;
    this.render(this._state);
    console.log(this._state.profilePage);
  },
  newMessage() {
    this._state.dialogPage.messages.push({
      id: 6,
      message: this._state.dialogPage.newMessage
    });
    this._state.dialogPage.newMessage = "";
    this.render(this._state);
  },
  newMessageChanger(text) {
    this._state.dialogPage.newMessage = text;
    this.render(this._state);
    console.log(this._state.dialogPage.newMessage);
  },
  render() {},
  subscribe(observer) {
    this.render = observer;
  },
  getState() {
    return this._state;
  }
};

store.render(store.getState())
window.store = store;
export default store;
