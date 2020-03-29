import React from "react";
import classes from "./Post.module.css";

const Post = props => {
  return (
    <div class={classes.post}>
      <img src="" alt="smb img" />
      <p>{props.postText}</p>
    </div>
  );
};

export default Post;
