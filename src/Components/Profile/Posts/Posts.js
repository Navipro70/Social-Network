import React from "react";
import AddingNewPost from "./AddingNewPost/AddingNewPost";
import Post from "./Post/Post";
import clasees from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={clasees.post}>
      <AddingNewPost />
      <Post postText="This is post from other user element to resemble a link, use a button and change it with appropriate styles. Learn more:" />
      <Post postText="This is post from other user The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value." />
      <Post postText="This is post from other user The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the" />
    </div>
  );
};

export default Posts;
