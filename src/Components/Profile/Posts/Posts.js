import React from "react";
import AddingNewPostContainer from "./AddingNewPost/AddingNewPostContainer";
import Post from "./Post/Post";
import classes from "./Posts.module.css";

const Posts = props => {
  let currentPosts = props.posts.map(post => <Post postText={post.postText} key={post.id} />);
  return (
    <div className={classes.post}>
      <AddingNewPostContainer />
      {currentPosts}
    </div>
  );
};

export default Posts;
