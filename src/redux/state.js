import { render } from "../index";

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
    ]
  }
};

function newPost(text) {
  if (text.trim() === "") return;
  state.profilePage.posts.unshift({ postText: state.profilePage.newPostText });
  state.profilePage.newPostText = "";
  render(state);
}

function onKeyDownEventListener(newText) {
  state.profilePage.newPostText = newText;
  render(state);
  console.log(state.profilePage);
}

export { newPost };
export { onKeyDownEventListener };
export default state;
