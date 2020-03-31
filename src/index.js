import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let users = [
  { id: 1, name: "Dmitry" },
  { id: 2, name: "Sasha" },
  { id: 3, name: "Kostya" },
  { id: 4, name: "Diana" },
  { id: 5, name: "Andrew" },
  { id: 6, name: "Vadya" }
];

let messages = [
  { id: 1, message: "Hello" },
  { id: 2, message: "How are you" },
  { id: 3, message: "Fine. What about you?" },
  { id: 4, message: "Me too, thanks" },
  { id: 5, message: "Goodbye" }
];

let posts = [
  {
    id: 1,
    postText:
      "This is post from other user element to resemble a link, use a button and change it with appropriate styles. Learn more:"
  },
  {
    id: 2,
    postText:
      "This is post from other user The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value."
  },
  {
    id: 3,
    postText:
      "This is post from other user The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the"
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App messages={messages} users={users} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
