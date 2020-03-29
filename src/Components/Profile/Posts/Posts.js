import React from "react";
import AddingNewPost from "./AddingNewPost/AddingNewPost";
import Post from "./Post/Post";
import clasees from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={clasees.post}>
      <AddingNewPost />
      <Post postText="This is post from other user" />
      <Post postText="This is post from other user" />
      <Post postText="This is post from other user" />
    </div>
  );
};

export default Posts;
