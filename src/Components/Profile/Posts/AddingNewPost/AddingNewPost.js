import React from "react";
import classes from "./AddingNewPost.module.css";
import PostFormContainer from "./PostForm/PostFormContainer";

const AddingNewPost = ({addPost}) => {
    return (
    <div className={classes.adding_new_post}>
      <h3>What's new?</h3>
      <PostFormContainer addPost={addPost} />
    </div>
  );
};

export default AddingNewPost;
