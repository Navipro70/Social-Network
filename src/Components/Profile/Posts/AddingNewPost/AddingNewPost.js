import React from "react";
import classes from "./AddingNewPost.module.css";
import PostFormContainer from "./PostForm";

const AddingNewPost = props => {
    return (
    <div className={classes.adding_new_post}>
      <h3>What's new?</h3>
      <PostFormContainer addPost={props.addPost} />
    </div>
  );
};

export default AddingNewPost;
