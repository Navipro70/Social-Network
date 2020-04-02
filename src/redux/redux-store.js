import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
