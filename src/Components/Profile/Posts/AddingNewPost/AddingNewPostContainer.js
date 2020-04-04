import React from "react";
import AddingNewPost from "./AddingNewPost";
import {
  newPostActionCreator,
  newPostTextChangerActionCreator
} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    postMaker: () => dispatch(newPostActionCreator()),
    postChange: (text) => dispatch(newPostTextChangerActionCreator(text))
  }
};

const AddingNewPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddingNewPost);

export default AddingNewPostContainer;
