import React from "react";
import classes from "./Post.module.css";

const Post = ({postText}) => {
  return (
      <div className={classes.post}>
        <img src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg" alt="smb img" />
        <p>{postText}</p>
      </div>
  );
};

export default Post;
