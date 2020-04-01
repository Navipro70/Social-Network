import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import state from "./redux/state";
import {
  newPost,
  newPostTextChanger,
  newMessage,
  newMessageChanger,
  subscribe
} from "./redux/state";

let render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        newPost={newPost}
        newPostTextChanger={newPostTextChanger}
        newMessage={newMessage}
        newMessageChanger={newMessageChanger}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render();

subscribe(render);

serviceWorker.unregister();
