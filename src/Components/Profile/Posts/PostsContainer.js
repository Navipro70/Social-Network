import React from "react";
import AddingNewPostContainer from "./AddingNewPost/AddingNewPostContainer";
import Post from "./Post/Post";
import classes from "./Posts.module.css";
import {connect} from "react-redux";
import Posts from "./Posts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
};

let mapDispatchToProps = (dispatch) => {};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
