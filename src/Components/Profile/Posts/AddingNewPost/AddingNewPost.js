import React from "react";
import classes from "./AddingNewPost.module.css"

const AddingNewPost = () => {
  return (
    <div className={classes.adding_new_post}>
      <h4>What new?</h4>
      <textarea name="post" id="post_text" placeholder="Ваш пост..."></textarea>
    </div>
  );
};

export default AddingNewPost;
