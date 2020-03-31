import React from "react";
import AddingNewPost from "./AddingNewPost/AddingNewPost";
import Post from "./Post/Post";
import clasees from "./Posts.module.css";

const Posts = props => {
  let currentPosts = props.posts.map(post => <Post postText={post.postText} />);
  return (
    <div className={clasees.post}>
      <AddingNewPost newPost={props.newPost} />
      {currentPosts}
    </div>
  );
};

export default Posts;
