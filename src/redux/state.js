let render = () => {};

const subscribe = observer => render = observer;

let state = {
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
};

function newPost(text) {
  if (text.trim() === "") return;
  state.profilePage.posts.unshift({ postText: state.profilePage.newPostText });
  state.profilePage.newPostText = "";
  render();
}

function newPostTextChanger(newText) {
  state.profilePage.newPostText = newText;
  render();
  console.log(state.profilePage);
}

function newMessage(){
  state.dialogPage.messages.push({id:6, message: state.dialogPage.newMessage});
  state.dialogPage.newMessage = "";
  render();
}

function newMessageChanger(text) {
  state.dialogPage.newMessage = text;
  render();
  console.log(state.dialogPage.newMessage)
}

export { newPost, newPostTextChanger, newMessage, newMessageChanger, subscribe};
export default state;
