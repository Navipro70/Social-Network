import React from "react";
import AddingNewPost from "./AddingNewPost";
import {
  newPostActionCreator,
  newPostTextChangerActionCreator
} from "../../../../redux/profile-reducer";

const AddingNewPostContainer = props => {
  let stateText = props.newPostText;

  function postMaker() {
    return props.dispatch(newPostActionCreator());
  }

  function postChange(text) {
   return  props.dispatch(newPostTextChangerActionCreator(text));
  }

  return (
    <AddingNewPost postMaker = {postMaker} postChange = {postChange} newPostText={stateText}/>
  );
};

export default AddingNewPostContainer;
