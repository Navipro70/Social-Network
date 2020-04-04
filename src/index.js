import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

let render = (state) => {
  ReactDOM.render(
      <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
      </BrowserRouter>,
    document.getElementById("root")
  );
};

render(store.getState());

store.subscribe(() => render(store.getState()));

serviceWorker.unregister();
