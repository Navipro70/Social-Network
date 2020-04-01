import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/state";

let render = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        newPost={store.newPost.bind(store)}
        newPostTextChanger={store.newPostTextChanger.bind(store)}
        newMessage={store.newMessage.bind(store)}
        newMessageChanger={store.newMessageChanger.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render(store.getState());

store.subscribe(render);

serviceWorker.unregister();
